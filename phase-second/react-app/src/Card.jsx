import Pic from './assets/ai.png'
function Card(){
    return(
        <div className='card'>
            <img  src={Pic} width={150} alt="" />
            <h2>AI generated Image</h2>
            <p>This is an AI generated Image</p>
        </div>
    );
}

export default Card