// Removed unused import statement
import "./ProductCard.css";
import PropTypes from "prop-types";
const ProductCard = ({product}) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
        <div className="textPart bg-white p-3">
          <div>
            <p className="font-bold opacity-60">{product.brand}</p>
            <p>{product.title}</p>
          </div>
          <div className="flex items-center text-green-950 space-x-2">
            <p className="font-semibold textgreen-600">₹{product.discountedPrice}</p>
            <p className="textgreen-600 line-through opacity-50">{product.price}</p>
            <p className="textgreen-600 font-semibold">{product.discountPersent}% off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    discountPersent: PropTypes.number.isRequired,
  }).isRequired,
};

