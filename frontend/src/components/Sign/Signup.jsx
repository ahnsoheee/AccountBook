import React, { useState, useCallback } from "react";
import SignButton from "./SignButton";
import Form from "./Form";
import Input from "./Input";
import { API } from "../../api/api";
import Signin from "./Signin";

const Signup = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [isComplete, setComplete] = useState(false);

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onClick = async () => {
    if (!id.length || !pw.length || !name.length) {
      alert("아이디와 비밀번호, 이름을 모두 입력하세요.");
    } else {
      const res = await API.post("/user/signup", { id: id, pw: pw, name: name });
      if (res.result) {
        alert("회원가입이 성공적으로 완료되었습니다.");
        setComplete(true);
      } else {
        alert("이미 존재하는 아이디입니다.");
      }
    }
  };

  return isComplete ? (
    <Signin />
  ) : (
    <>
      <Form title="회원가입">
        <Input type="text" name="name" placeholder="이름" value={name} onChange={onChangeName} required />
        <Input type="text" name="id" placeholder="아이디" value={id} onChange={onChangeId} required />
        <Input type="password" name="pw" placeholder="비밀번호" value={pw} onChange={onChangePw} required />
        <SignButton name="회원가입" width="507px" height="40px" background="#ff4646" onClick={onClick} />
      </Form>
    </>
  );
};

export default Signup;
