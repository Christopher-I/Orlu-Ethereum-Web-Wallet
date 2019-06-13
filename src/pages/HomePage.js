import React from 'react'
import {Responsive} from 'semantic-ui-react';
import TopPage from '../components/HomeTopPage';
import BottomPage from '../components/HomeBottomPage';


const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomePage = ({mobile}) => (
  <div>
    <TopPage mobile={mobile} getWidth={getWidth}>
    </TopPage>
     <BottomPage>
     </BottomPage>
   </div>
)


export default HomePage;










