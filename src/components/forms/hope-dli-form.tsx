"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface FormProps {
    onNext?: () => void;
    onPrev?: () => void;
    onSubmit?: () => void;
    isFinalStep?: boolean;
}

export const HopeDliForm = ({ onNext, onPrev, isFinalStep, onSubmit }: FormProps) => {
    const { toast } = useToast();
    const handleSave = () => {
        toast({ title: "Form Saved", description: "Your data has been saved (prototype)." });
    };
    const handleSubmit = () => {
        toast({ title: "Form Submitted", description: "Your data has been successfully submitted (prototype)." });
        if(onSubmit) onSubmit();
    };
    return (
    <Card>
        <CardHeader>
        <CardTitle>HOPE-DLI</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="activityName">Activity Name</Label>
                <Select>
                    <SelectTrigger id="activityName"><SelectValue placeholder="Select activity" /></SelectTrigger>
                    <SelectContent><SelectItem value="activity1">Community Training</SelectItem><SelectItem value="activity2">Resource Distribution</SelectItem></SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="activityObjective">Activity Objective</Label>
                <Select>
                    <SelectTrigger id="activityObjective"><SelectValue placeholder="Select objective" /></SelectTrigger>
                    <SelectContent><SelectItem value="obj1">Skill Development</SelectItem><SelectItem value="obj2">Aid Provision</SelectItem></SelectContent>
                </Select>
            </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="beneficiaries">Number of beneficiaries</Label>
            <Input id="beneficiaries" type="number" placeholder="e.g. 150" />
        </div>
        <div className="space-y-2">
            <Label htmlFor="activityStatus">Activity status</Label>
            <Select>
                <SelectTrigger id="activityStatus"><SelectValue placeholder="Select status" /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="not_started">Not started</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="delayed">Delayed</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="startDate">Start period</Label>
                <Input id="startDate" type="date" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="endDate">End period</Label>
                <Input id="endDate" type="date" />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div className="space-y-2">
                <Label htmlFor="govFunding">Government funding received?</Label>
                <Select>
                    <SelectTrigger id="govFunding"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent>
                </Select>
            </div>
                <div className="space-y-2">
                <Label htmlFor="fundingAmount">Amount (if yes)</Label>
                <Input id="fundingAmount" type="number" placeholder="e.g. 75000" />
            </div>
        </div>

        <div className="flex justify-between pt-4">
            {onPrev ? <Button variant="outline" onClick={onPrev}>Prev</Button> : <div></div>}
            <div className="space-x-2">
                <Button variant="secondary" onClick={handleSave}>Save</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
        </CardContent>
    </Card>
    );
};
