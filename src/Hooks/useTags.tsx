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
  const findTagIndex = (id:number)=>{
    let index = -1
    for(let i=0; i<tags.length; i++){
      if(tags[i].id === id){
        index = i
        break
      }
    }
    return index
  }
  const updateTag = (id: number,value: string)=>{
    let index = findTagIndex(id)
    const cloneTags = JSON.parse(JSON.stringify(tags))
    cloneTags[index].name = value
    setTags(cloneTags)
  }
  return {tags,setTags,findTag,findTagIndex,updateTag}
}

export {useTags}