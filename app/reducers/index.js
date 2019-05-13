
const initialState = {
  allCandies: []
}

const MANAGE_CANDY = 'MANAGE_CANDY';

export const manageCandyActionCreator = candies => ({type: MANAGE_CANDY, candies})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MANAGE_CANDY:
      return {...state, allCandies: action.candies}
    default:
      return state
  }
}

export default rootReducer
