import React from "react";

export interface StudioHour {
  days: string;
  time: string;
}

export interface StudioInfo {
  name: string;
  shortName: string;
  tagline: string;
  badge: string;
  city: string;
  neighborhood: string;
  address: string;
  fullAddress: string;
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  instagram: string;
  instagramUrl: string;
  googleMapsUrl: string;
  googleRating: number;
  googleReviewsCount: string;
  hours: StudioHour[];
  quickHours: string;
  paymentMethods: string[];
  amenities: string[];
}

export interface ServiceCategory {
  id: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  duration: string;
  priceEstimate: string;
  popular: boolean;
  tag?: string;
  description: string;
  benefits: string[];
  recommendedFor: string;
}

export interface CareInstruction {
  step: string;
  title: string;
  desc: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  tags: string[];
  featured: boolean;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  verified: boolean;
  service: string;
  comment: string;
}

export interface StudioStat {
  value: string;
  label: string;
  sub: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export type ButtonVariant = "dark" | "light" | "gold" | "outline" | "link";
export type ButtonSize = "sm" | "md" | "lg" | "link";

export interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "subtle" | "dark" | "gold" | "olive";
  className?: string;
}

export interface SectionHeadingProps {
  number?: string;
  label?: string;
  title: string;
  italicWord?: string;
  description?: string;
  align?: "left" | "center" | "split";
  theme?: "light" | "dark";
  className?: string;
  action?: React.ReactNode;
}
