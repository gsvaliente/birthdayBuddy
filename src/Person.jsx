export const Person = ({ id, image, name, age }) => {
  return (
    <article className="person" key={id}>
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
