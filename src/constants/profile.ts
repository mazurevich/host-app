import {
  LanguageProficiencyLevel,
  ProfileTab,
} from "ui/modules/profile/profile.types";

export const profileTabs = [
  {
    id: ProfileTab.Overview,
    label: ProfileTab.Overview,
  },
  {
    id: ProfileTab.SalaryRoleHistory,
    label: ProfileTab.SalaryRoleHistory,
  },
  {
    id: ProfileTab.PersonalInfo,
    label: ProfileTab.PersonalInfo,
  },
];

export const RATING_VALUES = new Map([
  ["No Rating", 0],
  ["Unsatisfactory", 1],
  ["Partially Meet Expectations", 2],
  ["Needs Improvement", 2],
  ["Satisfactory", 3],
  ["Solid Performer", 3],
  ["Fully meets Expectation", 4],
  ["Exceeds Expectations", 4],
  ["Exceed Expectations", 4],
  ["Significantly Exceed Expectations", 5],
  ["Outstanding", 5],
  ["Unsatisfactory", 1],
  ["Partially Meet Expectations", 2],
  ["Solid Performer", 3],
  ["Exceed Expectations", 4],
  ["Significantly Exceed Expectations", 5],
]);

export const LANGUAGE_PROFICIENCY_HEADER_KEYS: string[] = [
  "Language",
  "Reading Level",
  "Writing Level",
  "Speaking Level",
];

export const LANGUAGE_PROFICIENCY_ITEM_KEYS: Array<
  keyof LanguageProficiencyLevel
> = ["languageTxt", "readingLevelTxt", "writingLevelTxt", "speakingLevelTxt"];
