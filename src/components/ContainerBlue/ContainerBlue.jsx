import "./ContainerBlueList";
const ContainerBlue = ({ name, isNew }) => {
  const boxClass = isNew ? "boxService boxServiceNew" : "boxService";

  return (
    <div className={boxClass}>
      {name}
      <br />
      {isNew && <>(Nowość)</>}
      {isNew && <div className="elipse"> </div>}
    </div>
  );
};
export default ContainerBlue;
