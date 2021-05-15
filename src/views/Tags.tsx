import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
  background: #fff;
  padding: 12px 16px;
  min-height: 300px;
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
const NoteSection = styled.section`
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
const CategorySection = styled.section`
  
`;
const NumberPadSection = styled.section`
  
`;

function Tags() {
  return (
    <Layout>
      <TagSection>
        <ol>
          <li>衣q</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="添加备注"/>
        </label>
      </NoteSection>
      <CategorySection>
        <ol>
          <li>支出</li>
          <li>收入</li>
        </ol>
      </CategorySection>
      <NumberPadSection>
        <div>
          100
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Tags