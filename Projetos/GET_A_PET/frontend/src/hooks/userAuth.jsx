import api from "../utils/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // manipula as urls e enviando o usuario para outra url ex: home

export default function useAuth () {
    const navigate = useNavigate()
    async function register (user) {
        try {
            const data = await api.post('/users/register', user).then((response) => {
                return response.data
            })

            console.log(data)
        } catch (error) {

            console.error(error)
        }
    }

    return {
        register
    }
}