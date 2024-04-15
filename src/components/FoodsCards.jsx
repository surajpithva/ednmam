import { useState } from "react";
import ModelFood from "./ModelFood";
import images from "../image";
const FoodsCards = ({
  id,
  label,
  knownAs,
  category,
  image,
  categoryLabel,
  measures,
}) => {
  const [measuresData, setMeasuresData] = useState();
  const [modal, setmodal] = useState(false);

  const handleMeasure = (data) => {
    console.log(data, "in handle measeurs");
    const myData = data?.map((item) => item);
    setMeasuresData(myData);
    handleModalToggle();
  };

  function handleModalToggle() {
    setmodal(!modal);
  }

  console.log(modal);
  return (
    <>
      <div className="col-md-4 col-lg-3 col-sm-2 my-3">
        <div className="card" style={{ width: "18rem", height: "o" }}>
          <img
            className="card-img-top"
            src={image ? image : images.question}
            alt="Card image cap"
          />
          <div
            className="card-body"
            // style={{ height: "200px", overflow: "scroll" }}
          >
            <h5 className="card-title">{label}</h5>
            <p className="card-text">{categoryLabel}</p>
            <p className="card-text">{knownAs}</p>
            <div className="d-flex justify-content-between">
              <a href="#" className="btn btn-primary">
                More Details
              </a>
              <button
                type="button"
                class="btn btn-success"
                onClick={() => handleMeasure(measures)}
              >
                {" "}
                View Measures
              </button>
            </div>
          </div>
        </div>
      </div>
      {modal && <ModelFood onClose={handleModalToggle} data={measuresData} />}
    </>
  );
};

export default FoodsCards;
