import React from 'react'
import {Responsive} from 'semantic-ui-react';
import WalletTopPage from '../components/WalletTopPage';
import WalletBottomPage from '../components/WalletBottomPage';


const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomePage = ({mobile}) => (
  <div>
    <WalletTopPage mobile={mobile} getWidth={getWidth}>
    </WalletTopPage>
     <WalletBottomPage>
     </WalletBottomPage>
   </div>
)


export default HomePage;










