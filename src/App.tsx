import { useState } from "react";
import "./App.css";

import EmployeeCard from "./components/EmployeeCard";

const sampleEmployee = {
	name:{
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture:{medium :"https://randomuser.me/api/portraits/med/men/40.jpg",

	},
}


function App() {
	const [employee, setEmployee] = useState(sampleEmployee)
	const getEmployee = async () => {
		// Send the request
		const response = await fetch("http://localhost:3310/api/employees")
		const result = await response.json()
		  console.log(result)
			setEmployee (result.results[0]);
		  };
	return (
		<div className="app">
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>Next Employee</button>
		</div>
	);
}

export default App;
