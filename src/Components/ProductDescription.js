import React, {Fragment} from 'react';
import './ProductDescription.css';
import {  Layout, Col, Row } from 'antd';
import 'antd/dist/antd.css';

const Description = () => {
    const {Content} = Layout;

    return (
    <Fragment>   
      <Content className="descriptors" >
            <Row>
                <Col xs={24} md={12}>
                    <img src={require("../assets/illustration1.jpg")} alt="illustation-1" className="descriptors-img"/>
                </Col>
                <Col xs={24} md={12} >
                    <article className="descriptors-content content-left">
                        <h1>What is Sigmanteum Opteum?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna in metus accumsan bibendum. Quisque hendrerit dolor id tellus mollis cursus. Aliquam urna tortor,
                         dictum vitae neque nec, fermentum feugiat odio. Sed maximus orci dui, eget porta arcu auctor et. </p>
                    </article>
                </Col>
            </Row>
      </Content>


      <Content className="descriptors" >
        <Row>
            <Col xs={24} md={12} >
                <article className="descriptors-content content-right">
                    <h1>The Sigmanteum Advantage</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna in metus accumsan bibendum. Quisque hendrerit dolor id tellus mollis cursus. Aliquam urna tortor,
                    dictum vitae neque nec, fermentum feugiat odio. Sed maximus orci dui, eget porta arcu auctor et. </p>
                </article>
            </Col>
            <Col xs={24} md={12}>
                <img src={require("../assets/illustration2.jpg")} alt="illustation-2" className="descriptors-img"/>
            </Col>
        </Row>
      </Content>

    </Fragment>
    );
}

export default Description;