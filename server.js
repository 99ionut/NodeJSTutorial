const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const posts = require("./routes/posts");
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error');
const notFound = require('./middleware/notFound');

const app = express();

//middleware at the application level runs always
app.use(logger);

//Body parser middelware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/api/posts", posts);


//error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server is running on port ${port}`));



