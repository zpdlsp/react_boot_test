package com.react_boot_test;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class ApiController {

    @GetMapping("/api/test")
    public String test() {
        String result = "";
        Date date = new Date();
        result = "현재 서버시간은" + date + " 입니다.";
        return result;
    }
}
