"use client";
import { useEffect } from "react";
import axios from 'axios'

export default () => {
  useEffect(() => {
    console.log("effect called");
    axios.get('http://localhost:4000/hello')
      .then(function (response) {
        console.log(response)
      });
  }, []);
  return <div>Dashboard</div>;
};
