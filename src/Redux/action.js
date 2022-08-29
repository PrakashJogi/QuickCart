
export const ADD = (item) =>
{
    return{
        type:"ADD_TO_CART",
        payload: item
    }
}

export const ADD_QTY = (item) =>
{
    return{
        type:"ADD_QUANTITY",
        payload: item
    }
}

export const DELETE = (id) =>
{
    return{
        type:"REMOVE_CART",
        payload: id
    }
}


export const RMV_QTY = (item) =>
{
    return{
        type:"REMOVE_QTY",
        payload: item
    }
}


