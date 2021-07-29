import React, { useState, useEffect } from "react";

//Librerias
import { Controller, useForm } from "react-hook-form";

//Componentes de Material UI
import { Grid, Paper, Container, TextField, Button, Typography } from "@material-ui/core";

//Hooks
import useGetPeliculas from "../hooks/useGetPeliculas";

//Estilos
import { makeStyles } from "@material-ui/styles";

import "../static/css/estilosBuscador.css";

//Componentes
import PaperPelicula from "../components/paperPelicula";

const styles = makeStyles({
    div: {
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        padding: "0",
        margin: "0",
        overflow: "hidden",
    },
    paper: {
        padding: "15px",
        marginTop: "15px",
    },
});

const ConsultaPeliculas = () => {
    const [query, setQuery] = useState({
        strNombre: "",
    });

    const {
        formState: { errors },
        control,
        handleSubmit,
    } = useForm({ mode: "onChange" });

    const { data, getData } = useGetPeliculas();

    const classes = styles();

    const onSubmit = (data) => {
        setQuery({ strNombre: data.strNombre });
    };

    useEffect(() => {
        if (query.strNombre) {
            getData(query.strNombre);
        }
    }, [query.strNombre, getData]);

    return (
        <div className={classes.div}>
            <Container>
                <Paper className={classes.paper}>
                    <Grid
                        container
                        direction="row"
                        spacing={2}
                        component="form"
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid item xs={12}>
                            <Typography variant="h6" align="center">
                                <b>Buscador de peliculas</b>
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Controller
                                defaultValue={query.strNombre}
                                name="strNombre"
                                render={({ field: { name, onChange, value } }) => (
                                    <TextField
                                        label="Buscador"
                                        name={name}
                                        value={value}
                                        onChange={(e) => onChange(e)}
                                        fullWidth
                                        error={errors?.strNombre ? true : false}
                                        helperText={
                                            errors?.strNombre?.message ||
                                            "Digita el nombre de la pelicula a buscar."
                                        }
                                    />
                                )}
                                control={control}
                                rules={{
                                    required:
                                        "Por favor, digita el nombre de la pelicula a buscar.",
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth type="submit">
                                Consultar
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} style={{ marginTop: "10px" }}>
                        <Grid item xs={12}>
                            <Typography>
                                Resultado
                                <hr />
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            {!data?.error ? (
                                <PaperPelicula />
                            ) : (
                                <Typography variant="h6" align="center">
                                    {data.msg}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
};

export default ConsultaPeliculas;
