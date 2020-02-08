using System;
using System.Collections.Generic;
using System.Ling;
using System.Text;
//using for Loop JR3
namespace factorial
{
    class Program
    {
        int i, number, fact;
        Console.WriteLine ("Enter the Number");
        number = int.Parse(Console.ReadLine());
        fact = number;
        for (i = number -1; i>=1; i--)
       { fact= fact * i;
        
        }
    Console.WriteLine("\nFactorial of Given Number is:"+fact);
    Console.ReadLine();
    }
}






//using Recursion JR3

public double factorial_Recusion (int number)
{
    if(number==1)
    return 1;
    else return number * factorial_recursion(number -1);

}
// while loop JR3
public double factorial_WhileLoop(int number)
{
    double result =1;
    while (number !=1)
    {
        result = result * number;
        number = number -1;
    }
    return result;
}