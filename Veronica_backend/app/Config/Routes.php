<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->put('api/rooms/update/(:num)', 'RoomController::update/$1');
$routes->match(['post', 'get'],'/api/login', 'MainController::login');
$routes->match(['post', 'get'],'/api/register', 'MainController::register');
$routes->match(['post', 'get'], '/getData', 'MainController::getData');
$routes->post('/save', 'MainController::save');
$routes->match(['post', 'get'], '/amenitiesgetData', 'MainController::amenitiesgetData');
$routes->post('/amenitiesSave', 'MainController::amenitiesSave');


$routes->match(['post', 'get'], '/getCategory', 'ProductController::getCategory');
$routes->post('/saveCateg', 'ProductController::saveCateg');
$routes->match(['post', 'get'], '/getInventory', 'ProductController::getInventory');
$routes->post('/inventorySave', 'ProductController::inventorySave');



//pos inventory

$routes->get('/', 'Home::index');
$routes->get('/api/sales/(:any)', 'Home::getSales/$1');
$routes->match(['get', 'post'], '/api/isales', 'Home::isales');
$routes->match(['get', 'post'], '/api/setsales/(:any)', 'Home::setsales/$1');
$routes->match(['get', 'post'], '/api/getProducts', 'Home::getProducts');
$routes->match(['get', 'post'], '/api/updateQuantity', 'Home::updateQuantity');
$routes->match(['get', 'post'], '/api/audit/(:any)', 'Home::audit/$1');
$routes->match(['get', 'post'], '/api/newproduct', 'Home::newproduct');
$routes->put('api/updateproduct/(:num)', 'Home::updateProduct/$1');

//booking room

$routes->match(['get', 'post'], '/api/bookingsRoom', 'BookingRoomController::createBooking');
$routes->match(['get', 'post'], '/api/getBookingroom', 'BookingRoomController::getBookingroom'); ///api/updateBookingStatus
$routes->match(['get', 'post'], '/api/updateBookingStatus/(:any)', 'BookingRoomController::updateBookingStatus/$1');
$routes->match(['get', 'post'], '/api/getUserData/(:any)', 'BookingRoomController::getUserData/$1');

//reserve amenities  /reservationAmenities/create
$routes->match(['get', 'post'], '/api/reserveAmenity', 'ReservationAmenitiesController::create');
$routes->match(['get', 'post'], '/api/getReservationAmenities', 'ReservationAmenitiesController::getReservationAmenities');
$routes->match(['get', 'post'], '/api/updateReservationStatus/(:any)', 'ReservationAmenitiesController::updateReservationStatus/$1');

//deny reason
$routes->match(['get', 'post'], '/api/saveDenyReason', 'DenyReasonController::saveDenyReason');