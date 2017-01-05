var change=true;

//Object website
var website = {type:"coucoi"};
function tryIt(){return "coucou";}
/*
    //Method header - Generate a header for a webpage of the website
    data = "function"
    {
        alert('coucou');
        header_string += '<nav class"navbar navbar-inverse">';
        header_string += '<div class="container-fluid">';
        header_string += '<ul class="nav navbar-nav">';
        header_string += '<li class="active"><a href="index.html">Home</a></li>';
        header_string += '<li class="dropdown">';
        header_string += '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Thesis<span class="caret"></span></a>';
        header_string += '<ul class="dropdown-menu">';
        header_string += '<li><a href="thesis.html#thesis-research">Research</a></li>';
        header_string += '<li><a href="thesis.html#thesis-publications">Publications</a></li>';
        header_string += '<li><a href="thesis.html#thesis-teaching">Teaching</a></li>';
        header_string += '</ul>';
        header_string += '</li>';
        header_string += '<li><a href="about.html">About</a></li>';
        header_string += '</ul>';
        header_string += '</div>';
        header_string += '</nav>';
        //return header_string;
    }
};
*/

function addClass(element, classToAdd)
{
    $(element).addClass(classToAdd);
    /*
    var currentClassValue = element.className;
    if(currentClassValue.indexOf(classToAdd)==-1)
    {
        if((currentClassValue == null) || (currentClassValue === ""))
        {
            element.className = classToAdd;
        }
        else
        {
            element.className += " " + classToAdd;
        }
    }
    */
}
>
function removeClass(element, classToRemove)
{
    var currentClassValue = element.className;

    if(currentClassValue == classToRemove)
    {
        element.className = "";
        return;
    }

    var classValues = currentClassValue.split(" ");
    var filteredList = [];
    for(var i=0; i<classValues.length; i++)
    {
        if(classToRemove != classValues[i])
        {
            filteredList.push(classValues[i]);
        }
    }
    element.className = filteredList.join(" ");
}

function printClass(element)
{
    alert(element.className);
}

function testButton()
{
    printClass(document.getElementById("testButton"));
    addClass(document.getElementById("testButton"),"toto");
    printClass(document.getElementById("testButton"));
    addClass(document.getElementById("testButton"),"titi");
    printClass(document.getElementById("testButton"));
    removeClass(document.getElementById("testButton"),"toto");
    printClass(document.getElementById("testButton"));
}

function myFunction()
{
    alert("coucou");
    //Var to put anything you want
    var txt = "NewText";
    var array = ["New", "Old"]; 
    var struct = { name1 : "John", age : "25" };
    //Get an element by its id and change html content
    document.getElementById("menu").innerHTML = array[1] + txt + struct.name1; 
    document.getElementById("menu").style.color="blue";
}

function changeStyle()
{
    if(change==true)
    {
        document.getElementById("test").innerHTML = "Life is good";
        document.getElementById("test").style.color="blue";
        change=false;
    }
    else
    {
        document.getElementById("test").innerHTML = "Life is goooood";
        document.getElementById("test").style.color="red";
        change=true;
    }
}
