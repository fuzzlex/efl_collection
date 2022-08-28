import { FILTER_CATEGORY , ADD_TO_CARD,SEARCH,FETCH_ALL} from '../actions/blogTypes';



const initialState = {
  productList: [],
  toAddedIds : [],
  toAddedProduct: [],
  tofilteredProduct: [],
};



const shopReducer = (state = initialState , action) => {
  const sameKeyAdded = [...state.toAddedProduct].filter(e => 
    e.id === action.state.id)
  console.log((sameKeyAdded.length > 0) )


  console.log(action)
    switch (action.type) {
      case FILTER_CATEGORY:
        return {
          ...state,
          productList : action.state
        };
      case ADD_TO_CARD:
         if(!sameKeyAdded.length > 0) return {
          ...state,          
            toAddedProduct:  [...state.toAddedProduct , action.state]
        };
        else return {
          ...state
        }
      case SEARCH:
        return {
          ...state,
          productList : action.state
        };
        case FETCH_ALL:
          return {
            ...state,
            productList : action.state
          };
      default:
        return state;
    }
  };
  
  export default shopReducer;
