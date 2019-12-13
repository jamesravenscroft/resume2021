import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function FAQ(){
    return(
    <div>
    <img src={require("../img/fiboCsharp.png")} alt="fiboCsharp"/>
    
    Q: How do you make a site run faster?
    A:There is a site to test speed. Shrink down pictures, delete node modules.
    
    
    Q: Write a dictionary in Python.
    A: Its an array.
    
    
    Q. Write the Fibonacci Sequence in C#.
    using System;
        public class FibonacciExample
            {/* {
                public static void Main(sting[] args)
            }
            {
                int n1=0, n2=1, n3m, i number;
                Console.Write("Enter the number of elements:");
                number= int.Parse(Console.Read());
                Console.Write(n1+""+n2+"");
                    for(i=2;<number;++i)//loop starts from 2
        {
        n3=n1+n2;
        Console.Write(n3+"");
        n1=n2;
        n2=n3;
    
        }
      } */}
    
    Q: Write this backwards in C#.
    / C# program to reverse a string 
{/* // s = input() 
  
using System; 
public class ReverseWords { 
  
    public static void Main() 
    { 
        string[] s = "i like this program very much".Split(' '); 
        string ans = ""; 
        for (int i = s.Length - 1; i >= 0; i--) { 
            ans += s[i] + " "; 
        } 
        Console.Write("Reversed String:\n"); 
        Console.Write(ans.Substring(0, ans.Length - 1)); 
    } 
} 
     */}

    
    </div>
    )
    
    } export default FAQ;