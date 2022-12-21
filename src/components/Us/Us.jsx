import "./UsList";

// const SectionUp = () => {
//   return (
// <section className="us">
//   <div className="container">
//     <div className="bannerOur" id="our">
//       Nasi specjaliści
//     </div>
//     <div className="midholder">
// <div className="circleL"></div>
// <div className="person1">
//   <h2>Imię Nazwisko [ dział ]</h2>
//   <p>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
//     massa et lacus egestas cursus a non magna. Fusce scelerisque
//     blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
//     tempor elementum lorem in, varius pellentesque ligula. Duis
//     efficitur lacinia enim, non tincidunt
//   </p>
// </div>
//         </div>
//         <div className="midholder">
//           <div className="circleR"></div>
//           <div className="person2">
//             <h2>Imię Nazwisko [ dział ]</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
//               massa et lacus egestas cursus a non magna. Fusce scelerisque
//               blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
//               tempor elementum lorem in, varius pellentesque ligula. Duis
//               efficitur lacinia enim, non tincidunt
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
const Us = ({ name, depart, descript, index }) => {
  const circleDir = index % 2 === 0 ? "circleL" : "circleR";
  const personDir = index % 2 === 0 ? "person1" : "person2";
  return (
    <>
      {" "}
      <div className="midholder">
        <div className={circleDir}></div>
        <div className={personDir}>
          <h2>{`${name} [${depart}]`}</h2>
          <p>{descript}</p>
        </div>
      </div>
    </>
  );
};
export default Us;
