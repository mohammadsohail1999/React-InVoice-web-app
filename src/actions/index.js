
import axios from 'axios';

const url = "http://localhost:3001/data/";

export const createInVoice = (obj)=>{

      return async(dispatch)=>{
          
        const {data} = await axios.post(url,obj); 
        
          
      
           dispatch({type:'CREATE',payload:data})


      }

     


       



}


export const fetch = ()=>{

    
   return async(dispatch)=>{

   const {data} =  await axios.get(url);
    
   
      
   dispatch({type:'FETCH', payload:data})

   }

  
 








}



export const editInVoice = (id,obj)=>{
  
    return async (disptach)=>{
          

      const {data} =  await axios.patch(`${url}${id}`,obj);

      console.log(data);


      disptach({type:'EDIT',payload:data})

          




    }
     



}




export const deleteInVoice = (id)=>{

 
  return async(dispatch)=>{
       
     await axios.delete(`${url}${id}`);


     dispatch({type:'DELETE',payload:id})



  }






}



