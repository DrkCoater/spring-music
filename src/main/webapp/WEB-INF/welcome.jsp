<%@ page contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Music Publisher</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="test.css" />
    </head>
    <body ng-app="app">
        <div class="container">
            <!-- Static navbar -->
            <div class="navbar navbar-default" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand active" ui-sref="list" ui-sref-active="active">Music Publisher</a>
                    </div>
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a ui-sref="new">Publish New</a></li>
                        </ul>
                    </div>
                </div><!--/.container-fluid -->
            </div>
            <div ui-view></div>
        </div> <!-- /container -->
    </body>
    <script type="text/javascript" src="scripts-min.js"></script>
</html>
