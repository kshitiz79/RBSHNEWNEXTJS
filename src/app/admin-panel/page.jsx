// AdminPanel.js
"use client"
import React, { useState, useEffect } from 'react';
import { Briefcase, CalendarDays, MapPin } from 'lucide-react';

// StatCard Component
const StatCard = ({ title, value, iconBg, iconPath }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className={`p-3 rounded-lg ${iconBg}`}>
      <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d={iconPath} />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mt-4">{title}</h3>
    <p className="text-2xl font-bold text-gray-600">{value}</p>
  </div>
);

export default function AdminPanel() {
  const API = process.env.NEXT_PUBLIC_API_BASE;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState(null);
  const [jobStats, setJobStats] = useState(null);

  // Fetch Contacts
  const fetchContacts = async () => {
    try {
      const response = await fetch(`${API}/api/contact`);
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  // Fetch Jobs
  const fetchJobs = async () => {
    try {
      const response = await fetch(`${API}/api/jobs`);
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  // Fetch Applications
  const fetchApplications = async () => {
    try {
      const response = await fetch(`${API}/api/applications`);
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  // Fetch Stats
  const fetchStats = async () => {
    try {
      const response = await fetch(`${API}/api/contact/stats`);
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // Fetch Job Stats
  const fetchJobStats = async () => {
    try {
      const response = await fetch(`${API}/api/jobs/admin/stats`);
      if (response.ok) {
        const data = await response.json();
        setJobStats(data);
      }
    } catch (error) {
      console.error('Error fetching job stats:', error);
    }
  };

  // Check Authentication
  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth');
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
    } catch (e) {
      setIsAuthenticated(false);
    }
    setAuthLoading(false);
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await fetch('/api/auth', { method: 'DELETE' });
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Initial Fetching Data
  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts();
      fetchJobs();
      fetchApplications();
      fetchStats();
      fetchJobStats();
    }
  }, [isAuthenticated]);

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">Please Login</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e5e8ea] p-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
            <p className="text-gray-600">Manage contacts, job postings, and applications</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats && (
            <>
              <StatCard title="Total Contacts" value={stats.total} iconBg="bg-blue-500" iconPath="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              <StatCard title="Recent Contacts" value={stats.recentContacts} iconBg="bg-green-500" iconPath="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              <StatCard title="New Contacts" value={stats.statusCounts.new} iconBg="bg-yellow-500" iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              <StatCard title="Qualified" value={stats.statusCounts.qualified} iconBg="bg-purple-500" iconPath="M13 10V3L4 14h7v7l9-11h-7z" />
            </>
          )}
        </div>

        {/* Job Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobStats && (
            <>
              <StatCard title="Total Jobs" value={jobStats.totalJobs} iconBg="bg-blue-500" iconPath="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              <StatCard title="Active Jobs" value={jobStats.activeJobs} iconBg="bg-green-500" iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              <StatCard title="Total Applications" value={jobStats.totalApplications} iconBg="bg-purple-500" iconPath="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              <StatCard title="Recent Applications" value={jobStats.recentApplications} iconBg="bg-yellow-500" iconPath="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
