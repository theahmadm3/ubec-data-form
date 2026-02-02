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

export const InfrastructureForm = ({ onNext, onPrev, isFinalStep, onSubmit }: FormProps) => {
    const handleSave = () => console.log("Form saved (prototype)");
    const handleSubmit = () => {
        console.log("Form submitted (prototype)");
        if(onSubmit) onSubmit();
    };
    return (
    <Card>
        <CardHeader>
            <CardTitle>Infrastructure Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="facilityType">Facility type</Label>
                    <Select>
                        <SelectTrigger id="facilityType"><SelectValue placeholder="Select type" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="classroom">Classroom</SelectItem>
                            <SelectItem value="toilet">Toilet</SelectItem>
                            <SelectItem value="borehole">Borehole</SelectItem>
                            <SelectItem value="library">Library</SelectItem>
                            <SelectItem value="laboratory">Laboratory</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="unitsCompleted">Number of units completed</Label>
                    <Input id="unitsCompleted" type="number" placeholder="e.g. 4" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="contractorName">Contractor name</Label>
                    <Input id="contractorName" placeholder="e.g. BuildWell Co." />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="contractSum">Contract sum</Label>
                    <Input id="contractSum" type="number" placeholder="e.g. 1200000" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="paymentStatus">Payment and implementation status</Label>
                 <Select>
                    <SelectTrigger id="paymentStatus"><SelectValue placeholder="Select status" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="partial">Partially Paid</SelectItem>
                        <SelectItem value="paid">Fully Paid</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="amountSpent">Amount spent to date</Label>
                    <Input id="amountSpent" type="number" placeholder="e.g. 600000" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="amountReleased">Amount released to date</Label>
                    <Input id="amountReleased" type="number" placeholder="e.g. 800000" />
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
