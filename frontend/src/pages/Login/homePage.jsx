import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const HomePage = () => {
    const [data, setData] = useState({});

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);

        await axios({
            baseURL: "https://pokeapi.co/api/v2",
            url: "/pokemon",
        })
            .then((res) => {
                const { results } = res.data;

                setData(results);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message);
            });
    };

    useEffect(() => {
        function getData() {}

        getData();
    }, []);

    if (loading) {
        return <p>Cargando....</p>;
    }

    if (error) {
        return <p>Hubo un error: {error}</p>;
    }

    return (
        <Fragment>
            <ul>
                {data.map((e, i) => (
                    <li key={i}>{e.name}</li>
                ))}
            </ul>
        </Fragment>
    );
};

export default HomePage;
