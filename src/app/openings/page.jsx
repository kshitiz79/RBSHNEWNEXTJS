"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import JobApplicationForm from "@/components/JobApplicationForm";

  const API = process.env.NEXT_PUBLIC_API_BASE;

const toArray = (maybeArr) => (Array.isArray(maybeArr) ? maybeArr : []);
const normalizeJobs = (data) => {
  // Accept [], {jobs: []}, {results: []}, {data: {jobs: []}}
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.jobs)) return data.jobs;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.data?.jobs)) return data.data.jobs;
  return [];
};

const safeText = (v) => (v == null ? "" : String(v));

const page = () => {
  
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [jobOpenings, setJobOpenings] = useState([]); // always an array
  const [loading, setLoading] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationSuccess, setApplicationSuccess] = useState(false);

 const fetchJobs = async () => {
  setLoading(true);
  try {
    const params = new URLSearchParams();
    params.append('status', 'active');
    if (selectedDepartment && selectedDepartment !== 'all') {
      params.append('department', selectedDepartment);
    }
    if (selectedLocation && selectedLocation !== 'all') {
      params.append('location', selectedLocation);
    }

    const res = await fetch(`${API}/api/jobs?${params.toString()}`, { cache: "no-store" });
    const raw = await res.json();
    console.log("Jobs fetched:", raw);
    const list = normalizeJobs(raw);
    setJobOpenings(toArray(list));
  } catch (err) {
    console.error("Error fetching jobs:", err);
    setJobOpenings([]);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDepartment, selectedLocation]);

  // Compute filter options safely
  const { departments, locations } = useMemo(() => {
    const deps = new Set(["all"]);
    const locs = new Set(["all"]);
    for (const j of toArray(jobOpenings)) {
      if (j?.department) deps.add(String(j.department));
      if (j?.location) locs.add(String(j.location));
    }
    return { departments: Array.from(deps), locations: Array.from(locs) };
  }, [jobOpenings]);

  const filteredJobs = useMemo(() => toArray(jobOpenings), [jobOpenings]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.max(0, now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays <= 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <div className="min-h-screen bg-[#e5e8ea] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Join Our Creative Team
          </h1>
          <p className="md:text-xl text-lg text-gray-600 max-w-3xl mx-auto">
            We’re thrilled to welcome you to our creative family—join us and let’s make something extraordinary together.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white  p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept === "all" ? "All Departments" : dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc === "all" ? "All Locations" : loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""} available
            </div>
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6">
          {loading ? (
            <div className="bg-white  p-8 text-center">
              <div className="animate-spin  h-8 w-8 border-b-2 border-blue-500 mx-auto" />
              <p className="mt-2 text-gray-600">Loading job openings...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="bg-white p-8 text-center">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or check back later for new opportunities.
              </p>
            </div>
          ) : (
            filteredJobs.map((job, index) => {
              const key = job._id || job.id || `${safeText(job.title)}-${index}`;
              const requirements = toArray(job?.requirements).map(safeText);
              const benefits = toArray(job?.benefits).map(safeText);
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white  shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden "
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          {job?.department && (
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                              {safeText(job.department)}
                            </span>
                          )}
                          {job?.location && (
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                              {safeText(job.location)}
                            </span>
                          )}
                          {job?.type && (
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                              {safeText(job.type)}
                            </span>
                          )}
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{safeText(job.title)}</h2>
                        <div className="flex items-center text-gray-600 text-sm mb-4">
                          {job?.experience && <span>{safeText(job.experience)}</span>}
                          {job?.createdAt && (
                            <>
                              <span className="mx-2">•</span>
                              <span>Posted {formatDate(job.createdAt)}</span>
                            </>
                          )}
                        </div>

                        {job?.description && (
                          <p className="text-gray-700 leading-relaxed">{safeText(job.description)}</p>
                        )}
                      </div>

                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <button
                          onClick={() => {
                            setSelectedJob(job);
                            setShowApplicationForm(true);
                          }}
                          className="w-full lg:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>

                    <details className="group">
                      <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-700 transition-colors">
                        View Details
                        <span className="ml-2 group-open:rotate-180 transition-transform duration-200 inline-block">▼</span>
                      </summary>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Qualifications</h4>
                            <ul className="space-y-2">
                              {requirements.length ? (
                                requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    <span className="text-gray-700 bg-blue-100 rounded-xl p-2">{req}</span>
                                  </li>
                                ))
                              ) : (
                                <li className="text-gray-500 text-sm">—</li>
                              )}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Responsibilites</h4>
                            <ul className="space-y-2">
                              {benefits.length ? (
                                benefits.map((b, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                    <span className="text-gray-700">{b}</span>
                                  </li>
                                ))
                              ) : (
                                <li className="text-gray-500 text-sm">—</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-black p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Don't see the perfect role?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute.
          </p>
          <a
            href="mailto:career@rbshstudio.com"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Send Your Resume
          </a>
        </motion.div>

   
        {applicationSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            Application submitted successfully! We'll be in touch soon.
          </motion.div>
        )}
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <JobApplicationForm
          job={selectedJob}
          onClose={() => {
            setShowApplicationForm(false);
            setSelectedJob(null);
          }}
          onSuccess={() => {
            setApplicationSuccess(true);
            setTimeout(() => setApplicationSuccess(false), 5000);
          }}
        />
      )}
    </div>
  );
};

export default page;
