import React, { useState } from "react";

export default function ContactModal({ contact, onClose, onUpdate, statusOptions }) {
  const [status, setStatus] = useState(contact.status);
  const [notes, setNotes] = useState(contact.notes || "");

  const handleUpdate = () => {
    const id = contact?._id || contact?.id;
    onUpdate(id, status, notes);
  };

  const services = Array.isArray(contact?.services) ? contact.services : [];

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Contact Details</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-sm text-gray-900">{contact.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Organization</label>
                <p className="mt-1 text-sm text-gray-900">{contact.organization}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-sm text-gray-900">{contact.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <p className="mt-1 text-sm text-gray-900">{contact.number}</p>
              </div>
            </div>
            {contact.website && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Website</label>
                <a href={contact.website} target="_blank" rel="noopener noreferrer" className="mt-1 text-sm text-blue-600 hover:underline">{contact.website}</a>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">Services Interested In</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <span key={service?._id || service?.name || `svc-${index}`} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {typeof service === "string" ? service : service?.name || String(service)}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                {statusOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm" placeholder="Add notes about this contact..." />
            </div>
            <div className="text-sm text-gray-500">
              <p>Created: {new Date(contact.createdAt).toLocaleString()}</p>
              <p>Updated: {new Date(contact.updatedAt).toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">Cancel</button>
            <button onClick={handleUpdate} className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">Update Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}
