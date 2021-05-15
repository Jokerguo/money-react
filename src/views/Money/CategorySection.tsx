import styled from 'styled-components';

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

export {CategorySection}