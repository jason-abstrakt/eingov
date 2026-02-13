'use client';

import { useEIN } from '@/context/EINContext';
import { ENTITY_TYPES } from '@/lib/constants';
import RadioCard from '@/components/ui/RadioCard';
import ShowMoreToggle from '@/components/ui/ShowMoreToggle';
import FieldError from '@/components/ui/FieldError';
import type { PrimaryEntityType } from '@/lib/types';
import { Edit2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EntitySelector() {
  const { state, dispatch } = useEIN();

  const primaryTypes = ENTITY_TYPES.filter((t) => t.primary);
  const secondaryTypes = ENTITY_TYPES.filter((t) => !t.primary);

  const handleSelect = (value: string) => {
    dispatch({ type: 'SET_ENTITY_TYPE', entityType: value as PrimaryEntityType });
  };

  const handleClear = () => {
    dispatch({ type: 'SET_ENTITY_TYPE', entityType: null as any });
  };

  return (
    <AnimatePresence mode="wait">
      {state.entityType ? (
        <motion.div
          key="summary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-sm text-gray-500 mb-1">Entity Type</p>
              <p className="font-semibold text-gray-900">
                {ENTITY_TYPES.find((t) => t.value === state.entityType)?.label}
              </p>
            </div>
            <button
              onClick={handleClear}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors"
            >
              <Edit2 className="w-3 h-3" />
              Change
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="list"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            What type of entity are you forming? <span className="text-red-500">*</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {primaryTypes.map((t) => (
              <RadioCard
                key={t.value}
                name="entityType"
                value={t.value}
                checked={state.entityType === t.value}
                onChange={() => handleSelect(t.value)}
                label={t.label}
                description={t.description}
              />
            ))}
          </div>

          <div className="mt-4">
            <ShowMoreToggle
              label="Show more entity types"
              expandedLabel="Show fewer entity types"
              defaultExpanded={false}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {secondaryTypes.map((t) => (
                  <RadioCard
                    key={t.value}
                    name="entityType"
                    value={t.value}
                    checked={state.entityType === t.value}
                    onChange={() => handleSelect(t.value)}
                    label={t.label}
                    description={t.description}
                  />
                ))}
              </div>
            </ShowMoreToggle>
          </div>

          <FieldError message={state.errors.entityType} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
