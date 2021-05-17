import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags'

const Wrapper = styled.section`
  flex-grow: 1;
  background: #fff;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol{
    display: flex;
    flex-flow: wrap;
    margin-left: -12px;
    overflow: auto;
    > li{
      background: #D9D9D9;
      border-radius: 18px;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background: #f60;
      }
    }
  }
  > button{
    border: none;
    background: none;
    border-bottom:1px solid #333;
    color: #666;
    padding: 2px 4px;
    margin-top: 8px;

  }
`;

type Props = {
  value: number[];
  onChange: (props: number[])=>void;
}

const TagSection: React.FC<Props> = (props)=>{
  const {tags,addTag} = useTags()
  const selectedTagIds = props.value

  const onToggleTag = (tagId: number)=>{
    if(selectedTagIds.indexOf(tagId) === -1){
      props.onChange([...selectedTagIds,tagId])
    }else{
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    }
  }
  const getClass =(tagId:number) =>  selectedTagIds.indexOf(tagId) !== -1 ? 'selected' : ''

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id}
              onClick={()=>onToggleTag(tag.id)}
              className={getClass(tag.id)}
          >{tag.name}</li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}

export {TagSection}