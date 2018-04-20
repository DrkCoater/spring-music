<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Spotify Music Recommendation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="webjars/bootstrap/3.2.0/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="webjars/bootstrap/3.2.0/css/bootstrap-theme.min.css" />
        <link rel="stylesheet" href="../../css/reset.css" />
        <link rel="stylesheet" href="../../css/app.css" />
    </head>
    <body ng-app="app">
        <div class="container">
            <!-- Static navbar -->
            <div class="navbar navbar-default" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand active" ui-sref="app" ui-sref-active="active">The Music Recommendation</a>
                    </div>
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li><a ui-sref="list">List Music</a></li>
                            <li><a ui-sref="new">Publish New</a></li>
                        </ul>
                    </div>
                </div><!--/.container-fluid -->
            </div>
            <div ui-view></div>
        </div> <!-- /container -->
    </body>
    <script type="text/javascript" src="webjars/jquery/2.2.4/jquery.min.js"></script>
    <script type="text/javascript" src="webjars/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="webjars/angularjs/1.6.8/angular.min.js"></script>
    <script type="text/javascript" src="webjars/angular-ui-bootstrap/2.2.0/ui-bootstrap.min.js"></script>
    <script type="text/javascript" src="webjars/angular-resource/1.6.9/angular-resource.min.js"></script>
    <script type="text/javascript" src="webjars/angular-cookies/1.6.9/angular-cookies.min.js"></script>
    <script type="text/javascript" src="webjars/angular-animate/1.6.9/angular-animate.min.js"></script>
    <script type="text/javascript" src="webjars/angular-ui-router/1.0.15/angular-ui-router.min.js"></script>
    <!-- Application Files -->
    <script type="text/javascript" src="../../js/app/app.js"></script>
    <script type="text/javascript" src="../../js/app/_app.js"></script>
    <script type="text/javascript" src="../../js/app/controller/AppController.js"></script>
    <script type="text/javascript" src="../../js/app/controller/MusicListController.js"></script>
    <script type="text/javascript" src="../../js/app/controller/NewMusicController.js"></script>
    <script type="text/javascript" src="../../js/app/service/MusicService.js"></script>
</html>
