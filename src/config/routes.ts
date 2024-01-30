import About from "../pages/About";
import Atvs from "../pages/Atvs";
import Bikes from "../pages/Bikes";
import Contact from "../pages/Contact";
import Gear from "../pages/Gear";
import Helmets from "../pages/Helmets";
import Home from "../pages/Home";

interface RouteType{
    path:string,
    component: () => JSX. Element,
    name: string,
    protected: boolean
}

const routes: RouteType[]=[
    {
        path:"",
        component: Home,
        name: "Home Screen",
        protected: false
    },
    {
        path:"/About",
        component: About,
        name: "About",
        protected: false
    },
    {
        path: "/Atvs",
        component: Atvs,
        name: "ATVs and Quads",
        protected: true
    
    },
    {
        path: "/Bikes",
        component: Bikes,
        name: "Dirtbikes",
        protected: true
    
    },
    {
        path: "/Contact",
        component: Contact,
        name: "Contact Us",
        protected: false
    
    },
    {
        path: "/Gear",
        component: Gear,
        name: "Gear and Apparel",
        protected: true
    
    },
    {
        path: "/Helmets",
        component: Helmets,
        name: "Helmets",
        protected: true
    
    },
];
export default routes