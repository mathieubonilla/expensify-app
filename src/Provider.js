import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

const store = configureStore();

export  default () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)