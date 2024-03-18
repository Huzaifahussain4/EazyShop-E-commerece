import { useState } from "react";
import "./App.css";
import Layout from "antd/es/layout/layout";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./ReduxToolkit/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
