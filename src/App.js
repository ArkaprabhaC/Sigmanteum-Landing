import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout} from 'antd';
import 'antd/dist/antd.css';

import Home from './Components/Home';
import Description from './Components/ProductDescription';
import SigFooter from './Components/SigFooter';

function App() {
  return (
    <div>
       <Layout style={{backgroundColor:"#fff"}}>
          <Home/>
          <Description/>
          <SigFooter/>
       </Layout>
    </div>
  );
}

export default App;
