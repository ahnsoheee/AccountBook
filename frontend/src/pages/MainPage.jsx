import React, { useState, useEffect } from "react";
import Header from "../components/Main/Header";
import Signin from "../components/Sign/Signin";
import { API } from "../api/api";

const MainPage = () => {
  const [name, setName] = useState("");
  const [isAuth, setAuth] = useState(false);

  useEffect(async () => {
    const user = await API.get("/user/auth");
    if (user) {
      setName(user.name);
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [name, isAuth]);

  return isAuth ? <Header user={name} /> : <Signin />;
};

export default MainPage;
