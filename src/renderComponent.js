

export const renderComponent = Component =>{

  return (props) =>{
    console.log(`Rendering ${Component} using props ${JSON.stringify(props)}`);
    return <Component {...props}/>;
  }
}