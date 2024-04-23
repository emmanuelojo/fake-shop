import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
    category: string;
    description: string;
}

const initialState = {
    products: [] as Product[],
    product: null as Product | null,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state = initialState, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },

        setProduct: (state = initialState, action: PayloadAction<Product>) => {
            state.product = action.payload;
        },

        removeSelectedProduct: (state) => {
            state.product = null;
        },
    },
});

export const { setProducts, setProduct, removeSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
