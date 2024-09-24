import List from './List.jsx'
function App(){
  const fruits=[{id:1, name:"apple", calories:30},
    {id:2, name:"orange", calories:40},
    {id:3, name:"pineapple", calories:200},
    {id:4, name:"grapes", calories:4-0},
    {id:5, name:"banana", calories:90}];   

    const vegetables=[{id:1, name:"carrot", calories:30},
      {id:2, name:"cauli", calories:40},
      {id:3, name:"cabbage", calories:200},
      {id:4, name:"vatmas", calories:4-0},
      {id:5, name:"chana", calories:90}];   
  return(
    <>
  {fruits.length>0?<List items={fruits} category="Fruits"/> : null}
  {vegetables.length>0?<List items={vegetables} category="Vegetables"/> : null}
  </>
  );
}
export default App