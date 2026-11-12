export const validateForm = (
  name: string,
  price: string
): { name?: string; price?: string } => {
  const errors: { name?: string; price?: string } = {};

  const trimmedName = name.trim();
  if (!trimmedName) {
    errors.name = 'Название обязательно для заполнения';
  } else if (trimmedName.length < 2) {
    errors.name = 'Название должно содержать минимум 2 символа';
  }

  if (!price.trim()) {
    errors.price = 'Цена обязательна для заполнения';
  } else if (isNaN(Number(price)) || Number(price) <= 0) {
    errors.price = 'Цена должна быть числом больше 0';
  }

  return errors;
};