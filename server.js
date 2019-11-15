const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    // data schema
    Memo = require("./models/memo"),
    Comment = require("./models/comment"),
    User = require("./models/user");
// { Firestore } = require('@google-cloud/firestore'),
// { FirestoreStore } = require('@google-cloud/connect-firestore'),

// REQUIRING ROUTES
const commentRoutes = require("./routes/comments"),
    memoRoutes = require("./routes/memos"),
    indexRoutes = require("./routes/index");

mongoose.connect('mongodb+srv://myusername:42@cluster0-fkxcp.mongodb.net/mydb', {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connnected to DB!');
}).catch(err => {
    console.log('ERROR:', err.message);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    // store: new FirestoreStore({
    //     dataset: new Firestore({
    //         kind: 'express-sessions',
    //     }),
    // }),
    secret: "This is a secret.",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 3600000 //1 hour
    }
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/memos", memoRoutes);
app.use("/memos/:id/comments", commentRoutes);

app.listen(3000, () => {
    console.log('server is on 3000.');
});
