import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridComponent from "../../components/product/ProductGridComponent";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";

const ProductGrid = ({
  products,
  currency,
  addToCart,
  addToWishlist,
  cartItems,
  wishlistItems,
  sliderClassName,
  spaceBottomClass
}) => {
  return (
    <Fragment>
      {products.map(product => {
        return (
          <ProductGridComponent
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            currency={currency}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            cartItem={
              cartItems.filter(cartItem => cartItem.id === product.id)[0]
            }
            wishlistItem={
              wishlistItems.filter(
                wishlistItem => wishlistItem.id === product.id
              )[0]
            }
            key={product.id}
          />
        );
      })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  addToCart: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(
      state.productData.products,
      ownProps.category,
      ownProps.type,
      ownProps.limit
    ),
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
