const { fillSortedArray } = require('../src/algorithm');

/* 
	Bigger numbers = More Looping Time
	Given 10.000 items:
	( 1.000.000 =>  2.5 seconds)
	( 1.500.000 => 11.25 seconds)
*/

test('fills a small array of positive numbers with its missing numbers', () => {
	let smallArray = [1, 2, 4, 5];
	fillSortedArray(smallArray)
    expect( smallArray ).toEqual([1, 2, 3, 4, 5]);
});

test('fills with missing numbers a 500.000 length sorted array in O(n) in 8 seconds', () => {

	let arrayLength = 100000;
    
	let bigSortedArray = [];

	for(let i = 2; i <= arrayLength; i++ ){
      i % 2 === 0 ? bigSortedArray.push(i) : null;
    }

	let bigSortedFilledArray = [];

	for(let i = 2; i <= arrayLength; i++ ){
      bigSortedFilledArray.push(i);
    }

	let startingTime = new Date().getTime();
	fillSortedArray(bigSortedArray)
	let finishingTime = new Date().getTime();

	expect( finishingTime - startingTime ).toBeLessThanOrEqual( 8 * 1000 );
    expect( bigSortedArray ).toEqual( bigSortedFilledArray );
});