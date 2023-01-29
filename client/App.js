import { Provider } from 'react-redux';
import { store } from "./store/store";
import RootNavigator from './navigation';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
