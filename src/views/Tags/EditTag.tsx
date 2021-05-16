import React from 'react';
import {useTags} from 'Hooks/useTags';
import {useParams} from "react-router-dom";

type Params = {
  id: string
}

const EditTag = ()=>{
  const {findTag} = useTags()
  let { id } = useParams<Params>()
  let tag = findTag(parseInt(id))
  return (
    <div>{tag.name}</div>
  )
}

export {EditTag}