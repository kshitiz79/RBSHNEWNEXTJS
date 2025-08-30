"use client";
import React, { useEffect, useRef, useState } from "react";

export default function JobFormModal({ job, onClose, onSave }) {
  const overlayRef = useRef(null);
  const recordId = job?.id || job?._id || null;

  // Normalize incoming job to avoid non-string values rendering as objects
  const normalize = (j) => {
    const x = j && typeof j === "object" ? j : {};
    return {
      id: String(x.id ?? x._id ?? ""), // keep id so edit mode has a target
      title: String(x.title ?? ""),
      department: String(x.department ?? ""),
      location: String(x.location ?? ""),
      type: ["Full-time", "Part-time", "Contract", "Internship"].includes(x.type)
        ? x.type
        : "Full-time",
      experience: String(x.experience ?? ""),
      description: String(x.description ?? ""),
      requirements: Array.isArray(x.requirements) ? x.requirements.map(String) : [""],
      // UI label says Responsibilities but backend expects 'benefits'
      responsibilities: Array.isArray(x.benefits) ? x.benefits.map(String) : [""],
      // UI has 'paused', backend uses 'inactive'; keep UI value here, map at submit time
      status: ["active", "paused", "closed"].includes(x.status) ? x.status : "active",
    };
  };

  const [formData, setFormData] = useState(normalize(job));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Close on ESC
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  // Close on overlay click
  const onOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose?.();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (index, value, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (field) => {
    setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const removeArrayItem = (index, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Build and clean payload (strip empty strings)
    const statusMap = { paused: "inactive" }; // backend enum: ['active','inactive','closed']
    const cleanedData = {
      title: formData.title.trim(),
      department: formData.department.trim(),
      location: formData.location.trim(),
      type: formData.type,
      experience: formData.experience.trim(),
      description: formData.description.trim(),
      requirements: formData.requirements.map((r) => r.trim()).filter(Boolean),
      benefits: formData.responsibilities.map((r) => r.trim()).filter(Boolean),
      status: statusMap[formData.status] || formData.status,
    };

    try {
      const API = process.env.NEXT_PUBLIC_API_BASE || "";
      const url = recordId ? `${API}/api/jobs/${recordId}` : `${API}/api/jobs`;
      const method = recordId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(cleanedData),
      });

      if (!res.ok) {
        let msg = `Failed to save job`;
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {}
        setError(`${msg} (HTTP ${res.status} ${res.statusText})`);
        return;
      }

      const data = await res.json().catch(() => ({}));
      const savedJob = data.job || data; // handle { job: {...} } or plain {...}
      onSave?.(savedJob); // notify parent (e.g., refresh list)
      onClose?.();
    } catch (err) {
      console.error("Job save error:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div
      ref={overlayRef}
      onClick={onOverlayClick}
      className="fixed inset-0 bg-gray-600/50 backdrop-blur-[1px] overflow-y-auto h-full w-full z-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative top-10 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 shadow-lg rounded-xl bg-white">
        <div className="mt-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {job ? "Edit Job" : "Create New Job"}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="max-h-[28rem] overflow-y-auto space-y-4 pr-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Experience Required</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 3+ years"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Job Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Qualifications</label>
                {formData.requirements.map((req, index) => (
                  <div key={`req-${index}`} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => handleArrayChange(index, e.target.value, "requirements")}
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                      placeholder="Enter requirement"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem(index, "requirements")}
                      className="px-3 py-2 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("requirements")}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  + Add Requirement
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Responsibilities</label>
                {formData.responsibilities.map((item, index) => (
                  <div key={`resp-${index}`} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleArrayChange(index, e.target.value, "responsibilities")}
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                      placeholder="Enter responsibility"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem(index, "responsibilities")}
                      className="px-3 py-2 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("responsibilities")}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  + Add Responsibility
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
                {isSubmitting ? "Saving..." : job ? "Update Job" : "Create Job"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
