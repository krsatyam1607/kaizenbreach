// src/data/learning.ts

export interface LearningItem {
  id: number;
  title: string;
  description: string;
  category: string;
  progress: number; // 0 to 100
  status: "Just Started" | "In Progress" | "Near Completion";
  resourceLink?: string;
}

export const currentLearningData: LearningItem[] = [
  {
    id: 1,
    title: "Practical Helpdesk - Intro to IT (TCM Security)",
    description:
      "Completed the Intro to IT section, covering IT fundamentals, IT department roles, help desk responsibilities, and real-world job expectations.",
    category: "IT Fundamentals",
    progress: 28,
    status: "Just Started",
    resourceLink: "https://academy.tcm-sec.com/"
  }
];
