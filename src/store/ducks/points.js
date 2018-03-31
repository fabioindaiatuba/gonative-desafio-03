export const Types = {
  ADD_REQUEST: 'points/ADD_REQUEST',
  ADD_SUCCESS: 'points/ADD_SUCCESS',
  ADD_FAILURE: 'points/ADD_FAILURE',
  SHOW_MODAL: 'points/SHOW_MODAL',
  CLOSE_MODAL: 'points/CLOSE_MODAL',
};

const initialState = {
  data: [],
  visibleModal: false,
  loading: false,
  coordinate: {},
  errorOnAdd: null,
};

export default function points(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [
          ...state.data,
          {
            id: Math.random(),
            name: action.payload.data.name,
            avatar: action.payload.data.avatar_url,
            bio: action.payload.data.bio,
            coordinate: state.coordinate,
          },
        ],
        loading: false,
        visibleModal: false,
        errorOnAdd: null,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        errorOnAdd: action.payload.message,
        loading: false,
      };
    case Types.SHOW_MODAL:
      return {
        ...state,
        visibleModal: true,
        coordinate: action.payload.coordinate,
        errorOnAdd: null,
      };
    case Types.CLOSE_MODAL:
      return {
        ...state,
        visibleModal: false,
        errorOnAdd: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  addPointRequest: userGit => ({
    type: Types.ADD_REQUEST,
    payload: { userGit },
  }),

  addPointSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
  addPointError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
  showModal: coordinate => ({
    type: Types.SHOW_MODAL,
    payload: { coordinate },
  }),

  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),
};
