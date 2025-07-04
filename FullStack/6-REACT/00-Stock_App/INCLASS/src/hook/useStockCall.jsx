import React from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import axios from "axios";
import { fetchFail, fetchStart, stockSuccess,ProCatBrandSuccess,SalesBrandProSuccess} from "../features/StockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();

  const getData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${url}`);
      dispatch(stockSuccess({data,url}));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.post(url, info);

      getData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const updateStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.put(`${url}/${info._id}`, info);

      getData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };


  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.delete(`${url}/${id}`);

      getData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

//! PROMISE ALL YAPISI :
// JavaScript'in Promise yapısını kullanan bir metottur ve aynı anda birden fazla asenkron işlemi yönetmek için kullanılır.

  const getProCatBrand=async()=>{
    dispatch(fetchStart())
    try {
      
      // const [a,b]=[1,2]  =>  a=1, b=2
        const [products,categories,brands]=await Promise.all(
          [
            axiosWithToken("products"),
            axiosWithToken("categories"),
            axiosWithToken("brands")
          ]
        )        
        dispatch(ProCatBrandSuccess([
          products?.data?.data,
          categories?.data?.data,
          brands?.data?.data]))

    } catch (error) {
      dispatch(fetchFail())
    }

  }
  const getSalesBrandPro=async()=>{
    dispatch(fetchStart())
    try {
      
      // const [a,b]=[1,2]  =>  a=1, b=2
        const [sales,brands,products]=await Promise.all(
          [
            axiosWithToken("sales"),
            axiosWithToken("brands"),
            axiosWithToken("products")
          ]
        )        
        dispatch(SalesBrandProSuccess([
          sales?.data?.data,
          brands?.data?.data,
          products?.data?.data
]))

    } catch (error) {
      dispatch(fetchFail())
    }

  }
  const getPurBrandPro=async()=>{
    dispatch(fetchStart())
    try {
      
      // const [a,b]=[1,2]  =>  a=1, b=2
        const [purchases,brands,products]=await Promise.all(
          [
            axiosWithToken("purchases"),
            axiosWithToken("brands"),
            axiosWithToken("products")
          ]
        )        
        dispatch(PurBrandProSuccess([
          purchases?.data?.data,
          brands?.data?.data,
          products?.data?.data
]))

    } catch (error) {
      dispatch(fetchFail())
    }

  }

  return { getData, createStockData,updateStockData ,deleteStockData,getProCatBrand,getSalesBrandPro,getPurBrandPro};
};

export default useStockCall;
