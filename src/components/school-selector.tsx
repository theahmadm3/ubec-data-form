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
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-48 max-w-sm drop-shadow-sm">
          <path d="M407.1,139.3c-2.9-2.9-6.8-4.3-10.7-4.3h-32.2V128c0-4.4-1.6-8.3-4.8-11.5l-23.1-23.1c-3.2-3.2-7.1-4.8-11.5-4.8h-25.8V74.2c0-4.4-1.6-8.3-4.8-11.5l-19.3-19.3c-3.2-3.2-7.1-4.8-11.5-4.8h-25.8V21.3c0-4.4-1.6-8.3-4.8-11.5L213.3,0l-15.3,15.3c-3.2,3.2-4.8,7.1-4.8,11.5v28.2H169c-4.4,0-8.3,1.6-11.5,4.8l-19.3,19.3c-3.2,3.2-4.8,7.1-4.8,11.5v14.4h-25.8c-4.4,0-8.3,1.6-11.5,4.8L73.1,133c-3.2,3.2-4.8,7.1-4.8,11.5v25.8H54.c-4.4,0-8.3,1.6-11.5,4.8L19.5,198.3c-3.2,3.2-4.8,7.1-4.8,11.5v25.8h-11c-2.9,0-5.3,1-7.1,3.1c-1.8,2.1-2.2,4.8-1,7.5l23.1,53.8c1.6,3.6,4.8,5.8,8.1,5.8h19.3v32.2c0,4.4,1.6,8.3,4.8,11.5l19.3,19.3c3.2,3.2,7.1,4.8,11.5,4.8h25.8v14.4c0,4.4,1.6,8.3,4.8,11.5l19.3,19.3c3.2,3.2,7.1,4.8,11.5,4.8H169v28.2c0,4.4,1.6,8.3,4.8,11.5l15.3,15.3l23.1-23.1c3.2-3.2,4.8-7.1,4.8-11.5v-28.2h25.8c4.4,0,8.3-1.6,11.5-4.8l19.3-19.3c3.2-3.2,4.8-7.1,4.8-11.5v-14.4h25.8c4.4,0,8.3-1.6,11.5-4.8l23.1-23.1c3.2-3.2,4.8-7.1,4.8-11.5V265h32.2c4.4,0,8.3-1.6,11.5-4.8l19.3-19.3c3.2-3.2,4.8-7.1,4.8-11.5V198h28.2c4.4,0,8.3-1.6,11.5-4.8l15.3-15.3L407.1,139.3z" fill="currentColor"/>
        </svg>
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
