import { useState } from "react";

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues || {});
  const [touchedValues, setTouchedValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (value, target) => {
    // const e = validate(values);
    // setErrors({
    //   ...e
    // });

    setValues({
      ...values,
      [target]: value,
    });
  };

  const handleBlur = target => {
    const newTouchedValues = {
      ...touchedValues,
      [target]: true,
    };
    setTouchedValues(newTouchedValues);
    let e = validate(values);
    if (target) {
      e = Object.entries(e).reduce((allErrors, [key, value]) => {
        if (Object.keys(newTouchedValues).includes(key)) {
          allErrors[key] = value;
        }
        return allErrors;
      }, {});
    }
    setErrors(e);
    return e;
  };

  const handleSubmit = (text, target) => {
    const e = validate(values);
    setErrors(e);

    onSubmit(values, e);
  };

  const clearValues = () => {
    setValues(initialValues || {});
    setTouchedValues({});
    setErrors({});
  };

  return {
    values,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    clearValues,
    setValues,
  };
};

export { useForm };
