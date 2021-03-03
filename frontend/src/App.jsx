import React, { useState } from "react";
import SignPage from "./pages/SignPage";
import MainPage from "./pages/MainPage";

const App = () => {
  const [isLogin, setLogin] = useState(false);

  return isLogin ? <MainPage /> : <SignPage />;
};

export default App;
