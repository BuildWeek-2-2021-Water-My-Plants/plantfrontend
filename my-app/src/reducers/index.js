import { FETCH_PLANT_START, FETCH_PLANT_SUCCESS, FETCH_PLANT_FAIL, FETCH_NEW_PLANT_START, FETCH_NEW_PLANT_SUCCESS, FETCH_NEW_PLANT_FAIL } from '../actions/index';

export const initialState = {
  plants: [],
  isLoading: false,
  error: '',
  newPlant: [{
    id: "",
    nickname: "",
    species: "",
    h20frequency: '',
    image: "", //(optional)
  }]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_PLANT_START):
      return({
        ...state,
        isLoading: true,
      })
    case(FETCH_PLANT_SUCCESS):
      return({
        ...state,
        isLoading: false,
        plants: action.payload
      })
    case(FETCH_PLANT_FAIL):
      return({
        ...state,
        isLoading: false,
        error: action.payload
      })
    case(FETCH_NEW_PLANT_START):
      return({
        ...state, 
        isLoading: true,
      })
    case(FETCH_NEW_PLANT_SUCCESS):
      return({
        ...state,
        isLoading: false, 
        plants: [...state.data, action.payload],
        newPlant: action.payload,
      })
    case(FETCH_NEW_PLANT_FAIL):
      return({
        ...state,
        isLoading: false, 
        error: action.payload
      })
    default:
      return state;
  }
};


// const initialState = {
//   additionalPrice: 0,
//   car: {
//     price: 26395,
//     name: '2019 Ford Mustang',
//     image:
//       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//     features: []
//   },
//   additionalFeatures: [
//     { id: 1, name: 'V-6 engine', price: 1500 },
//     { id: 2, name: 'Racing detail package', price: 1500 },
//     { id: 3, name: 'Premium sound system', price: 500 },
//     { id: 4, name: 'Rear spoiler', price: 250 }
//   ]
// };

// export const reducer = (state = initialState, action ) => {
//   switch(action.type){
//       case ADD_FEATURES:
//         const newFeature = state.additionalFeatures.find(
//           (feature) => feature.id === action.payload)
//             return{
//               ...state,
//                 car: {
//                     ...state.car,
//                     features: [...state.car.features, newFeature]
//                 },
//                 additionalFeatures: state.additionalFeatures.filter(feature => action.payload !== feature.id),
//                 additionalPrice: state.additionalPrice + newFeature.price
//             }
//           case DELETE_FEATURES:
//             const removeFeature = state.car.features.find((feature) => feature.id === action.payload)
//               return{
//                 ...state, 
//                 additionalPrice: state.additionalPrice - removeFeature.price,
//                 additionalFeatures: [...state.additionalFeatures, removeFeature],
//                 car: {
//                   ...state.car, 
//                   features: state.car.features.filter((feature) => feature.id !== action.payload)
//                 }
//             }
//       default:
//           return state;
//   }