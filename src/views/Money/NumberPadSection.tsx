import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';

const NumberPadSection:React.FC = ()=>{
  const [output,_setOutput] = useState('0')

  const setOutput = (output: string)=>{
    _setOutput(output.length > 16 ? output.slice(0,16) : output)
  }

  const onClickButton = (e: React.MouseEvent)=>{
    const text = (e.target as HTMLButtonElement).textContent
    if(text === 'OK'){
      //TODO
      return
    }
    if(text !== null){
      setOutput(generateOutput(text,output))
    }
  }

  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButton}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zeo">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  )
}

export {NumberPadSection}