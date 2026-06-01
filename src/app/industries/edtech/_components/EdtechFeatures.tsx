import {
  Brain,
  ClipboardCheck,
  Presentation,
  BarChart3,
  Plug,
  PencilRuler,
  Award,
  MessagesSquare,
  FileCheck,
  ScrollText,
  Sparkles,
  Download,
  Accessibility,
  Users,
  ShieldCheck,
  MonitorSmartphone,
  Workflow,
  Repeat,
} from "lucide-react";
import { IndustryFeatures, type Feature } from "../../_components/IndustryFeatures";

const EYEBROW = "Designing edtech features that matter";
const TITLE =
  "Educational technology design that balances usability and engagement without overcomplicating the product";
const DESCRIPTION =
  "Or diluting the ROI of your EdTech solutions. Every feature we design serves a purpose: focused UX, zero clutter, and aligned with how people actually learn, teach, and manage education technology.";

const FEATURES: Feature[] = [
  {
    title: "Adaptive learning modules",
    body: "Personalized content paths that adjust to each learner's pace and performance.",
    Icon: Brain,
  },
  {
    title: "Interactive assessments & quizzes",
    body: "Auto-graded quizzes, timed exams, and drag-and-drop logic for active learning.",
    Icon: ClipboardCheck,
  },
  {
    title: "Real-time collaboration & virtual classrooms",
    body: "Live whiteboards, breakout rooms, in-session polls, chat, and screen sharing.",
    Icon: Presentation,
  },
  {
    title: "Learning analytics & reporting",
    body: "Dashboards showing completion rates, engagement heatmaps, and skill-gap insights.",
    Icon: BarChart3,
  },
  {
    title: "SCORM/xAPI & LMS integration",
    body: "Standard-compliant learning technology solutions that integrate with any LMS or SIS.",
    Icon: Plug,
  },
  {
    title: "Content authoring & management",
    body: "Template-based WYSIWYG tools with version control for scalable content delivery.",
    Icon: PencilRuler,
  },
  {
    title: "Gamification & badge systems",
    body: "Progress loops, points, and badges that increase motivation and retention rates.",
    Icon: Award,
  },
  {
    title: "Discussion forums & peer interaction",
    body: "Peer-to-peer feedback systems, discussion boards, and instructor-moderated forums.",
    Icon: MessagesSquare,
  },
  {
    title: "Automated grading & feedback",
    body: "Rule-based scoring and structured feedback tools for scalable assessment workflows.",
    Icon: FileCheck,
  },
  {
    title: "Certification & credential issuance",
    body: "Auto-issued certificates and digital credentials to validate course completion and skills.",
    Icon: ScrollText,
  },
  {
    title: "AI-driven recommendations",
    body: "Personalized content recommendations based on user behaviour and learning analytics.",
    Icon: Sparkles,
  },
  {
    title: "Offline learning & content caching",
    body: "Downloadable lessons with offline tracking for flexible mobile learning experiences.",
    Icon: Download,
  },
  {
    title: "Accessibility & multilingual support",
    body: "WCAG-compliant UX of EdTech with localization and screen reader compatibility.",
    Icon: Accessibility,
  },
  {
    title: "Parent & teacher portals",
    body: "Dashboards showing grades, attendance, and communication tools by role and access level.",
    Icon: Users,
  },
  {
    title: "Secure exam proctoring",
    body: "Webcam monitoring and lockdown browser features for exam security and compliance.",
    Icon: ShieldCheck,
  },
  {
    title: "Mobile & cross-platform sync",
    body: "Consistent learning experience across mobile apps, tablets, and desktop platforms.",
    Icon: MonitorSmartphone,
  },
  {
    title: "Teacher workflow automation",
    body: "Automated grading, notifications, and scheduling tools to reduce manual effort.",
    Icon: Workflow,
  },
  {
    title: "Microlearning & spaced repetition modules",
    body: "Short modules delivered over time to reinforce memory and long-term learning.",
    Icon: Repeat,
  },
];

export function EdtechFeatures() {
  return (
    <IndustryFeatures
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      features={FEATURES}
    />
  );
}
