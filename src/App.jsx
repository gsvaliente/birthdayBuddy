import { useState } from 'react';
import { List } from './List';
import data from './data';

const App = () => {
  const [list, setList] = useState(data);

  const handleResetList = () => {
    setList([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{list.length} birthdays today</h3>
        <List list={list} />

        {list.length ? (
          <button
            className="btn btn-block"
            type="button"
            onClick={handleResetList}
          >
            Clear List
          </button>
        ) : (
          ''
        )}
      </section>
    </main>
  );
};
export default App;
