const dieFaces = {
  1: ["center"],
  2: ["top-right", "bottom-left"],
  3: ["top-right", "center", "bottom-left"],
  4: ["top-left", "top-right", "bottom-left", "bottom-right"],
  5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
  6: [
    "top-left",
    "top-right",
    "center-left",
    "center-right",
    "bottom-left",
    "bottom-right",
  ],
};

function Die(props) {
  const faces = dieFaces[props.num];
  console.log(faces);

  return (
    <div className="dice">
      <div className="dice-inner">
        {faces.map((element, index) => {
          return <div key={index} className={`dot ${element}`}></div>;
        })}
      </div>
    </div>
  );
}

export default Die;
