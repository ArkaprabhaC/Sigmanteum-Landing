import React from 'react';
import './SigFooter.css';
import {Layout, Col, Row} from 'antd';
import 'antd/dist/antd.css';

const SigFooter = () => {
    const {Footer} = Layout;
    return(
    <Footer style={{backgroundColor:"#fff"}}>
        <Row className="footer_content">
            <Col xs={24} md={12} className="footer_logo">
                <Row> 
                    <img src={require("../assets/logo.jpeg")} alt="company-logo" style={{ width: "200px"}} />
                    <h3>We are a premium finance company that specializes in increasing your rate of return in stock trading.</h3>
                </Row>
            </Col>
            <Col md={4} xs={24} className="footer_nav">
                        
                <h5 className="footer_nav_header">Get Started</h5>
                <ul>
                    <li>About Us</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Contact Sales</li>
                </ul>

            </Col>
            <Col md={4} xs={24} className="footer_nav">
                        
                <h5 className="footer_nav_header">Company</h5>
                <ul>
                    <li>Disclaimer</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                </ul>

            </Col>
            <Col md={4} xs={24} className="footer_nav">
                <h5 className="footer_nav_header">Address</h5>
                <p className="footer_address">
                            Gala No 1, Rajsingh I.e., Andheri Kurla Road, Opp Ruby Coach Builder,chimatpada, Andheri (e),
                            Mumbai, Maharashtra, 400059
                </p>
            </Col>
        </Row>
        <Row span={24} className="footer_signature">
            <p>©2019 All rights reserved. Sigmanteum Corporation.</p>
        </Row>
    </Footer>
     
    );
}

export default SigFooter;