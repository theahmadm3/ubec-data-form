"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormProps {
    onNext?: () => void;
    onPrev?: () => void;
    onSubmit?: () => void;
    isFinalStep?: boolean;
}

export const SystemsOptimizationForm = ({ onNext, onPrev, isFinalStep, onSubmit }: FormProps) => {
    const handleSave = () => console.log("Form saved (prototype)");
    const handleSubmit = () => {
        console.log("Form submitted (prototype)");
        if(onSubmit) onSubmit();
    };
    return (
    <Card>
        <CardHeader>
            <CardTitle>Systems Optimization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="schoolsCovered">Number of schools covered</Label>
                    <Input id="schoolsCovered" type="number" placeholder="e.g. 25" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="staffTrained">Number of staff trained</Label>
                    <Input id="staffTrained" type="number" placeholder="e.g. 75" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="monitoringVisits">Number of monitoring visits conducted</Label>
                <Input id="monitoringVisits" type="number" placeholder="e.g. 15" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div className="space-y-2">
                    <Label htmlFor="reportProduced">Was a report produced?</Label>
                    <Select>
                        <SelectTrigger id="reportProduced"><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="reportType">Type of report (if yes)</Label>
                    <Input id="reportType" placeholder="e.g. Quarterly Monitoring Report" />
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="budgetApproved">Total budget approved</Label>
                    <Input id="budgetApproved" type="number" placeholder="e.g. 250000" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="amountSpent">Amount spent to date</Label>
                    <Input id="amountSpent" type="number" placeholder="e.g. 180000" />
                </div>
            </div>
            <div className="flex justify-between pt-4">
                {onPrev ? <Button variant="outline" onClick={onPrev}>Prev</Button> : <div></div>}
                <div className="space-x-2">
                    <Button variant="secondary" onClick={handleSave}>Save</Button>
                    {isFinalStep ? (
                        <Button onClick={handleSubmit}>Submit</Button>
                    ) : (
                        onNext && <Button onClick={onNext}>Next</Button>
                    )}
                </div>
            </div>
        </CardContent>
    </Card>
    );
};
