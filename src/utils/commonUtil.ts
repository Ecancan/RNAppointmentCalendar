export const isNil = (value) => value === null || value === undefined;
export const isSet = (value) => !isNil(value);
export const isEmpty = (value) => {
  const type = typeof value;

  if (value !== null && type === 'object') {
    const properties = Object.keys(value);

    return properties.length === 0;
  } else if (type === 'function') {
    const res = value();

    return isEmpty(res);
  }

  return !value;
};
