export const rootTags = (arr) => {
  let roots = [];
  arr.forEach((element) => {
    if (!roots.includes(element.root_tag_type)) {
      roots.push(element.root_tag_type);
    }
  });
  return roots;
};

export const filterTags = (arr, roots) => {
  let result = [];
  for (const root of roots) {
    result.push(arr.filter((element) => element.root_tag_type === root));
  }
  return result;
};
