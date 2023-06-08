import AreaText from "./AreaText";
import { useEffect, useState } from "react";
export default function TextArea(){





  const [textValue,setText] = useState(""); 
  const [d,setD] = useState("none");
  const [re,setRes] = useState("");
  const onSubmit = (e)=>{
    e.preventDefault();

    if(!textValue)return
      const data ={ 
        text:textValue,
        language:"Portugues"
      };

      fetch('http://localhost:3000/translator',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((resp)=>resp.json())
      .then((data)=>{
        setRes(data.Response.transaction);
      }).catch((err)=> console.log(err)) 
      setD(" ") 
      
  }

  return(
   <>
  
 <AreaText resp={re} display={d} />
  
    

   

    <form className="space-y-6" onSubmit={onSubmit}>
        <div>    
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" className="sr-only">Your comment</label>
                  <textarea id="comment" rows="4" value={textValue}   onChange={(e)=>{setText(e.target.value)}} className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Escreve o texto aqui...">
                  </textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    <svg className="h-5 w-5 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                    </svg> 
                    Traduzir
                  </button>
                  <div className="flex pl-0 space-x-1 sm:pl-2">
                      <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg className="h-6 w-6 text-gray"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                        </svg>
                      </button>
                  </div>
              </div>
          </div>
    
        <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">      
           Lembre-se de que as contribuições para este project devem ser feita,
          <a href="https://github.com/alfredo003/STranslator" class="text-blue-600 dark:text-blue-500 hover:underline">
             nas Diretrizes do projecto</a>.
            </p>
        </div>

     
      </form>

   </>
  )
}