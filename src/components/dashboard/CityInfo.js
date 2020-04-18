import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CityInfo = (props) => {
  const [cities, setcities] = useState([]);
  const [retrived, setretrieved] = useState(false);

  useEffect(() => {
    setretrieved(false);
    db.ref("/Candidatos/Municipio de " + props.municipio.name + "/Alcaldia").on(
      "value",
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const info = [];
          for (let value in data) {
            info.push(
              <>
                <div key={value} className="col-sm-auto pb-3">
                  <div className="card color-primary-light">
                    <div className="card-body text-light pr-5 pl-5">
                      <h5 className="card-title mb-3 text-center">{value}</h5>
                      <div className="candidate_info">
                        <img
                          src={data[value].PicURL}
                          className="candidate_info__picture"
                          alt="Candidato"
                        />
                        <p className="candidate_info__info">
                          {data[value].Nombre}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
          console.log(info);
          setcities(info);
          setretrieved(true);
        } else {
          setcities(null);
          setretrieved(true);
        }
      }
    );
  }, [props.municipio.name]);
  if(!props.municipio.name){
    
    return(<p>Select a city</p>)
  }
  if (!retrived) {
    return (
      <SkeletonTheme color="#2e314d" highlightColor="#ccc">
      <div className="CityInfo">
        <h2 className="CityInfo__heading">
          <Skeleton width={100} />
        </h2>
        <div className="float-left">
          <span className="">
            <Skeleton width={100} />
          </span>
          <span className="">
            <Skeleton width={100} />
          </span>
        </div>
        <div className="scroll_horizontal">
          <div className="row">
            <div className="col-sm pb-3">
              <div className="card color-primary-light">
                <div className="card-body text-light pr-5 pl-5">
                  <h5 className="card-title mb-3 text-center">
                    <Skeleton width={200} />
                  </h5>
                  <div className="candidate_info">
                    <Skeleton circle={true} width={75} height={75} />
                    <p className="candidate_info__info">
                      <Skeleton width={100} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm pb-3">
              <div className="card color-primary-light">
                <div className="card-body text-light pr-5 pl-5">
                  <h5 className="card-title mb-3 text-center">
                    <Skeleton width={200} />
                  </h5>
                  <div className="candidate_info">
                    <Skeleton circle={true} width={75} height={75} />
                    <p className="candidate_info__info">
                      <Skeleton width={100} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm pb-3">
              <div className="card color-primary-light">
                <div className="card-body text-light pr-5 pl-5">
                  <h5 className="card-title mb-3 text-center">
                    <Skeleton width={200} />
                  </h5>
                  <div className="candidate_info">
                    <Skeleton circle={true} width={75} height={75} />
                    <p className="candidate_info__info">
                      <Skeleton width={100} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
    );
  }
  return (
    <div className="CityInfo">
      <h2 className="CityInfo__heading">Municipio de {props.municipio.name}</h2>
      <div className="float-left">
        <span className="">Latitud: {props.municipio.lat}</span>
        <span className="">Longitud: {props.municipio.lng}</span>
      </div>
      <div className="scroll_horizontal">
        <div className="row">{cities ? cities : (
          <p>No city</p>
        )}</div>
      </div>
    </div>
  );
};

export default CityInfo;
