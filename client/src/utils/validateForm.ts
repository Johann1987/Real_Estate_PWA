/* eslint-disable no-plusplus */
import { FormValues } from 'interfaces/property';

export const validateForm = (formValues: FormValues) => {
  const errors: { message: string } = { message: '' };
  let hasError = false;

  Object.keys(formValues).forEach((key) => {
    switch (key) {
      case 'title':
        if (!formValues.title) {
          errors.message = 'Le titre est requis';
          hasError = true;
        }
        break;

      case 'description':
        if (!formValues.description) {
          errors.message = 'La description est requise';
          hasError = true;
        }
        break;

      case 'propertyType':
        if (!formValues.propertyType) {
          errors.message = 'Le type de bien est requis';
          hasError = true;
        }
        break;

      case 'location':
        if (!formValues.location) {
          errors.message = 'Le lieux est requis';
          hasError = true;
        }
        break;

      case 'price':
        if (!formValues.price) {
          errors.message = 'Le prix est requis';
          hasError = true;
        }
        break;

      default:
        hasError = false;
    }
  });

  return { hasError, errors };
};

export const hasChanged = (initialValues: FormValues, currentValues: FormValues) => {
  const initialValuesArray = Object.values(initialValues);
  const currentValuesArray = Object.values(currentValues);
  for (let i = 0; i < initialValuesArray.length; i++) {
    if (initialValuesArray[i] !== currentValuesArray[i]) {
      return true;
    }
  }
  return false;
};