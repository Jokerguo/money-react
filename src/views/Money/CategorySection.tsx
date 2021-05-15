import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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

const CategorySection:React.FC = ()=>{
  const categoryMap = {'+':'收入','-':'支出'}
  const [categoryList] = useState<('+' | '-')[]>(['+','-'])
  const [category,setCategory] = useState('+')

  return (
    <Wrapper>
      <ul>
        {categoryList.map(c=>
            <li className={category === c ? 'selected' : ''}
                onClick={()=>setCategory(c)}
                key={c}
            >{categoryMap[c]}
            </li>
          )}
      </ul>
    </Wrapper>
  )
}

export {CategorySection}