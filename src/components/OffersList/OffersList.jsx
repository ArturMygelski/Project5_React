import Offer from "./Offer";

const OffersList = () => {
  const boxes = [
    {
      name: "Usługa 1",
      isNew: true,
    },
    {
      name: "Usługa 2",
      isNew: false,
    },
    {
      name: "Usługa 3",
      isNew: false,
    },
    {
      name: "Usługa 4",
      isNew: false,
    },
    {
      name: "Usługa 5",
      isNew: false,
    },
    {
      name: "Usługa 6",
      isNew: false,
    },
  ];
  const boxesMap = boxes.map((box, index) => (
    <Offer key={index} isNew={box.isNew} name={box.name} />
  ));

  return (
    <section className="Offer" id="service">
      <div className="container">
        <div className="bannerWhat">Czym zajmuje się nasza firma?</div>

        <div className="boxHolder">{boxesMap}</div>
      </div>
    </section>
  );
};
export default OffersList;
