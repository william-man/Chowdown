import { expect } from "vitest";
import { upperCaseTag } from "../../src/components/utils/tags/rootTagName";
import { expect, test } from "vitest";

const testString = "chicken";
const testStringResult = "Chicken";

test("upperCaseTag returns tag string of equal length", () => {
  expect(upperCaseTag(testString).length).toStrictEqual(testString.length);
});

test("upperCaseTag returns the same tag string if its returned to lowercase.", () => {
  expect(upperCaseTag(testString).toLowerCase()).toStrictEqual(testString);
});

test("upperCaseTag returns the tag string with 1st letter in uppercase.", () => {
  expect(upperCaseTag(testString)[0]).toStrictEqual(
    testString[0].toUpperCase()
  );
});

test("upperCaseTag returns the same string tag but with 1st letter in uppercase.", () => {
  expect(upperCaseTag(testString)).toStrictEqual(testStringResult);
});
