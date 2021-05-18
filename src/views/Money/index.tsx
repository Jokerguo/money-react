import Layout from '../../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './CategorySection';
import {TagSection} from './TagSection';
import {NoteSection} from './NoteSection';
import {NumberPadSection} from './NumberPadSection';
import {useRecord} from 'hooks/useRecord';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const CategoryWrapper = styled.div`
  background: #C4C4C4;
`

const defaultData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: '0',
}

type Category = '+' | '-'

const Money = () => {
  const [selected,setSelected] = useState(defaultData)
  const {addRecord} = useRecord()

  //Partial obj声明selected的部分类型
  const onChange = (obj: Partial<typeof selected>)=>setSelected({...selected, ...obj})

  const submit = ()=>{
    const data = {...selected,amount: parseFloat(selected.amount)}
    if(addRecord(data)){
      alert('提交成功')
      setSelected(defaultData)
    }
  }

  return (
    <MyLayout>
      <TagSection value={selected.tagIds}
                  onChange={tagIds=>onChange({tagIds})}
      />
      <NoteSection value={selected.note}
                   onChange={note=>onChange({note})}
      />
      <CategoryWrapper>
        <CategorySection value={selected.category}
                         onChange={category=>onChange({category})}
        />
      </CategoryWrapper>
      <NumberPadSection value={selected.amount}
                        onChange={amount=> onChange({amount})}
                        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money