import { useEffect } from "react"

export default function MyText(props) {
  useEffect(()=>{
    console.log("Mounting MyText...");
    console.log("Function in useEffect in MyText.");

    return ()=>{
      console.log("Unmounting MyText...");
    }
  }, [])

  return (
    <h1>{props.text}</h1>
  )

}