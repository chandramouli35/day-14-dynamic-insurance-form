import { useState } from "react";

function PregnancySection({ formData, setFormData, errors, isVisible }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!isVisible) return null;

  return (
    <div className="transition-all duration-300 ease-in-out animate__animated animate__slideInUp">
      <h2 className="text-xl font-semibold mb-4">
        Pregnancy Information (Optional)
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium">Pregnancy Status</label>
          <select
            name="pregnancyStatus"
            value={formData.pregnancyStatus || ""}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          >
            <option value="">Not Specified</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PregnancySection;
