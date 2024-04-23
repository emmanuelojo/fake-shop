import { Link } from "react-router-dom";

type Props = {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
};

const ProductComponent = ({ id, image, title, price, category }: Props) => {
    return (
        <Link to={`/products/${id}`}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title} className="w-40 h-40" />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">$ {price} </div>
                        <div className="meta"> {category} </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductComponent;
