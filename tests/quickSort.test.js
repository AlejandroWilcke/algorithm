const { quickSort } = require('../src/algorithm');

/*
	More items = More Sorting Time 
	Given 100.000.000 as the biggest value in the numbers array:
	(  10.000.000 (length) =>  6.35 seconds )
	( 100.000.000 (length) => 25.40 seconds )
*/

test('sorts a small array of positive numbers', () => {
    let smallArray = [2, 1, 4, 5];
    expect( quickSort(smallArray) ).toEqual([1, 2, 4, 5]);
});

test(`sorts a 10.000.000 length array of big positive numbers (max value 100.000.000) in 7 seconds or less`, () => {

    let bigArray = [];
    let bigNumber = 100000000;
    let arrayLength = 10000000;

    for(let i = 0; i < arrayLength; i++ ){
        bigArray.push( Math.ceil( Math.random()  * bigNumber ) ) 
    }

    let startingTime = new Date().getTime();
    let sortedArray  = quickSort(bigArray);
    let finishingTime = new Date().getTime();

    expect( finishingTime - startingTime ).toBeLessThanOrEqual( 7 * 1000 )
    expect( sortedArray ).toEqual( bigArray.sort( (a, b) => a - b) )

});