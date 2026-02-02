"use client";

import { useState } from "react";
import IndividualForm from "@/components/individual-form";
import GroupForm from "@/components/group-form";
import UserTypeSelection from "@/components/user-type-selection";
import Logo from "@/components/logo";

type UserType = "individual" | "group";

export default function FormPage() {
  const [userType, setUserType] = useState<UserType | null>(null);

  const handleSelectUserType = (type: UserType) => {
    setUserType(type);
  };

  const handleBack = () => {
    setUserType(null);
  }

  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <Logo />
      </div>
      {!userType ? (
        <UserTypeSelection onSelectUserType={handleSelectUserType} />
      ) : userType === "individual" ? (
        <IndividualForm onBack={handleBack} />
      ) : (
        <GroupForm onBack={handleBack} />
      )}
    </main>
  );
}
