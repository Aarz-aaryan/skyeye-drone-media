export const movieReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES': return { ...state, movies: action.payload };
    case 'SET_LOADING': return { ...state, loading: action.payload };
    case 'SET_ERROR': return { ...state, error: action.payload };
    case 'SELECT_MOVIE': return { ...state, selectedMovie: action.payload };
    default: return state;
  }
};
export default movieReducer;