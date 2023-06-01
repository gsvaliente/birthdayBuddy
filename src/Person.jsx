export const Person = ({ id, image, name, age }) => {
  return (
    <div key={id}>
      <img src={image} alt={name} style={{ width: '200px' }} />
      <p>
        {name} {age}
      </p>
    </div>
  );
};
