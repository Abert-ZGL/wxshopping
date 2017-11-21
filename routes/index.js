var express = require('express');
var config =  require('../config/config').wx_config.aotu;
var request = require('request');
var crypto = require('crypto');
var util = require('../util/util');
var jssdk = require('../api/jssdk');
var fontApiUrl = config.fontApiUrl;
var backApiUrl = config.backApiUrl;
var jwttoken = config.jwttoken;
var router = express.Router();
var appid = config.appid;
var secret = config.secret;
var token = config.token;
/* GET home page. */
router.get('/drink/', function(req, res, next) {
	res.render('index', { fontApiUrl: fontApiUrl,backApiUrl:backApiUrl,jwttoken:jwttoken });
});
router.get('/drink/:url', function(req, res, next) {
  var thisurl = req.params.url;
  var query = req.query;
  res.render(thisurl, { fontApiUrl: fontApiUrl,backApiUrl:backApiUrl,jwttoken:jwttoken,id:query.id,code:query.code });
});
router.get('/admin/:url', function(req, res, next) {
	var thisurl = req.params.url;
	var query = req.query;
	if(query.code) {
	  	  res.render('admin/form', { code:query.code,backApiUrl:backApiUrl});
	}else {
		  res.render('admin/'+thisurl, { backApiUrl:backApiUrl });
	}
});
module.exports = router;