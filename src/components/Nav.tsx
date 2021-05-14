import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import x from '../icons/money.svg';

const NavWrapper = styled.nav`
line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
  display: flex;
    > li {
        width: 33.3333%;
        text-align: center;
        padding: 16px;
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <img src={x} alt="嘘嘘"/>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
