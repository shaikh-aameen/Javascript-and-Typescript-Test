class InvalidCouponCode extends Error {
    constructor(message) {
        super(message)
        this.name = "InvalidCouponCode: "
    }
}

function ApplyCoupon(code) {
    const couponCode = "SAVE10"

    try {
        if(code != couponCode){
        throw new InvalidCouponCode("Not valid code");

    }
    else{
        console.log("Coupon Applied");
    }
    } catch (error) {
        console.log("Error : " + error.message);
        
    }
    
}
ApplyCoupon("10")

