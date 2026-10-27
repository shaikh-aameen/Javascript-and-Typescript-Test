class Products {
    name
    productId
    price
    constructor(name, productId, price) {
        this.name = name
        this.productId = productId
        this.price = price
    }
    displayDetails(){
        console.log("Name: " + this.name);
        console.log("Product Id: " + this.productId);
        console.log("Price: " + this.price);
        
    }
}

const a = new Products("TV",1,1000)
a.displayDetails()