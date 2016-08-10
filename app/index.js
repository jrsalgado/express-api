var express = require('express')
var webApp = express()
var session = require("express-session")
var RedisStore = require("connect-redis")(session)

webApp.use(session({
  cookie: {
    path: "/",
    maxAge: 1000 * 60 * 60 * 24 * 14
  },
  name: "expressApp.sid",
  store: new RedisStore({
    host: 'cache'
  }),
  resave: false,
  saveUninitialized: false,
  secret: "estanoeslaformacorrectadeponerunallavesecretaydeveriadedarteverguenzaademastedioflojeraescribirladieresisdelauyanilafriegas",
  unset: "destroy"
}));

// Public side of the App
webApp
  .get('/login',function(req, res){
    res.sendFile(__dirname+'/views/login.html')
  })
  .post('/login', function(req, res){
    var email = req.body.email
    var password = req.body.password
    req.session.auth = {
      email:email
    }
    res.redirect('/')
  })

// TODO: implement logout using ES6

// webApp
//   .get('/logout',(req, res)=>{
//     req.session.destroy(err=>res.json('loged out'))
//  })

webApp
  .get('/logout', function(req, res){
    req.session.destroy(function(){
      res.json('loged out')}
      )
  })

// TODO: implement singup using ES6


// session security
webApp.use(function(req, res, next){
  if(!req.session.auth){
    res.redirect('/login')
  }else{
    next()
  }
})

// Private side of the APP
webApp
  .get('/',function(req, res){
    res.json({
      msg: 'Sorry sexy!!, the App is a lie.',
      cached: req.session.auth
    })
  })

module.exports = webApp