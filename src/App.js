import { useEffect, useState } from 'react';
import './App.css';
import MyButton from './MyButton';
import MyText from './MyText';
import { renderComponent } from './renderComponent';
import { Grid } from '@mui/material';

function App() {

  const [style, setStyle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Using Higher Order Components
  const RenderedButton = renderComponent(MyButton);
  const RenderedText = renderComponent(MyText);

  // Using Inner-Declared Components
  const InnerButton = () => {
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
  const InnerText = (props) => {
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

  return (
    <div>
    <button onClick={()=>{setIsMobile(!isMobile)}}>Switch Layout</button>
    <button onClick={()=>{setStyle((style+1)%3)}}>Switch Component</button>
      <h1>Current layout is: {isMobile ? "Mobile" : "PC"}</h1>

      <h1>Current component is: {style === 0 ? "Native" : (style === 1 ? "Inner Component" : "Higher Order Component")}</h1>
      <Grid
        container
        spacing={isMobile ? 3 : 5}
        columns={isMobile ? 1 : 2}
      >
        {
          style === 0 ? (
            // Native
            <>
              {[0,1,2,3,4].map((value, index) => (
                  <Grid item display="grid" xs={1} key={index}>
                      <MyText text="Native Component" />
                      <MyButton />
                  </Grid>
                  )
                )}
            </>
          ) :  style === 1 ? (
            // Inner
            <>
               {[0,1,2,3,4].map((value, index) => (
                  <Grid item display="grid" xs={1} key={index}>
                    <InnerText text="HOC Component" />
                    <InnerButton />
                  </Grid>
                )
              )}
            </>
          ) : (
            // HOC
            <>
               {[0,1,2,3,4].map((value, index) => (
                  <Grid item display="grid" xs={1} key={index}>
                    <RenderedText text="HOC Component" />
                    <RenderedButton />
                  </Grid>
                )
              )}
            </>
          )
        }
      </Grid>

    </div>
  );
}

export default App;
