import Typewriter from "typewriter-effect";

export default function AreaText(props){
  return(
    
    <form style={{display:props.display}}> 
      
    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">   
           <Typewriter
              onInit={(typewriter) => {
                  typewriter
                      .typeString(props.resp)
                      .pauseFor(1000)
                      .start();
              }}
         /> 
            
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           
            <div className="flex pl-0 space-x-1 sm:pl-2">
                
                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg className="h-6 w-6 text-gray"  fill="none" viewBox="0 0 30 30" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                  </svg>
                  </button>
           </div>
        </div>
    </div>
  </form>
  )
}