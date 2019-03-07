package com.aditya.artmart.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
//@ResponseBody
public class LoginController{
	
	@RequestMapping(value = "/buyer-login", method = RequestMethod.GET)
	public String buyerLogin() {
		return "/html/buyer-login.html";
	}
	
	@RequestMapping(value = "/buyer-welcome", method = RequestMethod.GET)
	public String buyerWelcome() {
		return "/html/buyer-welcome.html";
	}
	
	@RequestMapping(value = "/seller-login", method = RequestMethod.GET)
	public String sellerLogin() {
		return "/html/seller-login.html";
	}
	
	@RequestMapping(value = "/seller-welcome", method = RequestMethod.GET)
	public String sellerWelcome() {
		return "/html/seller-welcome.html";
	}
	
	
}
