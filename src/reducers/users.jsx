import * as Users from "../actions/type";

const initialState = [];

function tutorialReducer(users = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Users.CREATE_USER:
      return [...Users, payload];

    case Users.GET_USERS:
      return payload;

    case Users.FIND_USER:
      return payload;

      default:
        return users;
  }
}

export default tutorialReducer;
