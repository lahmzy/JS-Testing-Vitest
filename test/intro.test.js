import { describe, expect, it } from "vitest";
import { caluclateAverage, fizzBuzz, max,factorial } from "../src/intro.js";

describe("max", () => {
  it("should return first argument if its greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first number if both are equal", () => {
    expect(max(3, 3)).toBe(3);
  });
});

describe("fizzbuzz", () => {
  it("should return FizzBuzz if number is both divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if number is both divisible by 3", () => {
    expect(fizzBuzz(81)).toBe("Fizz");
  });

  it("should return Buzz if number is both divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return a string if number is neither divisible by 5 nor 3", () => {
    expect(fizzBuzz(8)).toBe("8");
  });
});

describe("calculate Average", ()=> {
    it("should return Nan if argument passed is an empty array", () => {
        expect(caluclateAverage([])).toBeNaN
    })

    it("shoulde return avergae if an array is passed", () => {
        expect(caluclateAverage([1,2,3])).toBe(2)
    })
})

describe("factorial", () =>{
    it("should return 1 if number is 0", () => {
        expect(factorial(0)).toBe(1);
    });
    
    it("should return 1 if number is 1", () => {
        expect(factorial(1)).toBe(1);
    });
    
    it("should return the factorial of a number greater than 1", () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(4)).toBe(24);
        expect(factorial(3)).toBe(6);
        expect(factorial(2)).toBe(2);
    });
})
