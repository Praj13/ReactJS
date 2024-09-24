import PropTypes from 'prop-types'
function List(props){

                // fruits.sort((a,b)=>a.name.localeCompare(b.name));  //alphabetic order
                // fruits.sort((a,b)=>a.calories-b.calories)  //numeric order i.e according to calorie amount
      const itemLists=props.items;
      const heading=props.category;

                // const lowCalFruits=fruits.filter(fruit=>fruit.calories>50);
                // const itemList=fruits.map(fruit=><li>{fruit.name+" "+ fruit.calories}</li>)
                

                const listItem=itemLists.map(item=><li>{item.name+" "+ item.calories}</li>)



    return(
        <>
        <h1>{heading}</h1>
        <ol className="items">{listItem}</ol>
        </>
    );
}

List.defaultProps={
    category:"Category",
    items:[],
}

List.propTypes={
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number},{name:PropTypes.string},{calories:PropTypes.number})),
    category:PropTypes.string,
}

export default List