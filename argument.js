// function addNum(numbers) {
//     let result = 0;
//     for (const num of arguments) {
//         result = result + num
//     }
//     return result;

// }

// const sum = addNum(13, 87, 100, 5000, 125);
// console.log(sum);

function getFullName(names) {
    let fullName = '';
    for (const name of arguments) {
        fullName = fullName + ' ' + name;
    }
    return fullName;
}

const results = getFullName('Sheikh', 'Mohammad', 'Asaduzzaman', 'Monir', 'Adbul', 'Gaffar', 'Bin', 'Shoyud', 'Hossain', 'Ummah')
console.log(results);


function getLife() {
    let error = '';
    for (const part of li) {

    }
}

const me = getLife(['life', 'learning']);
console.log(me);