import React from 'react';
import {useTags} from 'hooks/useTags';
import {useParams,useHistory} from "react-router-dom";
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

const DelContent = styled.div`
  text-align: center;
  padding: 16px;
  font-size: 20px;
`

const EditTag = ()=>{
  const {findTag,updateTag,delTag} = useTags()
  let { id } = useParams<Params>()
  let tag = findTag(parseInt(id))
  let history = useHistory()

  const tagContent = ()=>{
    return (
      <div>
        <InputWrapper>
          <Input label="标签名"
                 type="text"
                 value={tag.name}
                 onChange={(e)=>{updateTag(tag.id,e.target.value)}}
          />
        </InputWrapper>
        <Button onClick={()=> delTag(tag.id)} name="删除标签"/>
      </div>
    )
  }

  const onClickIcon = ()=>{
    history.goBack()
  }

  return (
    <Layout>
      <TopBar>
        <Icon name="left" onClick={onClickIcon}/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      {!tag ? <DelContent>已删除</DelContent> : tagContent()}
    </Layout>
  )
}

export {EditTag}