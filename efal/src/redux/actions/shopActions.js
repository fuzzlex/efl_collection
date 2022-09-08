import {
  FILTER_CATEGORY,
  ADD_TO_CARD,
  SUBTRACT_TO_CARD,
  SEARCH,
  FETCH_ALL,
  UPDATE_PRODUCT,
  ADD_CHECKOUT_PRODUCT,
  FETCH_ALL_CHECKOUT_PRODUCTS_BY_ORDERNUMBER,
  FETCH_IMAGE,
  FETCH_COMMENT
} from "./blogTypes";
import { infoNote, successNote } from "../../components/Toasty";

export const setShopActionFilter = (payload) => ({
  type: FILTER_CATEGORY,
  state: payload,
});
export const setShopActionUpdateProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  state: payload,
});
export const setShopActionCheckoutProduct = (payload) => ({
  type: ADD_CHECKOUT_PRODUCT,
  state: payload,
});
export const setShopActionAddCard = (payload) => ({
  type: ADD_TO_CARD,
  state: payload,
});
export const setShopActionSubtractCard = (payload) => ({
  type: SUBTRACT_TO_CARD,
  state: payload,
});
export const setShopActionSearch = (payload) => ({
  type: SEARCH,
  state: payload,
});
export const setShopActionFetch = (payload) => ({
  type: FETCH_ALL,
  state: payload,
});
export const setFetchOrderCheckoutProducts = (payload) => ({
  type: FETCH_ALL_CHECKOUT_PRODUCTS_BY_ORDERNUMBER,
  state: payload,
});
export const setFetchSelectedImage = (payload) => ({
  type: FETCH_IMAGE,
  state: payload,
});
export const fetchSelectedComments = (payload) => ({
  type: FETCH_COMMENT,
  state: payload,
});

export const fetchAllData = () => {
  return async (dispatch) => {
    await fetch("http://127.0.0.1:8000/api/article/")
      .then((res) => res.json())
      .then((data) => dispatch(setShopActionFetch(data)));
  };
};
export const fetchAllImages = () => {
  return async (dispatch) => {
       await fetch("http://127.0.0.1:8000/api/image/")
      .then((res) => res.json())
      .then((data) =>  dispatch(setFetchSelectedImage(data)));
    };
   

    }
export const fetchSelectedComment = (productCode) => {
  return async (dispatch) => {
    const response =  await fetch("http://127.0.0.1:8000/api/comment/")
      .then((res) => res.json())
      .then((data) =>  data);
      const newData = response?.filter((comment) => {
        return comment.productCode == productCode;
      });
      dispatch(fetchSelectedComments(newData))

    };
   

    }

export const fetchOrderCheckoutProducts = (orderNumber) => {
  return async (dispatch) => {
    const response = await fetch("http://127.0.0.1:8000/api/checkout/")
      .then((res) => res.json())
      .then((data) => data);
      const newData = response?.filter((product) => {
        return product.orderNumber === orderNumber;
      });
      dispatch(setFetchOrderCheckoutProducts(newData))
  };
};

export const filterCategory = (category) => {
  return async (dispatch) => {
    const response = await fetch("http://127.0.0.1:8000/api/article/")
      .then((res) => res.json())
      .then((data) => data);
    const newData = response?.filter((product) => {
      return product.category === category;
    });
    dispatch(setShopActionFilter(newData));
  };
};

export const searchProduct = (value) => {
  return async (dispatch) => {
    const response = await fetch("http://127.0.0.1:8000/api/article/")
      .then((res) => res.json())
      .then((data) => data);
    const newData = response?.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    dispatch(setShopActionSearch(newData));
    // console.log(newData.length)
    newData.length !== 0
      ? successNote("Filtered your producs")
      : infoNote("There isn't any product");
  };
};
export const updateProduct = async (body) => {
    const newData = await fetch(
      `http://127.0.0.1:8000/api/article/${body.id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((res) => res.json())
      .then((data) => data);
    // dispatch(setShopActionUpdateProduct(newData));
  };
export const addCheckoutProduct = async (product) => {
  const newData = await fetch("http://127.0.0.1:8000/api/checkout/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => data);
};
export const addCommentInProduct = async (comment) => {
  const newData = await fetch("http://127.0.0.1:8000/api/comment/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  })
    .then((res) => res.json())
    .then((data) => data);
};
export const addOrder = async (order) => {
  const newData = await fetch("http://127.0.0.1:8000/api/order/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const addShoppingArea = (product) => {
  return async (dispatch) => {
    dispatch(setShopActionAddCard(product));
  };
};
export const subtractShoppingArea = (product) => {
  return async (dispatch) => {
    dispatch(setShopActionSubtractCard(product));
    // successNote("Başarıyla Sepetinizden Çıkarıldı")
  };
};

// export const productUpdate = async (body, id)  => {
//   return await fetch(`https://127.0.0.1:8000/api/article/${id}/`,
//   {
//     'method' : 'PUT',
//     headers : {
//       'Content-Type' : 'application/json',
//     },
//     body : JSON.stringify(body)
//   }
//   )
//   .then(response => {
//          if(response.status === 400){
//            console.log(response.status)
//          }
//          else{
//            return response.json()
//          }
//       }
//   )

// }
