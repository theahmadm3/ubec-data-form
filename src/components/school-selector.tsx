"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { schools, School } from "@/lib/schools";
import { cn } from "@/lib/utils";

type SchoolSelectorProps = {
  onSelectSchool: (school: School) => void;
};

const SchoolSelector = ({ onSelectSchool }: SchoolSelectorProps) => {
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
      <h2 className="text-3xl font-bold font-headline mb-6">Schools</h2>
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
        {filteredSchools.map((school) => (
          <div
            key={school.id}
            className={cn(
              "cursor-pointer rounded-lg p-4 transition-colors",
               selectedSchool?.id === school.id ? "bg-muted" : "hover:bg-muted/50"
            )}
            onClick={() => handleSelect(school)}
          >
            <p className="text-base">{school.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolSelector;
