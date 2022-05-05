export const ReadBookReducer = (state, action) => {
   
   switch(action.type) {
      case 'ADD_READ_BOOK':
         return [...state, action.book]
      case 'REMOVE_READ_BOOK':
         return state.filter(book => book.id !== action.id)
      default:
         return state
   }
}