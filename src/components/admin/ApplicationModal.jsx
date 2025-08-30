import React, { useState } from "react";

export default function ApplicationModal({ application, onClose, onUpdate, statusOptions }) {
  const [status, setStatus] = useState(application.status);
  const [notes, setNotes] = useState(application.notes || "");

  const handleUpdate = () => {
    const id = application?._id || application?.id;
    onUpdate(id, status, notes);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Application Details</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Job: {application.jobTitle}</h4>
              <p className="text-sm text-gray-600">
                {application.department} • {application.location}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-sm text-gray-900">{application.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-sm text-gray-900">{application.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <p className="mt-1 text-sm text-gray-900">{application.phone || "Not provided"}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Experience</label>
                <p className="mt-1 text-sm text-gray-900">{application.experience || "Not specified"}</p>
              </div>
            </div>

            {application.resume && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Resume</label>
                <a
                  href={application.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-blue-600 hover:underline"
                >
                  View Resume
                </a>
              </div>
            )}

            {application.portfolio && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Portfolio</label>
                <a
                  href={application.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-blue-600 hover:underline"
                >
                  View Portfolio
                </a>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
              <div className="mt-1 p-3 bg-gray-50 rounded-md text-sm text-gray-900 max-h-32 overflow-y-auto">
                {application.coverLetter || "No cover letter provided"}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Admin Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                placeholder="Add notes about this application..."
              />
            </div>

            <div className="text-sm text-gray-500">
              <p>Applied: {new Date(application.createdAt).toLocaleString()}</p>
              <p>Updated: {new Date(application.updatedAt).toLocaleString()}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Update Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
