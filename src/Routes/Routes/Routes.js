import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: async () => fetch("https://dragon-news-server-phi-nine.vercel.app/news/"),
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                loader: async ({ params }) => fetch(`https://dragon-news-server-phi-nine.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: "/news/:id",
                loader: async ({ params }) => fetch(`https://dragon-news-server-phi-nine.vercel.app/news/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/yourProfile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
]);
