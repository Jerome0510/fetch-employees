import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";

const sampleEmployee = {
  name: {
    first: "Chatrlie",
    last: "Wilson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.result[0]);
      });
  };

  return (
    <div>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>
        {" "}
        Get employee{" "}
      </button>
    </div>
  );
}

export default App;
