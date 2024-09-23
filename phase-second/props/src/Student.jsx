// import styles from './index.css'
import PropTypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
           
                <p>Name: {props.name} </p>
                <p>age: {props.age}</p> 
               <p>Student:{props.isStudent ? "yes":"no  "}</p> 
            
        </div>
    );
}
Student.propTypes={
    name: PropTypes.string,
    age:    PropTypes.number,
    isStudent:  PropTypes.bool,
};

Student.defaultProps={
    name:"guest",
    age:0,
    isStudent:false
};
export default Student;