import { Button, Image } from "react-bootstrap";
import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData } from "react-router-dom";

const SingleNews = () => {
    // const { id } = useParams()
    const news = useLoaderData()
    const { title, details, image_url, category_id } = news;
    // console.log(id, news)
    // const location = useLocation()
    // console.log(location, 'single')
    return (
        <div className="px-4">
            <Image className="mt-4" src={image_url} fluid alt="" />
            <h4 className="mt-4">{title}</h4>
            <div className="mt-4">
                <p>{details}</p>
                <p>{details}</p>
            </div>
            <Link to={`/catagories/${category_id}`}>
                <Button className="d-flex align-items-center">
                    <GoArrowLeft style={{ fontSize: '20px' }} />
                    All news in this category
                </Button>
            </Link>
        </div>
    );
};

export default SingleNews;