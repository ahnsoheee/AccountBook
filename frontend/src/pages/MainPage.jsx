import React, { useState } from "react";
import Header from "../components/Header";
import Signin from "../components/Signin";
const MainPage = () => {
  const [isLogin, setLogin] = useState(false);

  return isLogin ? <Header /> : <Signin setLogin={setLogin} />;
};

export default MainPage;
