import {Routes, Route} from 'react-router-dom'
import React from 'react';

import SmallHeaderImage from './components/HeaderImageSmall.tsx';
import BigHeaderImage from './components/HeaderImageBig.tsx';

class RouterHeaderImage extends React.Component{
  render(){
    return (
        <>
            <Routes>
                <Route path = "/" element={<BigHeaderImage />} />
                <Route path = "/photos" element={<SmallHeaderImage />} />
                <Route path = "/portfolio" element={<SmallHeaderImage />} />
            </Routes>
        </>
    )
}  
}

export default RouterHeaderImage;