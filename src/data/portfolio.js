import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wrench,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'Poovarasan',
  role: 'Full Stack Developer',
  headline: 'Full Stack Developer | MERN Stack | JavaScript | React | Node.js',
  location: 'Namakkal,Tamil Nadu, India',
  email: 'bpoovarasan.tech@gmail.com',
  phone: '+91 8825440033',
  github: 'https://github.com/poovu1010',
  linkedin: 'www.linkedin.com/in/poovarasan-b-3ab443257',
  resumeUrl: 'https://drive.google.com/file/d/1JRYFKAl_DBtlHA9-6Zbzk3P9EHso5Yby/view?usp=drive_link',
};

export const skills = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    description: 'Responsive, recruiter-friendly UI with clean component structure.',
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js','Java', 'Express.js', 'JWT', 'REST API'],
    description: 'Secure API development with authentication and clean routing.',
  },
  {
    title: 'Database',
    icon: Database,
    items: ['MongoDB', 'Mongoose', 'MySQL','ODM & ORM'],
    description: 'Schema design, aggregation, CRUD operations and data modelling.',
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'AWS'],
    description: 'Version control, deployment basics and API testing workflow.',
  },
];

export const projects = [
  {
    title: 'Tailor Shop Management System',
    type: 'MERN Stack ERP',
    icon: Layers3,
    description:
     "I solved a real problem in my father’s tailor shop. Customer details, order details, delivery date, and payment balance were maintained manually in a notebook, so tracking was difficult. Now the shop can manage 100+ customers and 200+ orders, and delivery status and payment balance can be checked easily in a few seconds.",
    highlights: ['React + Tailwind UI', 'Node/Express APIs', 'MongoDB Aggregation', 'JWT httpOnly Cookie'],
    live: 'https://crm-app-frontend-alpha.vercel.app',
    github: 'https://github.com/poovu1010/CRM-APP-FRONTEND',
  },
  {
    title: 'JWT Authentication System',
    type: 'Authentication App',
    icon: ShieldCheck,
    description:
      'Login and signup system using React, Node.js, Express, MongoDB, JWT and secure httpOnly cookies.',
    highlights: ['Protected Routes', 'Cookie Auth', 'Password Hashing', 'Context API'],
    live: 'https://crm-app-frontend-alpha.vercel.app',
    github: 'https://github.com/poovu1010/CRM-APP-FRONTEND',
  },
  {
  title: 'Memory Tile Game',
  type: 'HTML CSS JavaScript Project',
  icon: Braces,
  description:
    'An interactive memory tile game built using HTML, CSS, and JavaScript with card flipping, pair matching, and game completion logic.',
  highlights: ['Card Flip Animation', 'Pair Matching Logic', 'DOM Manipulation', 'Responsive UI'],
  live: 'https://poovu1010.github.io/memory-game/',
  github: 'https://github.com/poovu1010/memory-game',
},
 {
  title: 'Guess The Word Game',
  type: 'HTML CSS JavaScript Project',
  icon: TerminalSquare,
  description:
    'An interactive word guessing game built with HTML, CSS, and JavaScript, featuring hints, user input handling, attempt tracking, and win/loss game logic.',
  highlights: ['Game Logic', 'DOM Manipulation', 'Attempt Tracking', 'Responsive UI'],
  live: 'https://poovu1010.github.io/Guss-the-Word-game',
  github: 'https://github.com/poovu1010/Guss-the-Word-game',
}
];

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Geekbase Technology',
    period: '2026',
    description:
      'Worked on frontend, backend, coding practice and real-time project learning. Improved React UI building, JavaScript logic, API understanding and daily problem-solving skills.',
    points: [
      'Built responsive UI tasks using HTML, CSS, JavaScript, React and Tailwind CSS.',
      'Practiced backend concepts, API flow and real-time project development.',
      'Solved coding problems regularly to improve logical thinking and interview readiness.',
    ],
  },
];

export const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: GitBranch, label: 'GitHub', value: 'https://github.com/poovu1010', href: profile.github },
  { icon: Globe2, label: 'LinkedIn', value: 'www.linkedin.com/in/poovarasan-b-3ab443257', href: profile.linkedin },
  { icon: MapPin, label: 'Location', value: profile.location, href: '#' },
];

export const stats = [
  { label: 'Projects', value: '04+' },
  { label: 'Core Stack', value: 'MERN' },
  { label: 'Focus', value: 'Backend + UI' },
  { label: 'Mindset', value: 'Fast Learner' },
];

export const badges = ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Docker', 'AWS EC2', 'Git','java','ODM & ORM','SQL'];

export const sparkIcon = Sparkles;
