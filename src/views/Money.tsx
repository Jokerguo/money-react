import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
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
  font-size: 24px;
  background: #c4c4c4;
  text-align: center;
  > ul{
    display: flex;
    > li{
      width: 50%;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        background: #333;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;
const NumberPadSection = styled.section`
  > .output{
    font-size: 32px;
    background: #fff;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.5);
  }
  > .pad{
    > button{
      float: left;
      height: 64px;
      width: 25%;
      border: none;
      &.ok{float: right;height: 128px;}
      &.zeo{width: 50%;}
      &:nth-child(1){
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5){
        background: #e0e0e0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){
        background: #d3d3d3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background: #c1c1c1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background: #b8b8b8;
      }
      &:nth-child(12){
        background: #9a9a9a;
      }
      &:nth-child(14){
        background: #a9a9a9;
      }
    }
  }
`;

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagSection>
        <ol>
          <li>衣q</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣q</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣q</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣q</li>
          <li>食</li>
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
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">
          100
        </div>
        <div className="pad clearfix">
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
          <button className="ok">OK</button>
          <button className="zeo">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money