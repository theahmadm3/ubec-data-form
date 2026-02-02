"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type IndividualFormProps = {
  onBack: () => void;
};

const IndividualForm = ({ onBack }: IndividualFormProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Your data has been successfully submitted.",
    });
  };

  return (
    <div>
      <Button variant="ghost" onClick={onBack} className="mb-4 -ml-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to user type selection
      </Button>
      <h2 className="text-2xl font-semibold font-headline mb-1">Individual Data Form</h2>
      <p className="text-muted-foreground mb-6">Please fill out all sections completely.</p>
      <form onSubmit={handleSubmit}>
        <Accordion type="multiple" defaultValue={["item-1"]} className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg">
            <AccordionTrigger className="px-4 hover:no-underline">Personal Information</AccordionTrigger>
            <AccordionContent className="px-4 pt-2 border-t grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border rounded-lg">
            <AccordionTrigger className="px-4 hover:no-underline">Contact Details</AccordionTrigger>
            <AccordionContent className="px-4 pt-2 border-t grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 555-5555" />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border rounded-lg">
            <AccordionTrigger className="px-4 hover:no-underline">Address Information</AccordionTrigger>
            <AccordionContent className="px-4 pt-2 border-t grid grid-cols-1 gap-4">
               <div className="space-y-2">
                <Label htmlFor="address1">Address Line 1</Label>
                <Input id="address1" placeholder="123 Main St" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Anytown" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State / Province</Label>
                  <Input id="state" placeholder="CA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP / Postal Code</Label>
                  <Input id="zip" placeholder="12345" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-8 flex justify-end">
          <Button type="submit">Submit Form</Button>
        </div>
      </form>
    </div>
  );
};

export default IndividualForm;
