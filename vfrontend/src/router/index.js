import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import rooms from '../views/RoomsView.vue'
import aminities from '../views/AminitiesView.vue'
import aboutus from '../views/AboutUsView.vue'
import AdminView from '../views/AdminView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'

import RoomView from '../views/RoomView.vue'
import Amenitiesadmin from '../views/Amenitiesadmin.vue'
import Dashboard from '../views/Dashboard.vue'
import InventoryAdmin from '../views/InventoryAdmin.vue'
import CategoriesAdmin from '../views/CategoriesAdmin.vue'
import Products from '../views/Products.vue'
import ProductsAdmin from '../views/ProductsAdmin.vue'
import HistoryPage from '../views/HistoryPage.vue'
import PosAdmin from '../views/PosAdmin.vue'
import BookingRoomAdmin from '../views/BookingRoomAdmin.vue'
import ReservationAmenities from '../views/ReservationAmenities.vue'

import YourBookingView from '../views/YourBookingView.vue'


// import Sidebar from '../views/Sidebar.vue'
// import About from '../views/About.vue'
// import Home from '../views/Home.vue'

// import UpdateRoom from '@/views/UpdateRoom.vue';
// import RoomView from '../views/RoomView.vue'
// import AdminAmenitiesView from '../views/AdminAmenitiesView.vue'
// import PaymentView from '../views/PaymentView.vue'
// import InventoryView from '../views/InventoryView.vue'





const routes = [

  {
    path: '/yourbook',
    name: 'YourBookingView',
    component: YourBookingView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  // { path: '/about', component: About },
  // { path: '/home', component: Home },

  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },


  {
    path: '/',
    name: 'home',
    component: index
  },

  {
    path: '/rooms',
    name: 'rooms',
    component: rooms
  },
  {
    path: '/aminities',
    name: 'aminities',
    component: aminities
  },
  {
    path: '/prod',
    component: Products
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: aboutus
  },
  {
    path: '/admin',
    component: AdminView,
    meta: { requiresAdmin: true },
  },

  {
    path: '/addroom',
    component: RoomView,
    meta: { requiresAdmin: true },
  },

  {
    path: '/inventory',
    component: InventoryAdmin,
    meta: { requiresAdmin: true },
  },
  {
    path: '/pos',
    component: PosAdmin,
    meta: { requiresAdmin: true },
  },

  {
    path: '/addamenities',
    component: Amenitiesadmin,
    meta: { requiresAdmin: true },
  },

  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAdmin: true },
  },
  
{
  path: '/categories',
  component: CategoriesAdmin,
  meta: { requiresAdmin: true },
},
{
  path: '/bookingroom',
  component: BookingRoomAdmin,
  meta: { requiresAdmin: true },
},
{
  path: '/reservation',
  component: ReservationAmenities,
  meta: { requiresAdmin: true },
},
{
  path: '/productinventory',
  component: ProductsAdmin,
  meta: { requiresAdmin: true },
},
{ path: '/history/:upc', 
name: 'history',  
component: HistoryPage },

  


  // ... other routes
  // {
  //   path: '/update/:id',
  //   name: 'updateRoom',
  //   component: UpdateRoom,
  // },
  // {
  //   path: '/payment',
  //   component: PaymentView
  // },
  // {
  //   path: '/inventory',
  //   component: InventoryView
  // },

  // {
  //   path: '/amenities',
  //   component: AdminAmenitiesView
  // },

  // {
  //   path: '/roomview',
  //   component: RoomView
  // },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAdmin = sessionStorage.getItem('isAdmin') === 'true';

  // Check if the user is an admin and not on the login page
  if (isAdmin && to.path !== '/login') {
    // Continue with navigation for the admin
    next();
  } else if (to.meta.requiresAdmin && !isAdmin) {
    // Redirect to login or home if user is not an admin
    next(isAdmin ? '/admin' : '/login');
  } else {
    // Continue with navigation for non-admin users
    next();
  }
});

export default router

