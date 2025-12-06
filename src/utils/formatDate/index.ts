const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-GB").replace(/\//g, "-");
};

export default formatDate;
