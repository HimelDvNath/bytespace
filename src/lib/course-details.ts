import type { CourseDetail, CourseReview } from "@/types";

import peek1 from "@/assets/images/sneak-peek/peek-1.webp";
import peek2 from "@/assets/images/sneak-peek/peek-2.webp";
import peek3 from "@/assets/images/sneak-peek/peek-3.webp";
import peek4 from "@/assets/images/sneak-peek/peek-4.webp";
import reviewerAlbert from "@/assets/images/avatars/reviewer-albert.webp";
import reviewerPurepearl from "@/assets/images/avatars/reviewer-purepearl.webp";
import learner1 from "@/assets/images/avatars/learner-1.webp";
import learner3 from "@/assets/images/avatars/learner-3.webp";
import student1 from "@/assets/images/avatars/student-1.webp";
import student4 from "@/assets/images/avatars/student-4.webp";
import testimonialAlex from "@/assets/images/avatars/testimonial-alex.webp";
import testimonialJames from "@/assets/images/avatars/testimonial-james.webp";

const reviewer = {
  purepearl: { name: "PurePearl Studio", role: "UI/UX Designer", avatar: reviewerPurepearl },
  albert: { name: "Albert Flores", role: "UI/UX Designer", avatar: reviewerAlbert },
  cody: { name: "Cody Fisher", role: "UI/UX Designer", avatar: testimonialJames },
  brooklyn: { name: "Brooklyn Simmons", role: "UI/UX Designer", avatar: student1 },
  jenny: { name: "Jenny Wilson", role: "Product Manager", avatar: learner1 },
  marcus: { name: "Marcus Lee", role: "Data Analyst", avatar: testimonialAlex },
  leslie: { name: "Leslie Alexander", role: "Marketing Lead", avatar: learner3 },
  devon: { name: "Devon Lane", role: "Founder", avatar: student4 },
} as const;

type ReviewerKey = keyof typeof reviewer;

function review(
  courseId: string,
  key: ReviewerKey,
  rating: CourseReview["rating"],
  text: string,
  postedAgo = "a year ago",
): CourseReview {
  return { id: `${courseId}-${key}`, ...reviewer[key], rating, text, postedAgo };
}

export const courseDetails: CourseDetail[] = [
  {
    courseId: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    tagline: "Unlock the Power of Digital Creation with Expert Guidance",
    level: "Intermediate",
    rating: 4.8,
    reviewCount: 172,
    students: 199,
    totalLessons: 112,
    totalHours: 24,
    description: [
      'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    sneakPeek: [peek1, peek2, peek3, peek4],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
    modules: [
      {
        title: "Introduction to Digital Assets",
        minutes: 12,
        summary:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: "Design Principles for Impact",
        minutes: 21,
        summary:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: "Advanced Techniques in Digital Creation",
        minutes: 16,
        summary:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: "Interactive Media and Engagement",
        minutes: 18,
        summary:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: "Project Showcase and Critique",
        minutes: 24,
        summary:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: "Optimizing Digital Assets for Various Platforms",
        minutes: 20,
        summary:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    ratingBreakdown: { 5: 720, 4: 120, 3: 21, 2: 12, 1: 16 },
    reviews: [
      review(
        "build-digital-asset",
        "purepearl",
        5,
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
      ),
      review(
        "build-digital-asset",
        "albert",
        5,
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      ),
      review(
        "build-digital-asset",
        "cody",
        5,
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      ),
      review(
        "build-digital-asset",
        "brooklyn",
        5,
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      ),
    ],
  },
  {
    courseId: "learn-figma-from-basic",
    title: "Learn Figma from Basic: Design Your First Interface",
    tagline: "Go from a blank canvas to a polished, shareable prototype",
    level: "Beginner",
    rating: 4.5,
    reviewCount: 96,
    students: 248,
    totalLessons: 17,
    totalHours: 2,
    description: [
      "Start designing with confidence in Figma, the collaborative tool used by product teams around the world. This beginner-friendly course walks you through the interface, core tools and the habits that keep your files clean and easy to hand off.",
      "You will build a complete mobile screen set step by step: from frames, shapes and text to components, variants and Auto Layout. By the end, you will link your screens into an interactive prototype and share it for feedback.",
    ],
    sneakPeek: [peek1, peek3, peek4, peek2],
    keyPoints: [
      "Navigating the Figma Workspace",
      "Frames, Shapes and Typography",
      "Components and Variants",
      "Responsive Layouts with Auto Layout",
      "Interactive Prototyping",
      "Sharing Files and Developer Handoff",
    ],
    modules: [
      {
        title: "Getting Started with Figma",
        minutes: 9,
        summary:
          "Set up your workspace and learn the canvas, layers panel and toolbar with lessons like 'Your First Frame' and 'Working with Pages.'",
      },
      {
        title: "Shapes, Text and Color",
        minutes: 14,
        summary:
          "Combine shapes, typography and color styles to create consistent screens, and save them as reusable styles for your whole team.",
      },
      {
        title: "Components and Auto Layout",
        minutes: 18,
        summary:
          "Turn repeated elements into components, build variants for every state and use Auto Layout so your designs adapt to any content.",
      },
      {
        title: "Prototyping Your Flow",
        minutes: 12,
        summary:
          "Connect screens with interactions and smart animate transitions to present a realistic, clickable version of your app.",
      },
      {
        title: "Handoff and Collaboration",
        minutes: 8,
        summary:
          "Invite collaborators, gather comments and prepare specs so developers can inspect measurements and export assets with ease.",
      },
    ],
    ratingBreakdown: { 5: 62, 4: 21, 3: 8, 2: 3, 1: 2 },
    reviews: [
      review(
        "learn-figma-from-basic",
        "jenny",
        5,
        "I had never opened Figma before this course. The pace is perfect and the final prototype project made everything click.",
      ),
      review(
        "learn-figma-from-basic",
        "albert",
        4,
        "Clear explanations of components and Auto Layout. I would love a few more advanced exercises, but it is an excellent starting point.",
      ),
      review(
        "learn-figma-from-basic",
        "brooklyn",
        5,
        "The handoff lessons were exactly what my team needed. Our developers now find everything they need in our files.",
      ),
    ],
  },
  {
    courseId: "the-power-of-big-data",
    title: "The Power of Big Data: From Raw Data to Decisions",
    tagline: "Turn large datasets into insights your team can act on",
    level: "Beginner",
    rating: 4.5,
    reviewCount: 138,
    students: 312,
    totalLessons: 17,
    totalHours: 2,
    description: [
      "Data shapes every modern business decision. This course demystifies big data, showing you how information is collected, stored and transformed into insights without requiring an engineering background.",
      "Through practical examples you will learn to ask the right questions, read dashboards critically and communicate findings with clear visualizations that persuade stakeholders.",
    ],
    sneakPeek: [],
    keyPoints: [
      "Understanding the Big Data Landscape",
      "Data Collection and Storage Basics",
      "Cleaning and Preparing Datasets",
      "Reading Dashboards with Confidence",
      "Data Visualization Best Practices",
      "Presenting Insights to Stakeholders",
    ],
    modules: [
      {
        title: "What Makes Data Big",
        minutes: 10,
        summary:
          "Explore volume, velocity and variety, and see how companies turn massive datasets into a competitive advantage.",
      },
      {
        title: "Collecting and Storing Data",
        minutes: 15,
        summary:
          "Compare databases, data warehouses and data lakes, and learn which one fits each kind of question.",
      },
      {
        title: "Preparing Data for Analysis",
        minutes: 17,
        summary:
          "Spot missing values, duplicates and outliers, and apply simple techniques to make your data trustworthy.",
      },
      {
        title: "Visualizing Insights",
        minutes: 14,
        summary:
          "Choose the right chart for every message and design dashboards that highlight what really matters.",
      },
      {
        title: "Data-Driven Decisions",
        minutes: 12,
        summary:
          "Frame recommendations, communicate uncertainty and tell a compelling story with your numbers.",
      },
    ],
    ratingBreakdown: { 5: 88, 4: 32, 3: 11, 2: 4, 1: 3 },
    reviews: [
      review(
        "the-power-of-big-data",
        "marcus",
        5,
        "Finally a data course that explains the why before the how. The visualization module alone was worth it.",
      ),
      review(
        "the-power-of-big-data",
        "jenny",
        4,
        "Great overview for non-technical managers. I now feel comfortable challenging the dashboards my team shares.",
      ),
      review(
        "the-power-of-big-data",
        "cody",
        5,
        "Practical, well structured and full of real examples. I use the storytelling framework in every presentation now.",
      ),
    ],
  },
  {
    courseId: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    tagline: "Get more done while protecting your energy and wellbeing",
    level: "Beginner",
    rating: 4.5,
    reviewCount: 84,
    students: 176,
    totalLessons: 17,
    totalHours: 2,
    description: [
      "Productivity is not about doing more at any cost. This course helps you design a sustainable routine that balances focused work with the rest and recovery you need to perform at your best.",
      "You will build practical systems for planning your week, protecting deep-work time and recognising early signs of burnout, so your progress lasts.",
    ],
    sneakPeek: [],
    keyPoints: [
      "Designing a Sustainable Routine",
      "Prioritizing What Matters",
      "Protecting Deep-Work Time",
      "Healthy Habits for Focus",
      "Recognizing and Preventing Burnout",
      "Reviewing and Improving Your System",
    ],
    modules: [
      {
        title: "Redefining Productivity",
        minutes: 11,
        summary: "Shift from busy to effective by aligning your daily tasks with your long-term goals.",
      },
      {
        title: "Planning Your Week",
        minutes: 14,
        summary:
          "Use time blocking and weekly reviews to create a realistic plan that leaves room for the unexpected.",
      },
      {
        title: "Focus and Deep Work",
        minutes: 16,
        summary:
          "Reduce distractions, batch shallow tasks and structure your environment for long periods of concentration.",
      },
      {
        title: "Rest, Recovery and Energy",
        minutes: 13,
        summary:
          "Understand how sleep, movement and breaks fuel your output, and build habits that restore your energy.",
      },
      {
        title: "Staying Consistent",
        minutes: 10,
        summary: "Track progress, celebrate small wins and adjust your system as your life changes.",
      },
    ],
    ratingBreakdown: { 5: 51, 4: 22, 3: 7, 2: 2, 1: 2 },
    reviews: [
      review(
        "balancing-productivity-and-self-care",
        "leslie",
        5,
        "The weekly planning ritual changed how I work. I get more done and I actually take proper breaks now.",
      ),
      review(
        "balancing-productivity-and-self-care",
        "devon",
        4,
        "A thoughtful course that goes beyond productivity hacks. The burnout lessons were eye-opening.",
      ),
      review(
        "balancing-productivity-and-self-care",
        "brooklyn",
        5,
        "Simple, practical and kind. I recommended it to my whole team.",
      ),
    ],
  },
  {
    courseId: "mastering-money-management",
    title: "Mastering Money Management for Creators",
    tagline: "Budget, save and grow your income with confidence",
    level: "Beginner",
    rating: 4.5,
    reviewCount: 112,
    students: 204,
    totalLessons: 17,
    totalHours: 2,
    description: [
      "Freelancers and creators often have irregular income, which makes managing money feel stressful. This course gives you a clear, practical framework to take control of your finances.",
      "Learn to build a flexible budget, create an emergency fund, price your work sustainably and plan for taxes so you can focus on the work you love.",
    ],
    sneakPeek: [],
    keyPoints: [
      "Budgeting with an Irregular Income",
      "Building an Emergency Fund",
      "Pricing Your Work Sustainably",
      "Planning for Taxes",
      "Saving and Investing Basics",
      "Setting Long-Term Financial Goals",
    ],
    modules: [
      {
        title: "Your Money Mindset",
        minutes: 9,
        summary: "Identify your spending patterns and set clear financial goals that motivate you.",
      },
      {
        title: "Budgeting for Variable Income",
        minutes: 16,
        summary:
          "Create a flexible budget that works in both busy and quiet months, using simple percentage-based rules.",
      },
      {
        title: "Pricing and Getting Paid",
        minutes: 15,
        summary: "Calculate your rates, write clear payment terms and handle late invoices professionally.",
      },
      {
        title: "Taxes and Savings",
        minutes: 14,
        summary:
          "Set money aside for taxes automatically and build an emergency fund that gives you peace of mind.",
      },
      {
        title: "Growing Your Wealth",
        minutes: 12,
        summary: "Understand the basics of investing and plan the next steps toward your long-term goals.",
      },
    ],
    ratingBreakdown: { 5: 70, 4: 28, 3: 8, 2: 3, 1: 3 },
    reviews: [
      review(
        "mastering-money-management",
        "devon",
        5,
        "As a freelancer this was exactly what I needed. My tax savings are finally automated.",
      ),
      review(
        "mastering-money-management",
        "leslie",
        4,
        "Clear and encouraging. The pricing module helped me raise my rates without feeling guilty.",
      ),
      review(
        "mastering-money-management",
        "marcus",
        5,
        "Practical templates and no jargon. I finally have a budget I can stick to.",
      ),
    ],
  },
  {
    courseId: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    tagline: "Validate, launch and grow your first product",
    level: "Beginner",
    rating: 4.5,
    reviewCount: 127,
    students: 265,
    totalLessons: 17,
    totalHours: 2,
    description: [
      "Every successful startup begins with a validated idea. This course guides you through the early stages of building a company, from spotting real problems to launching your first version.",
      "You will learn lean validation techniques, craft a compelling pitch and design a go-to-market plan that attracts your first loyal customers.",
    ],
    sneakPeek: [],
    keyPoints: [
      "Finding Problems Worth Solving",
      "Validating Ideas Quickly",
      "Building a Minimum Viable Product",
      "Crafting Your Pitch",
      "Go-to-Market Strategy",
      "Measuring Early Traction",
    ],
    modules: [
      {
        title: "Discovering Opportunities",
        minutes: 12,
        summary: "Learn to spot real customer problems and evaluate which ideas are worth pursuing.",
      },
      {
        title: "Lean Validation",
        minutes: 17,
        summary: "Run interviews, landing-page tests and quick experiments to validate demand before you build.",
      },
      {
        title: "Building Your MVP",
        minutes: 15,
        summary: "Define the smallest product that delivers value and plan a focused first release.",
      },
      {
        title: "Pitching and Funding",
        minutes: 14,
        summary: "Tell your startup's story clearly and understand the funding options available to founders.",
      },
      {
        title: "Launch and Growth",
        minutes: 13,
        summary: "Plan your launch, choose your first channels and track the metrics that show real traction.",
      },
    ],
    ratingBreakdown: { 5: 81, 4: 29, 3: 10, 2: 4, 1: 3 },
    reviews: [
      review(
        "from-idea-to-startup-success",
        "devon",
        5,
        "The validation exercises saved me months of building the wrong thing. Highly practical.",
      ),
      review(
        "from-idea-to-startup-success",
        "jenny",
        4,
        "Great structure from idea to launch. The pitch module helped me land my first meetings with investors.",
      ),
      review(
        "from-idea-to-startup-success",
        "albert",
        5,
        "Inspiring and actionable. I launched my MVP two weeks after finishing the course.",
      ),
    ],
  },
];

export function getCourseDetail(courseId: string): CourseDetail | undefined {
  return courseDetails.find((detail) => detail.courseId === courseId);
}

export function averageRating(breakdown: CourseDetail["ratingBreakdown"]): number {
  const entries = Object.entries(breakdown).map(([stars, count]) => [Number(stars), count] as const);
  const total = entries.reduce((sum, [, count]) => sum + count, 0);
  const weighted = entries.reduce((sum, [stars, count]) => sum + stars * count, 0);
  return total ? Math.round((weighted / total) * 10) / 10 : 0;
}
