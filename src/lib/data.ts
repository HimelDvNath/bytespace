import {
  BusinessIcon,
  ComputerIcon,
  DesignIcon,
  DevelopmentIcon,
  MarketingIcon,
  PhotographyIcon,
} from "@/components/icons";
import type {
  Avatar,
  Course,
  FooterColumn,
  LearningPath,
  NavLink,
  Testimonial,
} from "@/types";

import courseBigData from "@/assets/images/courses/big-data.webp";
import courseDigitalAsset from "@/assets/images/courses/digital-asset.webp";
import courseFigma from "@/assets/images/courses/figma.webp";
import courseMoney from "@/assets/images/courses/money.webp";
import courseProductivity from "@/assets/images/courses/productivity.webp";
import courseStartup from "@/assets/images/courses/startup.webp";
import learner1 from "@/assets/images/avatars/learner-1.webp";
import learner2 from "@/assets/images/avatars/learner-2.webp";
import learner3 from "@/assets/images/avatars/learner-3.webp";
import student1 from "@/assets/images/avatars/student-1.webp";
import student2 from "@/assets/images/avatars/student-2.webp";
import student3 from "@/assets/images/avatars/student-3.webp";
import student4 from "@/assets/images/avatars/student-4.webp";
import student5 from "@/assets/images/avatars/student-5.webp";
import student6 from "@/assets/images/avatars/student-6.webp";
import student7 from "@/assets/images/avatars/student-7.webp";
import testimonialAlex from "@/assets/images/avatars/testimonial-alex.webp";
import testimonialJames from "@/assets/images/avatars/testimonial-james.webp";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/#creators" },
];

export const accountNav: NavLink[] = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
];

export const partnerLogos = [
  { src: "/partners/partner-1.svg", width: 167, height: 41 },
  { src: "/partners/partner-2.svg", width: 168, height: 41 },
  { src: "/partners/partner-3.svg", width: 170, height: 41 },
  { src: "/partners/partner-4.svg", width: 170, height: 41 },
  { src: "/partners/partner-5.svg", width: 169, height: 42 },
] as const;

export const happyStudents: Avatar[] = [
  { src: student1, alt: "" },
  { src: student2, alt: "" },
  { src: student3, alt: "" },
  { src: student4, alt: "" },
  { src: student5, alt: "" },
  { src: student6, alt: "" },
  { src: student7, alt: "" },
];

export const courseLearners: Avatar[] = [
  { src: student2, alt: "" },
  { src: learner1, alt: "" },
  { src: learner2, alt: "" },
  { src: learner3, alt: "" },
];

export const FEATURED_CATEGORY = "Featured";

export const courseCategoryRows: string[][] = [
  [
    FEATURED_CATEGORY,
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

const sharedCourseStats = {
  creator: "purepearl studio",
  creatorSlug: "purepearl-studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  rating: 4.5,
  price: 25,
  enrolledExtra: "26+",
  learners: courseLearners,
} as const;

export const courses: Course[] = [
  {
    ...sharedCourseStats,
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: courseFigma,
    categories: ["UI/UX Design", "Graphic Design", "Web Development"],
  },
  {
    ...sharedCourseStats,
    id: "build-digital-asset",
    title: "Build Digital Asset",
    image: courseDigitalAsset,
    categories: ["Digital Illustration", "Graphic Design", "Animation"],
  },
  {
    ...sharedCourseStats,
    id: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: courseBigData,
    categories: ["Data Science", "Marketing"],
  },
  {
    ...sharedCourseStats,
    id: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    image: courseProductivity,
    categories: ["Productivity"],
  },
  {
    ...sharedCourseStats,
    id: "mastering-money-management",
    title: "Mastering Money Management",
    image: courseMoney,
    categories: ["Freelance & Entrepreneurship", "Productivity"],
  },
  {
    ...sharedCourseStats,
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: courseStartup,
    categories: [
      "Freelance & Entrepreneurship",
      "Creative Marketing",
      "Social Media",
    ],
  },
];

export const learningPaths: LearningPath[] = [
  { name: "Design", icon: DesignIcon },
  { name: "Development", icon: DevelopmentIcon },
  { name: "IT & Software", icon: ComputerIcon },
  { name: "Business", icon: BusinessIcon },
  { name: "Marketing", icon: MarketingIcon },
  { name: "Photography", icon: PhotographyIcon },
];

export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
] as const;

export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
] as const;

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: learner2,
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: testimonialJames,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: testimonialAlex,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/#categories" },
      { label: "Business", href: "/#categories" },
      { label: "IT", href: "/#categories" },
      { label: "Design", href: "/#categories" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: "/#categories" },
      { label: "Marketing", href: "/#categories" },
      { label: "Photography", href: "/#categories" },
      { label: "Finance", href: "/#categories" },
      { label: "Sport", href: "/#categories" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/register" },
      { label: "Affiliate Program", href: "/#creators" },
      { label: "Contact" },
      { label: "Help" },
      { label: "About", href: "/#about" },
    ],
  },
];

export const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"] as const;
