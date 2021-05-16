import Layout from '../../components/Layout';
import React from 'react';
import {useTags} from '../../Hooks/useTags';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li{
    line-height: 20px;
    border-bottom: 1px solid #d5d5d5;
    margin-left: 16px;
    > a{
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #408CCB;
  border-radius: 4px;
  color: white;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 0;
`

const Tags = () => {
  const {tags,setTags} = useTags()

  return (
    <Layout>
      <TagList>
        {tags.map(tag=>
          <li key={tag}>
            <Link to={'/tags/' + tag}>
              <span className="oneLine">{tag}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags