import React, { useContext } from "react";
import Image from "react-shimmer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { CityContext } from "../providers/CityProviders";

const CityInfo = (props) => {
  const { cities, retrieved, municipio } = useContext(CityContext);

  const info = [];
  console.log(retrieved);
  if (!retrieved) {
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
                <div className="card color-primary">
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
  } else {
    for (let value in cities) {
      info.push(
        <div key={value} className="col-sm-auto pb-3">
          <div className="card color-primary">
            <div className="card-body text-light pr-5 pl-5">
              <h5 className="card-title mb-3 text-center">
                {cities[value].Partido.value}
              </h5>
              <div className="candidate_info">
                <Image
                  src={cities[value].PicURL}
                  height={75}
                  width={75}
                  style={{ borderRadius: "50px" }}
                  fallback={
                    <SkeletonTheme color="#2e314d" highlightColor="#ccc">
                      <Skeleton circle={true} width={75} height={75} />
                    </SkeletonTheme>
                  }
                />
                <p className="candidate_info__info">{cities[value].Nombre}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="CityInfo">
      <div className="CityInfo--edit">
        <h2 className="CityInfo__heading">Municipio de {municipio.name}</h2>
        <Link
          to={`/Dashboard/city/${municipio.name}`}
          type="button"
          className="btn btn-info"
        >
          Edit Info
        </Link>
      </div>
      <div>
        <span className="">Latitud: {municipio.lat}</span>
        <span className="">Longitud: {municipio.lng}</span>
      </div>
      <div className="scroll_horizontal">
        <div className="row">{info ? info : <p>No city</p>}</div>
      </div>
    </div>
  );
};

export default CityInfo;
