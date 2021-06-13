const { getLength, isPalindrome, convert, plantTrees } = require("./index");

describe("Test All Function", () => {
  test("Find Length of the Nested Array", () => {
    expect(getLength([1, [2, 3]])).toBe(3);
    expect(getLength([1, [2, [3, 4]]])).toBe(4);
    expect(getLength([1, [2, [3, [4, [5, 6]]]]])).toBe(6);
    expect(getLength([1, [2], 1, [2], 1])).toBe(5);
  });

  test("Check Palindrome Word", () => {
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("adieu")).toBe(false);
    expect(isPalindrome("rotor")).toBe(true);
    expect(isPalindrome("Tenet")).toBe(false);
    expect(isPalindrome("otto")).toBe(true);
  });

  test("Convert Temperature", () => {
    expect(convert("35°C")).toBe("95°F");
    expect(convert("19°F")).toBe("-7°C");
    expect(convert("33")).toBe("Error");
  });

  test("Plant Trees", () => {
    expect(plantTrees(3, 3, 1)).toBe(4);
    expect(plantTrees(3, 3, 3)).toBe(2);
    expect(plantTrees(3, 3, 2)).toBe(0);
    expect(plantTrees(3, 3, 0)).toBe(8);
  });
});
