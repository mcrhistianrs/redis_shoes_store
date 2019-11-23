export function addToCart(product){
    return {
        type: '@cart/ADD',
        product,
    }
}

export function removeFromCart(id){
    return { 
        type: '@cart/REMOVE' , 
        id,
    }
}

export function updatedAmount(id,amount){
    return {
        type: '@cart/UPDATE_AMOUNT',
        id,
        amount,
    }
}