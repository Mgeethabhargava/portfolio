export interface Candidate {
  id: number;
  fullname: string;
  nav_fullname: string;
  image: string;
  roles: string[];
  linkedin_url: string;
  github_url: string;
  researchgate_url: string;
  about_me: string;
  about_me_image: string;
  experience_image: string;
  resume_url: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  start_date: string;
  end_date: string | null;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  repo_url: string;
}

export interface Skill {
  id: number;
  name: string;
  image: string;
}

export interface CandidateSkill {
  id: number;
  skill: string;
  image: string;
}