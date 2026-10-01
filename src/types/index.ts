import type { ComponentType, SVGProps } from "react";
import type { StaticImageData } from "next/image";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavLink {
  label: string;
  href: string;
}

export interface Avatar {
  src: StaticImageData;
  alt: string;
}

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  title: string;
  creator: string;
  creatorSlug: string;
  image: StaticImageData;
  lessons: number;
  duration: string;
  comments: number;
  level: CourseLevel;
  rating: number;
  price: number;
  enrolledExtra: string;
  learners: Avatar[];
  categories: string[];
}

export interface CourseModule {
  title: string;
  summary: string;
  minutes: number;
}

export type StarRating = 1 | 2 | 3 | 4 | 5;

export interface CourseReview {
  id: string;
  name: string;
  role: string;
  avatar: StaticImageData;
  postedAgo: string;
  rating: StarRating;
  text: string;
}

export interface CourseDetail {
  courseId: string;
  title: string;
  tagline: string;
  level: CourseLevel;
  rating: number;
  reviewCount: number;
  students: number;
  totalLessons: number;
  totalHours: number;
  description: string[];
  sneakPeek: StaticImageData[];
  keyPoints: string[];
  modules: CourseModule[];
  ratingBreakdown: Record<StarRating, number>;
  reviews: CourseReview[];
}

export interface Creator {
  slug: string;
  name: string;
  headline: string;
  role: string;
  avatar: StaticImageData;
  bio: string[];
  products: number;
  followers: number;
}

export interface LearningPath {
  name: string;
  icon: IconComponent;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: StaticImageData;
}

export interface FooterLink {
  label: string;
  href?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
