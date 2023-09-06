import { useState, useMemo } from 'react';

const useFormValidation = (initialState, validationRules) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    const fieldRules = validationRules[fieldName];
    if (!fieldRules) return;

    const fieldErrors = [];
    for (const rule of fieldRules) {
      if (rule.validator(value, formData)) {
        fieldErrors.push(rule.message);
      }
    }

    setErrors({ ...errors, [fieldName]: fieldErrors });
  };

  const setError = (fieldName, errorMessage) => {
    setErrors({ ...errors, [fieldName]: [errorMessage] })
  }

  const handleChange = (evt) => {
    if (evt.target === undefined) return;

    const { name, value } = evt?.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const isFormValid = useMemo(() => {
    return Object.keys(errors).every((key) => errors[key].length === 0);
  }, [errors]);

  return { formData, errors, handleChange, isFormValid, setError };
};

export { useFormValidation };