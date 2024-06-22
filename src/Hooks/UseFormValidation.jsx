import { useState } from 'react';

const useFormValidation = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? [...(prevData[name] || []), value] : prevData[name].filter((v) => v !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e, callback) => {
    e.preventDefault();
    // console.log(formData);
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    // console.log(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useFormValidation;
