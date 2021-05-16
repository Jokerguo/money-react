import React from 'react';
import {useTags} from 'Hooks/useTags';
import {useParams} from "react-router-dom";
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';

type Params = {
  id: string
}

const TopBar = styled.header`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
`

const InputWrapper = styled.div`
  padding: 0 16px;
  margin-top: 16px;
  background: #fff;
`

const EditTag = ()=>{
  const {findTag,updateTag} = useTags()
  let { id } = useParams<Params>()
  let tag = findTag(parseInt(id))
  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      <InputWrapper>
        <Input label="标签名" type="text" value={tag.name}
               onChange={(e)=>{updateTag(tag.id,e.target.value)}}
        />
      </InputWrapper>
      <Button name="删除标签"/>
    </Layout>
  )
}

export {EditTag}