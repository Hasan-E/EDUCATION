// Custom Hook'lar, tekrar kullanılabilir ve modüler mantık oluşturmamızı
// sağlar.
// ✅ İsmi "use" ile başlamalı ve içinde React Hook kullanmalı.
// ✅  ****  JSX döndürmez, sadece veri veya fonksiyon döndürür.******
// ✅ Eğer başka dosyada kullanacaksan, export etmelisin.

import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

   const BASE_URL=import.meta.env.VITE_BASE_URL

  //!    REGISTER ISLEMİ

  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${BASE_URL}/users`,
        userInfo
      );
      console.log("data", data);
      dispatch(registerSuccess(data));

      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

//!  LOGIN İŞLEMİ
const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}auth/login`,userInfo
     
      );
      console.log();  
      dispatch(loginSuccess(data))  
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };



  //!    LOGOUT ISLEMİ

  const logout = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${BASE_URL}auth/logout/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("data login fonksiyonundan:",data);
      dispatch(logoutSuccess());
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { register, logout, login };
};

export default useAuthCall;
