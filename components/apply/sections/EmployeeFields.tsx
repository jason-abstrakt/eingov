'use client';

import { useEIN } from '@/context/EINContext';
import TextInput from '@/components/ui/TextInput';
import DateInput from '@/components/ui/DateInput';
import RadioGroup from '@/components/ui/RadioGroup';

export default function EmployeeFields() {
  const { state, dispatch } = useEIN();

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-700">
        Employee Information <span className="text-xs text-gray-400">(optional)</span>
      </h3>
      <p className="text-xs text-gray-500 -mt-2">
        If you expect to hire employees, provide your best estimates below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <TextInput
          label="Agricultural Employees"
          name="agriculturalCount"
          value={state.employeeInfo.agriculturalCount}
          onChange={(e) =>
            dispatch({
              type: 'SET_EMPLOYEE_FIELD',
              field: 'agriculturalCount',
              value: e.target.value.replace(/\D/g, ''),
            })
          }
          placeholder="0"
          helpText="Farm or ranch workers"
        />
        <TextInput
          label="Household Employees"
          name="householdCount"
          value={state.employeeInfo.householdCount}
          onChange={(e) =>
            dispatch({
              type: 'SET_EMPLOYEE_FIELD',
              field: 'householdCount',
              value: e.target.value.replace(/\D/g, ''),
            })
          }
          placeholder="0"
          helpText="Nannies, housekeepers, etc."
        />
        <TextInput
          label="Other Employees"
          name="otherCount"
          value={state.employeeInfo.otherCount}
          onChange={(e) =>
            dispatch({
              type: 'SET_EMPLOYEE_FIELD',
              field: 'otherCount',
              value: e.target.value.replace(/\D/g, ''),
            })
          }
          placeholder="0"
        />
      </div>

      <DateInput
        label="Date of First Wages"
        name="dateFirstWages"
        value={state.employeeInfo.dateFirstWages}
        onChange={(e) =>
          dispatch({ type: 'SET_EMPLOYEE_FIELD', field: 'dateFirstWages', value: e.target.value })
        }
        helpText="When do you expect to first pay wages? Leave blank if unknown."
      />

      <RadioGroup
        label="Do you expect your annual employment tax liability to be $1,000 or less?"
        name="expectLowLiability"
        options={[
          { value: 'true', label: 'Yes' },
          { value: 'false', label: 'No' },
        ]}
        value={state.employeeInfo.expectLowLiability === null ? '' : String(state.employeeInfo.expectLowLiability)}
        onChange={(e) =>
          dispatch({
            type: 'SET_EMPLOYEE_FIELD',
            field: 'expectLowLiability',
            value: e.target.value === 'true',
          })
        }
        direction="horizontal"
      />
    </div>
  );
}
