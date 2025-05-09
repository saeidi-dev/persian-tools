import { it, expect } from "vitest";
import { urlFix } from "../src";

it("urlFix", () => {
	expect(
		urlFix(
			"https://fa.wikipedia.org/wiki/%D9%85%D8%AF%DB%8C%D8%A7%D9%88%DB%8C%DA%A9%DB%8C:Gadget-Extra-Editbuttons-botworks.js",
		),
	).toEqual("https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-botworks.js");
	expect(urlFix("https://en.wikipedia.org/wiki/Persian_alphabet")).toEqual(
		"https://en.wikipedia.org/wiki/Persian_alphabet",
	);
	expect(urlFix("https://fa.wikipedia.org/wiki/%D8%AF%DB%8C%D8%A7%DA%A9%D9%88")).toEqual(
		"https://fa.wikipedia.org/wiki/دیاکو",
	);
	expect(
		urlFix(
			"https://fa.wikipedia.org/wiki/%D9%85%DA%A9%D8%A7%D9%86%DB%8C%DA%A9%20%DA%A9%D9%88%D8%A7%D9%86%D8%AA%D9%88%D9%85%DB%8C",
			"_",
		),
	).toEqual("https://fa.wikipedia.org/wiki/مکانیک_کوانتومی");
	expect(
		urlFix(
			"https://fa.wikipedia.org/wiki/%D9%85%DA%A9%D8%A7%D9%86%DB%8C%DA%A9%20%DA%A9%D9%88%D8%A7%D9%86%D8%AA%D9%88%D9%85%DB%8C",
			"-",
		),
	).toEqual("https://fa.wikipedia.org/wiki/مکانیک-کوانتومی");
	expect(urlFix("Sample Text")).toEqual("Sample Text");
	expect(urlFix()).toBeUndefined();
});
