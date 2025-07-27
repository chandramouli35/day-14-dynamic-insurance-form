import { useState } from "react";

function FormSection({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Age</label>
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Medical History</label>
          <select
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
