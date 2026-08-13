/**
 * All placeholder content lives here — swap values when the foundation's
 * real content arrives. Anything in [brackets] is a slot to fill.
 */

export const site = {
  name: "Antariksh Foundation",
  nameNote: "[placeholder name — replace with the foundation's real name]",
  tagline: "The ceiling is not where they told you it is.",
  mission:
    "[Mission line placeholder] Igniting India's next generation of explorers — one student, one school, one launch at a time.",
};

export type Mission = {
  slug: string;
  name: string;
  code: string;
  accent: string;
  objective: string;
  audience: string;
  duration: string;
  cost: string;
  status: "Active" | "Enrolling" | "In design";
  description: string;
  plan: string[];
  outcomes: string[];
};

export const missions: Mission[] = [
  {
    slug: "prithvi-labs",
    name: "Mission Prithvi",
    code: "MP-01",
    accent: "#f58a2e",
    objective: "A working space-science lab in every partner school.",
    audience: "Government & low-income schools, classes 6–10",
    duration: "Full academic year",
    cost: "Free for partner schools",
    status: "Active",
    description:
      "[Program description placeholder] Mission Prithvi installs hands-on space-science labs — telescopes, model rocketry, satellite kits — in schools that have never had one, with teacher training to keep them alive.",
    plan: [
      "Partner school selected and lab installed in one classroom",
      "Two teachers trained as Mission Specialists",
      "Monthly guided experiments synced to the school syllabus",
      "Year-end launch day: students fly the model rockets they built",
    ],
    outcomes: [
      "[X] labs installed across [X] states",
      "[X] teachers certified as Mission Specialists",
      "[X]% of lab students choosing science streams",
    ],
  },
  {
    slug: "antariksh-scholars",
    name: "Antariksh Scholars",
    code: "AS-02",
    accent: "#46a8a0",
    objective: "Full scholarships that carry gifted students into aerospace careers.",
    audience: "Class 11–12 and undergraduate students",
    duration: "Renewed annually through graduation",
    cost: "Fully funded",
    status: "Enrolling",
    description:
      "[Program description placeholder] The flagship scholarship: tuition, mentorship from working aerospace engineers and astronauts, and a summer residency — for students whose talent outruns their circumstances.",
    plan: [
      "Nationwide application window each spring",
      "Selection camp: problem-solving, not rote scores",
      "Scholarship + a personal mentor from the space industry",
      "Annual Scholars' Summit with the founder",
    ],
    outcomes: [
      "[X] scholars funded to date",
      "[X] now in aerospace programs or industry",
      "Alumni mentor the next cohort — the flywheel",
    ],
  },
  {
    slug: "udaan-camps",
    name: "Mission Udaan",
    code: "MU-03",
    accent: "#c9a26a",
    objective: "An astronaut in every district — visits, camps, and watch parties.",
    audience: "Students 8–18, everywhere",
    duration: "Rolling, year-round",
    cost: "Free public events",
    status: "In design",
    description:
      "[Program description placeholder] Mission Udaan takes the founder and guest astronauts on the road: school visits, district space camps, and live launch watch-parties that turn a Tuesday into the day a child picks their future.",
    plan: [
      "District tour calendar published each term",
      "One-day space camps with hands-on stations",
      "Live launch watch-parties with mission commentary",
      "Postcards to Orbit collected at every stop",
    ],
    outcomes: [
      "[X] districts visited",
      "[X] students at live events",
      "[X] postcards flown to space",
    ],
  },
];

export const stats = [
  { label: "Students reached", value: 48000, suffix: "+" },
  { label: "Partner schools", value: 320, suffix: "+" },
  { label: "Scholars funded", value: 210, suffix: "" },
  { label: "States & UTs", value: 14, suffix: "" },
];

export const partners = [
  "[Partner logo]",
  "[ISRO-affiliate]",
  "[University]",
  "[CSR Partner]",
  "[Planetarium]",
  "[STEM NGO]",
  "[Launch partner]",
  "[Media partner]",
];

export const audiences = [
  {
    key: "students",
    title: "Students",
    line: "Find your mission, apply for a scholarship, send a postcard to orbit.",
    action: "Find your mission",
  },
  {
    key: "educators",
    title: "Educators",
    line: "Bring a space lab to your school and train as a Mission Specialist.",
    action: "Bring a mission to school",
  },
  {
    key: "volunteers",
    title: "Volunteers",
    line: "Mentor a scholar, run a watch-party, lend your skills to the crew.",
    action: "Join the crew",
  },
  {
    key: "partners",
    title: "Partners & CSR",
    line: "Sponsor a mission, co-brand a patch, fund the next constellation.",
    action: "Partner with us",
  },
];

export const testimonials = [
  {
    quote:
      "[Testimonial placeholder] The lab changed how my students see science — they stopped memorising and started building.",
    name: "[Teacher name]",
    role: "Mission Specialist, [School], [State]",
  },
  {
    quote:
      "[Testimonial placeholder] I had never met an engineer. Now my mentor calls me every fortnight and I'm studying aerospace.",
    name: "[Scholar name]",
    role: "Antariksh Scholar, Cohort [X]",
  },
  {
    quote:
      "[Testimonial placeholder] Partnering on Mission Prithvi is the most visible, measurable CSR programme in our portfolio.",
    name: "[Partner name]",
    role: "CSR Head, [Company]",
  },
];

export const faqs = [
  {
    q: "Who can apply to the programs?",
    a: "[Placeholder] Each mission has its own crew profile — Mission Prithvi partners with schools, Antariksh Scholars selects individual students, and Mission Udaan events are open to everyone. See each mission page for details.",
  },
  {
    q: "Are donations tax-deductible in India?",
    a: "[Placeholder — confirm 80G status] Donations are eligible for deduction under Section 80G. You'll receive a receipt by email immediately after donating.",
  },
  {
    q: "Can I volunteer without a science background?",
    a: "[Placeholder] Yes. Missions need storytellers, organisers, designers, and drivers as much as engineers. Every crew role counts.",
  },
  {
    q: "How is the foundation governed?",
    a: "[Placeholder — registration details] The foundation is a registered [Trust / Section 8 company]; audited financials and annual reports are published in the Mission Log.",
  },
];

export const timeline = [
  { year: "[Year]", event: "[Founder] selected for spaceflight — the story begins" },
  { year: "[Year]", event: "Launch. [Mission name] reaches orbit" },
  { year: "[Year]", event: "The foundation is registered" },
  { year: "[Year]", event: "First 10 Prithvi labs installed" },
  { year: "[Year]", event: "First Antariksh Scholars cohort selected" },
  { year: "Today", event: "The constellation keeps growing" },
];
