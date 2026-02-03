"use client";

import { Suspense, useState, cloneElement, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Logo from "@/components/logo";
import { groupUsers, FormType } from "@/lib/user-types";
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

const formMapping: Record<FormType, React.ReactNode> = {
  "Access": <AccessForm />,
  "GSCCI": <GscciForm />,
  "Infrastructure": <InfrastructureForm />,
  "Quality": <QualityForm />,
  "Systems": <SystemsOptimizationForm />,
  "Sports": <SportsDevelopmentForm />,
  "HOPE_DLI": <HopeDliForm />,
};

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userType = searchParams.get('userType') as 'individual' | 'group' | null;
  const roleId = searchParams.get('roleId');

  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [completedSchools, setCompletedSchools] = useState<string[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    // If user info is not in URL, redirect to login.
    // This is a basic protection for a prototype.
    if (!userType) {
      router.push('/');
    }
  }, [userType, router]);

  const handleBack = () => {
    if (selectedSchool) {
      setSelectedSchool(null);
    } else {
      router.push('/');
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
    setSelectedSchool(null);
  };

  const renderContent = () => {
    if (!userType) {
      // This will show briefly before the useEffect redirects
      return <p className="text-center">Loading user information...</p>;
    }

    if (!selectedSchool) {
      return (
        <>
          <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Log Out
          </Button>
          <SchoolSelector onSelectSchool={setSelectedSchool} completedSchools={completedSchools} />
        </>
      )
    }

    if (userType === 'group') {
      const groupUser = groupUsers.find(u => u.id === roleId);

      if (!groupUser) {
        return <p className="text-center text-destructive">Error: Invalid group role specified.</p>;
      }
      
      const GroupFormComponent = formMapping[groupUser.form];
      const formWithProps = cloneElement(GroupFormComponent as React.ReactElement, {
        isFinalStep: true,
        onSubmit: handleFinalSubmit,
      });

      return (
        <>
            <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to school selection
            </Button>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">School</p>
              <h2 className="text-xl font-semibold">{selectedSchool.name}</h2>
              <p className="text-muted-foreground mt-2">Please fill out the form for your role: <span className="font-semibold text-foreground">{groupUser.name}</span></p>
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

export default function DashboardPage() {
  return (
    <Suspense fallback={<p className="text-center p-8">Loading...</p>}>
      <DashboardContent />
    </Suspense>
  )
}