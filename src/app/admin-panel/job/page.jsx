
"use client";
import React, { useEffect, useState } from "react";
import JobsTable from "@/components/admin/JobsTable";
import JobFormModal from "@/components/admin/JobFormModal";
import StatCard from "@/components/admin/StatCard";
import { formatDate, makeStatusColor } from "@/components/admin/utils";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [jobStats, setJobStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showJobForm, setShowJobForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobStatusOptions = [
    { value: "all", label: "All", color: "bg-gray-100" },
    { value: "active", label: "Active", color: "bg-green-100 text-green-800" },
    { value: "paused", label: "Paused", color: "bg-yellow-100 text-yellow-800" },
    { value: "closed", label: "Closed", color: "bg-gray-100 text-gray-800" },
  ];

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/jobs/admin/all?status=${selectedStatus}&page=${currentPage}&limit=10`, { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setJobs(data.jobs || []);
        setTotalPages(data.totalPages || 1);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchJobStats = async () => {
    try {
      const res = await fetch("/api/jobs/admin/stats", { credentials: "include" });
      if (res.ok) setJobStats(await res.json());
    } catch {}
  };

  useEffect(() => {
    fetchJobs();
    fetchJobStats();
  }, [selectedStatus, currentPage]);

  const deleteJob = async (id) => {
    if (!confirm("Are you sure you want to delete this job? This will also delete all applications.")) return;
    try {
      const res = await fetch(`/api/jobs/admin/${id}`, { method: "DELETE", credentials: "include" });
      if (res.ok) fetchJobs();
    } catch {}
  };

  return (
    <div className="space-y-6">
      {jobStats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Jobs" value={jobStats.totalJobs} iconBg="bg-blue-500" iconPath="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
          <StatCard title="Active Jobs" value={jobStats.activeJobs} iconBg="bg-green-500" iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <StatCard title="Total Applications" value={jobStats.totalApplications} iconBg="bg-purple-500" iconPath="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          <StatCard title="Recent Applications" value={jobStats.recentApplications} iconBg="bg-yellow-500" iconPath="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            <label className="text-sm font-medium text-gray-700">Filter by status:</label>
            {jobStatusOptions.map((o) => (
              <button key={o.value} onClick={() => { setSelectedStatus(o.value); setCurrentPage(1); }} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedStatus === o.value ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>{o.label}</button>
            ))}
          </div>
          <button onClick={() => setShowJobForm(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Add New Job</button>
        </div>
      </div>

      <JobsTable
        jobs={jobs}
        loading={loading}
        onEdit={(job) => { setSelectedJob(job); setShowJobForm(true); }}
        onDelete={deleteJob}
        formatDate={formatDate}
        getStatusColor={(status) => makeStatusColor(status, jobStatusOptions)}
      />

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-2">
            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50">Previous</button>
            <span className="px-4 py-2 text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50">Next</button>
          </div>
        </div>
      )}

      {showJobForm && (
        <JobFormModal
          job={selectedJob}
          onClose={() => { setShowJobForm(false); setSelectedJob(null); }}
          onSave={() => { setShowJobForm(false); setSelectedJob(null); fetchJobs(); }}
        />
      )}
    </div>
  );
}