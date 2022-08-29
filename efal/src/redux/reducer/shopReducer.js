import { useEffect } from "react";
import { successNote } from "../../components/Toasty";
import {
  FILTER_CATEGORY,
  ADD_TO_CARD,
  SEARCH,
  FETCH_ALL,
  SUBTRACT_TO_CARD,
} from "../actions/blogTypes";

const initialState = {
  productList: [],
  toAddedIds: [],
  toAddedProduct: [],
  tofilteredProduct: [],
};

const shopReducer = (state = initialState, action) => {
  const sameKeyAdded = [...state.toAddedProduct].filter(
    (e) => e.id === action.state.id
  );
  const subtractedProducts = [...state.toAddedProduct].filter(
    (e) => e.id !== action.state.id
  );
  const thisStateProductAmount = [...state.toAddedProduct].filter(
    (e) => e.id === action.state.id
  );

  switch (action.type) {
    case FILTER_CATEGORY:
      return {
        ...state,
        productList: action.state,
      };
    case ADD_TO_CARD:
      console.log(action.state.productAmount);
      const newProduct = {
        ...action.state,
        productAmount:
          (Number(action.state.productAmount) > 1
            ? 1
            : Number(action.state.productAmount)) +
          (thisStateProductAmount.length === 0
            ? 1
            : Number(thisStateProductAmount[0]?.productAmount)),
      };
      // const newAddedProducts = [...subtractedProducts, newProduct]
      // const orderedPro = newAddedProducts.sort((a,b) => a.price.localeCompare(b.price))
      if (!sameKeyAdded.length > 0)
        return {
          ...state,
          toAddedProduct: [...state.toAddedProduct, action.state],
        };
      else
        return {
          ...state,
          toAddedProduct: [...subtractedProducts, newProduct],
        };
    case SUBTRACT_TO_CARD:
      const newProductRemoved = {
        ...action.state,
        productAmount: Number(thisStateProductAmount[0]?.productAmount) - 1,
      };
      if (Number(thisStateProductAmount[0]?.productAmount) === 1 || action.state.productAmount === 1)
      return {
        ...state,
        toAddedProduct: [...subtractedProducts],
      };
      else
        return {
          ...state,
          toAddedProduct: [...subtractedProducts, newProductRemoved],
        };
    case SEARCH:
      return {
        ...state,
        productList: action.state,
      };
    case FETCH_ALL:
      return {
        ...state,
        productList: action.state,
      };
    default:
      return state;
  }
};

export default shopReducer;
