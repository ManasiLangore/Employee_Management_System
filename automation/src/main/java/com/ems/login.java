package com.ems;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class login {
    public static void main(String[] args) {
        //initialize
        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:3000/login");

        Actions actions = new Actions(driver);

        WebElement clkU = driver.findElement(By.name("username"));
        actions.click(clkU).perform();

        WebElement clkP = driver.findElement(By.name("password"));
        actions.click(clkP).perform();
    }
}
