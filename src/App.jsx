import { useState } from 'react';
import { Person } from './Person';
import data from './data';

const App = () => {
  const [list, setList] = useState(data);

  const handleResetList = () => {
    setList([]);
  };
  return (
    <>
      <h1>Birthday Reminder {list.length} birthdays today</h1>
      {list.map((person) => {
        return <Person key={person.id} {...person} />;
      })}

      {list.length ? (
        <button className="btn" onClick={handleResetList}>
          Reset List
        </button>
      ) : (
        ''
      )}
    </>
  );
};
export default App;
