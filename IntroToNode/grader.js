function average(arr) {
    var total = 0;
    var avg = 0;
    for(var i = 0; i<arr.length; i++) {
        total += arr[i];
        avg = total / arr.length;
    }
    return Math.round(avg);
}
console.log("Average score for environmental science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

console.log("Average score for organic chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));