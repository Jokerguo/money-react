import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
`;

type Props = {
  className?: string,
}

const Layout: React.FC<Props> = (props)=>{

  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}

export default Layout