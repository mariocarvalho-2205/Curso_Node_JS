import api from "../utils/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // manipula as urls e enviando o usuario para outra url ex: home

export default function useAuth() {
  const navigate = useNavigate();
  async function register(user) {
    try {
      const response = await api.post("/users/register", user);
      const data = response.data;
      console.log("contextoauth", data);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    register,
  };
}
