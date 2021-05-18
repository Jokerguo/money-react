import Layout from 'components/Layout';
import React, {useState} from 'react';
import {CategorySection} from '../Money/CategorySection';
import {useRecord,Record} from 'hooks/useRecord';
import {useTags} from 'hooks/useTags';
import styled from 'styled-components';
import dayjs from 'dayjs'


const CategoryWrapper = styled.div`
  background: #FFF;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-size: 18px;
  background: #fff;
  > .tags{
    max-width: 30%;
  }
  > .amount{
    max-width: 30%;
  }
  > .note{
    margin-left: 12px;
    margin-right: auto;
    color: #999;
    font-size: 14px;
    flex-grow: 1;
  }
`

const Date = styled.h3`
  font-weight: normal;
  padding: 6px;
`

function Statistics() {
  const [category,setCategory] = useState<'+' | '-'>('-')
  const {record} = useRecord()
  const {findTag} = useTags()

  const hash: {[K: string] : Record[]} = {}  //{'2021-05-18': [item]}
  record.forEach(r =>{
    const key = dayjs(r.createdAt).format('YYYY-MM-DD')
    if(!hash[key]){
      hash[key] = []
    }
    hash[key].push(r)
  })
  const arr = Object.entries(hash).sort((a,b)=>{
    if(a[0] < b[0]){return 1}
    if(a[0] > b[0]){return -1}
    return 0
  })

  const selectedRecord = (record: Record[])=>{
    return record.filter(r => r.category === category)
  }

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={category=> setCategory(category)}/>
      </CategoryWrapper>
      {
        arr.map(([date,record])=>{
          return (
            <div key={date}>
              {selectedRecord(record).length > 0 ? <Date>{date}</Date> : ''}
              {selectedRecord(record).map((r: Record)=>{
                  return (
                    <Item key={r.createdAt}>
                      <div className="tags oneLine">{r.tagIds.map(tagId=>findTag(tagId).name).join()}</div>
                      <div className="note oneLine">{r.note}</div>
                      <div className="amount">￥{r.amount}</div>
                    </Item>
                  )
              })}
            </div>
          )
        })
      }
    </Layout>
  );
}

export default Statistics