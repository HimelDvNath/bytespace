import coneWhite from "@/assets/images/ornaments/cone-white.webp";
import cylinderLime from "@/assets/images/ornaments/cylinder-lime.webp";
import cylinderWhite from "@/assets/images/ornaments/cylinder-white.webp";
import pyramidLime from "@/assets/images/ornaments/pyramid-lime.webp";
import pyramidWhite from "@/assets/images/ornaments/pyramid-white.webp";
import spiralLime from "@/assets/images/ornaments/spiral-lime.webp";
import spiralWhite from "@/assets/images/ornaments/spiral-white.webp";
import springLime from "@/assets/images/ornaments/spring-lime.webp";
import springWhite from "@/assets/images/ornaments/spring-white.webp";
import torusLime from "@/assets/images/ornaments/torus-lime.webp";
import torusWhite from "@/assets/images/ornaments/torus-white.webp";

export const ornaments = {
  coneWhite,
  cylinderLime,
  cylinderWhite,
  pyramidLime,
  pyramidWhite,
  spiralLime,
  spiralWhite,
  springLime,
  springWhite,
  torusLime,
  torusWhite,
} as const;

export type OrnamentName = keyof typeof ornaments;
