// Defines the "shape" of a portfolio project object
export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

// TODO: Replace this with your actual portfolio projects
export const portfolioData: PortfolioProject[] = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A cutting-edge e-commerce platform built with a focus on performance and user experience.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    link: 'https://github.com/your-username/project-alpha',
  },
  {
    id: 2,
    title: 'DataViz Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets using D3.js and React.',
    techStack: ['React', 'D3.js', 'Redux', 'Node.js'],
    link: 'https://github.com/your-username/dataviz-dashboard',
  },
];