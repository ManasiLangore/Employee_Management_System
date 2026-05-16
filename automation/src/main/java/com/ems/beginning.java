package com.ems;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class beginning {
    public static void main(String[] args) {
//        System.setProperty("webdriver.chrome.driver", "D:\\HefShine\\Automation Testing\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");

        //initialize
        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:3000/");
    }
}
