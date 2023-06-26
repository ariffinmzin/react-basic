import './App.css';

function App() {
  const greet = <h1>Hello</h1>;
  const name = "Ariffin";
  const all = (<div>{greet}{name}</div>);
  return (
    <div className="App">
      {greet}{name}
      {all}
      <User />
      <UserTwo name="Maisa" id={1} email="maisa@gmail.com" />
      <Job salary={10000} position="Software Engineer" company="Google" />
    </div>
     
    
  );
}

// arrow function (lowercase)
const getName = () => {
  return "Ariffin";
};

// component (uppercase)
const GetName = () => {
  return <h1>Ariffin</h1>;
};

const User = () => {
  return (
          <div>
            <h1>Ariffin</h1>
            <h1>nurariffinmohdzin@gmail.com</h1>
          </div>
)};

const UserTwo = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.id}</h1>
      <h1>{props.email}</h1>
    </div>
  )
};

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )
};



export default App;
