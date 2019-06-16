import React from 'react'
import {Responsive} from 'semantic-ui-react';
import HomeTopPage from '../components/HomeTopPage';
import BottomPage from '../components/HomeBottomPage';


const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomePage = ({mobile}) => (
  <div>
    <HomeTopPage mobile={mobile} getWidth={getWidth}>
    </HomeTopPage>
     <BottomPage>
     </BottomPage>
   </div>
)


export default HomePage;










