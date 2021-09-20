const products = [
    {name: 'samsung s3 phone', price: 12000},
    {name: 'asus Laptop d34', price: 32000},
    {name: 'apple smart watch', price: 18000},
    {name: 'basundhara binding paper', price: 80},
    {name: 'lg smart phone price', price: 10000},
]

function searchProducts(products, searchText) {
    const matched = []
    for(const product of products) {
        const name = product.name;
        if(name.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }
    return matched;

}

const matched = searchProducts(products, 'phone');
console.log(matched);