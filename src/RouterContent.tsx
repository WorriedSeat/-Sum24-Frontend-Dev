import {Routes, Route} from 'react-router-dom'
import React from 'react';

import BioContent from './components/BioContent.tsx';
import PhotosContent from './components/PhotosContent.tsx';
import PortfolioContent from './components/PortfolioContent.tsx'

class RouterComponent extends React.Component{
  render(){
    return (
        <>
            <Routes>
                <Route path = "/" element={<BioContent />} />
                <Route path = "/photos" element={<PhotosContent />} />
                <Route path = "/portfolio" element={<PortfolioContent />} />
            </Routes>
        </>
    )
}  
}

export default RouterComponent;