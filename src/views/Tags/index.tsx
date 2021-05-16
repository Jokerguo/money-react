import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Layout from 'components/Layout';
import {useTags} from 'Hooks/useTags';
import Icon from 'components/Icon';
import {Button} from 'components/Button';

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

const Tags = () => {
  const {tags} = useTags()

  return (
    <Layout>
      <TagList>
        {tags.map(tag=>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Button name="新增标签"/>
    </Layout>
  );
}

export default Tags