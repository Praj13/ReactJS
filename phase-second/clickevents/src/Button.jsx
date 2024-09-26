function Button(){
    let count=0;
    const handleClick=(name)=>{
    
        if(count<3){
            count++;
            console.log(`${name}, you've clicked me ${count} times`);
        }
        else{
            console.log(`${name}, stop clicking me`)
        }
    }
    const handleClick2=(e)=> e.target.textContent="text content changed"
    return(
        <>
        <button onClick={()=>handleClick("bro")}>Click me</button>
        <button onDoubleClick={(e)=>handleClick2(e)}>double Click me</button>
        </>
    );
}

export default Button