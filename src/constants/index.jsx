import {
  BarChart3,
  BookText,
  CalendarCheck2,
  Handshake,
  Network,
} from "lucide-react";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Community", href: "#" },
];

export const features = [
  {
    icon: <Network />,
    text: "Networking with People",
    description:
      "Connect with attendees, speakers, and organizers to foster meaningful collaborations.",
  },
  {
    icon: <BookText />,
    text: "Registration Management",
    description:
      "Effortlessly manage conference registrations, from ticket sales to attendee information.",
  },
  {
    icon: <CalendarCheck2 />,
    text: "Session Scheduling",
    description:
      "Plan and organize conference sessions with ease, ensuring a smooth agenda for all participants.",
  },
  {
    icon: <Handshake />,
    text: "Seamless Communication",
    description:
      "Facilitate real-time communication among attendees, speakers, and organizers for enhanced engagement.",
  },
  {
    icon: <BarChart3 />,
    text: "Real-time Analytics",
    description:
      "Gain insights into conference metrics and attendee behavior in real-time, allowing for informed decision-making.",
  },
];

export const checkList = [
  {
    text: "Manage Agendas and Programs",
    description:
      "Offer tools to effectively manage conference agendas and programs, allowing organizers to input session details easily.",
  },
  {
    text: "Enhance Attendee Engagement",
    description:
      "Implement interactive features such as live polling, audience Q&A, and session feedback to enhance attendee experience.",
  },
  {
    text: "Speakers Interaction and Audience Q&A",
    description:
      "Enable speakers to interact with the audience seamlessly and manage Q&A sessions efficiently.",
  },
  {
    text: "Networking via Simple Scanning",
    description:
      "Allow attendees to network effortlessly by scanning badges or QR codes, fostering connections and collaborations.",
  },
  {
    text: "Collect and Analyze Data",
    description:
      "Collect data to gain insights into attendee preferences, session popularity, and engagement levels for continuous improvement.",
  },
];

export const VideoId = "rIr6mH3FDKk";

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic features included",
      "Limited support",
      "Up to 50 attendees",
    ],
  },
  {
    title: "Standard",
    price: "$99",
    features: [
      "All basic features included",
      "Priority support",
      "Up to 300 attendees",
      "Custom branding",
    ],
  },
  {
    title: "Pro",
    price: "$199",
    features: [
      "All standard features included",
      "Dedicated account manager",
      "Unlimited attendees",
      "Advanced analytics",
      "API access",
    ],
  },
];
