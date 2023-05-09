export const useUtilities = () => {
  function capitalize(cityName) {
    return cityName.replace(/^\w/, (c) => c.toUpperCase());
  }

  return {
    capitalize,
  };
};
