import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { setProduct, removeSelectedProduct } from "../redux/slice/productsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "react-hot-toast";

const ProductDetails = () => {
    const { productId } = useParams();
    const product = useAppSelector((store) => store.products.product);

    const dispatch = useAppDispatch();
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);

            dispatch(setProduct(response.data));
        } catch (error) {
            console.log("details err: ", error);
        }
    };

    const handleAddToCart = () => {
        toast.success("Added to cart");
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProduct();

        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);

    return (
        <div className="pt-20 grid gap-10">
            {product === null ? (
                <div> loading.... </div>
            ) : (
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="max-w-[350px] w-full h-full max-h-[350px]"
                            />
                        </div>

                        <div className="flex flex-col gap-4 text-left">
                            <h1 className="text-4xl font-bold"> {product.title} </h1>
                            <h2 className="text-2xl font-semibold">
                                <a href=""> ${product.price} </a>
                            </h2>
                            <h3 className="font-medium"> {product.category} </h3>

                            <p className="text-sm"> {product.description} </p>

                            <div>
                                <button
                                    onClick={handleAddToCart()}
                                    className="flex items-center gap-4 bg-green-500 py-2 px-4 rounded-md text-white"
                                >
                                    <FiShoppingCart />
                                    <p>Add to Cart</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
