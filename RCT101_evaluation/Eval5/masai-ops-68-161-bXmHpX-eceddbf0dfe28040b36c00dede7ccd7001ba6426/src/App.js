import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "gender":
      return { ...state, gender: action.payload };
    case "role":
      return { ...state, role: action.payload };
    case "maritalStatus":
      return { ...state, maritalStatus: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  
  let id=0;

  const [state, dispatch] = useReducer(reducer, initialState)

  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers([...users,state])
    dispatch({type:"reset"})

  }
 
  console.log(users)
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e) => dispatch({ type:"name" , payload:e.target.value})} />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" value={state.gender} onChange={(e) => dispatch({ type: "gender", payload: e.target.value })} data-testid="gender-select">
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Prefer Not to Say"}>Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" value={state.role} data-testid="role-select" onChange={(e) => dispatch({ type: "role", payload: e.target.value })}>
                <option value={"FrontEnd Developer"}>FrontEnd Developer</option>
                <option value={"BackEnd Developer"}>BackEnd Developer</option>
                <option value={"FullStack Developer"}>FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} name="maritalStatus" checked={state.maritalStatus} onChange={(e) => dispatch({ type: "maritalStatus", payload: e.target.checked })} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* map through the userdata and render UserRow component to display the data in tabular format */}
        {/* print "no users found"  in there is no user data */}
        {users.length != 0 ? 
        <table>
          <thead>
            <tr>
              <th>S. no</th>
              <th>User</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Marital Status</th>
            </tr>
          </thead>
        <tbody>
        { users.map((elem) => (
              <UserRow key={id+1} name={elem.name} gender={elem.gender} role={elem.role} maritalStatus={elem.maritalStatus} id={++id}/>
              ))}
            </tbody>
          </table>
        : <h2 data-testid="no-user-container">no users found</h2>}
      </div>
    </div>
  );
}

export default App;