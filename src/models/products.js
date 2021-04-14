export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    'add'(state, { payload: item }) {
      return [...state, item];
    },
  },
};