import { FILTER_CATEGORY, ADD_TO_CARD ,SUBTRACT_TO_CARD, SEARCH,FETCH_ALL} from './blogTypes';
import { infoNote, successNote } from '../../components/Toasty';

export const setShopActionFilter = payload => ({ type: FILTER_CATEGORY, state: payload });
export const setShopActionAddCard = (payload) => ({ type: ADD_TO_CARD, state:payload});
export const setShopActionSubtractCard = (payload) => ({ type: SUBTRACT_TO_CARD, state:payload});
export const setShopActionSearch = (payload) => ({ type: SEARCH, state:payload });
export const setShopActionFetch = (payload) => ({ type: FETCH_ALL, state:payload });


export const fetchAllData = () =>{
  return async dispatch =>{
     await fetch("https://efalcollection.herokuapp.com/api/article/")
    .then(res => res.json())
    .then(data => dispatch(setShopActionFetch(data)))
    
  }
}




export const filterCategory = category => {
  return async  dispatch => {
    const response = await fetch("https://efalcollection.herokuapp.com/api/article/")
    .then(res => res.json())
    .then(data => data)
    const newData = response?.filter(product => {
      return product.category === category
    })
    dispatch(setShopActionFilter(newData));
  }
};


export const searchProduct = (value) => {
  return async dispatch => {
    const response = await fetch("https://efalcollection.herokuapp.com/api/article/")
    .then(res => res.json())
    .then(data => data)
    const newData = response?.filter(item=>{
      return item.title.toLowerCase().includes(value.toLowerCase())
    })
    dispatch(setShopActionSearch(newData))
    // console.log(newData.length)
    newData.length !== 0 ?
    successNote("Filtered your producs") :
    infoNote("There isn't any product")

  }
  
}
export const addCard =  (body) => {
  return async dispatch => {
    const newData = await fetch(`https://efalcollection.herokuapp.com/api/article/${body.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  .then(res => res.json())
  .then(data => data)
  // dispatch(setShopActionAddCard(newData))  
  // successNote("Başarıyla Sepetinize Eklendi") 
};
}
export const addShoppingArea =  (product) => {
  return async dispatch => {

  dispatch(setShopActionAddCard(product))  
  }
};
export const subtractShoppingArea =  (product) => {
  return async dispatch => {

  dispatch(setShopActionSubtractCard(product))  
  // successNote("Başarıyla Sepetinizden Çıkarıldı") 
  }
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

