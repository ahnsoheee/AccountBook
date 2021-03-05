import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Signin from "../components/Signin";
import { API } from "../api/api";

const MainPage = () => {
  const [isAuth, setAuth] = useState(false);

  useEffect(async () => {
    const user = await API.get("/user/auth");
    console.log(user);
    if (user) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  });

  return isAuth ? <Header /> : <Signin />;
};

export default MainPage;
