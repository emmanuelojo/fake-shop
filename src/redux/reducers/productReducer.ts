import { ActionTypes } from "../constants/action-types";

export interface Product {
    id: number;
    title: string;
    img: string;
    price: number;
    quantity: number;
    category: string;
}

const initialState = {
    products: [
        {
            id: 1,
            title: "Product 1",
            category: "web",
        },
    ],
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};
