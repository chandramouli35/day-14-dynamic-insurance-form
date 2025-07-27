import { useState, useEffect } from "react";
import FormSection from "./components/FormSection";
import GuardianSection from "./components/GuardianSection";
import PregnancySection from "./components/PregnancySection";
import MedicalSection from "./components/MedicalSection";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    medicalHistory: "No",
    guardianName: "",
    guardianRelation: "",
    pregnancyStatus: "",
    medicalConditions: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age || isNaN(formData.age) || formData.age < 0)
      newErrors.age = "Valid age is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (formData.age < 18 && !formData.guardianName.trim())
      newErrors.guardianName = "Guardian name is required";
    if (formData.age < 18 && !formData.guardianRelation.trim())
      newErrors.guardianRelation = "Relation is required";
    if (formData.medicalHistory === "Yes" && !formData.medicalConditions.trim())
      newErrors.medicalConditions = "Conditions are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    validate(); // Sync validation with state changes
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const visibleData = {
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        ...(formData.age < 18 && {
          guardianName: formData.guardianName,
          guardianRelation: formData.guardianRelation,
        }),
        ...(formData.gender === "Female" && {
          pregnancyStatus: formData.pregnancyStatus,
        }),
        ...(formData.medicalHistory === "Yes" && {
          medicalConditions: formData.medicalConditions,
        }),
      };
      console.log("Submitted Data:", visibleData);
      alert("Form submitted successfully!");
    }
  };

  const isGuardianVisible = formData.age !== "" && parseInt(formData.age) < 18;
  const isPregnancyVisible = formData.gender === "Female";
  const isMedicalVisible = formData.medicalHistory === "Yes";

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Smart Insurance Application
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <FormSection
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
          <GuardianSection
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            isVisible={isGuardianVisible}
          />
          <PregnancySection
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            isVisible={isPregnancyVisible}
          />
          <MedicalSection
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            isVisible={isMedicalVisible}
          />
          <button
            type="submit"
            className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
