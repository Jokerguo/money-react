import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  tagIds: number[],
  note: string,
  category: '+' | '-',
  amount: number,
}

export type Record = RecordItem & {
  createdAt: string
}

const useRecord =()=>{
  const [record,setRecord] = useState<Record[]>([])

  useEffect(()=>{
    setRecord(JSON.parse(window.localStorage.getItem('record') || '[]'))
  },[])

  useUpdate(()=>{
    window.localStorage.setItem('record',JSON.stringify(record))
  },record)

  const addRecord = (recordItem: RecordItem)=>{
    if(recordItem.tagIds.length === 0){
      alert('请选择标签')
      return false
    }
    if(recordItem.amount === 0){
      alert('请输入金额')
      return false
    }
    const item = {...recordItem,createdAt: new Date().toISOString()}
    setRecord([...record,item])
    return true
  }

  const delRecord = (tagId: number)=>{
    setRecord(record.filter((r,index)=>r.tagIds.indexOf(tagId) === -1))
  }

  return {record,addRecord,delRecord}
}

export {useRecord}