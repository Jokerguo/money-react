import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  > label{
    display: flex;
    align-items: center;
    > span{
      margin-right: 16px;
      white-space: nowrap;
    }
    > input{
      display: block;
      width: 100%;
      height: 72px;
      border: none;
      background: none;
      &:focus{
        outline: none;
      }
    }
  }
`;

const NoteSection: React.FC= ()=>{
  const [note,setNote] = useState<string>('')
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = ()=>{
    if(refInput.current !== null){
      setNote(refInput.current.value)
    }
  }

  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text"
               ref={refInput}
               placeholder="添加备注"
               defaultValue={note}
               onBlur={onBlur}
        />
      </label>
    </Wrapper>
  )
}

export {NoteSection}