import { useState, useCallback } from "react";

//librerias
import axios from "axios";

const useGetPeliculas = () => {
    const [data, setData] = useState();

    const getData = useCallback(async (strNombre) => {
        await axios({
            baseURL: "http://www.omdbapi.com",
            params: {
                apikey: "8521933",
                i: "tt3896198",
                t: strNombre,
            },
        })
            .then((res) => {
                const objPeliculas = res.data;

                if (objPeliculas.Error) {
                    throw new Error(objPeliculas.Error);
                }

                if (!objPeliculas) {
                    throw new Error("No se encontraron peliculas.");
                }

                setData({
                    error: false,
                    data: objPeliculas,
                });
            })
            .catch((error) => {
                setData({
                    error: true,
                    msg: error.message,
                });
            });
    }, []);

    return { data, getData };
};

export default useGetPeliculas;
