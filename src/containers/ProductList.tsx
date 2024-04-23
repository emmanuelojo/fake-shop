import React, { useEffect } from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/slice/productsSlice";

const ProductList = () => {
    const products = useAppSelector((store) => store.products.products);
    const dispatch = useAppDispatch();

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");

            dispatch(setProducts(response.data));
        } catch (error) {
            console.log("products error: ", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className="ui grid container">
            <h1>Product List</h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {products &&
                    products.map(({ id, image, title, price, category }) => (
                        <ProductComponent id={id} image={image} title={title} price={price} category={category} />
                    ))}
            </div>
        </div>
    );
};

export default ProductList;
