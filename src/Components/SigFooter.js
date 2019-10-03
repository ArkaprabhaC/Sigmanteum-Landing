import React, {Fragment} from 'react';
import './SigFooter.css';
import {  Layout, Col, Row, Menu, Button, Card,Icon, AutoComplete } from 'antd';
import 'antd/dist/antd.css';

const SigFooter = () => {
    const {Footer} = Layout;
    return(
     <Footer class="sigmanteum_footer">
         <Row>
             <Col style={{ marginTop: "10vh", marginLeft: "10%", width: "80%", minHeight: "10vh" }}>
                <Row style={{minHeight: "30vh", width:"100%"}}>
                    <Col xs={24} md={6}>

                        <Row> <img src={require("../assets/illustration1.jpg")} style={{ width: "150px", margin:"0 auto", display: "block" }} /></Row>
                    
                    </Col>
                    <Col md={6} xs={24} className="footer-links">
                        
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey",textAlign:"center"}}>About Us</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey",textAlign:"center"}}>Products</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey",textAlign:"center"}}>Pricing</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey",textAlign:"center"}}>Contact Sales</h1>
                        </Row>

                    </Col>
                    <Col md={6} xs={24}>
                        
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey", textAlign:"center"}}>Disclaimer</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey", textAlign:"center"}}>Privacy Policy</h1>
                        </Row>
                        <Row>
                            <h1 style={{marginTop:"5px",color:"grey",textAlign:"center"}}>Terms and Conditions</h1>
                        </Row>

                    </Col>
                    <Col md={6} xs={24}>
                        <h3 className="footer-address">
                            Gala No 1, Rajsingh I.e., Andheri Kurla Road, Opp Ruby Coach Builder,chimatpada, Andheri (e),
                            Mumbai, Maharashtra, 400059
                        </h3>
                    </Col>

                </Row>
                <Row>
                    <p style={{textAlign:"center",marginTop: "35px", color: "white"}}><Icon type="copyright"/> 2019 Sigmanteum Corporation.</p>
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