import React, { useState } from 'react';
import "./App.scss"
const App = () => {
  const students = [
    {
      name: 'Yasemen',
      surname: 'Memmedova',
      age: 18,
      isWorking: "var",
      hasVisa: "yoxdu",
    },
    {
      name: 'Jabbar',
      surname: 'Jabbarli',
      age: 22,
      isWorking: "yoxdu",
      hasVisa: "yoxdu",
    },
    {
      name: 'Fatime',
      surname: 'Ehmedova',
      age: 20,
      isWorking: "var",
      hasVisa: "var",
    },
    {
      name: 'Fuad',
      surname: 'Mikayilzade',
      age: 24,
      isWorking: "yoxdu",
      hasVisa: "var",
    },
    {
      name: 'Orxan',
      surname: 'Eliyev',
      age: 27,
      isWorking: "var",
      hasVisa: "var",
    },
    {
      name: 'Elxan',
      surname: 'Meherremli',
      age: 32,
      isWorking: "var",
      hasVisa: "yoxdu",
    },
  ];
  const [search, setSearch] = useState('')
  const [searchage, setSearchAge] = useState("")
  const [searchWorking, setSearchWorking] = useState("")

  const inptChange = (e) => {
    setSearch(e.target.value)
  };
  const inputChangeAge = (f) => {
    setSearchAge(f.target.value)
  }
  const inputChangeWorking = (j) => {
    searchWorking(j.target.value)
  }
  return (
    <div className="page">
      <input
        onChange={inptChange}
        type="text"
        placeholder="Fullname..."
      />
      <input
        onChange={inputChangeAge}
        type="number"
        placeholder='Age...'
      />
      <input
        onChange={inputChangeWorking}
        type="text"
        placeholder='Working...'
      />
      <section className="demo">
        <div className="calculator-wrapper">

          {students.filter(item =>
            item.name.toUpperCase().includes(search.toUpperCase()) && (String(item.age).includes(searchage)) && (item.isWorking.includes(searchWorking))
          ).map((item, index) => {
            return (
              <div className="workerCard">
                <h2>
                  FulName: {item.name} {item.surname}
                </h2>
                <h2>Age: {item.age} </h2>
                <h2>Is working: {item.isWorking} </h2>
                <h2>Is hasVisa: {item.hasVisa} </h2>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default App;