import React, { useContext } from "react";
import Image from "react-shimmer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Collapse } from "react-bootstrap";
import { useState } from "react";
import { db } from "../utils/firebase-functions";
import { database } from "firebase";
import { CityContext } from "../providers/CityProviders";

const ChangeData = (props) => {
  const { municipio } = useContext(CityContext);
  const database = db.ref(
    "/Candidatos/Municipio de " + municipio.name + "/Alcaldia"
  );

  const [edit, setedit] = useState();
  return (
    <div>
      <br></br>
      <p>{props.value}</p>
      {/*<Image
        src={props.cities.PartidoURL}
        height={75}
        width={75}
        style={{ borderRadius: "50px" }}
        fallback={
          <SkeletonTheme color="#2e314d" highlightColor="#ccc">
            <Skeleton circle={true} width={75} height={75} />
          </SkeletonTheme>
        }
      />*/}

      <div>
        <div className="row">
          <div className="col-2">
            <p>{props.cities.Nombre}</p>
            <Image
              src={props.cities.PicURL}
              height={200}
              width={200}
              style={{ borderRadius: "10px" }}
              fallback={
                <SkeletonTheme color="#2e314d" highlightColor="#ccc">
                  <Skeleton circle={true} width={75} height={75} />
                </SkeletonTheme>
              }
            />
            <p>{props.cities.info}</p>
            <button
              className="btn btn-info"
              onClick={() => (edit ? setedit(false) : setedit(true))}
            >
              Change {props.value}
            </button>
          </div>
          <div className="col-4">
            <Collapse in={edit}>
              <div>
                <form>
                  <div>
                    <input
                      style={{ width: "300px" }}
                      placeholder="Nombre de candidato"
                      type="text"
                      name="name"
                    />
                  </div>

                  <br />
                  <div>
                    <input
                      style={{ width: "300px" }}
                      placeholder="Foto de partido"
                      type="text"
                      name="partidourl"
                    />
                  </div>

                  <br />
                  <div>
                    <input
                      style={{ width: "300px" }}
                      placeholder="Foto de candidato"
                      type="text"
                      name="picurl"
                    />
                  </div>

                  <br />
                  <div>
                    <textarea
                      style={{ width: "300px", height: "100px" }}
                      placeholder="Información de candidato"
                    ></textarea>
                  </div>

                  <br />
                  <input
                    className="btn btn-info"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ChangeData;
