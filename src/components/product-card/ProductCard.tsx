import { NavLink } from 'react-router-dom';
import Product from '../../types/product';
import Star from '../star/Star';
import './ProductCard.scss';

const ProductCard = (props: Product) => {

  const renderStars = (rating: number) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);

    return [...Array(totalStars)].map((_, index) => (
      <Star key={index} filled={index < filledStars} />
    ));
  };

  return (
    <div className="product-card">
      <NavLink to={`/products/${props?.id}`} className="product-card__image">
        <img src={props?.images[0]} alt={props?.description} />
      </NavLink>
      <div className="product-card__content">
        <h3 className='product-card__category'>{props?.category?.toUpperCase()}</h3>
        <h2 className='product-card__title'>{props?.title}</h2>
        <p className='product-card__description'>{props?.description}</p>
        <p className='product-card__availability'>{props?.availabilityStatus} (<span>{props?.stock}</span>)</p>
        <div className="product-card__price">
          <p>${props?.price}</p>
          <div>
            {renderStars(props?.rating)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
