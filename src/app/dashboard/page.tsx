"use client";

import { useState, cloneElement } from "react";
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
import SchoolSelector from "@/components/school-selector";
import type { School } from "@/lib/schools";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type UserType = "individual" | "group";

const formMapping: Record<FormType, React.ReactNode> = {
  "Access": <AccessForm />,
  "GSCCI": <GscciForm />,
  "Infrastructure": <InfrastructureForm />,
  "Quality": <QualityForm />,
  "Systems": <SystemsOptimizationForm />,
  "Sports": <SportsDevelopmentForm />,
  "HOPE_DLI": <HopeDliForm />,
};


export default function DashboardPage() {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [selectedGroupUser, setSelectedGroupUser] = useState<GroupUser | null>(null);
  const [completedSchools, setCompletedSchools] = useState<string[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleBack = () => {
    if (selectedGroupUser) {
      setSelectedGroupUser(null);
    } else if (selectedSchool) {
      setSelectedSchool(null);
    } else if (userType) {
      setUserType(null);
    }
  }

  const handleFinalSubmit = () => {
    if (selectedSchool) {
      setCompletedSchools(prev => [...new Set([...prev, selectedSchool.id])]);
    }
    setShowSuccessModal(true);
  };

  const handleModalCloseAndRedirect = () => {
    setShowSuccessModal(false);
    setSelectedGroupUser(null);
    setSelectedSchool(null);
  };

  const renderContent = () => {
    if (!userType) {
      return <UserTypeSelector onSelectUserType={setUserType} />;
    }

    if (!selectedSchool) {
      return (
        <>
          <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to user type selection
          </Button>
          <SchoolSelector onSelectSchool={setSelectedSchool} completedSchools={completedSchools} />
        </>
      )
    }

    if (userType === 'group') {
      if (!selectedGroupUser) {
        return (
            <>
                <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to school selection
                </Button>
                <GroupUserSelector onSelectGroupUser={setSelectedGroupUser} />
            </>
        );
      }
      
      const GroupFormComponent = formMapping[selectedGroupUser.form];
      const formWithProps = cloneElement(GroupFormComponent as React.ReactElement, {
        isFinalStep: true,
        onSubmit: handleFinalSubmit,
      });

      return (
        <>
            <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to group selection
            </Button>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">School</p>
              <h2 className="text-xl font-semibold">{selectedSchool.name}</h2>
            </div>
            {formWithProps}
        </>
      )
    }

    if (userType === 'individual') {
      return (
         <>
            <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to school selection
            </Button>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">School</p>
              <h2 className="text-xl font-semibold">{selectedSchool.name}</h2>
              <p className="text-muted-foreground mt-2">Please fill out all sections completely by navigating with the buttons below.</p>
            </div>
            <IndividualFormsView onSubmit={handleFinalSubmit} />
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
      <AlertDialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submission Successful!</AlertDialogTitle>
            <AlertDialogDescription>
              Your form has been submitted successfully. You will now be returned to the school selection page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleModalCloseAndRedirect}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
