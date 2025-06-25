// Custom Hook'lar, tekrar kullanılabilir ve modüler mantık oluşturmamızı
// sağlar.
//  ✅ İsmi "use" ile başlamalı ve içinde React Hook kullanmalı.
//! ✅ JSX döndürmez, sadece veri veya fonksiyon döndürür.
//  ✅ Eğer başka dosyada kullanacaksan, export etmelisin.
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  //! REGISTER
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://13106.fullstack.clarusway.com/users",
        userInfo
      );
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  //! LOGOUT
  const logout = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "https://13106.fullstack.clarusway.com/auth/logout"
      );
      headers: {
        Authorization: `Token${token}`;
      }
      dispatch(logoutSuccess);
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  //! LOGIN
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "https://13106.fullstack.clarusway.com/auth/logout",userInfo
      );
      
      dispatch(logoutSuccess);
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { register, logout };
};

export default useAuthCall;
