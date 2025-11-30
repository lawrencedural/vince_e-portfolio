export type EvidenceLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  lesson: string;
  title: string;
  course: string;
  summary: string;
  images: string[]; // Array of image paths
  video?: string; // Optional video URL
  evidence: EvidenceLink[];
  reflection: string;
};

export const projects: Project[] = [
  {
    id: "sell-yourself",
    lesson: "Project",
    title: "Sell Yourself",
    course: "Business and Entrepreneurship",
    summary:
      "A personal video presentation showcasing my professional introduction, key strengths, and communication skills. This video demonstrates my ability to present myself confidently and articulate my value proposition.",
    images: ["/images/projects/sell-yourself-thumbnail.jpg"],
    video: "https://www.youtube.com/embed/pYHiu79UsJk",
    evidence: [
      { label: "Video Presentation", url: "https://youtube.com/shorts/pYHiu79UsJk?feature=share" },
    ],
    reflection:
      "Creating this 'Sell Yourself' video was a powerful exercise in self-presentation and communication. It challenged me to articulate my strengths, achievements, and professional goals in a clear and compelling way. The process of recording and reviewing my presentation helped me identify areas for improvement in my delivery, tone, and body language. This video represents my growth in confidence and my ability to communicate my value effectively.",
  },
  {
    id: "case-study",
    lesson: "Project",
    title: "Case Study",
    course: "Business and Entrepreneurship",
    summary:
      "A comprehensive case study analysis demonstrating critical thinking and business problem-solving skills.",
    images: [
      "/images/projects/case-study-1.jpg",
      "/images/projects/case-study-2.jpg",
      "/images/projects/case-study-3.jpg",
      "/images/projects/case-study-4.jpg",
      "/images/projects/case-study-5.jpg",
      "/images/projects/case-study-6.jpg",
      "/images/projects/case-study-7.jpg",
    ],
    evidence: [
      { label: "Case Study Document", url: "#placeholder-case-study-doc" },
    ],
    reflection:
      "This case study project allowed me to apply theoretical business concepts to real-world scenarios. Through careful analysis and research, I developed a deeper understanding of how businesses operate, face challenges, and implement strategic solutions. The process improved my analytical thinking, research skills, and ability to present complex information clearly and concisely.",
  },
  {
    id: "session-takeaway",
    lesson: "Project",
    title: "Session Takeaway",
    course: "Business and Entrepreneurship",
    summary:
      "Key insights and learnings captured from various course sessions, highlighting important concepts and personal growth.",
    images: [
      "/images/projects/takeaway-1.jpg",
      "/images/projects/takeaway-2.jpg",
    ],
    evidence: [
      { label: "Takeaway Summary", url: "#placeholder-takeaway-summary" },
    ],
    reflection:
      "Creating these session takeaways helped me actively engage with course material and reflect on my learning journey. Each session provided valuable insights into business practices, communication strategies, and entrepreneurial thinking. Documenting these takeaways reinforced my understanding and allowed me to track my personal and professional development throughout the course.",
  },
];