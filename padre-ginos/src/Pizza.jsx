// const Pizza = (properties) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, properties.name),
//     React.createElement("p", {}, properties.description),
//   ]);
// };

const Pizza = (properties) => {
  return (
    <div className="pizza">
      <h1>{properties.name}</h1>
      <p>{properties.description}</p>
      <img src={properties.image} alt={properties.name} />
    </div>
  );
};

export default Pizza;
