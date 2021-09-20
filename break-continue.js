const products = [
    {name: 'samsung s3 phone', price: 12000},
    {name: 'asus Laptop d34', price: 32000},
    {name: 'apple smart watch', price: 18000},
    {name: 'basundhara binding paper', price: 80},
    {name: 'lg smart phone price', price: 10000},
];

for (const product of products) {
    if(product.price < 1000) {
        continue;
    }
    console.log(product);
}