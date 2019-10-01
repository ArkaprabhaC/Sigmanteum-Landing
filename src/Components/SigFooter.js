import React, {Fragment} from 'react';
import './SigFooter.css';
import {  Layout, Col, Row, Menu, Button, Card,Icon } from 'antd';
import 'antd/dist/antd.css';

const SigFooter = () => {
    const {Footer} = Layout;
    return(
     <Footer>
         <Row>
             <Col style={{ marginTop: "10vh", marginLeft: "10%", width: "80%", minHeight: "10vh" }}>
                <Row style={{minHeight: "30vh", width:"100%"}}>
                    <Col span={6}>

                        <Row> <img src={require("../assets/illustration1.jpg")} style={{ width: "150px" }} /></Row>
                    
                    </Col>
                    <Col span={6} style={{paddingLeft:"30px"}}>
                        
                        <Row>
                            <h1 style={{marginTop:"5px"}}>COMPANY</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey"}}>About Us</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey"}}>Products</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey"}}>Pricing</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey"}}>Contact Sales</h1>
                        </Row>

                    </Col>
                    <Col span={6}>
                        
                        <Row>
                            <h1 style={{marginTop:"5px"}}>GET STARTED</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey"}}>Disclaimer</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey"}}>Privacy Policy</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey"}}>Terms and Conditions</h1>
                        </Row>

                    </Col>
                    <Col span={6}>
                        <h1 style={{marginTop:"5px",color:"grey"}}>
                            Gala No 1, Rajsingh I.e., Andheri Kurla Road, Opp Ruby Coach Builder,chimatpada, Andheri (e),
                            Mumbai, Maharashtra, 400059
                        </h1>
                    </Col>

                </Row>
                <Row>
                    <p style={{textAlign:"center",marginTop: "35px"}}><Icon type="copyright"/> 2019 Sigmanteum Corporation.</p>
                </Row>
             </Col>
         </Row>
     </Footer>
     /*<Row >
        <Card style={{ marginTop: "30vh", marginLeft: "10%", width: "80%", minHeight: "40vh" }}>
            
            <Row style={{ minHeight: "30vh" }}>
            <Col span={4}>
                   <Row> <img src={require("../assets/illustration1.jpg")} style={{ width: "150px" }} /></Row>
                   <Row style={{marginTop:"80%"}}><Icon type="copyright" />2019 all rights are reserved</Row>
            </Col>
            <Col span={4} offset={1}>
                <Row>
                    <h1 style={{marginTop:"5px"}}>SHOP</h1>
                </Row>
                <Row>
                    <h1 style={{marginTop:"5px",color:"grey"}}>All</h1>
                </Row>
                <Row>
                    <h1 style={{marginTop:"5px",color:"grey"}}>Dresses</h1>
                </Row>
                <Row>
                    <h1 style={{marginTop:"5px",color:"grey"}}>Shoes</h1>
                </Row>
                <Row>
                    <h1 style={{marginTop:"5px",color:"grey"}}>Bags</h1>
                </Row>
            </Col>
            <Col span={4} offset={1} >
                <Row>
                    <h1 style={{marginTop:"5px"}}>HELP</h1>
                </Row>
                <Row>
                    <h1 style={{marginTop:"5px",color:"grey"}}>How It Works</h1>
                </Row>
                <Row>
                    <h1 style={{marginTop:"5px",color:"grey"}}>FAQs</h1>
                </Row>
                <Row>
                    <h1 style={{marginTop:"5px",color:"grey"}}>My Orders</h1>
                </Row>
            </Col>
            <Col span={4} offset={1}>
                <Row>
                    <h1 style={{marginTop:"5px"}}>ABOUT US</h1>
                </Row>
                <Row>
                    <h1 style={{marginTop:"5px",color:"grey"}}>About</h1>
                </Row>
                <Row>
                    <h1 style={{marginTop:"5px",color:"grey"}}>Contact Us</h1>
                </Row>
            </Col>
            <Col span={4} offset={1}>
                <Row>
                    <h1 style={{marginTop:"5px"}}>FOLLOW US</h1>
                </Row>
                <Row>
                    <h1 style={{marginTop:"5px",color:"grey"}}>Facebook</h1>
                </Row>
                <Row>
                    <h1 style={{marginTop:"5px",color:"grey"}}>Tweeter</h1>
                </Row>
            </Col>
                <div style={{
                    margin: "0 20% 2% 20%"
                }}>
                    
                </div>
            </Row>
            <Row>
               
            </Row>
        </Card>
    </Row>*/
    );
}

export default SigFooter;