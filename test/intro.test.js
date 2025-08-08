import { describe,it,expect,test } from "vitest";
import { max } from "../src/intro.js";

describe("max", () => {
    it("should return first argument if its greater", () => {
        expect(max(2, 1)).toBe(2);
        expect(max(1, 2)).toBe(2);
        expect(max(-1, -2)).toBe(-1);
        expect(max(-2, -1)).toBe(-1);
        expect(max(0, 0)).toBe(0);
    });
    
    it("should return the first number if both are equal", () => {
        expect(max(3, 3)).toBe(3);
    });
})