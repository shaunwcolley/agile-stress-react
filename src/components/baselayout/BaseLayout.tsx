import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

interface IProps {

}

const BaseLayout: React.FC<IProps> = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default BaseLayout;
