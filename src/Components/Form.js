import React, { useRef, useState } from 'react'

const Form = ({onSubmitHandler}) => {

   

   
    const [title,setTitle] = useState('')   
      
    const select = useRef('unpaid')   
    const [message,setMessage] = useState('')   
     const [items,setItems] = useState([])   
     
     const [itemTitle,setItemtitle] = useState('')
     const [itemprice,setItemPrice] = useState('')
   

     const price = useRef(0)


     const total = items.reduce((acc,crr)=>{
        
        return acc + Number(crr.price)
     
    },0)
  
     price.current = total;


  
    


    const setstate = (statesetter,value)=>{

        statesetter(value)


    } 








    return (
        <div className="ui segment">
            <div className="ui grid">
                <div className="six wide column">
 <form style={{width:'100%'}} onSubmit={(e)=>{

                  e.preventDefault();

                 
                  onSubmitHandler({
                      
                      title:title,
                      price: price.current,
                      select:select.current,
                      message:message,
                      items: items
                      
                  })

                  


              }} className="ui form">
              <label > Title: </label>
             <div className="ui field">
                     <input type="text"  required placeholder="Enter Title..." onChange={(e)=>{setstate(setTitle,e.target.value)}}/>     
             </div>
             <label> Price: </label>
             <div className="ui field">
                     <input type="number"   value={items ? total : 0} required placeholder="Enter the price"  onChange={e=>e.target.value}  />     
             </div>

             <label> Items: </label>
             <div className="ui field">
                     <input type="text" value={items ? items.length : 0} required  onChange={e=>e.target.value} />     
             </div>
             <label > status </label>
             <div className="ui field">
                     <select required defaultValue={select.current}  onChange={(e)=>{select.current = e.target.value}}>
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
                  <textarea  required placeholder="left the message for inVoice..." onChange={(e)=>{setstate(setMessage,e.target.value)}}></textarea>
             </div>
             
             <button className={`ui green button ${items.length < 1 ? "disabled" : null}`}>Submit</button>

            
        </form>
            </div>




            <div className="six wide column">
                

               <form className="ui form"  onSubmit={(e)=>{

                     e.preventDefault()
                    
                     setItems([...items,{id:Math.floor(Math.random()*99999+1),title:itemTitle,price:itemprice}])


               }}     >
                   <label>Item Title: </label>
                   <input className="ui field"  required placeholder="Item title" onChange={(e)=>{setstate(setItemtitle,e.target.value)}}/>
                   <label>Item Price: </label>
                   <input type='number' className="ui field"  required placeholder="Item Price" onChange={(e)=>{setstate(setItemPrice,e.target.value)}}/>
                  
                  
                   <button  style={{marginTop:20}} className="ui green button">
                       Add Item
                   </button>
               </form>
            </div>
             </div>


        </div>
        
    )
}

export default Form
