import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

function InterviewQuestions(){
return(
<div>
<img src={require("../img/fiboCsharp.png")} alt="fiboCsharp"/>

Q: How do you make a site run faster?
A:There is a site to test speed. Shrink down pictures, delete node modules.


Q: Write a dictionary in Python.
A: Its an array.


Q. Write the Fibonacci Sequence in C#.


Q: Write this backwards in C#.

</div>
)

} export default InterviewQuestions;