// import React from 'react';

import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const News = ({ data }) => {
    // console.log(data)

    return (

        <Card className="mt-2">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="d-flex just align-items-center gap-2">
                    <img style={{ height: '40px', borderRadius: "20px" }} src={data.author.img} alt="" />
                    <div style={{ color: 'var(--Dark-02, #403F3F)' }}>
                        <p style={{ fontWeight: 'bold' }} className="m-0 ">{data.author.name}</p>
                        <p className="m-0">{moment().format("D-MMM-YYYY")}</p>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <CiBookmark style={{ fontSize: '20px' }} />
                    <CiShare2 style={{ fontSize: '20px' }} />

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title style={{ fontWeight: '700', color: 'var(--Dark-02, #403F3F)' }}>{data.title}</Card.Title>
                <Image src={data.image_url} fluid alt="" />
                <Card.Text>

                    {data.details.length > 250 ?
                        <div className="mt-4">
                            {data.details.slice(0, 250)}....
                            <Link to={`/news/${data._id}`} style={{ color: 'var(--Linear, #FF8C47 )', listStyleType: 'none' }}>
                                Read More
                            </Link>
                        </div>

                        :
                        <div>{data.details}</div>

                    }

                </Card.Text>
                <Card.Footer className="d-flex">
                    <div className="flex-grow-1 " >
                        <Rating
                            placeholderRating={parseInt(data.rating.number)}
                            emptySymbol={<CiStar />}
                            placeholderSymbol={<FaStar style={{ color: 'red', opacity: '.7' }} />}
                            fullSymbol={<FaStar style={{ color: 'red', opacity: '.7' }} />
                            }
                        />
                        <span className="ms-2">{data.rating.number}</span>
                    </div>
                    <div className="  ">
                        <MdOutlineRemoveRedEye />
                        < span className="ms-2">{data.total_view}</span>
                    </div>
                </Card.Footer>
            </Card.Body>
        </Card >


    );
};

export default News;