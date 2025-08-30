"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminLogin from "@/components/AdminLogin";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [authLoading, setAuthLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth", { credentials: "include" });
      const data = await res.json();
      setIsAuthenticated(!!data.authenticated);
    } catch (e) {
      setIsAuthenticated(false);
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth", { method: "DELETE", credentials: "include" });
      setIsAuthenticated(false);
    } catch {}
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#e5e8ea] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <AdminLogin
        onLogin={() => {
          checkAuth();
        }}
      />
    );
  }

  const tabs = [
    { href: "/admin-panel/contact", label: "Contacts" },
    { href: "/admin-panel/job", label: "Job Openings" },
    { href: "/admin-panel/application", label: "Applications" },
  ];

  return (
    <div className="min-h-screen bg-[#e5e8ea] p-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage contacts, jobs, and applications</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                const res = await fetch("/api/auth", { credentials: "include" });
                const data = await res.json();
                alert(`Auth status: ${data.authenticated ? "Authenticated" : "Not authenticated"}`);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Test Auth
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {tabs.map((tab) => {
                const active = pathname.startsWith(tab.href);
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      active
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}