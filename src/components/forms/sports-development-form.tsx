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

export const SportsDevelopmentForm = ({ onNext, onPrev, isFinalStep, onSubmit }: FormProps) => {
    const handleSave = () => console.log("Form saved (prototype)");
    const handleSubmit = () => {
        console.log("Form submitted (prototype)");
        if(onSubmit) onSubmit();
    };
    return (
    <Card>
        <CardHeader>
            <CardTitle>Sports Development Form</CardTitle>
            <CardDescription>To track participation and resource distribution for sports programs.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="schoolsParticipating">Number of schools participating</Label>
                <Input id="schoolsParticipating" type="number" placeholder="e.g. 10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="studentsTotal">Total students participating</Label>
                    <Input id="studentsTotal" type="number" placeholder="e.g. 200" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="studentsBoys">Boys</Label>
                    <Input id="studentsBoys" type="number" placeholder="e.g. 110" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="studentsGirls">Girls</Label>
                    <Input id="studentsGirls" type="number" placeholder="e.g. 90" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="equipmentType">Type of sports equipment procured</Label>
                <Select>
                    <SelectTrigger id="equipmentType"><SelectValue placeholder="Select equipment" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="balls">Footballs & Basketballs</SelectItem>
                        <SelectItem value="jerseys">Jerseys</SelectItem>
                        <SelectItem value="nets">Nets (Volleyball/Football)</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="quantityProcured">Quantity procured</Label>
                    <Input id="quantityProcured" type="number" placeholder="e.g. 50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="quantityDistributed">Quantity distributed</Label>
                    <Input id="quantityDistributed" type="number" placeholder="e.g. 45" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="competitionType">Type of competition held</Label>
                 <Select>
                    <SelectTrigger id="competitionType"><SelectValue placeholder="Select competition type" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="inter_house">Inter-House</SelectItem>
                        <SelectItem value="state">State</SelectItem>
                        <SelectItem value="regional">Regional</SelectItem>
                    </SelectContent>
                </Select>
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
