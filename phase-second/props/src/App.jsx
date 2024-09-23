import Student from './Student.jsx'

function App(){
  return(
    <div>
      <Student name="Prajwol" age={20} isStudent={true}/>
      <Student name="Kalpana" age={20} isStudent={true}/>
      <Student name="Sneha" age="30" isStudent={false}/>
      <Student/>
    </div>
  );
}

export default App;