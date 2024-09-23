import PropTypes from 'prop-types'
function Login(props){
    const welcome_message=  <p className='welcome'>welcome {props.userName}</p>
    const login_prompt=   <p className='sorry'>Please login to continue</p>
    return (props.status?welcome_message:login_prompt)
}
Login.propTypes={
    status:PropTypes.bool,
    userName:PropTypes.string
}

Login.defaultProps={
    status:false,
    userName:"Guest"
}

export default Login