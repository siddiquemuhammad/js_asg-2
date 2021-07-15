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

var dt = new Date();
var totalms= dt.getTime();
var mydate = new Date("18 jun 2015");
var ms = mydate.getTime();

var diff = totalms-ms;
var time= diff/(1000*60*60*24)
document.write(Math.ceil(time) + " days has passed since 1st ramadan 2015");

//10. Write a program that displays in your browser the
//seconds that elapsed between the reference date and the
//beginning of 2015.

var dt = new Date("01 jan 2019");
var totalms= dt.getTime();
var mydate = new Date("05 jun 2019");
var ms = mydate.getTime();
var _seconds = ms - totalms;
document.write("On reference date : " + mydate + ", <br> " +_seconds/1000 + " seconds had passed since begining of 2015" );

//11. Create a Date object for the current date and time.
//Extract the hours, reset the date object an hour ahead and
//finally display the date object in your browser.
var dt = new Date();
document.write("Current date: " + dt + "<br>");
dt.setHours(dt.getHours()-1);
document.write("1 Hr ago, it was: " + dt + "<br>");

//12. Write a program that creates a date object and show the
//date in an alert box that is reset to 100 years back?

var dt = new Date();
document.write("Current date: " + dt + "<br>");
dt.setFullYear(dt.getFullYear()-100);
document.write("100 years back , it was: " + dt + "<br>");

//13. Write a program to ask the user about his age. Calculate
//and show his birth year in your browser.
var dt = new Date();
var age = prompt("enter your age");
var birthyear = dt.getFullYear()-age;
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthyear );


//14. Write a program to generate your K-Electric bill in your
//browser. All the amounts should be rounded off to 2
//decimal places. Display the following fields:
//a. Customer Name
//b. Current Month
//DATE METHODS | JAVASCRIPT
//Page 5 of 5
//c. Number of units
//d. Charges per unit
//e. Net Amount Payable (within Due Date)
//f. Late Payment Surcharge
//g. Gross Amount Payable (after Due Date)
var dt= new Date();
var _name = "abc customer";
var _units = 410;
var charge_unit = 16;
var surcharge = 350;
document.write("<h1>K-Electric Bill</h1> <br>");
document.write("Customer Name:" + _name + "<br>");
document.write("Month: july <br>");
document.write("number of units:" +  _units.toFixed(2) + "<br>");
document.write("charges per unit :" + charge_unit.toFixed(2) + "<br> <br>");
var NET_pay = _units*charge_unit;
document.write("Net amount Payable (withing due date ):" + NET_pay.toFixed(2)+ "<br>");
document.write("Late payement surcharge:" + surcharge.toFixed(2) + "<br>");
var late_pay= NET_pay+surcharge;
document.write("Gross amount payable after duedate :"+ late_pay.toFixed(2) );

//--------------------------------------------------------------------
//-----------------------------------------

//chap 35 - 38

//1. Write a function that displays current date & time in your
//browser.
function disp ()
{
    var dt = new Date();
    document.write(dt);
}
disp();

//2. Write a function that takes first & last name and then it
//greets the user using his full name.

function Fname(a,b)
{
    document.write("welcome , " + a + " " + b );
}

Fname("ali", "ahmed");

//3. Write a function that adds two numbers (input by user)
//and returns the sum of two numbers.

function sum (a,b)
{
    return a+b;
}
document.write(sum(5,6));


//4. Calculator:
//Write a function that takes three arguments num1, num2
//& operator & compute the desired operation. Return and
//show the desired result in your browser.


function calc(a,b,c)
{
    if(c=='+')
    return a+b;
    if(c=='-')
    return a-b;
    if(c=='/')
    return a/b;
    if(c=='*')
    return a*b;

}
document.write( calc(2,5,"+") + " <br>"); 
document.write( calc(2,5,"-") + " <br>"); 
document.write( calc(2,5,"/") + " <br>"); 
document.write( calc(2,5,"*") + " <br>"); 

//5. Write a function that squares its argument.

function sq(a)
{
    return a*a;
}

//6. Write a function that computes factorial of a number.

function factorial (n){
    j = 1;
    for(i=1;i<=n;i++){
      j = j*i;
    }
    return j;
  }

document.write(factorial(5));

//7. Write a function that take start and end number as inputs
//& display counting in your browser.

function count (a,b)
{
    for(i=a;i<=b;i++)
    {
        document.write(i+ "<br>");

    }
}
count(5,10);


//Write a nested function that computes hypotenuse of a
//right angle triangle.
//Hypotenuse2 = Base2 + Perpendicular2

function sq(a)
{
    return a*a;
}

function hyp (b,p)
{
   return  Math.sqrt(sq(b) + sq(p));

}
document.write(hyp(3,9));

//9. Write a function that calculates the area of a rectangle.
//A = width * height
//Pass width and height in following manner:
//i. Arguments as value
//ii. Arguments as variables


function area (w,h)
{
    return w*h;
}

var wid= 50;
document.write(area(wid,30));

//10. Write a JavaScript function that checks whether a passed
//string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as
//forward, e.g., madam.


function palindrome(str)
{
    var mid = Math.ceil(str.length/2);
    console.log(mid);
    var a =true;
    for(i=0;i<mid;i++)
    {
        
        if(str[i] != str[str.length-1-i])
     { a=false;
    
     }
     
    }
    return a;

}

if(palindrome("madam"))
document.write("string is a palindrome");
else
document.write("not a palindrome");



//12. Write a JavaScript function that accepts a string as a
//parameter and find the longest word within the string.

var s = "Web Development Tutorial";

function largest(str)
{
var a;
var strsplit = str.split(" ");
console.log(strsplit);

for(i=0;i<strsplit.length-1;i++)
{
    if(strsplit[i].length > strsplit[i+1].length )
    {
        a=i;
    } 

}
 return strsplit[a];
}

largest(s);

//13. Write a JavaScript function that accepts two arguments, a
//string and a letter and the function will count the number of
//function | JAVASCRIPT
//Page 3 of 4
//occurrences of the specified letter within the string.
//Sample arguments : 'JSResourceS.com', 'o'

var str = "JSResourceS.com"
var key = "o"
var count=0;
function fc (a,b)
{
      for(i=0;i<str.length;i++)
      {
          if(str[i]==key)
          count++;
      }
 return count;
}
console.log(fc(str,key));


// The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference (radius) {
    var circumference = 2*3.142*radius
    console.log(circumference)
}
calcCircumference(2)

function calcArea(radius){
    var area = 3.142*radius*radius
    console.log(area)
}
calcArea(2)

//////////////////////////////////////
/////////////chap 38- 42////////////

//Write a custom function power ( a, b ), to calculate the value of
//a raised to b.

function pw (a,b)
{
    return Math.pow(a,b);
}

console.log(pw(5,3));

//Any year is entered through the keyboard. Write a function to
//determine whether the year is a leap year or not.

var yr = prompt("enter year");
function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

if(isLeapYear(yr))
console.log("given year is a leap year")
else
console.log("not a leap year");


//3. If the lengths of the sides of a triangle are denoted by a, b, and
//c, then area of triangle is given by
//area = S(S − a)(S − b)(S − c)
//where, S = ( a + b + c ) / 2

function s (a,b,c)
{
    return((a+b+c)/2);
}
var a=5,b=6,c=7;
var s = s(a,b,c)
function area(s,a,b,c)
{
    return (s*(s-a)*(s-b)*(s-c));
}
console.log("area is " + area(s,a,b,c))


//4. Write a function that receives marks received by a student in 3
//subjects and returns the average and percentage of these
//marks. there should be 3 functions one is the mainFunction
//and other are for average and percentage. Call those functions
//from mainFunction and display result in mainFunction.
 function calcAvg (mth,eng,pak)
 {
    return (mth+eng+pak)/3;
 }
 function calcperc(mth,eng,pak)
 {
     return (mth+eng+pak)/300*100;
 }
function main(a,b,c)
{
    
    console.log("avg is "+ calcAvg(a,b,c) + " percentage is " + calcperc(a,b,c) );
}
main(80,80,80);

//5. You have learned the function indexOf. Code your own custom
//function that will perform the same functionality. You can code
//for single character as of now.

function indof(arr,key)
{

    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==key)
        return i;
     

    }
    return -1;
}
var a ="string to search"
var key = "j";
console.log(indof(a,key));

//6. Write a function to delete all vowels from a sentence. Assume
//that the sentence is not more than 25 characters long.
//&& str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u"
var sentence = " qweqweqweqwaeiou ksdmkdmkmfkvmfk lsl";
function delvowel(str)
{
    var newstr;
    for(i=0;i<str.length;i++)
    {
        if(str[i]!="a" && str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u")
       {
            newstr= newstr + str[i];
       } 
      
   }
   return newstr;
}
console.log(sentence);
console.log(delvowel(sentence));

//7. Write a function with switch statement to count the number of
//occurrences of any two vowels in succession in a line of text.

var a ="Pleases read this application and give me gratuity"

function checkvowel(str)
{
    switch(str)
    {
        case  "a" :
        return true;
        break;
        case  "e" :
        return true;
        break;
        case  "i" :
        return true;
        break;
        case  "o" :
        return true;
        break;
        case  "u" :
        return true;
        break;
        default :
        return false;

    }

}
// console.log(checkvowel("a"));
// console.log(checkvowel("b"));
// console.log(checkvowel("c"));

function checkSuccessiveVowel(str)
{
    count=0;
    for(i=0;i<str.length;i++)
    if(checkvowel(str[i]) && checkvowel(str[i+1]))
    {
        count++;
        console.log(str[i]+str[i+1]);
    }
        return count;
}

console.log(checkSuccessiveVowel(a));

//8. The distance between two cities (in km.) is input through the
//keyboard. Write four functions to convert and print this
//distance in meters, feet, inches and centimeters.

var inp = prompt("enter distance b/w two cities in km");
console.log("distance in Km " + inp) ;
console.log("distance in meter " + KmToMeter(inp)) ;
console.log("distance in feet " + KmToFeet(inp)) ;
console.log("distance in inches " + KmToInches(inp)) ;
console.log("distance in centimeters " + KmToCentimeters(inp)) ;


function KmToMeter(input)
{
    return (input*1000);   
}
function KmToFeet(input)
{
    return (input*3281);
}
function KmToInches(input)
{
    return (input*39370);
}
function KmToCentimeters(input)
{
    return (input*100000);
}

//9. Write a program to calculate overtime pay of employees.
//Overtime is paid at the rate of Rs. 12.00 per hour for every hour
//worked above 40 hours. Assume that employees do not work
//for fractional part of an hour.

//var a = prompt("enter hours worked");

function paycalulate(hrs)
{
    var hrs= Math.floor(hrs);
    if(hrs<=40)
    {
    return 0;
    }
    else if(hrs>40)
    {
        var ovHrs = Math.floor(hrs)-40;
        return (ovHrs*12);
    }


}

console.log("overtime for employee who worked 40 hrs is " + paycalulate(40));
console.log("overtime for employee who worked 41 hrs is " + paycalulate(41));
console.log("overtime for employee who worked 50 hrs is " + paycalulate(50.9));


//10. A cashier has currency notes of denominations 10, 50 and
//100. If the amount to be withdrawn is input through the
//keyboard in hundreds, find the total number of currency notes
//of each denomination the cashier will have to give to the
//withdrawer.

var inp = prompt();

document.write("You will have "+ Math.floor(inp/100) + " hundred note(s) " + Math.floor((inp%100)/50) + " 50 notes " + " and " + Math.floor(((inp%100)%50)/10) + " note(s) of 10");


