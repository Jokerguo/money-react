import styled from 'styled-components';
import React, {useState} from 'react';

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

const TagSection: React.FC = ()=>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTag,setSelectedTag] = useState<string[]>([])

  const onAddTag = ()=>{
    const tagName = window.prompt()
    if(!!tagName){
      setTags([...tags,tagName])
    }
  }

  const onToggleTag = (tag: string)=>{
    if(selectedTag.indexOf(tag) === -1){
      setSelectedTag([...selectedTag,tag])
    }else{
      setSelectedTag(selectedTag.filter(t => t !== tag))
    }
  }

  const getClass =(tag:string) =>  selectedTag.indexOf(tag) !== -1 ? 'selected' : ''

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag}
              onClick={()=>onToggleTag(tag)}
              className={getClass(tag)}
          >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export {TagSection}