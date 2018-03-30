export const Types = {
  ADD_REQUEST: 'points/ADD_REQUEST',
  ADD_SUCCESS: 'points/ADD_SUCCESS',
  SHOW_MODAL: 'points/SHOW_MODAL',
  CLOSE_MODAL: 'points/CLOSE_MODAL',
};

const initialState = {
  data: [],
  visibleModal: false,
  loading: false,
  coordinate: {},
};

export default function points(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        visibleModal: false,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [
          ...state.data,
          {
            id: Math.random(),
            name: action.payload.data.name,
            avatar: action.payload.data.avatar_url,
            login: action.payload.data.login,
            coordinate: state.coordinate,
          },
        ],
        loading: false,
        visibleModal: false,
      };
    case Types.SHOW_MODAL:
      return {
        ...state,
        visibleModal: true,
        coordinate: action.payload.coordinate,
      };
    case Types.CLOSE_MODAL:
      return {
        ...state,
        visibleModal: false,
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

  showModal: coordinate => ({
    type: Types.SHOW_MODAL,
    payload: { coordinate },
  }),

  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),
};
