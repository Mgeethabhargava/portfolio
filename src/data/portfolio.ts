@@ .. @@
-import { Candidate, Experience, Project, CandidateSkill } from '@/types';
+import { Candidate, Experience, Project, CandidateSkill } from '@/types';
+import { CMS } from '@/lib/cms';
 
-export const candidate: Candidate = {
-  id: 1,
-  fullname: "Geetha Bhargava",
-  nav_fullname: "Geetha Bhargava",
-  image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
-  roles: [
-    "Full Stack Developer",
-    "Data Scientist", 
-    "Machine Learning Engineer",
-    "AI Enthusiast",
-    "Problem Solver"
-  ],
-  linkedin_url: "https://www.linkedin.com/in/geetha-bhargava",
-  github_url: "https://www.github.com/Mgeethabhargava",
-  researchgate_url: "https://www.researchgate.net/profile/Geetha-Bhargava",
-  about_me: `I am a passionate developer with expertise in full-stack development, data science, and machine learning. 
-  I love creating innovative solutions and working with cutting-edge technologies. My journey in tech has been 
-  driven by curiosity and a desire to solve real-world problems through code.`,
-  about_me_image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
-  experience_image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
-  resume_url: "#"
-};
+// Get data from CMS
+export const candidate: Candidate = CMS.getCandidate();
+export const experiences: Experience[] = CMS.getExperiences();
+export const projects: Project[] = CMS.getProjects();
+export const skills: CandidateSkill[] = CMS.getSkills();
 
-export const experiences: Experience[] = [
-  {
-    id: 1,
-    company: "Tech Solutions Inc",
-    role: "Senior Full Stack Developer",
-    start_date: "2023-01-01",
-    end_date: null,
-    description: "Leading development of web applications using React, Node.js, and cloud technologies."
-  },
-  {
-    id: 2,
-    company: "Data Analytics Corp",
-    role: "Data Scientist",
-    start_date: "2021-06-01",
-    end_date: "2022-12-31",
-    description: "Developed machine learning models and data pipelines for business intelligence."
-  },
-  {
-    id: 3,
-    company: "StartupXYZ",
-    role: "Junior Developer",
-    start_date: "2020-01-01",
-    end_date: "2021-05-31",
-    description: "Built responsive web applications and contributed to product development."
-  }
-];
-
-export const projects: Project[] = [
-  {
-    id: 1,
-    title: "AI Chatbot System",
-    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
-    repo_url: "https://github.com/Mgeethabhargava/chatbot"
-  },
-  {
-    id: 2,
-    title: "E-commerce Platform",
-    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
-    repo_url: "https://github.com/Mgeethabhargava/ecommerce"
-  },
-  {
-    id: 3,
-    title: "Data Visualization Dashboard",
-    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
-    repo_url: "https://github.com/Mgeethabhargava/dashboard"
-  },
-  {
-    id: 4,
-    title: "Mobile News App",
-    image: "https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=400",
-    repo_url: "https://github.com/Mgeethabhargava/newsapp"
-  }
-];
-
-export const skills: CandidateSkill[] = [
-  {
-    id: 1,
-    skill: "Web Development",
-    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400"
-  },
-  {
-    id: 2,
-    skill: "AI/ML",
-    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
-  },
-  {
-    id: 3,
-    skill: "Data Analytics",
-    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
-  },
-  {
-    id: 4,
-    skill: "Cloud Computing",
-    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
-  }
-];
+// Helper function to refresh data (for use in components)
+export const refreshPortfolioData = () => {
+  return {
+    candidate: CMS.getCandidate(),
+    experiences: CMS.getExperiences(),
+    projects: CMS.getProjects(),
+    skills: CMS.getSkills()
+  };
+};