import React, { useRef } from 'react';
import ButtonCartCount from '../../components/common/ButtonCartCount';
import ButtonOrderCount from '../../components/common/ButtonOrderCount';
import Menu from '../../components/common/Menu';
import Logo from '../../components/common/Logo';
import { menuItemsData } from '../../components/common/Menu/data';

const Home = () => {
  const menuRef = useRef();

  return (
    <div>
      <Logo />
      <Menu list={menuItemsData} ref={menuRef} />
      <ButtonCartCount />
      <ButtonOrderCount />
    </div>
  );
};

export default Home;
