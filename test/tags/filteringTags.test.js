import {
  rootTags,
  filterTags,
} from "../../src/components/utils/tags/filteringTags.js";
import tags from "./mock/mock_tags.js";
import { expect, test } from "vitest";

const tagsArr = [
  "cuisine",
  "dietary",
  "difficulty",
  "meal",
  "occasion",
  "appliance",
  "cooking_style",
  "seasonal",
  "business_tags",
  "equipment",
];
const unsortedArr = [
  {
    display_name: "North American",
    id: 64444,
    name: "north_american",
    root_tag_type: "cuisine",
    type: "cuisine",
  },
  {
    display_name: "Italian",
    id: 64453,
    name: "italian",
    root_tag_type: "cuisine",
    type: "european",
  },
  {
    display_name: "Gluten-Free",
    id: 64465,
    name: "gluten_free",
    root_tag_type: "dietary",
    type: "dietary",
  },
];

const roots = ["cuisine", "dietary"];
const sortedArr = [
  [
    {
      display_name: "North American",
      id: 64444,
      name: "north_american",
      root_tag_type: "cuisine",
      type: "cuisine",
    },
    {
      display_name: "Italian",
      id: 64453,
      name: "italian",
      root_tag_type: "cuisine",
      type: "european",
    },
  ],
  [
    {
      display_name: "Gluten-Free",
      id: 64465,
      name: "gluten_free",
      root_tag_type: "dietary",
      type: "dietary",
    },
  ],
];

test("rootTags returns all the unique root tags from the tags array.", () => {
  expect(rootTags(tags.results)).toStrictEqual(tagsArr);
});

test("filterTags returns an array of arrays of sorted tag elements.", () => {
  expect(filterTags(unsortedArr, roots)).toStrictEqual(sortedArr);
});
