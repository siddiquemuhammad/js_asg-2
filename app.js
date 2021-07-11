// chap #21 - 25
//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var f_name = prompt("enter first name");
var L_naME = prompt("enter last name");
var full_name = f_name + " " +L_naME;
alert("welcome " + full_name);
//Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
var inp = prompt("enter favorite mobile model");
document.write("My Favorite Phone is: " + inp + "<br>");
document.write("Length of string is: " + inp.length);
//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var let = "Pakistani"
var tofind= 'n';

document.write("String: " + let + "<br>");
document.write("Index of " + tofind + ":"+ let.indexOf('n') );

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var let1 = "Hello World"
var tofind1= 'l';

document.write("String: " + let1 + "<br>");
document.write("Index of " + tofind1 + ":"+ let1.lastIndexOf('l') );

//Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var let = "Pakistani"
var tofind=3;
document.write("String: " + let + "<br>");
document.write("character at index " + tofind + ":"+ let.charAt(tofind) );

//Repeat Q1 using string concat() method.

var f_name = prompt("enter first name");
var L_naME = prompt("enter last name");
var full_name = f_name.concat(L_naME);
alert("welcome " + full_name);

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var word= "Hyderabad";
var newword= word.replace("Hyder","Islam");
document.write("City: "+ word + "<br>");
document.write("After Replacement: "+ newword + "<br>");


//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together.";

var newmessage= message.replace(/and/g,"&");
document.write(newmessage);


//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
var inp= "472"
document.write("VALUE: " + inp + "<br>");
document.write("Type: " + typeof(inp) + "<br>");
inp= parseInt(inp);
document.write("VALUE: " + inp + "<br>");
document.write("type: " + typeof(inp) + "<br>");

//10. Write a program that takes user input. Convert and show the input in capital letters.
var inp = "peanuts"
document.write("user input: " + inp + "<br>");
inp=inp.toUpperCase();
document.write("user input: " + inp + "<br>");

//11. Write a program that takes user input. Convert and show the input in title case.
var inp = "javascript"
document.write("user input: " + inp + "<br>");
document.write("user input: " + inp.charAt(0).toUpperCase() + inp.slice(1) + "<br>");

//12. Write a program that converts the variable num to string.
var num = 35.36 ;
document.write("Number: "+num + "<br>");
var num = num.toString().replace(".","");
document.write("Number: "+num + "<br>");

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
var username= prompt("Enter username");
var i=0;
while(i<username.length)
{
    if(username.charCodeAt(i)==33 ||username.charCodeAt(i)==44  || username.charCodeAt(i)==46   || username.charCodeAt(i)==64 )
    {alert("Please enter a valid username");
    break}
    i++
}


//You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

var Arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var inp = prompt("Welcome to ABC Bakery , Whatt dou you want to order");
var ind= -1;
var i=0;
while(i<Arr.length)
{
    if(inp.toLowerCase()==Arr[i])
   { ind=i;
    break;}
    i++
}

if(ind==-1)
alert("WE are sorry. " + inp + "is not available");
else
alert(inp + " is available at index "+ i + " in our bakery" );


//15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
  var pwd = prompt("Enter Password");
 if(!isNaN(pwd[0]))
 {
     alert("invalid password");
 }
if(pwd.length<6)
{
    alert("invalid password");
}
for(i=0;i<pwd.length;i++)
{
    code=pwd.charCodeAt(i);
    if (!(code > 47 && code < 58) && 
        !(code > 64 && code < 91) && 
        !(code > 96 && code < 123))
        { 
      alert("invald password");
    }
}

//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.

var university = "University of Karachi";
var newstr= university.split("");
var i=0;
while( i<newstr.length)
{
    document.write(newstr[i] + "<br>");
    i++;
}


//17. Write a program to display the last character of a user input.


var inp = "Pakistan";
document.write("User Input: " + inp + "<br>");
document.write("Last Character of input: " + inp[inp.length-1] + "<br>");

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var str = "The quick brown fox jumps over the lazy dog";
var strtolower = str.toLowerCase();
var word = "the"
var count=0;
for(i=0;i<str.length;i++)
{
    if ( (strtolower.slice(i,i+(word.length))== word))
    {
        count++;
    }
}

document.write("Text : " + str + "<br>");
document.write("There are " + count + " occurrence(s) of the word "+ word );

// ----------------------------------------------------------------------------------------
//====--------------------------------------------------------------------------------------



// chap 26 - 30 

//1. Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number

var num = prompt("enter positive integer");
var rd = Math.round(num);
var flr = Math.floor(num);
var cl = Math.ceil(num);

document.write("number : " + num + "<br>"  );
document.write(" Round: " + rd +"<br>");
document.write(" Floor :" + flr+"<br>");
document.write(" Ceil :" + cl+ "<br>");


//Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number

var num = prompt("enter negtive floating point integer");
var rd = Math.round(num);
var flr = Math.floor(num);
var cl = Math.ceil(num);

document.write("number : " + num + "<br>"  );
document.write(" Round: " + rd +"<br>");
document.write(" Floor :" + flr+"<br>");
document.write(" Ceil :" + cl+ "<br>");

//Write a program that displays the absolute value of a number. E.g. absolute v
//
var num = -4;
document.write("absolue value of "+ num + " is " + Math.abs(num));


//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:


var i =0;
while(i<2)
{var rdm = Math.random()*6;
    document.write("random dice value : " + Math.ceil(rdm) + "<br>");
i++}

//  Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
var i =0;
while(i<2)
{var rdm = Math.random()*2;
    document.write("random coin value : " + Math.ceil(rdm) + "<br>");
i++}



//Write a program that shows a random number between 1 and 100 in your browser.
var rdm = Math.random()*100;
    document.write("random number between 1 and 100 is : " + Math.ceil(rdm) + "<br>");

//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
    var inp = prompt("enter weight");
    document.write("The weight of user is "+parseFloat(inp) + " Kilograms" );

//Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

var secretNum=   Math.ceil(Math.random()*10);
var inp = prompt("enter secret number between 1 to 10");
if( inp==secretNum)
alert("congrats , You guessed the right number");
else
alert("Try Again");

//----------------------------------------------------------------------------------------
//------------------------------------_________________________________________------------------



//chap 31 to 34 -------------------------------------------------------


//Write a program that displays current date and time in
//your browser.

var mydate = new Date();
document.write(mydate);

//Write a program that alerts the current month in words.
//For example December.
var mydate = new Date();
var month = mydate.getMonth();
switch (month)
{
case 0 :
alert("January");
break;
case 1 :
alert("February");
break;
case 2 :
alert("March");
break;
case 3 :
alert("April");
break;
case 4 :
alert("May");
break;
case 5 :
alert("June");
break;
case 6 :
alert("July");
break;
case 7 :
alert("August");
break;
case 8 :
alert("September");
break;
case 9 :
alert("October");
break;
case 10 :
alert("November");
break;
case 11 :
alert("December");
break;
}

//3. Write a program that alerts the first 3 letters of the current
//day, for example if today is Sunday then alert will show
//Sun.

var mydate = new Date();
mydate= mydate.toString();
document.write(mydate.slice(0,4));

//Write a program that displays a message “It’s Fun day” if
//its Saturday or Sunday today.
var mydate = new Date();
mydate= mydate.toString();
if (mydate.slice(0,4)=="Sun" || mydate.slice(0,4)=="Sat" );
alert("It’s Fun day”");

//Write a program that shows the message “First fifteen
//days of the month” if the date is less than 16th of the month
//else shows “Last days of the month”.

var mydate = new Date();
if(mydate.getDate()<=15)
document.write("First fifteen days of the month")
else 
document.write("Last days of the month.");

//Write a program that determines the minutes since
//midnight, Jan. 1, 1970 and assigns it to a variable that
//hasn't been declared beforehand. Use any variable you like
//to represent the Date object.

var mydate = new Date();
document.write("Current Date " + mydate+ "<br>");

 document.write("Elapsed milliseconds since January 1,1970: " + mydate.getTime() + "<br>");
 document.write("Elapsed minutes since January 1,1970: " + mydate.getTime()/(1000*60));

 //Write a program that tests whether it's before noon and
//alert “Its AM” else “its PM”.

var mydate = new Date();
document.write(mydate.getHours());
if(mydate.getHours()>11)
alert("its PM")
else
alert("its am");

//Write a program that creates a Date object for the last day
//of the last month of 2020 and assigns it to variable named
//laterDate.
var mydate = new Date("31 dec 2020");
document.write(mydate);

//Create a date object of the starting date of this Ramadan
//and alert the number of days past since 1st Ramadan?

