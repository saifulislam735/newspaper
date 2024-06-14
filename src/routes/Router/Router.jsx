import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import Categories from "../../Shared/LeftNav/Categories";
import NewsLayout from "../../layouts/NewsLayout";
import SingleNews from "../../pages/Home/News/SingleNews";
import Error from "../../pages/Error/Error";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";
import NavigationLayout from "../../layouts/NavigationLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "catagories/:id",
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:3000/catagories/${params.id}`)//here param have to distructure like that { params }
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ],
    },
    {
        path: "news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <SingleNews></SingleNews>,
                loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
            },
            {
                path: '*',
                element: <Error></Error>
            }

        ],
    },
    {
        path: "/",
        element: <NavigationLayout></NavigationLayout>,
        children: [

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <SignUp></SignUp>
            }

        ],
    },



]);

export default router
