
const arr1 = [
    { name: "Mango", category: "Fruits" },
    { name: "Apple", category: "Fruits" },
    { name: "Tomato", category: "Vegetables" },
    { name: "Bringal", category: "Vegetables" },
];

const reducer = (acc, product) => {
    const { category,name } = product;
    acc[category] = acc[category] || []
    acc[category].push(name)
    // acc[category].push(product);
    return acc

}


const result = arr1.reduce(reducer, {})
console.log(result)