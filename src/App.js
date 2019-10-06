import React from 'react';
import './App.css';
import {Layout} from 'antd';
import 'antd/dist/antd.css';

import Home from './Components/Home';
import Description from './Components/ProductDescription';
import SigFooter from './Components/SigFooter';
import Newsletter from './Components/Newsletter';

function App() {
  return (
    <div>
       <Layout style={{backgroundColor:"#fff"}}>
          <Home/>
          <Description/>
          <Newsletter/>
          <SigFooter/>
       </Layout>
    </div>
  );
}

export default App;
