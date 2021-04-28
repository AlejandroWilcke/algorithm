const { unshiftRemainingNumbers } = require('../src/algorithm');

/*
	Bigger numbers && Few items = More Filling Time
	Given 10 numbers && 150.000 as the smallest number
	( Items = 10 && SmallestNumber = 100.000 &&  =>  3.8 seconds )
	( Items = 10 && SmallestNumber = 150.000 &&  => 13.4 seconds )
*/

test('unshifts sequentially missing numbers into a sorted array of positive numbers', () => {
    let sortedFilledArray = [15000, 15001, 15002, 15003];
	unshiftRemainingNumbers(sortedFilledArray)
    expect(sortedFilledArray.length).toEqual(15003);
});