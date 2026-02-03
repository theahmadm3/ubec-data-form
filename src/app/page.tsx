"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Logo from "@/components/logo";
import { testUsers } from "@/lib/test-users";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export default function SignInPage() {
  const router = useRouter();
  const { toast } = useToast();
  const formImage = PlaceHolderImages.find(img => img.id === 'sign-in-form-image');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const user = testUsers.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (user) {
      toast({
        title: "Signed In!",
        description: "Redirecting you to the dashboard.",
      });
      
      const queryParams = new URLSearchParams({ userType: user.userType });
      if (user.userType === 'group' && user.roleId) {
        queryParams.append('roleId', user.roleId);
      }
      
      router.push(`/dashboard?${queryParams.toString()}`);

    } else {
      toast({
        variant: "destructive",
        title: "Invalid Credentials",
        description: "Please check your email and password.",
      });
    }
  }

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <div className="mb-4 flex justify-center">
                <Logo />
            </div>
            <h1 className="text-3xl font-bold font-headline">Sign In</h1>
            <p className="text-balance text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        {formImage && (
             <Image
             src={formImage.imageUrl}
             alt={formImage.description}
             data-ai-hint={formImage.imageHint}
             fill
             className="object-cover dark:brightness-[0.2] dark:grayscale"
           />
        )}
      </div>
    </div>
  );
}
