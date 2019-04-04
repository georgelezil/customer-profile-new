package com.lezil.customerprofilenew;

import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@RequestMapping("/api/hello")
	String home() {
		return "Current Time " + new Date() ;
	}
}
