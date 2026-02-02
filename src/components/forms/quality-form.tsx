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

export const QualityForm = ({ onNext, onPrev, isFinalStep, onSubmit }: FormProps) => {
    const handleSave = () => console.log("Form saved (prototype)");
    const handleSubmit = () => {
        console.log("Form submitted (prototype)");
        if(onSubmit) onSubmit();
    };
    return (
    <Card>
        <CardHeader>
            <CardTitle>Quality</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="interventionType">Intervention type</Label>
                <Select>
                    <SelectTrigger id="interventionType"><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="teacher_training">Teacher training</SelectItem>
                        <SelectItem value="learning_materials">Learning materials provision</SelectItem>
                        <SelectItem value="digital_learning">Digital learning support</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="trainingType">Type of training conducted</Label>
                <Select>
                    <SelectTrigger id="trainingType"><SelectValue placeholder="Select training type" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="subject_based">Subject-based</SelectItem>
                        <SelectItem value="pedagogy">Pedagogy</SelectItem>
                        <SelectItem value="ict">ICT</SelectItem>
                        <SelectItem value="digital_skills">Digital skills</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="teachersTrainedTotal">Teachers trained (total)</Label>
                    <Input id="teachersTrainedTotal" type="number" placeholder="e.g. 50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="teachersTrainedMale">Teachers trained (male)</Label>
                    <Input id="teachersTrainedMale" type="number" placeholder="e.g. 20" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="teachersTrainedFemale">Teachers trained (female)</Label>
                    <Input id="teachersTrainedFemale" type="number" placeholder="e.g. 30" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="materialsType">Type of learning materials provided</Label>
                 <Select>
                    <SelectTrigger id="materialsType"><SelectValue placeholder="Select material type" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="textbooks">Textbooks</SelectItem>
                        <SelectItem value="tlm">Teaching & Learning Materials</SelectItem>
                        <SelectItem value="digital">Digital devices</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="quantityDistributed">Quantity distributed</Label>
                    <Input id="quantityDistributed" type="number" placeholder="e.g. 500" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="unitCost">Unit cost</Label>
                    <Input id="unitCost" type="number" placeholder="e.g. 25" />
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
