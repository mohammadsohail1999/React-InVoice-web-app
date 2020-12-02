import React, { useEffect,useRef,useState} from 'react'

import {useDispatch, useSelector} from 'react-redux';

import {editInVoice} from '../actions/index';


const EditScreen = ({match,history}) => {

    const dispatch = useDispatch();

    const setstate = (statesetter,value)=>{

        statesetter(value)


    } 


    const [obj,setObj] = useState({})

    console.log(obj);
    
   const [itemObj,setitemObj] = useState({})

   const total = useRef(0)
 
   



const InVoicestate = useSelector(state=>state.Global);

    

     useEffect(()=>{
     
       
        const inVoice  = InVoicestate.find(crr=> crr.id === Number(match.params.id));
        
    

        if(inVoice){
         setObj({
             title: inVoice.title,
             message: inVoice.message,
             price: inVoice.price,
             select: inVoice.select,
             items: inVoice.items 
         })
        }

     },[InVoicestate,match.params.id])
          
    
    
    
          

     



    return (  
        <div className="ui container">

             <h1>Edit InVoice</h1>

            <div className="ui grid">
                <div className="six wide column">
                <form style={{width:'100%'}} onSubmit={(e)=>{

                 e.preventDefault();


if(obj.items){
        total.current  =  obj.items.reduce((acc,crr)=> acc + Number(crr.price),0)
    
        

           setObj({...obj,price: total.current})

        dispatch(editInVoice(match.params.id,{
            title: obj.title,
            price: total.current,
            message: obj.message,
            select: obj.select,
            items: obj.items

        }))

         history.push('/')
   }
                 
     




}} className="ui form">
<label > Title: </label>
<div className="ui field">
   <input type="text" defaultValue={obj && obj.title  } required placeholder="Enter Title..." onChange={(e)=>{setstate(setObj,{...obj,title:e.target.value})}}/>     
</div>
<label> Price: </label>
<div className="ui field">
   <input type="number" id='priceItem'  value={obj.items ? obj.items.reduce((acc,crr)=> acc + Number(crr.price),0): 0}  required placeholder="Enter the price" onInput={e=>console.log(e)}/>     
</div>

<label > status </label>
<div className="ui field">
   <select required value={obj && obj.select} onChange={(e)=>{setstate(setObj,{...obj,select:e.target.value})}}>
  <option value="paid">
      paid
      </option>     
      <option value="unpaid">
          unpaid
      </option>
  </select>   
</div>
<label > Message: </label>
<div className="ui field">
<textarea defaultValue={obj.message} required placeholder="left the message for inVoice..." onChange={(e)=>{setstate(setObj,{...obj,message:e.target.value})}}></textarea>
</div>

<button className="ui green button">Submit</button>


</form>
</div>




<div className="six wide column">
 {obj.items   ? <div> 
     <h1 className="ui header"> Items</h1>
      <table className="ui celled table">
        <thead>
            <tr style={{textAlign:'center'}}>
            <th>Title</th> 
            <th> Price</th>
            <th>Actions</th>
            
               
            </tr>
            </thead>   
            <tbody>                  
    {obj.items.map(item=><tr style={{textAlign:'center'}} key={item.id}>
     <td>{item.title}</td>
    <td>{item.price}</td>
    <td ><i onClick={()=>{

         setObj({
          ...obj,
          items:obj.items.filter(el=> el.id !== item.id)   
         })

    }} style={{color:'red'}} className="trash icon"></i></td>
</tr>)}</tbody></table></div>: null} 

<form style={{marginTop:10}} className="ui form"  onSubmit={(e)=>{

   e.preventDefault()

   setObj({...obj,items:[...obj.items, {
      id: Math.floor(Math.random()*99999+1),
      title: itemObj.title,
      price: itemObj.price
      

   }]})
  
   


}} >


 <label>Item Title: </label>
 <input className="ui field"  required placeholder="Item title" onChange={(e)=>{setitemObj({...itemObj,title:e.target.value})}}/>
 <label>Item Price: </label>
 <input type='number' className="ui field"  required placeholder="Item Price" onChange={(e)=>{setitemObj({...itemObj, price: e.target.value})}}/>


 <button style={{marginTop:20}} className="ui green button">
     Add Item
 </button>
</form> 
                </div>
            </div>
            
        </div>
    )
}

export default EditScreen
