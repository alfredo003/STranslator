import TextArea from "./components/TextArea";
import Header from "./components/Header";
import AreaText from "./components/AreaText";

export default function App() {
  fetch("http://localhost:3000/",{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
    }
  })
  .then((resp)=>resp.json())
  .then((data)=>{
     
  })
  .catch((err)=>console.log(err));
  return (
    <>
  
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
     
   <Header/>
   
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <AreaText resp="Hello world"/>
     <TextArea/>
    
    </div>
  </div>
    </>
  )
}
