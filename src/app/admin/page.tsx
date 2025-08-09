'use client';

import { useState, useEffect } from 'react';
import { Candidate, Experience, Project, CandidateSkill } from '@/types';
import { Save, Plus, Trash2, Edit } from 'lucide-react';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('candidate');
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<CandidateSkill[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [candidateRes, experiencesRes, projectsRes, skillsRes] = await Promise.all([
        fetch('/api/cms/candidate'),
        fetch('/api/cms/experiences'),
        fetch('/api/cms/projects'),
        fetch('/api/cms/skills')
      ]);

      setCandidate(await candidateRes.json());
      setExperiences(await experiencesRes.json());
      setProjects(await projectsRes.json());
      setSkills(await skillsRes.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveCandidate = async () => {
    if (!candidate) return;
    setSaving(true);
    try {
      await fetch('/api/cms/candidate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(candidate)
      });
      alert('Candidate data saved successfully!');
    } catch (error) {
      alert('Error saving candidate data');
    } finally {
      setSaving(false);
    }
  };

  const saveExperiences = async () => {
    setSaving(true);
    try {
      await fetch('/api/cms/experiences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(experiences)
      });
      alert('Experiences saved successfully!');
    } catch (error) {
      alert('Error saving experiences');
    } finally {
      setSaving(false);
    }
  };

  const saveProjects = async () => {
    setSaving(true);
    try {
      await fetch('/api/cms/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projects)
      });
      alert('Projects saved successfully!');
    } catch (error) {
      alert('Error saving projects');
    } finally {
      setSaving(false);
    }
  };

  const saveSkills = async () => {
    setSaving(true);
    try {
      await fetch('/api/cms/skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(skills)
      });
      alert('Skills saved successfully!');
    } catch (error) {
      alert('Error saving skills');
    } finally {
      setSaving(false);
    }
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now(),
      company: '',
      role: '',
      start_date: '',
      end_date: null,
      description: ''
    };
    setExperiences([...experiences, newExp]);
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now(),
      title: '',
      image: '',
      repo_url: ''
    };
    setProjects([...projects, newProject]);
  };

  const addSkill = () => {
    const newSkill: CandidateSkill = {
      id: Date.now(),
      skill: '',
      image: ''
    };
    setSkills([...skills, newSkill]);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Portfolio CMS Admin Panel
        </h1>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8 border-b border-gray-200 dark:border-gray-700">
          {['candidate', 'experiences', 'projects', 'skills'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium capitalize ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Candidate Tab */}
        {activeTab === 'candidate' && candidate && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Personal Information
              </h2>
              <button
                onClick={saveCandidate}
                disabled={saving}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                <Save size={16} />
                <span>{saving ? 'Saving...' : 'Save'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={candidate.fullname}
                  onChange={(e) => setCandidate({...candidate, fullname: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Navigation Name
                </label>
                <input
                  type="text"
                  value={candidate.nav_fullname}
                  onChange={(e) => setCandidate({...candidate, nav_fullname: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Profile Image URL
                </label>
                <input
                  type="url"
                  value={candidate.image}
                  onChange={(e) => setCandidate({...candidate, image: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Resume URL
                </label>
                <input
                  type="url"
                  value={candidate.resume_url}
                  onChange={(e) => setCandidate({...candidate, resume_url: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Roles (one per line)
                </label>
                <textarea
                  value={candidate.roles.join('\n')}
                  onChange={(e) => setCandidate({...candidate, roles: e.target.value.split('\n').filter(r => r.trim())})}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  About Me
                </label>
                <textarea
                  value={candidate.about_me}
                  onChange={(e) => setCandidate({...candidate, about_me: e.target.value})}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Experiences Tab */}
        {activeTab === 'experiences' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={addExperience}
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  <Plus size={16} />
                  <span>Add Experience</span>
                </button>
                <button
                  onClick={saveExperiences}
                  disabled={saving}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  <Save size={16} />
                  <span>{saving ? 'Saving...' : 'Save All'}</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Experience #{index + 1}
                    </h3>
                    <button
                      onClick={() => setExperiences(experiences.filter(e => e.id !== exp.id))}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) => {
                        const updated = experiences.map(e => 
                          e.id === exp.id ? {...e, company: e.target.value} : e
                        );
                        setExperiences(updated);
                      }}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="Role"
                      value={exp.role}
                      onChange={(e) => {
                        const updated = experiences.map(e => 
                          e.id === exp.id ? {...e, role: e.target.value} : e
                        );
                        setExperiences(updated);
                      }}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <input
                      type="date"
                      placeholder="Start Date"
                      value={exp.start_date}
                      onChange={(e) => {
                        const updated = experiences.map(e => 
                          e.id === exp.id ? {...e, start_date: e.target.value} : e
                        );
                        setExperiences(updated);
                      }}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <input
                      type="date"
                      placeholder="End Date (leave empty for current)"
                      value={exp.end_date || ''}
                      onChange={(e) => {
                        const updated = experiences.map(e => 
                          e.id === exp.id ? {...e, end_date: e.target.value || null} : e
                        );
                        setExperiences(updated);
                      }}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <textarea
                    placeholder="Description"
                    value={exp.description}
                    onChange={(e) => {
                      const updated = experiences.map(e => 
                        e.id === exp.id ? {...e, description: e.target.value} : e
                      );
                      setExperiences(updated);
                    }}
                    rows={3}
                    className="w-full mt-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Similar sections for Projects and Skills would go here */}
        {/* For brevity, I'm showing the structure - you can expand these */}
        
        {activeTab === 'projects' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
              <div className="flex space-x-2">
                <button onClick={addProject} className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  <Plus size={16} />
                  <span>Add Project</span>
                </button>
                <button onClick={saveProjects} className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  <Save size={16} />
                  <span>Save All</span>
                </button>
              </div>
            </div>
            {/* Project editing interface would go here */}
            <p className="text-gray-600 dark:text-gray-400">Project management interface - expand as needed</p>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
              <div className="flex space-x-2">
                <button onClick={addSkill} className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  <Plus size={16} />
                  <span>Add Skill</span>
                </button>
                <button onClick={saveSkills} className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  <Save size={16} />
                  <span>Save All</span>
                </button>
              </div>
            </div>
            {/* Skills editing interface would go here */}
            <p className="text-gray-600 dark:text-gray-400">Skills management interface - expand as needed</p>
          </div>
        )}
      </div>
    </div>
  );
}