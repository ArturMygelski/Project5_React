import "./OffersList";
const Offer = ({ name, isNew }) => {
  const boxClass = isNew ? "boxService boxServiceNew" : "boxService";

  return (
    <div className={boxClass}>
      {name}
      {isNew && <>(Nowość)</>}
      {isNew && <div className="elipse"> </div>}
    </div>
  );
};
export default Offer;
