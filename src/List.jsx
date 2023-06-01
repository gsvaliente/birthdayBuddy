import { Person } from './Person';

export const List = ({ list }) => {
  return (
    <section>
      {list.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
