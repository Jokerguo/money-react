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

const Button:React.FC = ()=>{
  return (
    <Wrapper>
      <button>新增标签</button>
    </Wrapper>
  )
}

export {Button}