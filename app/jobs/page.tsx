"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description?: string;
  salary?: string;
  requirements?: string[];
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchQuery, jobs]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://mocki.io/v1/5e1f3c46-3f63-44ab-8a8e-f60e6d4b7d5c");
      const data = await response.json();
      setJobs(data);
      setFilteredJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 lg:ml-64 p-4 lg:p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Jobs</h1>
            <ThemeToggle />
          </div>
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Search jobs by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500 dark:text-gray-400">Loading jobs...</div>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500 dark:text-gray-400">No jobs found</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => handleJobClick(job)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{job.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{job.company}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{job.location}</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                    {job.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {isModalOpen && selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedJob.title}</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <div className="mb-4">
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">{selectedJob.company}</p>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                    <span>{selectedJob.location}</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                      {selectedJob.type}
                    </span>
                  </div>
                </div>
                {selectedJob.salary && (
                  <div className="mb-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Salary: </span>
                      {selectedJob.salary}
                    </p>
                  </div>
                )}
                {selectedJob.description && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
                    <p className="text-gray-700 dark:text-gray-300">{selectedJob.description}</p>
                  </div>
                )}
                {selectedJob.requirements && selectedJob.requirements.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Requirements</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
