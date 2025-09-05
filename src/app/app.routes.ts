import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { About } from './about/about';
import { Error } from './error/error';

export const routes: Routes = [
    {
        path:'' ,component:Home
    },
    {
        path:'cart' , component:Cart
    },
    {
        path:'login' ,component:Login
    }
    ,
    {
        path:'signup' , component:Signup
    },
    {
        path:'about' , component:About
    },
    {
        path:'**' , component:Error
    }
];
