import React, { useState } from 'react'
 
function Calculator(){
    const[add,setadd]=useState([])
    const[subtract,setSubtract]=useState([])
    const[value,setValue]=useState([])
    const[dataValue,setDataValue]=useState([])
    const[selected ,setSelected]=useState(0)
   
//     const selectedNumber=(number)=>{
// setSelected(number)
//     }
    const zero=(e)=>{
        const data=0;
        console.log(data)
        const updateddata=[...value,e.target.data]
        setValue(updateddata)

    }
    const one=(e)=>{
        const data=1;
        console.log(data)
        const updateddata=[...value,e.target.data]
        setValue(updateddata)
    }
    const two=(e)=>{
        const data=2;
        console.log(data)
        const updateddata=[...value,e.target.value]
        setValue(updateddata)
    }
    const three=()=>{
        const data=3;
        console.log(data)
        const updateddata=[...value]
        setValue(updateddata)
    }
    const four=()=>{
        const data=4;
        console.log(data)
        const updateddata=[...value]
        setValue(updateddata)
    }
    const five=()=>{
        const data=5;
        console.log(data)
        const updateddata=[...value]
        setValue(updateddata)
    }
    const six=()=>{
        const data=6;
        console.log(data)
        const updateddata=[...value]
        setValue(updateddata)
    }
    const seven=()=>{
        const data=7;
        console.log(data)
        const updateddata=[...value]
        setValue(updateddata)
    }
    const eight=()=>{
        const data=8;
        console.log(data)
        const updateddata=[...value]
        setValue(updateddata)
    }
    const nine=()=>{
        const data=9;
        console.log(data)
        const updateddata=[...value]
        setValue(updateddata)
    }
//  const Add=()=>{
//     const data= 

//  }
//  const Subtract=()=>{
    
//  }

    return(
        <div>
            <h1>Calculator</h1>
            <div>
                {/* display */}
               <div>{selectedNumber}value</div>
            </div>
            <div style={{display:'inline-block'}}>
                <button onClick={zero} value='0'>0</button>
                <button onClick={one} value='1'>1</button>
                <button onClick={two}>2</button>
                <button onClick={three}>3</button>
                <button onClick={four}>4</button>
                </div><br/>
                <div style={{display:'inline-block'}}>
                <button onClick={five}>5</button>
                <button onClick={six}>6</button>
                <button onClick={seven}>7</button>
                <button onClick={eight}>8</button>
                <button onClick={nine}>9</button>
                

                
            {/* button */}
            </div>
            <div>
                {/* function */}
                {/* <button onClick={Add}>+</button>
                <button onClick={Subtract}>-</button> */}
                <button>*</button>
                <button>/</button>
                <button>C</button>
            </div>
            <div>
        {/* result */}
        <button>result</button>
            </div>
            
        </div>
    )
}
export default Calculator;