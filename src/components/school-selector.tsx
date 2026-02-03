"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { schools, School } from "@/lib/schools";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

type SchoolSelectorProps = {
  onSelectSchool: (school: School) => void;
  completedSchools?: string[];
};

const SchoolSelector = ({ onSelectSchool, completedSchools = [] }: SchoolSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);


  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (school: School) => {
    setSelectedSchool(school);
    onSelectSchool(school);
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-6 text-muted-foreground/20 flex justify-center">
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1823.6492618520224!2d8.561959079862755!3d11.979402491310301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8199ae590507%3A0x466f5cb1734cb983!2sTarauni%2C%20Kano%20700102%2C%20Kano!5e0!3m2!1sen!2sng!4v1770127932749!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      <h2 className="text-3xl font-bold font-headline mb-2">Select a School</h2>
      <p className="text-muted-foreground mb-6">Choose the school you are submitting data for. Completed schools will be marked with a check.</p>
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Search for schools"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-muted border-0 focus-visible:ring-primary text-base"
        />
      </div>
      <div className="space-y-2">
        {filteredSchools.map((school) => {
          const isCompleted = completedSchools.includes(school.id);
          return (
            <div
              key={school.id}
              className={cn(
                "cursor-pointer rounded-lg p-4 transition-colors border",
                selectedSchool?.id === school.id ? "bg-muted ring-2 ring-primary" : "hover:bg-muted/50"
              )}
              onClick={() => handleSelect(school)}
            >
              <div className="flex items-center justify-between">
                <p className="text-base">{school.name}</p>
                {isCompleted && <CheckCircle2 className="h-5 w-5 text-primary" />}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default SchoolSelector;
