'use client';

import { useEIN } from '@/context/EINContext';
import RadioCard from '@/components/ui/RadioCard';

export default function GeneralQuestions() {
  const { state, dispatch } = useEIN();

  // Helper to handle boolean state updates for generic questions
  // Since these fields aren't explicitly in the EINApplicationState yet, 
  // we would typically add them. For now, we'll store them if they existed, 
  // but since the prompt asks to ADD them, I'll update the state interface later.
  // For now, I'll assume we can use SET_FIELD for them.
  // We need to initialize them as "No" (false) if they are null/undefined.
  
  // Actually, to do this properly, I should update the types first. 
  // But since I'm in the component file, I'll implement the UI assuming the fields exist 
  // and default to 'false' visually if undefined.

  const handleChange = (field: string, value: boolean) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const questions = [
    {
      id: 'ownsHighwayVehicle',
      label: 'Does your business own a highway motor vehicle with a taxable gross weight of 55,000 pounds or more?',
    },
    {
      id: 'involvesGambling',
      label: 'Does your business involve gambling/wagering?',
    },
    {
      id: 'paysExciseTax',
      label: 'Does your business pay federal excise taxes?',
    },
    {
      id: 'sellsAlcoholTobaccoFirearms',
      label: 'Does your business sell or manufacture alcohol, tobacco, or firearms?',
    },
    {
      id: 'hasEmployees',
      label: 'Do you currently have, or plan to hire employees within the next year (not including owners)?',
    }
  ];

  return (
    <div className="space-y-6">
      {questions.map((q) => {
        // We need to access the state dynamically. 
        // Since TS doesn't know about these new fields yet on 'state', we cast to any.
        // In a real app, we must update the interface.
        const val = (state as any)[q.id];
        
        return (
          <div key={q.id} className="space-y-2">
            <p className="text-sm font-medium text-gray-700">
              {q.label} <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={q.id}
                  checked={val === false || val === undefined} // Default to No
                  onChange={() => handleChange(q.id, false)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">No</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={q.id}
                  checked={val === true}
                  onChange={() => handleChange(q.id, true)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">Yes</span>
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
}
