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
