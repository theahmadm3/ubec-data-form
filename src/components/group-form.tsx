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
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type GroupFormProps = {
  onBack: () => void;
};

const GroupForm = ({ onBack }: GroupFormProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Your group's data has been successfully submitted.",
    });
  };

  return (
    <div>
      <Button variant="ghost" onClick={onBack} className="mb-4 -ml-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to user type selection
      </Button>
      <h2 className="text-2xl font-semibold font-headline mb-1">Group Data Form</h2>
      <p className="text-muted-foreground mb-6">Please fill out your group's information.</p>
      <form onSubmit={handleSubmit}>
        <Accordion type="multiple" defaultValue={["item-1"]} className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg">
            <AccordionTrigger className="px-4 hover:no-underline">Group Information</AccordionTrigger>
            <AccordionContent className="px-4 pt-2 border-t grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="groupName">Group Name</Label>
                <Input id="groupName" placeholder="e.g. Awesome Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="groupSize">Group Size</Label>
                <Input id="groupSize" type="number" placeholder="e.g. 10" />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border rounded-lg">
            <AccordionTrigger className="px-4 hover:no-underline">Representative Information</AccordionTrigger>
            <AccordionContent className="px-4 pt-2 border-t grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="repName">Representative Name</Label>
                <Input id="repName" placeholder="Jane Smith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="repEmail">Representative Email</Label>
                <Input id="repEmail" type="email" placeholder="jane.smith@example.com" />
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

export default GroupForm;
