import React from "react";
import Helmet from "react-helmet";

function Metas() {
    return (
        <Helmet>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        </Helmet>
    )
}

export default Metas
