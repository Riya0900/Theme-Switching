import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Theme from "./components/Theme";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Theme/>
      </React.Fragment>
    </Provider>
  );
};