(()=>{"use strict";var e={"./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/function(e,r,s){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=t(s(/*! express */"express")),i=t(s(/*! morgan */"morgan")),u=t(s(/*! express-rate-limit */"express-rate-limit")),n=t(s(/*! express-mongo-sanitize */"express-mongo-sanitize")),a=t(s(/*! xss-clean */"xss-clean")),p=t(s(/*! hpp */"hpp")),l=t(s(/*! cookie-parser */"cookie-parser")),d=(0,o.default)();(0,u.default)({max:100,windowMs:36e5});"development"===process.env.NODe_ENV&&d.use((0,i.default)("dev")),d.use(o.default.json({limit:"10kb"})),d.use(o.default.urlencoded({extended:!0,limit:"10kb"})),d.use(o.default.static("public")),d.use((0,l.default)()),d.use((0,n.default)()),d.use((0,a.default)()),d.use((0,p.default)({whitelist:[]})),d.use("/",((e,r)=>r.sendFile(__dirname+"./index.html"))),d.all("*",((e,r,s)=>{r.status(404).json("Error 404")})),r.default=d},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/function(e,r,s){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=t(s(/*! http */"http")),i=t(s(/*! ./app */"./src/app.ts")),u=o.default.createServer(i.default),n=process.env.PORT||3e3;u.listen(n,(()=>{console.log("Server running on:"+n)}))},"cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/e=>{e.exports=require("cookie-parser")},express:
/*!**************************!*\
  !*** external "express" ***!
  \**************************/e=>{e.exports=require("express")},"express-mongo-sanitize":
/*!*****************************************!*\
  !*** external "express-mongo-sanitize" ***!
  \*****************************************/e=>{e.exports=require("express-mongo-sanitize")},"express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/e=>{e.exports=require("express-rate-limit")},hpp:
/*!**********************!*\
  !*** external "hpp" ***!
  \**********************/e=>{e.exports=require("hpp")},morgan:
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/e=>{e.exports=require("morgan")},"xss-clean":
/*!****************************!*\
  !*** external "xss-clean" ***!
  \****************************/e=>{e.exports=require("xss-clean")},http:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/e=>{e.exports=require("http")}},r={};(function s(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t].call(i.exports,i,i.exports,s),i.exports})("./src/index.ts")})();