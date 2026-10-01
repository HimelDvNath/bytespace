import type { Creator } from "@/types";
import purepearlAvatar from "@/assets/images/avatars/student-2.webp";

export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    headline: "Passionate UI/UX, Web designer",
    role: "Professional Creator",
    avatar: purepearlAvatar,
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    products: 3,
    followers: 12,
  },
];

export function getCreator(slug: string): Creator | undefined {
  return creators.find((creator) => creator.slug === slug);
}
