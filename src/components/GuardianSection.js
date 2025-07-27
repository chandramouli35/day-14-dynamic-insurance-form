import { useState } from "react";

function GuardianSection({ formData, setFormData, errors, isVisible }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [`guardian${name}`]: value });
  };

  if (!isVisible) return null;

  return (
    <div className="transition-all duration-300 ease-in-out animate__animated animate__fadeIn">
      <h2 className="text-xl font-semibold mb-4">Guardian Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Guardian Name</label>
          <input
            name="Name"
            value={formData.guardianName || ""}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          {errors.guardianName && (
            <p className="text-red-500 text-sm">{errors.guardianName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Relation</label>
          <input
            name="Relation"
            value={formData.guardianRelation || ""}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          {errors.guardianRelation && (
            <p className="text-red-500 text-sm">{errors.guardianRelation}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GuardianSection;
