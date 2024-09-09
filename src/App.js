import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Employ from './Components/Employ/Employ';
import EmployAdd from './Components/EmployAdd/EmployAdd';

function App() {
  const [employData, setEmployData] = useState({
    employs: [],
    addNewEmploy: null,
    editEmploy: null,
    showForm: false
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setEmployData(prevEmployData => ({ ...prevEmployData, employs: response.data }));
      });
  }, []);

  useEffect(() => {
    if (employData.addNewEmploy) {
      if (employData.editEmploy) {
        axios.put(`https://jsonplaceholder.typicode.com/users/${employData.editEmploy.id}`, employData.addNewEmploy)
          .then((response) => {
            setEmployData(prevEmployData => ({
              ...prevEmployData,employs: prevEmployData.employs.map(emp => emp.id === employData.editEmploy.id ? response.data : emp),
              editEmploy: null,
              showForm: false
            }));
          })
          .catch(error => {
            console.error("Failed to update employ data.", error);
          });
      } else {
        axios.post('https://jsonplaceholder.typicode.com/users', employData.addNewEmploy)
          .then((response) => {
            setEmployData(prevEmployData => ({
              ...prevEmployData,
              employs: [...prevEmployData.employs, response.data],
              showForm: false
            }));
          })
          .catch(error => {
            console.error("Failed to add new employ data.", error);
          });
      }
    }
  }, [employData.addNewEmploy, employData.editEmploy]);

  const employAdd = (user) => {
    setEmployData(prevEmployData => ({ ...prevEmployData, addNewEmploy: user }));
  };

  const UpdateEmploys = (updateEmploy) => {
    setEmployData(prevEmployData => ({
      ...prevEmployData,
      employs: prevEmployData.employs.map(employ => (employ.id === updateEmploy.id ? updateEmploy : employ)),
      showForm: false
    }));
  };

  const DeleteEmploy = (id) => {
    setEmployData(prevEmployData => ({
      ...prevEmployData,
      employs: prevEmployData.employs.filter(employ => employ.id !== id)
    }));
  };

  const showAddUserForm = () => {
    setEmployData(prevEmployData => ({
      ...prevEmployData,
      showForm: !prevEmployData.showForm,
      editEmploy: null
    }));
  };

  const onEdit = (employ) => {
    setEmployData(prevEmployData => ({
      ...prevEmployData,
      editEmploy: employ,
      showForm: true
    }));
  };

  return (
    <>
      {employData.showForm && <EmployAdd employAdd={employAdd} UpdateEmploys={UpdateEmploys} editEmploy={employData.editEmploy} />}
      <Employ employs={employData.employs} showAddUserForm={showAddUserForm} DeleteEmploy={DeleteEmploy} onEdit={onEdit} />
    </>
  );
}

export default App;

