import {
  BarChart3,
  BookText,
  CalendarCheck2,
  Handshake,
  Network,
} from "lucide-react";

import user1 from "../../src/assets/dp.jpeg";
import user2 from "../../src/assets/dp.jpeg";
import user3 from "../../src/assets/dp.jpeg";
import user4 from "../../src/assets/dp.jpeg";
import user5 from "../../src/assets/dp.jpeg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Community", href: "#testimonial" },
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

export const testimonials = [
  {
    user: "Kamal Perera",
    job: "Researcher",
    image: user1,
    organization: "University of Colombo",
    text: "As a researcher at the University of Colombo, I've been using ConfoLink's conference management software for our academic events. It has significantly streamlined our processes and enhanced collaboration among participants. A valuable tool for any research institution!"
  },
  {
    user: "Nimal Silva",
    job: "Researcher",
    image: user2,
    organization: "University of Moratuwa",
    text: "I'm a researcher at the University of Moratuwa, and ConfoLink's conference management software has been invaluable for organizing our research conferences. It's user-friendly, efficient, and has enhanced our conference experience. Highly recommended for academic institutions!"
  },
  {
    user: "John Smith",
    job: "Researcher",
    image: user3,
    organization: "University of Oxford",
    text: "The conference management software provided by ConfoLink has been instrumental in streamlining our research events. It offers seamless communication, efficient agenda management, and invaluable attendee engagement features. Highly recommended!"
  },
  {
    user: "Emma Johnson",
    job: "Speaker",
    image: user4,
    organization: "Harvard University",
    text: "As a speaker at several conferences, I've had the pleasure of using ConfoLink's conference management software. It's been a great tool for managing my presentations and connecting with attendees. It's intuitive and user-friendly!"
  },
  {
    user: "Sophia Müller",
    job: "Event Planner",
    image: user5,
    organization: "Stanford University",
    text: "ConfoLink's conference management software has been a lifesaver for our event planning team. It's intuitive, feature-rich, and offers excellent support. Our clients love the seamless registration process and interactive features. It's made our job much easier!"
  },
];

export const resourecesLinks = [
  {href: "#hero", text : "Get Started"},
  {href: "#", text : "Community Forums"},
  {href: "#", text : "API References"},
];

export const platformLinks = [
  {href: "#", text : "Documentation"},
  {href: "#", text : "Platform Status"},
  {href: "#", text : "Release Notes"},
  {href: "#", text : "Developer Tools"}
];

export const communityLinks = [
  {href: "#", text : "Blog"},
  {href: "#", text : "Events"},
  {href: "#", text : "Success Stories"},
  {href: "#", text : "Contribute"}
];
