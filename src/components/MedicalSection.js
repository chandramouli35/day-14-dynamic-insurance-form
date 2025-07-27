import { useState } from "react";

function MedicalSection({ formData, setFormData, errors, isVisible }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!isVisible) return null;

  return (
    <div className="transition-all duration-300 ease-in-out animate__animated animate__fadeIn">
      <h2 className="text-xl font-semibold mb-4">Medical Conditions</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium">Conditions</label>
          <input
            name="medicalConditions"
            value={formData.medicalConditions || ""}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          {errors.medicalConditions && (
            <p className="text-red-500 text-sm">{errors.medicalConditions}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MedicalSection;
