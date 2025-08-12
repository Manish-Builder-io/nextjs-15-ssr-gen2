"use client";
import type { RegisteredComponent } from "@builder.io/sdk-react";
import Counter from "./components/Counter/Counter";
import Hero from "./components/Hero/Hero";
import CTA from "./components/CTA/CTA";
import Card from "./components/Card/Card";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Counter,
    name: "Counter",
    models:["page"],
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  },
  {
    component: Hero,
    name: "Hero",
    models: ["homepage"],
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Welcome to Our Platform",
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Discover amazing features and possibilities",
      },
      {
        name: "backgroundImage",
        type: "string",
      },
      {
        name: "ctaText",
        type: "string",
        defaultValue: "Get Started",
      },
      {
        name: "ctaLink",
        type: "string",
        defaultValue: "#",
      },
    ],
  },
  {
    component: CTA,
    name: "CTA",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Ready to get started?",
      },
      {
        name: "description",
        type: "string",
        defaultValue: "Join thousands of users who trust our platform",
      },
      {
        name: "buttonText",
        type: "string",
        defaultValue: "Sign Up Now",
      },
      {
        name: "buttonLink",
        type: "string",
        defaultValue: "#",
      },
      {
        name: "variant",
        type: "enum",
        enum: ["primary", "secondary", "outline"],
        defaultValue: "primary",
      },
      {
        name: "alignment",
        type: "enum",
        enum: ["left", "center", "right"],
        defaultValue: "center",
      },
    ],
  },
  {
    component: Card,
    name: "Card",
    models: ["promobar"],
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Card Title",
      },
      {
        name: "description",
        type: "string",
        defaultValue: "This is a sample card description that provides more details about the card content.",
      },
      {
        name: "image",
        type: "string",
      },
      {
        name: "imageAlt",
        type: "string",
        defaultValue: "Card image",
      },
      {
        name: "buttonText",
        type: "string",
      },
      {
        name: "buttonLink",
        type: "string",
        defaultValue: "#",
      },
      {
        name: "variant",
        type: "enum",
        enum: ["default", "elevated", "outlined"],
        defaultValue: "default",
      },
    ],
  },
];
