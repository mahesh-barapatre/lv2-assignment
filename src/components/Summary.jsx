import React from 'react';

const AdminSummary = ({ formData }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <div className="mb-4">
        <p className="text-gray-700"><strong>Full Name:</strong> {formData.fullName}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Email:</strong> {formData.email}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Phone Number:</strong> {formData.phoneNumber}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Position Applied For:</strong> {formData.position}</p>
      </div>
      {['Developer', 'Designer'].includes(formData.position) && (
        <div className="mb-4">
          <p className="text-gray-700"><strong>Relevant Experience:</strong> {formData.experience} years</p>
        </div>
      )}
      {formData.position === 'Designer' && (
        <div className="mb-4">
          <p className="text-gray-700"><strong>Portfolio URL:</strong> {formData.portfolio}</p>
        </div>
      )}
      {formData.position === 'Manager' && (
        <div className="mb-4">
          <p className="text-gray-700"><strong>Management Experience:</strong> {formData.managementExperience}</p>
        </div>
      )}
      <div className="mb-4">
        <p className="text-gray-700"><strong>Additional Skills:</strong> {formData.additionalSkills.join(', ')}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Preferred Interview Time:</strong> {formData.interviewTime}</p>
      </div>
    </div>
  );
};

export default AdminSummary;
