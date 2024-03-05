import { rootTags } from "../../src/components/utils/tags/rootTags.js";
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

test("rootTags returns all the unique root tags from the tags array.", () => {
  expect(rootTags(tags.results)).toStrictEqual(tagsArr);
});
