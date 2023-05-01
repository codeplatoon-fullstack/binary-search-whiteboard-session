// assumes sorted array of non-negative values
// returns element if found, -1 otherwise
function binarySearch(elemToFind, arr) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let stepCount = 0;

    while (startIndex <= endIndex) {
        stepCount++;
        const middleIndex =
            startIndex + Math.floor((endIndex - startIndex) / 2);

        const middleValue = arr[middleIndex];

        // match case
        if (middleValue === elemToFind) {
            console.log(`search for ${elemToFind} succeeded in ${stepCount} steps for an array of ${arr.length} elements`);
            return middleValue;
            // lower, so cut search down to first half
        } else if (elemToFind < middleValue) {
            endIndex = middleIndex - 1;
            // higher, so cut search down to latter half
        } else {
            startIndex = middleIndex + 1;
        }
    }

    // search exhausted, return 'not found' value
    console.log(`search for ${elemToFind} failed in ${stepCount} steps for an array of ${arr.length} elements`);
    return -1;
}

const searchArr = [1, 4, 8, 16, 33, 67, 72, 100];
binarySearch(4, searchArr);
binarySearch(33, searchArr);
binarySearch(100, searchArr);
binarySearch(4000, searchArr);

// pushed to its limits
// (most of the time this takes to run is just creating the array not our algo)
binarySearch(4, Array(100000000).fill(0));