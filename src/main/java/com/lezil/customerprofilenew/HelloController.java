package com.lezil.customerprofilenew;

import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@RequestMapping("/api/hello")
	String home() {
		return "Hello, the time at the server is now " + new Date() + "\n";
	}
}
