function moveZeroes(arr) {
    var i = 0, c = 0;
    while (i < arr.length) {
        if (arr[i] != 0) {
            arr[c] = arr[i];
            c++;
        }
        i++;
    }
    while (c < arr.length) {
        arr[c++] = 0;
    }
}
var a = [ 0, 1, 0, 3, 12];
moveZeroes(a);
console.log(a);