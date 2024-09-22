function Food(){
    const food1="rice";
    const food2="noodles";
    
    return(
        <ul>
            <li>Apple</li>
            <li>{food1.toUpperCase()}</li>
            <li>{food2}</li>
        </ul>
    );

}


export default Food