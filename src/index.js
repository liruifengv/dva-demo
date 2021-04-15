import dva from 'dva';
import './index.css';

// 1. Initialize
const createHistory = require("history").createHashHistory
const app = dva({
  history: createHistory(),
  initialState: {
    products: [
      { name: 'dva', id: 1, key: 1 },
      { name: 'antd', id: 2, key: 2 },
    ],
  },
  onError(e, dispatch) {
    console.log(e.message);
  },
});
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/form').default);
app.model(require('./models/posts').default);
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
