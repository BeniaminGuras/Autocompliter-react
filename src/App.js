import Autocompliter from "./Autocompiler/Autocompiler";

//autocompliter accept two parameters:
//data = which is the array of elements that will be filtered to find a suggestions
//if callback is not added, the autocompliter will be working in a normal way
//callback = which is the function that will filter the data, example: 
//callback={(x, y) => x<y}
//where x is each element of data, y is the input of client
//will give us the numbers from data that are lower then client input


function App() {
  const data = [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ];

  return (
    <Autocompliter data={data} callback={(x, y) => x<y}/> 
  )
}

export default App;
