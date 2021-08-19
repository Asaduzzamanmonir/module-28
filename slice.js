const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
const words = anthem.split(' ');
const withOutA = anthem.split('a')
// console.log(withOutA);


//slice
const sliced = anthem.slice(1, 12);
// console.log(sliced);


//substr
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

//subString
const anotherPath = anthem.substring(15, 24)
// console.log(anotherPath);

//Concat
const first = 'tomay ami';
const second = 'Valobashi'
// const add = first + second;
const add = first.concat(second)
// console.log(add);

// Join 
const word = ['Alim', 'Badhon', 'Camaaron', 'David']
// const joining = word.join('')
// const joining = word.join(' ')
// const joining = word.join('*')
// const joining = word.join(', ')
const joining = word.join('* joined *')
console.log(joining);