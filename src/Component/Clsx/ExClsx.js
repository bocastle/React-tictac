import React from 'react';
import "../App.css";
import {} from '@material-ui/core';
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    rootContainer : {
        padding: theme.spacing(2)
    },
    homeContainer: {
        fontSize: 20
    },
}))

function Home() {
    const classes = useStyles();

    return(
        <div> Hello React!</div>
    )
}
export default Home;