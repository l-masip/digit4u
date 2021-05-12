require("dotenv").config();
const express = require("express");

// DB config
require("./configs/db.config");

const app = express();

//Middleware config
require("./configs/middleware.config")(app);
require("./configs/cors.config.js")(app);

//session config
require("./configs/session.config")(app);
//passport config
require('./configs/passport.config')(app);

const authRouter = require('./routes/auth.routes');
app.use('/api/auth', authRouter);

const userRouter = require("./routes/user.routes");
app.use("/api/users", userRouter);

const productRouter = require("./routes/product.routes");
app.use("/api/products", productRouter);

const articleRouter = require("./routes/article.routes");
app.use("/api/articles", articleRouter);

const expertRouter = require("./routes/expert.routes");
app.use("/api/experts", expertRouter);

module.exports = app;
