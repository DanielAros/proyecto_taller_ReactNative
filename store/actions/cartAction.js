export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addToCart = (item) =>{
    return {
        type: ADD_TO_CART,
        item:item
    }
}

export const deleteItemFromCart = (id) =>{
    return {
        type:DELETE_ITEM,
        id:id
    }
}