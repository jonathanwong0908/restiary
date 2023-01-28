import AuthStack from './navigation/AuthStack';
import { Provider } from 'react-redux';
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthStack />
    </Provider>
  );
}
