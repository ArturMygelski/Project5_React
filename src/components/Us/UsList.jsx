import Us from "./Us";
const dataUs = [
  {
    name: "Marcin Węgorz",
    depart: "Dock",
    descript:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt",
  },
  {
    name: "Żanetta Węgorz",
    depart: "Dock",
    descript:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt",
  },
];
const UsList = () => {
  const usMap = dataUs.map(({ name, depart, descript }, index) => (
    <Us
      key={index}
      index={index}
      name={name}
      depart={depart}
      descript={descript}
    />
  ));
  return (
    <section className="us">
      <div className="container">
        <div className="bannerOur" id="our">
          Nasi specjaliści
        </div>
        {usMap}
      </div>
    </section>
  );
};
export default UsList;
