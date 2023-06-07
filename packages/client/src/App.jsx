import TextArea from "./components/TextArea";
import Header from "./components/Header";


export default function App() {
  return (
    <>
  
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
     
   <Header/>
   
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    

     <TextArea/>
    </div>
  </div>
    </>
  )
}
