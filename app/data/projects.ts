// Portfolio entries. Add a project by adding an object here; put its images in
// public/images/work/ and reference them as /images/work/<file>.
export type ProjectCategory = 'Web development' | 'Graphic design';

export interface Project {
  slug: string;
  title: string;
  client?: string;
  // Where the work was done and the role held, e.g. for agency projects.
  role?: string;
  // Leave out when unknown; the card and project page then skip it.
  year?: number;
  award?: string;
  categories: ProjectCategory[];
  summary: string;
  // Longer write-up for the project page; each string is a paragraph.
  description?: string[];
  // "What I built" list on the project page.
  highlights?: string[];
  services: string[];
  url?: string;
  image?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    slug: 'lilies-of-the-field',
    title: 'Lilies of the Field',
    year: 2026,
    categories: ['Web development', 'Graphic design'],
    summary: 'A headless WooCommerce shop for calligraphy templates and commissions, with a custom template generator.',
    services: ['Nuxt', 'WooCommerce', 'GraphQL', 'Branding'],
    url: 'https://liliesofthefield.co',
  },
  {
    slug: 'idaho-inbre-research-portal',
    title: 'Idaho INBRE Research Portal',
    client: 'Idaho INBRE',
    role: 'Lead developer at Clocktower Media',
    award: 'Best Use of Technology, University of Idaho',
    categories: ['Web development'],
    summary:
      'A secure research portal where student researchers record and submit their findings, with admin dashboards, PubMed integration and custom reporting.',
    description: [
      'The Idaho INBRE biomedical research program needed one secure place for student researchers to record and submit their findings, and a way for program staff to review that work and report on it.',
      'I built the database, the front end, the student and admin login areas, the admin dashboards, the PubMed API connection and the reporting tool. The portal won the University of Idaho’s Best Use of Technology award.',
    ],
    highlights: [
      'Designed the database behind the research form, student records and reports.',
      'Built a long, multi-section form for students to record and submit their findings.',
      'Created separate login areas for students and administrators, each with its own permissions.',
      'Built admin dashboards for staff to review, manage and track submissions.',
      'Connected the PubMed API to bring publication data into the system.',
      'Built a custom reporting tool so admins could create reports on the program’s research.',
    ],
    services: ['PHP', 'MySQL', 'JavaScript', 'PubMed API', 'Custom reporting'],
  },
];

export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
