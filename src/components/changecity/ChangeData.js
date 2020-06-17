import React from "react";
import Image from "react-shimmer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Collapse } from "react-bootstrap";
import { useState } from "react";

const ChangeData = (props) => {
  const [edit, setedit] = useState();
  return (
    <div>
      <p>{props.value}</p>
      <p>{props.cities.Nombre}</p>
      <Image
        src={props.cities.PicURL}
        height={75}
        width={75}
        style={{ borderRadius: "50px" }}
        fallback={
          <SkeletonTheme color="#2e314d" highlightColor="#ccc">
            <Skeleton circle={true} width={75} height={75} />
          </SkeletonTheme>
        }
      />
      <Image
        src={props.cities.PartidoURL}
        height={75}
        width={75}
        style={{ borderRadius: "50px" }}
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
      <Collapse in={edit}>
        <div>hola</div>
      </Collapse>
    </div>
  );
};

export default ChangeData;
