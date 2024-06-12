import { useLoaderData, useParams } from "react-router-dom";
import News from "../../pages/Home/News/News";

const Categories = () => {
    const { id } = useParams()
    const data = useLoaderData()
    // console.log(id, data)
    return (
        <div>
            <h5>Dragon News Home</h5>
            <div>
                {
                    data.map(data => <News key={data._id} data={data} ></News>)
                }
            </div>
        </div>
    );
};

export default Categories;