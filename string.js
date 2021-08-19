
// searchBy IndexOF 


const products = [
    'My new Apple laptop',
    'my new Lenovo HardCore Bumbey Phone amar',
    'An Apple Band 1Tb Hard Laptop',
    'my Old Phone amar',
    'My friend Jhankar Mahbub iphone Laptop',
    'Dell 10Gb GPU laptop',
    'infinix 100gb black camera phone amar',
    'Xiomi s20 ulta pro max Phone'
]

const search = 'amar';
const outPut = [];

// for (const product of products) {
//     if (product.toLowerCase().indexOf(search.toLowerCase()) != -1) {
//         outPut.push(product)
//     }
// }

// console.log(outPut);


// for (const product of products) {
//     if (product.toLowerCase().includes(search.toLowerCase())) {
//         outPut.push(product)
//     }
// }

// console.log(outPut);

// for (const product of products) {
//     if (product.toLowerCase().startsWith(search.toLowerCase())) {
//         outPut.push(product)
//     }
// }

// console.log(outPut);


for (const product of products) {
    if (product.toLowerCase().endsWith(search.toLowerCase())) {
        outPut.push(product)
    }
}

console.log(outPut);