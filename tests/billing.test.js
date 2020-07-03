import { calculateCost } from '../libs/billing-lib';

test('Tier costs', () => {
	const testCases = [
		{ storage: 10, expectedCost: 4000 },
		{ storage: 100, expectedCost: 20000 },
		{ storage: 101, expectedCost: 10100 },
	];

	testCases.forEach((testCase) => {
		expect(calculateCost(testCase.storage)).toEqual(testCase.expectedCost);
	});
});
