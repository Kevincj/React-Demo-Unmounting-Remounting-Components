import { useEffect } from "react"

export default function MyButton() {
  useEffect(()=>{
    console.log("Mounting MyButton...");
    console.log("Function in useEffect in MyButton.");

    return ()=>{
      console.log("Unmounting MyButton...");
    }
  }, [])

  return (
    <button onClick={()=>{console.log("Clicked.")}}>Click me!</button>
  )

}