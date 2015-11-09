require.config({
    paths: {
        authenticatedUserService: 'services/authenticatedUserService',
        serverCallService: 'services/serverCallService',
        authenticationService: 'services/authenticationService',
        searchService: 'services/searchService',
        dopHeader: 'directives/header/header',
        dopFooter: 'directives/footer/footer',
        dopSidebar: 'directives/sidebar/sidebar',
        translationService: 'services/translationService',
        dopLoginBar: 'directives/login-bar/login-bar',
        dopAlert: 'directives/alert/alert',
        alertService: 'services/alertService',
        inputValueControl: 'directives/input-value-control',
        dopDetailedSearch: 'directives/detailedSearch/detailedSearch',
        dopAddPortfolio: 'directives/addPortfolio/addPortfolio',
        angular: 'bower_components/angular/angular',
        'angular-animate': 'bower_components/angular-animate/angular-animate',
        'angular-aria': 'bower_components/angular-aria/angular-aria',
        'angular-click-outside': 'bower_components/angular-click-outside/clickoutside.directive',
        'angular-material': 'bower_components/angular-material/angular-material',
        'angular-material-icons': 'bower_components/angular-material-icons/angular-material-icons.min',
        'angular-messages': 'bower_components/angular-messages/angular-messages',
        'angular-mocks': 'bower_components/angular-mocks/angular-mocks',
        'angular-resource': 'bower_components/angular-resource/angular-resource',
        'angular-route': 'bower_components/angular-route/angular-route',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize',
        angularScreenfull: 'bower_components/angular-screenfull/dist/angular-screenfull',
        'angular-touch': 'bower_components/angular-touch/angular-touch',
        'angular-translate': 'bower_components/angular-translate/angular-translate',
        'angular-translate-loader-url': 'bower_components/angular-translate-loader-url/angular-translate-loader-url',
        'angular-youtube-mb': 'bower_components/angular-youtube-mb/src/angular-youtube-embed',
        jsog: 'bower_components/jsog/lib/JSOG',
        'material-design-icons': 'bower_components/material-design-icons/index.html',
        'requirejs-domready': 'bower_components/requirejs-domready/domReady',
        shufflejs: 'bower_components/shufflejs/dist/jquery.shuffle',
        jquery: 'bower_components/jquery/dist/jquery',
        screenfull: 'bower_components/screenfull/dist/screenfull',
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-animate': {
            deps: [
                'angular'
            ]
        },
        'angular-aria': {
            deps: [
                'angular'
            ]
        },
        'angular-material': {
            deps: [
                'angular-animate',
                'angular-aria'
            ]
        },
        'angular-translate': {
            deps: [
                'angular'
            ]
        },
        'angular-translate-loader-url': {
            deps: [
                'angular'
            ]
        },
        'angular-route': {
            deps: [
                'angular'
            ]
        },
        'angular-youtube-mb': {
            deps: [
                'angular'
            ]
        },
        'angular-resource': {
            deps: [
                'angular'
            ]
        },
        'angular-sanitize': {
            deps: [
                'angular'
            ]
        },
        'angular-messages': {
            deps: [
                'angular'
            ]
        },
        'angular-touch': {
            deps: [
                'angular'
            ]
        },
        'angular-material-icons': {
            deps: [
                'angular'
            ]
        },
        app: {
            deps: [
                'angular',
                'angular-translate',
                'angular-route',
                'angular-youtube-mb',
                'angular-resource',
                'angular-sanitize',
                'angular-messages',
                'angular-touch',
                'angular-material-icons',
                'jsog',
                'angular-translate-loader-url'
            ]
        },
        screenfull: {
            deps: [
                'jquery'
            ]
        },
        angularScreenfull: {
            deps: [
                'angular',
                'screenfull'
            ]
        }
    },
    deps: [
        './app.bootstrap'
    ],
    packages: [

    ]
});
