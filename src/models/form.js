
export default {
  namespace: 'form',
  state: {
    status: 'dective', exprieTime: false, passwordEmail: false, banModifyEmail: false
  },
  effects: {
    *saveForm({ payload: data }, { call, put }) {
      yield put({ type: 'save', payload: data });
    },
  },

  reducers: {
    save(state, action) {
      return {...action.payload}
    },
  },
};
