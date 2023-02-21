// array.sort()             personal notes from youtube
// function(a, b){return a - b}

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.

let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(ascendingSort);

grades.forEach(print);

function descendingSort(x, y) {
    return y - x;
}

function ascendingSort(x, y) {
    return x - y;
}

function print(element) {
    console.log(element);
}