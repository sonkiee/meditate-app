import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null}></PersistGate>
    </Provider>
  );
};

export default App;
