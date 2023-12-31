import getCurrentUser from "../utils/getCurrentUser.js";

export const INITIAL_STATE = {
  userId: getCurrentUser()?._id,
  title: "",
  cat: "",
  cover: "",
  images: [],
  desc: "",
  shortTitle: "",
  shortDesc: "",
  deliveryTime: 0,
  revisionNumber: 0,
  features: [],
  price: 0,
};

export const gigReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT": // to change all input fields
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_IMAGES":
      return {
        ...state,
        cover: action.payload.cover,
        images: action.payload.images,
      };
    case "ADD_FEATURE":
      return {
        ...state,
        features: [...state.features, action.payload], // keep the current state features and also action.payload incoming feature and update state
      };
    case "REMOVE_FEATURE": // to change all input fields
      return {
        ...state, // creating array which consist every feature instead of action.payload (the one marked for deletion)
        features: state.features.filter(
          (feature) => feature !== action.payload
        ),
      };
    default:
      return state;
  }
};
