package org.example;

import org.example.calculator.Add;
import org.example.calculator.Mul;
import org.example.calculator.Sub;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        Add add = new Add();
        Sub sub = new Sub();
        Mul mul = new Mul();

     System.out.println(add.addTwoNumber(2,3));
     System.out.println(sub.subTwoNumber(9,4));
     System.out.println(mul.mulTwoNumber(4,3));

        }
    }
