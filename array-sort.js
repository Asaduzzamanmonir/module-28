const numbers = [4, 2, 5, 1, 3, 9, 6, 8, 7];
const serial = numbers.sort();
// console.log(serial);


const friends = ['Shaon', 'Asif', 'Nirob', 'Shagor', 'Susmoy']
// const serialWise = friends.sort();
// console.log(serialWise);
// const reversed = friends.reverse();
// console.log(reversed);

const sortReversedFriend = friends.sort().reverse();
// console.log(sortReversedFriend);


// Fun With Sorting

/* =============not working this function================= */
/* const bigNumber = [55, 84, 92, 99, 5, 6, 8, 96, 91, 81, 12, 2]
const sortedBigNumber = bigNumber.sort();
console.log(bigNumber);
 */


/*=========== Work this Function================== */
const megaNumber = [55, 84, 92, 99, 5, 6, 8, 96, 91, 81, 12, 2]
const sortedBigNumber = megaNumber.sort(function (a, b) {
    return a - b;
});
console.log(megaNumber);