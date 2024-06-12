// import React from 'react';

import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import q1 from "../../assets/qZone1.png"
import q2 from "../../assets/qZone2.png"
import q3 from "../../assets/qZone3.png"

const RightNav = () => {
    return (
        <div className="mt-4">
            <div className="d-grid gap-2">
                <h4 className="font-bold ps-1" style={{fontSize:'20px'}}>Login with</h4>
                <Button className="btn btn-outline-primary d-flex gap-2 align-items-center" variant="" size="lg">
                    <FaGoogle />
                    Log in with Google
                </Button>
                <Button className="btn btn-outline-secondary d-flex gap-2 align-items-center" variant="" size="lg">
                    <FaFacebook />
                    Log in with Facebook
                </Button>
            </div>
            <ListGroup className="mt-4">
                <h4 className="font-bold ps-1" style={{fontSize:'20px'}}>Find Us On</h4>
                <ListGroup.Item className=" d-flex gap-2 align-items-center"><FaFacebook style={{ color: '#3B599C' }} />Facebook</ListGroup.Item>
                <ListGroup.Item className=" d-flex gap-2 align-items-center"><FaTwitter style={{ color: '#58A7DE' }} />Twitter</ListGroup.Item>
                <ListGroup.Item className=" d-flex gap-2 align-items-center"><FaInstagram style={{ backgrou: 'linear-gradient(to right, #D82D7E 100%, #FBA756 100%)' }} />Instragram</ListGroup.Item>

            </ListGroup>
            <div className="mt-4" style={{ background: 'var(--Dark-07, #F3F3F3)' }}>
                <h4 className="font-bold ps-1" style={{fontSize:'20px'}}>Q-Zone</h4>
                <div className="text-center">
                    <img src={q1} alt="" />
                    <img src={q2} alt="" />
                    <img src={q3} alt="" />
                </div>
            </div>
        </div>

    );
};

export default RightNav;