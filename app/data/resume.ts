// Resume content for the Resume page and the home page highlights.
// Keep this in step with the PDF resume.

export interface Job {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  points: string[];
  tags?: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export const summary =
  'Web developer and designer with 15+ years of experience turning business goals into fast, polished, brand-forward websites. I build modern front ends in Nuxt and Vue, custom WordPress and e-commerce sites, and the API integrations that connect them, and I bring the same eye to logos, print and email campaigns. Equally comfortable in code and in design tools, I own projects from first conversation through launch and ongoing support, and use AI tools to work faster without cutting corners.';

export const jobs: Job[] = [
  {
    title: 'Founder · Web Developer & Designer',
    company: 'Prizm Studio',
    location: 'Bremerton, WA',
    start: 'May 2021',
    end: 'Present',
    points: [
      'Design and develop custom websites and headless e-commerce storefronts in Nuxt and Vue, connected to WordPress and WooCommerce through GraphQL and REST APIs.',
      'Build and customize WordPress sites with Elementor, custom themes and plugins; manage hosting, updates, performance and security.',
      'Integrate third-party services, including payments, shipping, forms and marketing platforms, into client sites.',
      'Design and code responsive HTML email campaigns and newsletters, and manage email marketing for clients.',
      'Create logos, brand identities, print flyers and marketing collateral in Adobe InDesign, Affinity and Canva.',
      'Manage code with Git and GitHub, and use AI tools to speed up development, content and design work.',
    ],
    tags: ['Nuxt', 'Vue', 'WordPress', 'WooCommerce', 'Elementor', 'GraphQL', 'Prisma', 'Neon', 'Git', 'Email', 'Branding'],
  },
  {
    title: 'Web, Marketing & Administration',
    company: 'Eazy Electric LLC',
    location: 'Bremerton, WA',
    start: 'Feb 2011',
    end: 'Nov 2020',
    points: [
      'Developed, maintained and optimized the company website for lead generation and growth.',
      'Managed Google Business, Yelp and other listing and review sites to build reputation and bring in new leads.',
      'Handled payroll, timesheets and taxes, and worked with the company accountant to keep the books.',
    ],
  },
  {
    title: 'Lead Developer',
    company: 'Clocktower Media',
    location: 'Kirkland, WA',
    start: 'Jun 2008',
    end: 'Feb 2012',
    points: [
      'Joined as an intern, was hired full time, and was promoted to Lead Developer within three years.',
      'Built the Idaho INBRE research portal (database, logins, admin dashboards, PubMed API and custom reporting), which won the University of Idaho’s Best Use of Technology award.',
      'Built hundreds of client sites at the agency, from small updates to full web applications.',
      'Turned Photoshop designs into working sites with HTML, CSS, JavaScript and jQuery.',
      'Gathered client requirements, designed MySQL databases, and built custom content management systems in PHP (LAMP stack, Zend) and ColdFusion.',
      'Tested every build for responsiveness and cross-browser compatibility, and delivered projects on time and under budget.',
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: 'Front-end',
    skills: ['Nuxt & Vue.js', 'JavaScript (ES6+), HTML5, CSS3', 'Tailwind CSS & responsive design', 'Cross-browser compatibility'],
  },
  {
    name: 'CMS & e-commerce',
    skills: ['WordPress & Elementor', 'WooCommerce & headless storefronts', 'Custom themes & plugins'],
  },
  {
    name: 'Back-end & tools',
    skills: ['PHP & MySQL', 'PostgreSQL (Neon) & Prisma ORM', 'REST & GraphQL API integration', 'Git & GitHub', 'AI-assisted development'],
  },
  {
    name: 'Design & marketing',
    skills: ['Logo & brand identity', 'Print flyers & collateral', 'HTML email design & campaigns', 'Adobe InDesign, Affinity & Canva', 'Local SEO & online listings'],
  },
];

export const education = {
  school: 'Edmonds College',
  credential: 'Web Applications Developer Certificate',
  location: 'Lynnwood, WA',
};

export const award = {
  name: 'Best Use of Technology',
  from: 'University of Idaho',
  project: 'Idaho INBRE Research Portal',
  slug: 'idaho-inbre-research-portal',
};
