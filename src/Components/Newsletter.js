import React from 'react'
import { Row,Col, Input, Button } from 'antd';
import 'antd/dist/antd.css';

import './Newsletter.css';

const Newsletter = () => {
    return(
        <div className="newsletter">
            <Row>
                <Col span={24} className="newsletter-content">
                    <h3>Subscribe to our Newsletter!</h3>
                    <p>And never miss an update on new product launches and feature updates</p>
                    <Input style={{ maxWidth: 400, margin: "0 auto", display: "block" }} size="large" placeholder="Subscribe now!"/>
                    <Button style={{ maxWidth: 400, textTransform: "uppercase", marginTop: 15}} type="primary" size="large">subscribe</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Newsletter;