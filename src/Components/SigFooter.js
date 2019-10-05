import React from 'react';
import './SigFooter.css';
import {  Layout, Col, Row,Icon} from 'antd';
import 'antd/dist/antd.css';

const SigFooter = () => {
    const {Footer} = Layout;
    return(
     <Footer class="sigmanteum_footer">
         <Row>
             <Col style={{ marginTop: "10vh", width: "100%", minHeight: "10vh" }}>
                <Row style={{minHeight: "23vh", width:"90%", maxWidth: "1200px",margin:"0 auto"}}>
                    <Col xs={24} md={6}>

                        <Row> <img src={require("../assets/illustration1.jpg")} alt="company-logo" style={{ width: "150px", margin:"0 auto", display: "block" }} /></Row>
                    
                    </Col>
                    <Col md={6} xs={24} className="footer-links">
                        
                        <Row>
                            <h1 style={{color:"#fff",textAlign:"center",fontSize:"18px"}}>About Us</h1>
                        </Row>
                        <Row>
                            <h1 style={{color:"#fff",textAlign:"center",fontSize:"18px"}}>Products</h1>
                        </Row>
                        <Row>
                            <h1 style={{color:"#fff",textAlign:"center",fontSize:"18px"}}>Pricing</h1>
                        </Row>
                        <Row>
                            <h1 style={{color:"#fff",textAlign:"center",fontSize:"18px"}}>Contact Sales</h1>
                        </Row>

                    </Col>
                    <Col md={6} xs={24}>
                        
                        <Row>
                            <h1 style={{color:"#fff", textAlign:"center",fontSize:"18px"}}>Disclaimer</h1>
                        </Row>
                        <Row>
                            <h1 style={{color:"#fff", textAlign:"center",fontSize:"18px"}}>Privacy Policy</h1>
                        </Row>
                        <Row>
                            <h1 style={{color:"#fff",textAlign:"center",fontSize:"18px"}}>Terms and Conditions</h1>
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
                    <p style={{textAlign:"center", color: "white"}}><Icon type="copyright"/> 2019 Sigmanteum Corporation.</p>
                </Row>
             </Col>
         </Row>
     </Footer>
     
    );
}

export default SigFooter;