// Layouts
import {HeaderOnly} from "~/components/layouts";


// Pages
import Cart from "~/pages/Cart";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Dashboard from "~/pages/Dashboard";

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/dashboard', component: Dashboard},
    {path: '/login', component: Login, layout: null},
    {path: '/cart', component:Cart, layout: HeaderOnly}
]

const privateRoutes = []

export {publicRoutes, privateRoutes}


