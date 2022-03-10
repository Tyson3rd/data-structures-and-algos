let countdown = require('./index');

describe("countdown algorithm", () => {


	it("returns a string, counting down form a number n to 'BlastOff!' (0)", () => {

		expect(countdown(9)).toBe("9, 8, 7, 6, 5, 4, 3, 2, 1, BlastOff!");
		expect(countdown(10)).toBe("10, 9, 8, 7, 6, 5, 4, 3, 2, 1, BlastOff!");
		expect(countdown(1)).toBe("1, BlastOff!");

	});

	it('returns "BlastOff!" when input is 0', () => {
		expect(countdown(0)).toBe("BlastOff!");
	});

	it('returns "BlastOff!" when input is negative', () => {
		expect(countdown(-100)).toBe("BlastOff!");
	});
})