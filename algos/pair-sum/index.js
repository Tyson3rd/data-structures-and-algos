function pairSum(arr, sum){
	// Complete the function!
	// Arr = array, sum is expected result.
	//return true or false if any combination += sum
	//with var for length lowest was: 0.263
	//with arr.length lewest was: 0.266
	let len = arr.length;
	for(let i= 0; i < len; i++){
		for (let n = i; n < len; n++){
			//console.log(`Sum: ${arr[i]}+${arr[n]}:`, arr[i] + arr[n]);
			if(sum == (arr[i] + arr[n]) && arr[i] != arr[n]){ return true; }
		}
	}
	return false;
}

module.exports = pairSum