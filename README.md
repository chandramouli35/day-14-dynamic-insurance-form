# Day 14 – Smart Insurance Form with Conditional Fields & Dynamic Logic

This project is part of my 150-day developer preparation journey, focusing on building form flows that adapt to user inputs. On Day 14, I built a reactive insurance application form that dynamically shows or hides fields based on previous answers — just like real onboarding flows in fintech and gov-tech systems.

## ✅ What I Practiced:
- Controlled React inputs with dynamic visibility
- useState/useEffect for field logic and transitions
- Conditional validation based on field visibility
- Tailwind CSS for responsive layout and consistent spacing
- Optional transitions for field reveal and UX smoothness

## 🧠 Key Concepts Covered:
- Conditional JSX rendering for form fields
- Logic-based UX flow (age < 18 ➝ show guardian info)
- Regex validation for email, PAN, phone
- Modular component structure for form and section groups
- Error handling per field and step

## 🛠 Features:
- Personal Details (Name, Age, Gender)  
- Show guardian fields if age < 18  
- Show pregnancy field if gender = "Female"  
- Medical history toggle ➝ reveal conditions field  
- Submit only visible/valid fields  
- Responsive Tailwind layout with transitions  
- Optional: Store input in localStorage

## ⚙️ Tech Stack:
- React.js (Functional components + Hooks)
- Tailwind CSS
- useState/useEffect
- Optional: Context API or localStorage

## 🔥 Why This Matters:
Real products don’t ask every user every question — they adjust. Conditional forms reduce friction, improve clarity, and create trust. This build mirrors real-life flows seen in insurance portals, user onboarding, and compliance workflows.

> Day 14 complete. Every field I hide makes the experience smarter. Every form I build makes the product tighter.
