//Object website
var website = 
    { 
        //Method header - Generate a header for a webpage of the website
        header : function(pathToMainWebDir)
        {
            header_string = '';
            header_string += '<nav class"navbar navbar-inverse">';
            header_string += '<div class="container-fluid">';
            header_string += '<ul class="nav navbar-nav">';
            header_string += '<li><a href="'+pathToMainWebDir+'/index.html">Home</a></li>';
            header_string += '<li class="dropdown">';
            header_string += '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Thesis<span class="caret"></span></a>';
            header_string += '<ul class="dropdown-menu">';
            header_string += '<li><a href="'+pathToMainWebDir+'/thesis.html#thesis-research">Research</a></li>';
            header_string += '<li><a href="'+pathToMainWebDir+'/thesis.html#thesis-publications">Publications</a></li>';
            header_string += '<li><a href="'+pathToMainWebDir+'/thesis.html#thesis-teaching">Teaching</a></li>';
            header_string += '</ul>';
            header_string += '</li>';
            header_string += '<li class="dropdown">';
            header_string += '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Projects<span class="caret"></span></a>';
            header_string += '<ul class="dropdown-menu">';
            header_string += '<li><a href="'+pathToMainWebDir+'/projects.html#projects-sphliquid">SPH Liquid</a></li>';
            header_string += '<li><a href="'+pathToMainWebDir+'/projects.html#projects-raytracerSandbox">Raytracer Sandbox</a></li>';
            header_string += '</ul>';
            header_string += '</li>';
            header_string += '</ul>';
            header_string += '</div>';
            header_string += '</nav>';
            return header_string;
        }
    };
