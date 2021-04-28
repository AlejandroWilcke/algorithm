/*
	Algorithm working order:
	-Sort the array in ascending order with QuickSort.
	-Loop the array O(n-1) inserting missing numbers.
	-Fill from 1 to m the remaining missing numbers (m being the smallest and first number in the sorted array).
*/

function sortAndFill(unsortedArray){

	if( unsortedArray.length < 2){
		return unsortedArray;
	}

	let array = quickSort(unsortedArray);

	fillSortedArray(array)

	unshiftRemainingNumbers(array)

	return array;

}

function fillSortedArray(sortedArray){
	for(let i = 1; i < sortedArray.length; i++ ){
		if( sortedArray[i] - sortedArray[i-1] > 1 ){
			sortedArray.splice(i, 0, sortedArray[i-1]+1)
			i--;
		}
	}
}

function unshiftRemainingNumbers(filledArray){
	while( filledArray[0] != 1 ){
		filledArray.splice(0, 0, filledArray[0] - 1)
	}
}

function quickSort(arr, left = 0, right = arr.length - 1) {

  if(arr.length > 1) {

    let index = partition(arr, left, right)

    if(left < index - 1) {
      quickSort(arr, left, index - 1)
    } 

    if(index < right) {
      quickSort(arr, index, right)
    }

  }

  return arr;

}

function partition(arr, left, right) {

  let middle = Math.floor((right + left) / 2),
      pivot = arr[middle],
      l = left,
      r = right

  while(l <= r) {

    while(arr[l] < pivot) {
      l++
    }

    while(arr[r] > pivot) {
      r--
    }

    if(l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    }

  }

  return l;

}

module.exports = { quickSort, sortAndFill, fillSortedArray, unshiftRemainingNumbers }