import React from 'react'
import tick from './green_tick.png'
import './App.css';
import Select from 'react-select'
function App() {
  var val = [{

    sortCode: "11-22-33",

    accountNumber: "123456789",

    accountType: "saving"
    ,
    accountName: "Mr. k"
  }, {

    sortCode: "11-22-44",

    accountNumber: "1234567",

    accountType: "current"
    ,
    accountName: "Mr. s"
  }]

  var options = []
  for (let index = 0; index < val.length; index++) {

    options.push({
      value: val[index],
      label: val[index].sortCode + " " + val[index].accountNumber + " " + val[index].accountType + " " + val[index].accountName
    })
  }
  const colorStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        ':before':isSelected?{
    backgroundImage:`url(${tick})`,
    content:`"."`,
    display:'block',
    backgroundSize:'20px 20px',
    backgroundRepeat:'no-repeat'
        }:''
      }
    }
  }
  return (
    <div className="App">
      <Select closeMenuOnSelect={false} options={options} styles={colorStyles}/>
    </div>
  );
}

export default App;
