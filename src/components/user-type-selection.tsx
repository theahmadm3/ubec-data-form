import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users } from "lucide-react";
import React from "react";

type UserTypeSelectionProps = {
  onSelectUserType: (type: "individual" | "group") => void;
};

const UserTypeSelection = ({ onSelectUserType }: UserTypeSelectionProps) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-headline font-semibold mb-2">Welcome!</h2>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        To get started, please select your user type. This will determine which form sections you need to complete.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <Card
          className="cursor-pointer hover:shadow-lg hover:border-primary transition-all duration-200"
          onClick={() => onSelectUserType("individual")}
        >
          <CardHeader>
            <CardTitle className="flex flex-col items-center gap-4">
              <User className="w-12 h-12 text-primary" />
              <span>Individual</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              For single users collecting and submitting their own data. You will need to complete all sections.
            </p>
          </CardContent>
        </Card>
        <Card
          className="cursor-pointer hover:shadow-lg hover:border-primary transition-all duration-200"
          onClick={() => onSelectUserType("group")}
        >
          <CardHeader>
            <CardTitle className="flex flex-col items-center gap-4">
              <Users className="w-12 h-12 text-primary" />
              <span>Group</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              For organizations or groups. You will only see the sections assigned to your group.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserTypeSelection;
