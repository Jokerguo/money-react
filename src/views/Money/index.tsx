import Layout from '../../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './CategorySection';
import {TagSection} from './TagSection';
import {NoteSection} from './NoteSection';
import {NumberPadSection} from './NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type Category = '+' | '-'

const Money = () => {
  const [selected,setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '+' as Category,
    amount: '0',
  })

  //Partial obj声明selected的部分类型
  const onChange = (obj: Partial<typeof selected>)=>setSelected({...selected, ...obj})

  return (
    <MyLayout>
      <TagSection value={selected.tagIds}
                  onChange={tagIds=>onChange({tagIds})}
      />
      <NoteSection value={selected.note}
                   onChange={note=>onChange({note})}
      />
      <CategorySection value={selected.category}
                       onChange={category=>onChange({category})}
      />
      <NumberPadSection value={selected.amount}
                        onChange={amount=> onChange({amount})}
      />
    </MyLayout>
  );
}

export default Money