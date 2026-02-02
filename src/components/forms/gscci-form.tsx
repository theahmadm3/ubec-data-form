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

export const GscciForm = ({ onNext, onPrev, isFinalStep, onSubmit }: FormProps) => {
    const handleSave = () => console.log("Form saved (prototype)");
    const handleSubmit = () => {
        console.log("Form submitted (prototype)");
        if(onSubmit) onSubmit();
    };
    return (
    <Card>
        <CardHeader>
            <CardTitle>GSCCI</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="greeningType">Type of greening activity</Label>
                <Select>
                    <SelectTrigger id="greeningType"><SelectValue placeholder="Select activity type" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="orchard">Orchard establishment</SelectItem>
                        <SelectItem value="tree_planting">Tree planting</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="treesPlanted">Number of trees planted</Label>
                    <Input id="treesPlanted" type="number" placeholder="e.g. 50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="fruitTreesPlanted">Number of fruit trees planted</Label>
                    <Input id="fruitTreesPlanted" type="number" placeholder="e.g. 20" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="plantingDate">Date of planting</Label>
                <Input id="plantingDate" type="date" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="speciesSuitability">Species suitability for local environment</Label>
                <Select>
                    <SelectTrigger id="speciesSuitability"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="maintenancePlan">Watering/maintenance plan and responsible party</Label>
                 <Select>
                    <SelectTrigger id="maintenancePlan"><SelectValue placeholder="Select responsible party" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="school">School</SelectItem>
                        <SelectItem value="community">Community</SelectItem>
                        <SelectItem value="green_club">Green Club</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="space-y-2">
                <Label htmlFor="learnerInvolvement">Learner involvement in maintenance</Label>
                <Select>
                    <SelectTrigger id="learnerInvolvement"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent>
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
