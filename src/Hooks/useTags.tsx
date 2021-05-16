import {useState} from 'react';
import {createId} from 'lib/createId';

const data = [
  {id: createId(),name: '衣'},
  {id: createId(),name: '食'},
  {id: createId(),name: '住'},
  {id: createId(),name: '行'}
]

const useTags = ()=>{
  const [tags,setTags] = useState<{id: number,name: string}[]>(data)
  const findTag = (id: number)=> tags.filter(tag=> tag.id === id)[0]
  const updateTag = (id: number,value: string)=>setTags(tags.map(tag=> tag.id === id ? {id, name: value} : tag))
  const delTag = (id: number)=>setTags(tags.filter(tag => tag.id !== id))

  return {tags,setTags,findTag,updateTag,delTag}
}

export {useTags}