//isArray
function megaFriends(friends) {
    if (Array.isArray(friends) == true) {
        let mega = [0];
        for (const friend of friends) {
            if (friend.length > mega.length) {
                mega = friend;
            }

        }
        return mega;
    }
    else {
        return 'please provide a array'
    }

}

const friends = ['kutub', 'hunny', 'bunny', 'suny', 'yakubKha', 'Shamol'];
const bigBuddy = megaFriends(friends);
// console.log(bigBuddy);

//indexOf
if (friends.indexOf('yakubKha') != -1) {
    // console.log('hea! ache');
}

//includes
if (friends.includes('Sun') == true) {
    console.log('hea ache');
}
else {
    console.log(' nah! nai');
}


//concatenation  ebabeo jora dewa jay
const first = [1, 2, 3, 4, 5, 6];
const second = [7, 8, 9, 10, 11, 12];
const add = first.concat(second);
// console.log(add);