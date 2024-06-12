// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [catagories, setCatagories] = useState([])//have to be null array if you give here any empty string it will show an error
    useEffect(() => {
        fetch('http://localhost:3000/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => {
                console.log(error)
            })
    }, [])
    // console.log(catagories)
    return (
        <div>
            <h5 className="font-bold">All Caterogy</h5>
            <div style={{ paddingLeft: '30px' }}>
                {
                    catagories.map(catagory => <Link style={{ textDecoration: 'none',color:'var(--Dark-04, #9F9F9F)' }} to={`catagories/${parseInt(catagory.id)}`} key={catagory.id}>{catagory.name} <br /></Link>)
                }
            </div>
        </div>
    );
};

export default LeftNav;