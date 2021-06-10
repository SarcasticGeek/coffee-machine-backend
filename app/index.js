// ==========================
// Starting the server
// ==========================

require('dotenv').config();
require('module-alias/register');
import "./helpers/db";
import express from "express";
import "express-async-errors";
import routes from "./helpers/routes";
import createError from "http-errors";
import middleware from "./helpers/middleware";


const app = express();

middleware(app);

routes(app);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send({ error: "Something went wrong.." });
  });
  
export default app;