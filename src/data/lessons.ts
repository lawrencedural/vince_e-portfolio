export type Lesson = {
  id: string;
  lessonNumber: string;
  title: string;
  keyConcepts: string[];
  takeaways: string[];
  realWorldApplication: string;
};

export const lessons: Lesson[] = [
  {
    id: "lesson-1",
    lessonNumber: "Lesson 1",
    title: "Entrepreneurial Mindset",
    keyConcepts: [
      "Understanding entrepreneurial thinking and opportunity recognition",
      "Calculated risk-taking and decision-making",
      "Connecting personal experiences with business concepts",
    ],
    takeaways: [
      "Entrepreneurship is about testing assumptions and learning from feedback",
      "Opportunities exist in everyday problems and observations",
      "Clear structure and evidence strengthen written arguments",
    ],
    realWorldApplication:
      "This lesson helped me recognize business opportunities in local contexts and taught me to structure reflections with clear thesis statements supported by concrete examples.",
  },
  {
    id: "lesson-2",
    lessonNumber: "Lesson 2",
    title: "Market Research & Data Analysis",
    keyConcepts: [
      "Conducting basic market research and surveys",
      "Interpreting customer feedback and data",
      "Data visualization for non-technical audiences",
    ],
    takeaways: [
      "Data supports business decisions when properly analyzed and presented",
      "Collaboration requires clear communication and task division",
      "Visuals make complex information more accessible",
    ],
    realWorldApplication:
      "I learned to translate raw survey data into actionable insights and present findings in ways that help others understand market needs and opportunities.",
  },
  {
    id: "lesson-3",
    lessonNumber: "Lesson 3",
    title: "Business Pitching & Presentation",
    keyConcepts: [
      "Crafting clear, persuasive business pitches",
      "Problem-solution fit and value proposition",
      "Effective oral communication and presentation skills",
    ],
    takeaways: [
      "Simplifying complex ideas makes them more memorable",
      "Confidence and pacing improve with practice",
      "Feedback helps refine presentation structure and delivery",
    ],
    realWorldApplication:
      "This lesson taught me to communicate business ideas confidently, manage my tone and body language, and respond effectively to questions under pressure.",
  },
];

