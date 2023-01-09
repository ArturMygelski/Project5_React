import "./UsList";
const Us = ({ name, depart, descript, index }) => {
  const circleSide = index % 2 === 0 ? "circle-left" : "circle-right";
  const personSide = index % 2 === 0 ? "person1" : "person2";
  return (
    <>
      {""}
      <div className="midholder">
        <div className={circleSide}></div>
        <div className={personSide}>
          <h2>{`${name} [${depart}]`}</h2>
          <p>{descript}</p>
        </div>
      </div>
    </>
  );
};
export default Us;
