export const upperCaseTag = (root_tag_name) => {
  const strArray = root_tag_name.split("");
  strArray[0] = strArray[0].toUpperCase();
  return strArray.join("");
};
