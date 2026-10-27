function checkInvengtory(productname,quantity){
    const Threshold = 5;
    if (quantity < Threshold) {
        throw new Error("Low Stock ")
    }
    return 'The quantity available "${this.quantity}"'
}

try {
    console.log(checkInvengtory("Mouse",12));
    console.log(checkInvengtory("Keyboard",3));
    
    
} catch (error) {
    console.log("Error: " + error);
    
}
