// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function merge(array, low, mid, high) {
    let i = low;
    let j = mid + 1;
    let array02 = [];  // Temporary array

    // Merge both halves
    while (i <= mid && j <= high) {
        if (array[i] <= array[j]) {
            array02.push(array[i++]);
        } else {
            array02.push(array[j++]);
        }
    }

    // Copy remaining elements from left part
    while (i <= mid) {
        array02.push(array[i++]);
    }

    // Copy remaining elements from right part
    while (j <= high) {
        array02.push(array[j++]);
    }

    // Copy back the merged elements
    for (let x = low, index = 0; x <= high; x++, index++) {
        array[x] = array02[index];
    }
}

function mergeSort(array, low, high) {
    if (low < high) {  // Use if, not while
        let mid = Math.floor((low + high) / 2);
        mergeSort(array, low, mid);
        mergeSort(array, mid + 1, high);
        merge(array, low, mid, high);
    }
}

function sortString(string){
    let strArray = string.split("") ; // convert string to array
    mergeSort(strArray, 0, strArray.length-1) ; // sort array 
    let sortedString = strArray.join("") ; // convert array to string 
    return sortedString ; 
}

// Fix function call
let strr = "this that string"; // Convert string to array
let newstr = sortString(strr) ;
console.log(newstr); // Convert array back to string
