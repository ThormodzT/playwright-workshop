import { TaskData } from "./types";

const STATES = {
  TODO: "To do",
  IN_PROGRESS: "In Progress",
  REVIEW: "Review",
  DONE: "Done",
};

const TAGS = {
  FEATURE: "Feature",
  HIGH_PRIORITY: "High Priority",
  BUG: "Bug",
  DESIGN: "Design",
};

const TABS = {
  WEB_APPLICATION: "Web Application",
  MOBILE_APPLICATION: "Mobile Application",
  DONE: "Done",
};

export const getDashboardTaskData = (): TaskData[] => {
  return [
    {
      tab: TABS.WEB_APPLICATION,
      cardName: "Implement user authentication",
      column: STATES.TODO,
      assignedUser: "Sarah Chen",
      dueDate: "3/24/2024",
      tags: [TAGS.FEATURE, TAGS.HIGH_PRIORITY],
    },
    {
      tab: TABS.WEB_APPLICATION,
      cardName: "Fix navigation bug",
      column: STATES.TODO,
      assignedUser: "John Smith",
      dueDate: "3/19/2024",
      tags: [TAGS.BUG],
    },
    {
      tab: TABS.WEB_APPLICATION,
      cardName: "Design system updates",
      column: STATES.IN_PROGRESS,
      assignedUser: "Emma Wilson",
      dueDate: "3/21/2024",
      tags: [],
    },
    {
      tab: TABS.MOBILE_APPLICATION,
      cardName: "Push notification system",
      column: STATES.TODO,
      assignedUser: "David Kim",
      dueDate: "3/27/2024",
      tags: [TAGS.FEATURE],
    },
    {
      tab: TABS.MOBILE_APPLICATION,
      cardName: "Offline mode",
      column: STATES.IN_PROGRESS,
      assignedUser: "Rachel Green",
      dueDate: "3/23/2024",
      tags: [TAGS.FEATURE, TAGS.HIGH_PRIORITY],
    },
    {
      tab: TABS.MOBILE_APPLICATION,
      cardName: "App icon design",
      column: STATES.DONE,
      assignedUser: "Emma Wilson",
      dueDate: "3/14/2024",
      tags: [TAGS.DESIGN],
    },
  ];
};
