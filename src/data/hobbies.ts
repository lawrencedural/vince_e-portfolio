export type Hobby = {
  id: string;
  name: string;
  description: string;
  images: string[];
};

export const hobbies: Hobby[] = [
  {
    id: "golf",
    name: "Golf",
    description:
      "A passion for precision and patience. Golf teaches discipline, focus, and the importance of continuous improvement. Whether on the course or at the range, I enjoy the mental and physical challenge of the game.",
    images: ["/images/hobbies/golf.jpg"],
  },
  {
    id: "basketball",
    name: "Basketball",
    description:
      "A love for teamwork and competitive spirit. Basketball has taught me valuable lessons about collaboration, resilience, and pushing my limits. The fast-paced nature of the game keeps me energized and engaged.",
    images: ["/images/hobbies/basketball.jpg"],
  },
  {
    id: "automotive",
    name: "Automotive",
    description:
      "A fascination with cars, mechanics, and engineering. From appreciating design and performance to understanding the technical aspects of vehicles, automotive culture combines art, science, and passion.",
    images: [
      "/images/hobbies/automotive-1.jpg",
      "/images/hobbies/automotive-2.jpg",
    ],
  },
];
