import { BarChart3, BookText, CalendarCheck2, Handshake, Network } from "lucide-react";

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
    icon: <BookText/>,
    text: "Registration Management",
    description: "Effortlessly manage conference registrations, from ticket sales to attendee information."
  },
  {
    icon: <CalendarCheck2/>,
    text: "Session Scheduling",
    description: "Plan and organize conference sessions with ease, ensuring a smooth agenda for all participants."
  },
  {
    icon: <Handshake/>,
    text: "Seamless Communication",
    description: "Facilitate real-time communication among attendees, speakers, and organizers for enhanced engagement."
  },
  {
    icon: <BarChart3/>,
    text: "Real-time Analytics",
    description: "Gain insights into conference metrics and attendee behavior in real-time, allowing for informed decision-making."
  }
];
