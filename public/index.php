<?php
error_reporting(E_ALL);
use Phalcon\Loader;
use Phalcon\Mvc\Router;
use Phalcon\DI\FactoryDefault;
use Phalcon\Mvc\Application as BaseApplication;
use Phalcon\Mvc\Url;
use Phalcon\Http\Response;
use Phalcon\Mvc\Collection\Manager;
use Phalcon\Db\Adapter\MongoDB\Client;
use Phalcon\Session\Adapter\Files as Session;
use Phalcon\Flash\Session as FlashSession;
use Phalcon\Http\Response\Cookies;

class Application extends BaseApplication
{
    /**
     * Register the services here to make them general or register in the ModuleDefinition to make them module-specific
     */
    protected function registerServices()
    {

        $di = new FactoryDefault();

        $loader = new Loader();

        $di->set(
            'url',
            function () {
                $url = new Url();

                $url->setBaseUri('http://localhost/mysomehow/');

                return $url;
            }
        );

        // Start the session the first time when some component request the session service
        $di->setShared(
            "session",
            function () {
                $session = new Session();

                $session->start();

                return $session;
            }
        );

        // Cookies
        $di->set(
            "cookies",
            function () {
                $cookies = new Cookies();

                $cookies->useEncryption(false);

                return $cookies;
            }
        );

        // Set up the flash session service
        $di->set(
            "flashSession",
            function () {
                return new FlashSession([
                    'error'     => 'alert alert-danger',
                    'notice'    => 'alert alert-info',
                    'success'   => 'alert alert-success',
                    'warning'   => 'alert alert-warning',
                ]);
            }
        );

        // Initialise the mongo DB connection.
        $di->set('mongo', function () {
            $dsn = 'mongodb://localhost:27017';
            $mongo = new MongoClient($dsn);
            return $mongo->selectDB('mysomehow');
        }, true);

        // Collection Manager is required for MongoDB
        $di->set('collectionManager', function () {
            return new Manager();
        });

        /**
         * We're a registering a set of directories taken from the configuration file
         */
        $loader->registerDirs([__DIR__ . '/../apps/library/']);

        $loader->registerNamespaces(array(
            'Models' => '../apps/Models/',
            'Helper' => '../apps/Helper/',
            'Phalcon' => '../apps/library/incubator/Library/Phalcon/',
            'MongoDB\Pagination\Adapter' => '../apps/library/pagination/src/',
        ));

        $loader->registerClasses(array(
            'ShoppingCart' => '../apps/library/cart/ShoppingCart.php'
        ));

        $loader->register();

        // Registering a router
        $di->set('router', function () {

            $domain     = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
            $backend    = strpos($domain, '/backend');
            $key        = 'frontend';
            $namespace  = 'Mysomwhow\Frontend\Controllers';

            if($backend != false){
                $key        = 'backend';
                $namespace  = 'Mysomwhow\Backend\Controllers';
            }

            $router = new Router();

            $router->setDefaultModule("frontend");

            // Router default
            $router->add('/:params', array(
                'namespace' => $namespace,
                'module' => $key,
                'controller' => 'index',
                'action' => 'index',
                'params' => 1
            ));

            $router->add('/' . $key . '/:params', array(
                'namespace' => $namespace,
                'module' => $key,
                'controller' => 'index',
                'action' => 'index',
                'params' => 1
            ));

            $router->add('/' . $key . '/:controller/:params', array(
                'namespace' => $namespace,
                'module' => $key,
                'controller' => 1,
                'action' => 'index',
                'params' => 2
            ));
            $router->add('/' . $key . '/:controller/:action/:params', array(
                'namespace' => $namespace,
                'module' => $key,
                'controller' => 1,
                'action' => 2,
                'params' => 3
            ));

            // router frontend
            $router->add('/notfound', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'index',
                'action' => 'notfound',
            ));
            $router->add('/gioi-thieu', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'about',
                'action' => 'index',
            ));
            $router->add('/blogs/:params', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'introduce',
                'action' => 'index',
                'params' => 1,
            ));
            $router->add('/huong-dan-lua-chon-size/:params', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'introduce',
                'action' => 'size',
                'params' => 1,
            ));
            $router->add('/he-thong-cua-hang', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'address',
                'action' => 'index',
            ));
            $router->add('/pages/he-thong-cua-hang/:params', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'address',
                'action' => 'pages',
                'params' => 1,
            ));
            $router->add('/collections/:params', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'products',
                'action' => 'index',
                'params' => 1,
            ));
            $router->add('/search/:params', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'products',
                'action' => 'search',
                'params' => 1,
            ));
            $router->add('/products/:params', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'products',
                'action' => 'show',
                'params' => 1,
            ));
            $router->add('/dang-nhap', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'login',
                'action' => 'index',
            ));
            $router->add('/gio-hang', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'cart',
                'action' => 'index',
            ));
            $router->add('/checkout/:action/:params', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'checkout',
                'action' => 1,
                'params' => 2
            ));
            $router->add('/mua-hang/:params', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'checkout',
                'action' => 'index',
                'params' => 1
            ));
            $router->add('/mua-hang/:action/:params', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'checkout',
                'action' => 1,
                'params' => 2,
            ));
            $router->add('/account', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'account',
                'action' => 'index',
            ));
            $router->add('/account/:action', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'account',
                'action' => 1,
            ));
            $router->add('/doi-mat-khau', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'account',
                'action' => 'resetPass',
            ));
            $router->add('/sua-thong-tin', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'account',
                'action' => 'update',
            ));
            $router->add('/dang-ky', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'login',
                'action' => 'register',
            ));

            // Apii test
            $router->addPost('/apitestlogin', array(
                'namespace' => 'Mysomwhow\Frontend\Controllers',
                'module' => 'frontend',
                'controller' => 'about',
                'action' => 'apitestlogin',
            ));

            // Mongodb Control Panel
            $router->add('/rockmongodb', [
                'module'     => 'Models',
            ])->setName('rockmongodb');

            return $router;
        });



        $this->setDI($di);
    }

    public function main()
    {

        $this->registerServices();

        // Register the installed modules
        $this->registerModules([
            'frontend' => [
                'className' => 'Mysomwhow\Frontend\Module',
                'path'      => '../apps/frontend/Module.php'
            ],
            'backend'  => [
                'className' => 'Mysomwhow\Backend\Module',
                'path'      => '../apps/backend/Module.php'
            ]
        ]);

        echo $this->handle()->getContent();
    }
}

$application = new Application();
$application->main();
