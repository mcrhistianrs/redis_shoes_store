import React                from 'react';
import {connect}            from 'react-redux';
import { Link }             from 'react-router-dom';
import { Container , Cart}  from './styles';
import { MdShoppingBasket,MdHome}  from 'react-icons/md';

function Header({cartSize}) {
  return (
    <Container>
      <Link to="/"> 
        <MdHome size={36} color="#fff"/>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
        
    </Container>
  );
}

export default connect(state=>({
  cartSize:state.cart.length,
}))(Header);