import { useState } from 'react';
import { Conteiner, Scren, Previos, Curent, Button } from './styled'

const Calc = () => {
  const [curent, setCurent] = useState('')
  const [previos, setPrevios] = useState('')
  const [operator, setOprator] = useState('')
 
  const addCurent = (e) => {
    const val = e.target.getAttribute('data');
 
    if (val === '.' && curent.includes('.')) {
      return
    }
    if(previos !=='' && operator===''){
 
      return
    }
    setCurent((prev)=>prev + val);
   
  }
  const allClear = () => {
    setCurent('')
    setOprator('')
    setPrevios('')
  }
  const del = () => {
    setCurent(curent.slice(0, -1))
  }
  const equals = () => {
    let resault;
    let previosNum = parseFloat(previos);
    let curentNum = parseFloat(curent);
    switch (operator) {
      case '÷': resault = previosNum / curentNum;
        break;
      case 'x': resault = previosNum * curentNum;
        break;
      case '+': resault = previosNum + curentNum;
        break;
      case '-': resault = previosNum - curentNum;
        break;
        default: break;
    }
    if (isNaN(resault) || !isFinite(resault)) {
      return
    }

    setPrevios(resault)
    setOprator('')
    setCurent('');
    return resault;

  }
  const useOperation = ({ target }) => {
 
    if (curent === '' && previos ==='') {
      return
    }

    if (previos === '') {
      setPrevios(curent);

    } else {
    if( operator !== '' && curent !== '' ){ 
      setPrevios(equals())
     
    }
    }
    
    setOprator(target.getAttribute('data'))
    setCurent('');
   
  }



  return (
    <Conteiner>
      <Scren>
        <Previos>{previos}{operator}</Previos>
        <Curent>{curent}</Curent>

      </Scren>
      <Button gridSpan={2} control onClick={allClear}>AC</Button>
      <Button control onClick={del}>DEL</Button>
      <Button operation data={'÷'} onClick={useOperation}>÷</Button>
      <Button data={'7'} onClick={addCurent}>7</Button>
      <Button data={'8'} onClick={addCurent}>8</Button>
      <Button data={'9'} onClick={addCurent}>9</Button>
      <Button operation data={'x'} onClick={useOperation}>x</Button>
      <Button data={'4'} onClick={addCurent}>4</Button>
      <Button data={'5'} onClick={addCurent}>5</Button>
      <Button data={'6'} onClick={addCurent}>6</Button>
      <Button data={'+'} operation onClick={useOperation}>+</Button>
      <Button data={'3'} onClick={addCurent}>3</Button>
      <Button data={'2'} onClick={addCurent}>2</Button>
      <Button data={'1'} onClick={addCurent}>1</Button>
      <Button data={'-'} operation onClick={useOperation}>-</Button>
      <Button data={'.'} period onClick={addCurent}>.</Button>
      <Button data={'0'} onClick={addCurent}>0</Button>
      <Button gridSpan={2} equals onClick={equals}>=</Button>

    </Conteiner>
  )
}

export default Calc;