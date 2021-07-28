import React, { lazy, Suspense } from "react";

import { Backdrop, CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//Rutas
const RoutesPeliculas = lazy(() => import("./routes/peliculas.routes"));

const Routes = () => {
    return (
        <Suspense
            fallback={
                <Backdrop
                    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            }
        >
            <Router>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={() => <Redirect to="/peliculas" />}
                    />

                    <RoutesPeliculas path="/peliculas" />
                </Switch>
            </Router>
        </Suspense>
    );
};

export default Routes;
