import "./OffersList";
const Offer = ({ name, isNew }) => {
  const boxClass = isNew ? "boxService boxServiceNew" : "boxService";

  return (
    <div className={boxClass}>
      <p>{name}</p>
      {isNew && <p>(Nowość)</p>}
      {isNew && <div className="elipse"> </div>}
    </div>
  );
};
export default Offer;
