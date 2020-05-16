var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const hotelRouter = require("./routes/hotel");
const routeRouter = require("./routes/route");
const viewRouter = require("./routes/view");
const messageRouter = require("./routes/message");
const foodRouter = require("./routes/food");
const loginRouter = require("./routes/login");
const expressJWT = require('express-jwt')
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/tourismWeb");
mongoose.connection.on("connected", function () {
  console.log("数据库连接成功");
});

mongoose.connection.on("error", function () {
  console.log("数据库连接失败");
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.");
});
// const Schema = mongoose.Schema;

// const SomeModelSchema  = new Schema({
//   name: String,
//   a_date: Date,
// });
// const SomeModel = mongoose.model('SomeModel', SomeModelSchema);
// const awesome_instance = new SomeModel({ name: "牛人" });

// 传递回调以保存这个新建的模型实例
// awesome_instance.save(function (err) {
//   if (err) {
//     return handleError(err);
//   } // 已保存
// });
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotel", hotelRouter);
app.use("/api/route", routeRouter);
app.use("/api/view", viewRouter);
app.use("/api/message", messageRouter);
app.use("/api/food", foodRouter);
app.use("/api/login", loginRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// app.use(expressJWT({
//   secret: 'secret12345'  // 签名的密钥 或 PublicKey
// }).unless({
//   path: ['/api/login', '/signup']  // 指定路径不经过 Token 解析
// }))



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
