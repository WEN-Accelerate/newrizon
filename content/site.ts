/**
 * Earthizen Foundation site content.
 * Everything still marked [placeholder] awaits confirmation from the foundation.
 */

export const site = {
  name: "Earthizen Foundation",
  legal: "Section 8 Company · India-First, Global Vision · 2026",
  tagline: "No Borders. One Earth. Infinite Futures.",
  mission:
    "Educating a generation of Earthizens to connect, collaborate, and build a shared planetary future.",
  vision:
    "Earthizens unite using technology, empathy, and purpose to build one borderless, thriving civilisation.",
  visionFull:
    "A world where every individual — regardless of nationality, religion, or origin — identifies as an Earthizen: a citizen of Earth who harnesses technology, empathy, and purpose to build a borderless, thriving civilisation, both on Earth and beyond.",
  missionFull:
    "To cultivate a generation of Earthizens by providing transformative education that connects classrooms to communities, harnesses technology for human progress, fosters cross-cultural understanding, and inspires a shared planetary identity rooted in the understanding that from space, there are no borders.",
  founder: "Group Captain Shubhanshu Shukla",
  founderQuote:
    "I was on a space mission. I looked down at Earth. I could not see any borders. Only one planet. Only one home.",
  heroQuote: "From space, there are no borders — only one beautiful, fragile Earth.",
  closingQuote:
    "When a child looks at the night sky and sees not borders but the vast shared expanse of space, the world becomes a little more borderless. One child at a time. One classroom at a time. One Earth.",
  footerLine:
    "Every impact story begins with one school, one classroom, one child who decides to think like a planetary citizen.",
};

export const values = [
  {
    name: "One Earth",
    body: "Planetary identity over national identity. We are citizens of Earth first, before we are citizens of any nation.",
  },
  {
    name: "Curiosity",
    body: "An unwavering commitment to scientific temperament, lifelong learning, and the courage to question.",
  },
  {
    name: "Equity",
    body: "Universal access to transformative education regardless of geography, income, or social background.",
  },
  {
    name: "Empathy",
    body: "Deep cross-cultural understanding and human respect as the bedrock of a borderless world.",
  },
  {
    name: "Impact",
    body: "Learning must change something in the real world. Education divorced from society is incomplete.",
  },
];

export type Programme = {
  slug: string;
  name: string;
  code: string;
  accent: string;
  vertical: string;
  objective: string;
  description: string;
  photo: string;
  photoAlt: string;
  initiatives: { name: string; body: string }[];
  story: { title: string; body: string; where: string };
};

export const programmes: Programme[] = [
  {
    slug: "orbit",
    name: "Orbit",
    code: "EF-01",
    accent: "#f58a2e",
    vertical: "Global Citizenship · Education & Cultural Exchange",
    objective: "Connecting classrooms across countries to build true planetary citizens.",
    description:
      "Orbit connects students across countries for joint academic work, collaborative storytelling, and global summits — building the empathy and perspective of true planetary citizens.",
    photo: "/photos/school-visit.jpg",
    photoAlt: "Group Captain Shubhanshu Shukla with students at a school outreach visit",
    initiatives: [
      {
        name: "Borderless Classroom Network",
        body: "Virtual and in-person school exchange connecting schools across 30 countries for joint academic projects.",
      },
      {
        name: "Earthizen Curriculum",
        body: "A planetary-citizenship curriculum for ages 8–18, designed for adoption across school boards.",
      },
      {
        name: "Global Assembly for Schools",
        body: "A UN-style inter-school summit where students debate the questions nations struggle with.",
      },
      {
        name: "Stories Without Borders",
        body: "Multi-country collaborative storytelling — one story, many languages, many hands.",
      },
    ],
    story: {
      title: "Youth Space Resolution submitted to UNOOSA",
      body: "Sixteen schools from India, Kenya, Brazil, and Germany debated 'Should Space be Governed by a World Body?' Their co-authored Youth Space Resolution was formally submitted to the United Nations.",
      where: "Global Assembly · Virtual · 2024 pilot",
    },
  },
  {
    slug: "nexus",
    name: "Nexus",
    code: "EF-02",
    accent: "#46a8a0",
    vertical: "Technology & Innovation",
    objective: "Making every child technologically fluent.",
    description:
      "Nexus equips underserved youth with AI, coding, and maker skills — not as abstract learning, but as tools to solve real problems in their communities. Every bootcamp, hackathon, and makerspace is anchored in impact.",
    photo: "/photos/event-unveiling.jpg",
    photoAlt: "Group Captain Shubhanshu Shukla at a school technology event",
    initiatives: [
      {
        name: "Code the Future",
        body: "AI, coding, and data literacy bootcamps for underserved youth — six-week intensive programmes with certified learning pathways and mentorship.",
      },
      {
        name: "Maker Bharat",
        body: "Makerspaces where students build real hardware for real local problems — from water sensors to waste systems.",
      },
    ],
    story: {
      title: "180 students. One app. Three national awards.",
      body: "AI, coding, and data literacy bootcamps for underserved youth — six-week intensive programmes with certified learning pathways and mentorship.",
      where: "Code the Future · Dharavi, Mumbai · 2024",
    },
  },
  {
    slug: "bridge",
    name: "Bridge",
    code: "EF-03",
    accent: "#c9a26a",
    vertical: "Society–Classroom Connect",
    objective: "Every lesson must change something.",
    description:
      "Bridge turns classrooms toward their communities. Students take what they learn and apply it to civic life — budgets, water, waste, local governance — producing measurable local change.",
    photo: "/photos/community-walk.jpg",
    photoAlt: "Group Captain Shubhanshu Shukla walking through a village with community members",
    initiatives: [
      {
        name: "Community Lab",
        body: "Classroom-to-society impact projects — every school runs a lab that takes on one real local problem each term.",
      },
      {
        name: "Impact Portfolio",
        body: "Students replace traditional term-end exams with a 'Change Portfolio' — a documented project showing how one learned skill changed something real in their community.",
      },
    ],
    story: {
      title: "A ward meeting, a councillor, and Class 10.",
      body: "Students in Delhi identified significant underspending in their ward's school repair budget, compiled a documented case, and presented it at a ward committee meeting. The councillor committed to follow-up action.",
      where: "Civic Budget Watch · Delhi · 2024",
    },
  },
  {
    slug: "cosmos",
    name: "Cosmos",
    code: "EF-04",
    accent: "#3d7fd9",
    vertical: "Space & Future Sciences",
    objective: "The Overview Effect, brought back to Earth.",
    description:
      "Cosmos uses the wonder of space as a lens for planetary thinking. Real satellite imagery, ISRO connections, and speculative design studios help students experience the Overview Effect — and bring it back to Earth.",
    photo: "/photos/students-group.jpg",
    photoAlt: "Students and teachers with Group Captain Shubhanshu Shukla in a school courtyard",
    initiatives: [
      {
        name: "No Borders from Space",
        body: "An astronomy and earth-observation programme using real satellite imagery to help students see their planet as astronauts do — without borders, without division.",
      },
      {
        name: "Future Earth Explorers Clubs",
        body: "After-school space science and astrobiology clubs in 500 schools — student-led, with curriculum, competitions, and connections to space research institutions.",
      },
    ],
    story: {
      title: "A model Mars habitat. Judged by ISRO engineers.",
      body: "An after-school club at KV No. 1, Bengaluru built a model Mars habitat from locally sourced materials — winning a national competition judged by ISRO engineers.",
      where: "Future Earth Explorers · Bengaluru · 2024",
    },
  },
];

export const targets = [
  { label: "Schools", value: 1000, suffix: "", body: "Earthizen Curriculum adopted across India by Year 3, expanding to 10 countries by Year 5." },
  { label: "Youth reached", value: 500000, suffix: "", body: "Technology literacy — coding, AI, and makerspace programmes — by Year 5." },
  { label: "Community Labs", value: 500, suffix: "", body: "Classroom-to-society impact projects deployed across India by Year 3." },
  { label: "Countries", value: 50, suffix: "+", body: "Represented at the annual One Earth Summit by Year 4." },
  { label: "Classrooms", value: 5000, suffix: "", body: "Connected on the Borderless Classroom digital platform by Year 5." },
  { label: "Intl. chapters", value: 3, suffix: "", body: "Singapore, UAE, United Kingdom — operational in Phase 2 (Year 3–4)." },
];

export const roadmap = [
  {
    phase: "Phase 1",
    when: "Year 1–2 · India Metro Launch",
    items: [
      "New Delhi — National HQ & Policy Advocacy",
      "Mumbai — CSR, Media & Fundraising",
      "Bengaluru — Technology Vertical",
      "Pune — Education Institutions & Youth",
    ],
  },
  {
    phase: "Phase 2",
    when: "Year 3–4 · Pan-India + First International",
    items: [
      "5 further Indian cities",
      "Singapore — South-East Asia Hub",
      "United Arab Emirates — Diaspora & Gulf Schools",
      "United Kingdom — European Outreach",
    ],
  },
  {
    phase: "Phase 3",
    when: "Year 5 onwards · Global Scale",
    items: [
      "20+ country chapters activated",
      "Earthizen Digital Platform (global classrooms)",
      "UNESCO & UNICEF formal partnerships",
      "One Earth Summit — 50+ nations",
    ],
  },
];

export const stories = [
  {
    programme: "NEXUS · Code the Future",
    title: "180 students. One app. Three national awards.",
    body: "AI, coding, and data literacy bootcamps for underserved youth — six-week intensive programmes with certified learning pathways and mentorship.",
    where: "Dharavi, Mumbai · 2024",
  },
  {
    programme: "BRIDGE · Civic Budget Watch",
    title: "A ward meeting, a councillor, and Class 10.",
    body: "Students in Delhi identified significant underspending in their ward's school repair budget, compiled a documented case, and presented it at a ward committee meeting. The councillor committed to follow-up action.",
    where: "Delhi · 2024",
  },
  {
    programme: "ORBIT · Global Assembly",
    title: "Youth Space Resolution submitted to UNOOSA.",
    body: "Sixteen schools from India, Kenya, Brazil, and Germany debated 'Should Space be Governed by a World Body?' Their co-authored Youth Space Resolution was formally submitted to the United Nations.",
    where: "Virtual · 2024 pilot",
  },
  {
    programme: "NEXUS · Maker Bharat",
    title: "A sensor that alerts parents before the water gets dangerous.",
    body: "Class 7 students in Rajkot 3D-printed a low-cost water-quality sensor deployed in their local borewell — alerting parents via SMS. Now monitored by the village panchayat.",
    where: "Rajkot, Gujarat · 2024",
  },
  {
    programme: "COSMOS · Future Earth Explorers",
    title: "A model Mars habitat. Judged by ISRO engineers.",
    body: "An after-school club at KV No. 1, Bengaluru built a model Mars habitat from locally sourced materials — winning a national competition judged by ISRO engineers.",
    where: "Bengaluru, Karnataka · 2024",
  },
  {
    programme: "NEXUS · Tech Society",
    title: "34% less food waste. One student team. One semester.",
    body: "A Class 11 team from Hyderabad built an IoT tray-weight system for their school canteen. Piloted for one semester, it reduced kitchen waste by 34% — now adopted permanently by the school.",
    where: "Hyderabad, Telangana · 2024",
  },
];

export const gallery = [
  {
    photo: "/photos/podium-address.jpg",
    tag: "COSMOS · Outreach",
    caption:
      "Group Captain Shubhanshu Shukla addresses students at a space-education outreach event — where the wonder of space meets a classroom full of futures.",
    ratio: "3/4",
  },
  {
    photo: "/photos/school-visit.jpg",
    tag: "ORBIT · School Visit",
    caption:
      "Students meet the founder during a school visit — every conversation a small step toward a borderless classroom.",
    ratio: "3/2",
  },
  {
    photo: "/photos/community-walk.jpg",
    tag: "BRIDGE · Community",
    caption:
      "A community welcome during a village visit — Bridge begins where the classroom meets the street.",
    ratio: "3/2",
  },
  {
    photo: "/photos/event-unveiling.jpg",
    tag: "NEXUS · Events",
    caption:
      "Unveiling a space-careers programme with students and educators — opening pathways that once felt impossibly far away.",
    ratio: "3/2",
  },
  {
    photo: "/photos/students-group.jpg",
    tag: "ORBIT · Schools",
    caption:
      "Students and teachers with the founder after a school session — the first nodes of the Borderless Classroom Network.",
    ratio: "3/2",
  },
  {
    photo: "/photos/leaders-meeting.jpg",
    tag: "Foundation · Partnerships",
    caption:
      "In conversation with community and institutional leaders — partnerships that carry programmes from idea to district.",
    ratio: "3/4",
  },
  {
    photo: "/photos/press-interaction.jpg",
    tag: "Transmissions · Media",
    caption:
      "Speaking with national media about the mission: one planet, one home, infinite futures.",
    ratio: "3/2",
  },
  {
    photo: "/photos/orbit-earth.jpg",
    tag: "COSMOS · The Overview",
    caption:
      "Earth's limb from orbit — the view that started everything. From up here, there are no borders.",
    ratio: "2/3",
  },
];

export const team = {
  governance: [
    { name: "Board of Trustees", role: "Supreme governing body" },
    { name: "Global Advisory Board", role: "Astronauts & policy leaders" },
  ],
  executive: [
    { name: "[To be announced]", role: "CEO · Chief Programme Officer" },
    { name: "[To be announced]", role: "Director — ORBIT · Citizenship curriculum" },
    { name: "[To be announced]", role: "Director — NEXUS · Tech literacy & makerspaces" },
  ],
};

export const legalCards = [
  {
    title: "Section 8 Company",
    body: "Incorporated under the Companies Act, 2013 — India's highest category of non-profit registration, with full fiduciary governance.",
  },
  {
    title: "India-First, Global Vision",
    body: "Headquartered in New Delhi, with operations in Mumbai, Bengaluru, and Pune in Phase 1. International chapters planned in Singapore, UAE, and UK.",
  },
  {
    title: "CSR Eligibility",
    body: "All contributions eligible under Schedule VII of the Companies Act, 2013 — covering education, skill development, and environmental sustainability.",
  },
  {
    title: "Transparency & Reporting",
    body: "Annual impact reports, audited financials, and quarterly partner briefings. Full transparency on how every rupee is deployed.",
  },
];

export const audiences = [
  {
    key: "students",
    title: "Students",
    line: "Join as an Earthizen — programmes, clubs, and a global classroom waiting for you.",
    action: "Join as Earthizen",
    points: [
      "Join a Future Earth Explorers Club at your school",
      "Enter Code the Future bootcamps and hackathons",
      "Represent your school at the Global Assembly",
    ],
  },
  {
    key: "schools",
    title: "Schools & Educators",
    line: "Partner a school — bring the Earthizen Curriculum and a Community Lab to your classrooms.",
    action: "Partner a School",
    points: [
      "Adopt the Earthizen Curriculum (ages 8–18)",
      "Join the Borderless Classroom Network — 30 countries",
      "Run a Community Lab with your students",
    ],
  },
  {
    key: "volunteers",
    title: "Volunteers & Mentors",
    line: "Mentor a bootcamp, guide a Community Lab, or help run a Global Assembly.",
    action: "Volunteer with us",
    points: [
      "Mentor students in coding, AI, and maker projects",
      "Support school exchanges and summit events",
      "Lend professional skills to programme operations",
    ],
  },
  {
    key: "csr",
    title: "CSR & Funding Partners",
    line: "Fund the next 1,000 schools — fully CSR-eligible under Schedule VII.",
    action: "CSR & Funding",
    points: [
      "Sponsor a programme vertical or a city chapter",
      "CSR-eligible under Schedule VII, Companies Act 2013",
      "Quarterly partner briefings and audited reporting",
    ],
  },
];

export const faqs = [
  {
    q: "What is an Earthizen?",
    a: "A citizen of Earth first — someone who identifies with the planet before any nation, and uses technology, empathy, and purpose to act like it. The name comes from the founder's view from orbit: no borders, one home.",
  },
  {
    q: "Who can join the programmes?",
    a: "Students aged 8–18 join through their schools or open events; schools partner directly for the curriculum and Community Labs; anyone can volunteer or mentor. See Programmes for each vertical's entry point.",
  },
  {
    q: "Are contributions CSR-eligible?",
    a: "Yes. The foundation is a Section 8 company under the Companies Act, 2013, and contributions are eligible under Schedule VII — covering education, skill development, and environmental sustainability. [Confirm 80G details before publishing.]",
  },
  {
    q: "How is the foundation governed?",
    a: "A Board of Trustees is the supreme governing body, advised by a Global Advisory Board of astronauts and policy leaders, with an executive management team running programmes. Annual impact reports and audited financials are published.",
  },
  {
    q: "Where does the foundation operate?",
    a: "Headquartered in New Delhi with Phase 1 operations in Mumbai, Bengaluru, and Pune — expanding pan-India and to Singapore, UAE, and the UK in Phase 2, and 20+ country chapters by Phase 3.",
  },
];
