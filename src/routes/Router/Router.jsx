import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import Categories from "../../Shared/LeftNav/Categories";
import NewsLayout from "../../layouts/NewsLayout";
import SingleNews from "../../pages/Home/News/SingleNews";


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
            }
        ],
    },
    {
        path: "news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: "/news/:id",
                element: <SingleNews></SingleNews>,
                loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
            },

        ],
    }
]);

export default router
