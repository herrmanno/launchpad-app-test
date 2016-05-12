"use strict";
const express = require("express");
const proxyClient = require("Proxy/lib/client");

const PORT = 23456;

const app = express();

app.use(express.static(__dirname + "/public", {
    setHeaders: function(res) {
        res.set({
            "Access-Control-Allow-Origin": "*"
        });
    }
}));
app.listen(PORT);

proxyClient.register("App1", PORT);