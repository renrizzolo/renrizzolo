import projectsJson from '../../api/projects.json'

export interface Project {
  id: number | string;
  slug: string;
  datePublished: string;
  heading: string;
  coverImage?: string;
  subHeading?: string;
  link?: string;
  tags?: string[];
  category?: string;
  details?: string;
}

export const projects: Project[] = projectsJson;