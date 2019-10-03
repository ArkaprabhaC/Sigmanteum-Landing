import React, {Fragment} from 'react'
import {  Layout, Col, Row, Menu, Button } from 'antd';
import 'antd/dist/antd.css';

import './Home.css';
import CustomMenu from './CustomMenu';
import Typed from 'react-typed';

const Home = () => {
    const roles = ['Gain that extra edge', 'with automation and data', 'with strategies that gives you', 'the extra return', 'that you deserve'];
    const {Header, Footer, Content} = Layout;

    return (
     <Fragment> 
        <Header className="nav-outer">
            <Row>
                <Col>
                    <Col span={12} className="logo">Sigmanteum TM</Col>
                    <Col span={12} className="links">
                        <CustomMenu/>
                    </Col>
                </Col>
            </Row>
        </Header>
        <Content className="hero">
            <Row>
                <Col style={{height:"100vh"}}>
                    <div className="hero-content">
                        <h1>Opteum</h1>
                        <p>By Sigmanteum Corporation</p>
                        <p>
                            <Typed
                                loop
                                typeSpeed={30}
                                backSpeed={30}
                                strings={roles}
                                backDelay={1000}
                                loopCount={0}
                                showCursor
                                className="self-typed"
                                cursorChar="|"
                                />
                        </p>
                        <Row className="btnGroup">
                            <Col>
                               <Button type="primary">Explore More</Button>
                               <Button type="danger" style={{marginLeft: "10px"}}>Contact Sales</Button>  
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Content>
     </Fragment>
    );
}

export default Home;