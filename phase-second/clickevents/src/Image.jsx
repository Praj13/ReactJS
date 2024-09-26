function Image(){
    let imageUrl='./src/assets/ai.png'
    const handleClick3=(e)=>e.target.style.display="none"

    return(
        <>
        <img onClick={(e)=>handleClick3(e)} src={imageUrl} alt="" />
        </>
    );
}

export default Image