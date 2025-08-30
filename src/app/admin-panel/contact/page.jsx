


"use client";
import React, { useEffect, useState } from "react";
import ContactsTable from "../../../components/admin/ContactTable";
import ContactModal from "@/components/admin/ContactModal";
import { formatDate, makeStatusColor } from "@/components/admin/utils";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const statusOptions = [
    { value: "all", label: "All", color: "bg-gray-100" },
    { value: "new", label: "New", color: "bg-blue-100 text-blue-800" },
    { value: "contacted", label: "Contacted", color: "bg-yellow-100 text-yellow-800" },
    { value: "qualified", label: "Qualified", color: "bg-green-100 text-green-800" },
    { value: "closed", label: "Closed", color: "bg-gray-100 text-gray-800" },
  ];

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/contact?status=${selectedStatus}&page=${currentPage}&limit=10`, { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setContacts(data.contacts || []);
        setTotalPages(data.totalPages || 1);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/contact/stats", { credentials: "include" });
      if (res.ok) setStats(await res.json());
    } catch {}
  };

  useEffect(() => {
    fetchContacts();
    fetchStats();
  }, [selectedStatus, currentPage]);

  const updateContactStatus = async (id, status, notes = "") => {
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, notes }),
        credentials: "include",
      });
      if (res.ok) {
        fetchContacts();
        setShowModal(false);
        setSelectedContact(null);
      }
    } catch {}
  };

  const deleteContact = async (id) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;
    try {
      const res = await fetch(`/api/contact/${id}`, { method: "DELETE", credentials: "include" });
      if (res.ok) fetchContacts();
    } catch {}
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            <label className="text-sm font-medium text-gray-700">Filter by status:</label>
            {statusOptions.map((o) => (
              <button
                key={o.value}
                onClick={() => { setSelectedStatus(o.value); setCurrentPage(1); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedStatus === o.value ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ContactsTable
        contacts={contacts}
        loading={loading}
        onEdit={(c) => { setSelectedContact(c); setShowModal(true); }}
        onDelete={deleteContact}
        formatDate={formatDate}
        getStatusColor={(status) => makeStatusColor(status, statusOptions)}
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

      {showModal && selectedContact && (
        <ContactModal
          contact={selectedContact}
          onClose={() => { setShowModal(false); setSelectedContact(null); }}
          onUpdate={updateContactStatus}
          statusOptions={statusOptions.filter((x) => x.value !== "all")}
        />
      )}
    </div>
  );
}