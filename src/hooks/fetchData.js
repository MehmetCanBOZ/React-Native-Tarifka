import { useState, useEffect } from "react";
import axios from "axios";
import Config from "react-native-config";

const useFetch = (endpoint) => {
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState([]);
  
  const fetchData = async () =>{
    try {
      const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/${endpoint}`);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return {
    error,
    loading,
    data
  }
}

export default useFetch;