"use client";

import { useState } from "react";
import Logo from "@/components/logo";
import UserTypeSelector from "@/components/user-type-selector";
import GroupUserSelector from "@/components/group-user-selector";
import { groupUsers, GroupUser, FormType } from "@/lib/user-types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { IndividualFormsView } from "@/components/individual-forms-view";
import { AccessForm } from "@/components/forms/access-form";
import { GscciForm } from "@/components/forms/gscci-form";
import { InfrastructureForm } from "@/components/forms/infrastructure-form";
import { QualityForm } from "@/components/forms/quality-form";
import { SystemsOptimizationForm } from "@/components/forms/systems-optimization-form";
import { SportsDevelopmentForm } from "@/components/forms/sports-development-form";
import { HopeDliForm } from "@/components/forms/hope-dli-form";

type UserType = "individual" | "group";

const formMapping: Record<FormType, React.ReactNode> = {
  "Access": <AccessForm />,
  "GSCCI": <GscciForm />,
  "Infrastructure": <InfrastructureForm />,
  "Quality": <QualityForm />,
  "Systems": <SystemsOptimizationForm />,
  "Sports": <SportsDevelopmentForm />,
  "HOPE_DLI": <HopeDliForm isFinalStep />,
};


export default function DashboardPage() {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [selectedGroupUser, setSelectedGroupUser] = useState<GroupUser | null>(null);

  const handleBack = () => {
    if (selectedGroupUser) {
      setSelectedGroupUser(null);
    } else if (userType) {
      setUserType(null);
    }
  }

  const renderContent = () => {
    if (!userType) {
      return <UserTypeSelector onSelectUserType={setUserType} />;
    }

    if (userType === 'group') {
      if (!selectedGroupUser) {
        return (
            <>
                <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to user type selection
                </Button>
                <GroupUserSelector onSelectGroupUser={setSelectedGroupUser} />
            </>
        );
      }
      return (
        <>
            <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to group selection
            </Button>
            {formMapping[selectedGroupUser.form]}
        </>
      )
    }

    if (userType === 'individual') {
      return (
         <>
            <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to user type selection
            </Button>
            <IndividualFormsView />
         </>
      );
    }
  }


  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <Logo />
      </div>
      {renderContent()}
    </main>
  );
}
