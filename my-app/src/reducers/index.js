import { FETCH_USER_START, 
  FETCH_USER_SUCCESS, 
  FETCH_USER_FAIL, 
  ADD_NEW_PLANT_START, 
  ADD_NEW_PLANT_SUCCESS, 
  ADD_NEW_PLANT_FAIL,
  DELETE_PLANT_START,
  DELETE_PLANT_SUCCESS,
  DELETE_PLANT_FAIL, 
  EDIT_USER_START,
  EDIT_PLANT_START,
  EDIT_PLANT_SUCCESS,
  EDIT_PLANT_FAIL,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL} from '../actions/index';

export const initialState = {
  user: {
    plants: [],
    username: '',
    email: '',
    password: '',
    id: ''
  },
  isLoading: false,
  error: '',
  additionalPlants: [{
    id: "",
    nickname: "",
    species: "",
    h20frequency: '',
    image: "", //(optional)
  }]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_USER_START):
      return({
        ...state,
        isLoading: true,
      })
    case(FETCH_USER_SUCCESS):
      return({
        ...state,
        isLoading: false,
        user: action.payload
      })
    case(FETCH_USER_FAIL):
      return({
        ...state,
        isLoading: false,
        error: action.payload
      })
    case(EDIT_USER_START):
      return({
        ...state,
        isLoading: true,
      })
    case(EDIT_USER_SUCCESS):
    const editUser = state.user.find((user) => user.id === action.payload)
      return({
        ...state.user, 
        user: state.user.filter((user) => user.id !== action.payload)
      })
    case(EDIT_USER_FAIL):
      return({
        ...state,
        isLoading: false,
        error: action.payload
      })
    case(ADD_NEW_PLANT_START):
      return({
        ...state, 
        isLoading: true,
      })
    case(ADD_NEW_PLANT_SUCCESS):
    const newPlant = state.additionalPlants.find((plant) => plant.id === action.payload)
      return({
        ...state,
        isLoading: false, 
        user: {
          ...state.user,
          plants: [...state.user.plants, newPlant]
        },
        additionalPlants: state.additionalPlants.filter(plant => action.payload !== plant.id),
      })
    case(ADD_NEW_PLANT_FAIL):
      return({
        ...state,
        isLoading: false, 
        error: action.payload
      })
    case(DELETE_PLANT_START):
      return({
        ...state,
        isLoading: true,
      })
      case(DELETE_PLANT_SUCCESS):
      const removePlant = state.user.plants.find((plant) => plant.id === action.payload);
        return({
          ...state,
          additionalPlants: [...state.additionalPlants, removePlant],
          user: {
            ...state.user, 
            plants: state.user.plants.filter((plant) => plant.id !== action.payload)
          }
        })
      case(DELETE_PLANT_FAIL):
        return({
          ...state, 
          isLoading: false, 
          error: action.payload
        })
    case(EDIT_PLANT_START): 
      return({
        ...state, 
        isLoading: true,
      })
    case(EDIT_PLANT_SUCCESS):
    const editPlant = state.user.plants.find((plant) => plant.id === action.payload)
      return({
        ...state,
        additionalPlants: [...state.additionalPlants, editPlant],
        user: {
          ...state.user,
          plants: [...state.user.plants, editPlant]
        }
      })
    case(EDIT_PLANT_FAIL): {
      return({
        ...state, 
          isLoading: false, 
          error: action.payload
      })
    }
    default:
      return state;
  }
};
