import TextArea from "./components/TextArea";
import Header from "./components/Header";
export default function App() {
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    
   <Header/>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     <TextArea/>
      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Start a 14 day free trial
        </a>
      </p>
    </div>
  </div>
    </>
  )
}
