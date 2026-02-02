export type FormType = 
  | "Access"
  | "GSCCI"
  | "Infrastructure"
  | "Quality"
  | "Systems"
  | "Sports"
  | "HOPE_DLI";

export interface GroupUser {
    id: string;
    name: string;
    description: string;
    form: FormType;
}

export const groupUsers: GroupUser[] = [
    { id: "access_manager", name: "Access Manager", description: "Records basic details about an activity or project.", form: "Access" },
    { id: "gscci_coordinator", name: "GSCCI Coordinator", description: "Captures details about environmental or greening initiatives.", form: "GSCCI" },
    { id: "infra_manager", name: "Infrastructure Manager", description: "Tracks infrastructure development projects.", form: "Infrastructure" },
    { id: "qa_officer", name: "Quality Assurance Officer", description: "Documents educational quality interventions.", form: "Quality" },
    { id: "systems_optimizer", name: "Systems Optimizer", description: "Records data related to system improvements and monitoring.", form: "Systems" },
    { id: "sports_coordinator", name: "Sports Development Coordinator", description: "Tracks participation and resource distribution for sports.", form: "Sports" },
    { id: "hope_dli_coordinator", name: "HOPE-DLI Coordinator", description: "Records details of a specific activity under HOPE-DLI.", form: "HOPE_DLI" },
];
