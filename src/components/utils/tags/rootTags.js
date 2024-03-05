export const rootTags = (arr) => {
  let roots = [];
  arr.forEach((element) => {
    if (!roots.includes(element.root_tag_type)) {
      roots.push(element.root_tag_type);
    }
  });
  return roots;
};
