import React from "react";

//Librerias
import { Route, Switch } from "react-router-dom";

import ConsultaPeliculas from "../pages/Peliculas/pages/consultaPeliculas";

const RoutesPeliculas = ({ path }) => {
    return (
        <Route path={path}>
            <Switch>
                <Route
                    path="/peliculas/consulta"
                    exact
                    component={() => <ConsultaPeliculas />}
                />
            </Switch>
        </Route>
    );
};

export default RoutesPeliculas;
