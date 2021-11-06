import {ADD_TO_CART, DELETE_ITEM} from "../actions/cartAction";

const initialState = {
    total:0,
    items:[],
}
export default (state=initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            // console.log(action.item)
            //const item = action.item;
            // item.id = Math.floor(Math.random() * 1001).toString()
            return{
                total:state.total+action.item.cost,
                items: [...state.items, action.item],
            }
        case DELETE_ITEM:
            let total = state.total // -> 1998
            let indexToDelete = state.items.findIndex(item=>item.id === action.id);
            total = state.total - state.items[indexToDelete].cost; //arreglo[4].cost
            state.items.splice(indexToDelete, 1)
            return{
                total:total,
                    items:state.items
            }
    }
    return state;
}