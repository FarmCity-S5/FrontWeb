import React from "react";
import Chat from "./page/Chat/Chat";
import Statistique from "./page/BackOffice/Statistique/Statistique";
import Culture from "./page/BackOffice/Statistique/Culture";
import Terrain from "./page/BackOffice/Statistique/Terrain";
import Parcelle from "./page/BackOffice/Statistique/Parcelle";
import Login from "./page/Login/Login";
import Home from "./page/Home/Home";

export const routes =[
    {
        path:'/',
        element: <Statistique /> 
    },
    {
        path:'/chat',
        element: <Chat /> 
    },
    {
        path: '/stat',
        element: <Statistique />
    },
    {
        path: '/culture',
        element: <Culture />
    },
    {
        path: '/terrain',
        element: <Terrain />
    },
    {
        path: '/parcelle',
        element: <Parcelle />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    }
    
]