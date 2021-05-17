import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 0;
  > button{
    font-size: 18px;
    border: none;
    padding: 8px 12px;
    background: #408CCB;
    border-radius: 4px;
    color: white;
  }
`
type Props = {
  name: string,
  onClick?: ()=>void;
}
const Button:React.FC<Props> = (props)=>{
  return (
    <Wrapper>
      <button onClick={props.onClick}>{props.name}</button>
    </Wrapper>
  )
}

export {Button}