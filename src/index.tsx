import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Lobby from "./pages/Lobby.tsx";
import Game from "./pages/Game.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import {Reset} from "styled-reset";
import GlobalFont from "../public/assets/font";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Lobby/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: 'game',
        element: <Game />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <Reset/>
        <GlobalFont/>
        <RouterProvider router={router}/>
    </>
)
