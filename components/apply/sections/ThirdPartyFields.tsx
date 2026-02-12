'use client';

import { useEIN } from '@/context/EINContext';
import TextInput from '@/components/ui/TextInput';
import AddressForm from '@/components/apply/sections/AddressForm';
import { formatPhone } from '@/lib/utils';

export default function ThirdPartyFields() {
  const { state, dispatch } = useEIN();

  if (state.applicantRole !== 'third_party') return null;

  const handleBlur = (field: string) => {
    dispatch({ type: 'TOUCH_FIELD', field });
  };

  return (
    <div className="mt-6 p-5 bg-gray-50 rounded-lg border border-gray-200 space-y-4">
      <h3 className="text-base font-semibold text-gray-900">Third Party Designee Information</h3>
      <p className="text-sm text-gray-500 -mt-2">
        Provide the contact details for the person authorized to receive the EIN.
      </p>

      <TextInput
        label="Designee Name"
        name="tpd.name"
        value={state.thirdPartyDesignee.name}
        onChange={(e) => dispatch({ type: 'SET_TPD_FIELD', field: 'name', value: e.target.value })}
        onBlur={() => handleBlur('tpd.name')}
        required
        error={state.errors['tpd.name']}
        placeholder="Full name of the third party designee"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput
          label="Phone Number"
          name="tpd.phone"
          value={state.thirdPartyDesignee.phone}
          onChange={(e) =>
            dispatch({
              type: 'SET_TPD_FIELD',
              field: 'phone',
              value: formatPhone(e.target.value),
            })
          }
          onBlur={() => handleBlur('tpd.phone')}
          required
          error={state.errors['tpd.phone']}
          placeholder="(555) 555-5555"
          maxLength={14}
        />
        <TextInput
          label="Fax Number"
          name="tpd.fax"
          value={state.thirdPartyDesignee.fax}
          onChange={(e) =>
            dispatch({
              type: 'SET_TPD_FIELD',
              field: 'fax',
              value: formatPhone(e.target.value),
            })
          }
          placeholder="(555) 555-5555 (optional)"
          maxLength={14}
        />
      </div>

      <div className="mt-2">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Designee Address</h4>
        <AddressForm
          prefix="tpd"
          address={state.thirdPartyDesignee.address}
          onFieldChange={(field, value) =>
            dispatch({ type: 'SET_TPD_ADDRESS_FIELD', field, value })
          }
          onBlur={handleBlur}
          errors={state.errors}
        />
      </div>
    </div>
  );
}
