import React, { useState, useCallback, useEffect } from "react";

//Librerias
import { Controller, useForm } from "react-hook-form";

//Componentes de Material UI
import {
    Grid,
    Paper,
    Container,
    Alert,
    AlertTitle,
    Box,
    CircularProgress,
} from "@material-ui/core";

//Hooks
import useGetPeliculas from "../hooks/useGetPeliculas";

//Estilos
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
    div: {
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        position: "absolute",
    },
});

const ConsultaPeliculas = () => {
    const { data, getData } = useGetPeliculas();

    const classes = styles();

    // const {
    //     control,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({ mode: "onChange" });

    // const onSubmit = (data) => {};

    useEffect(() => {
        getData();
    }, [getData]);

    if (!data) {
        return (
            <div className={classes.div}>
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "100%",
                            minHeight: "100%",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                </Container>
            </div>
        );
    }

    if (data.error) {
        return (
            <div className={classes.div}>
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Alert severity="error">
                            <AlertTitle>
                                Error al obtener los datos de peliculas
                            </AlertTitle>
                            {data.msg}
                        </Alert>
                    </Box>
                </Container>
            </div>
        );
    }

    return (
        <div className={classes.div}>
            <Container>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={12}>
                        <Paper>Se cargaron los datos</Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ConsultaPeliculas;
