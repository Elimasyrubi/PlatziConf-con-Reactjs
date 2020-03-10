import React from "react";
import "./styles/BadgesDetails.css";
import { Link } from "react-router-dom";
import confLogo from "../images/badge-header.svg";
import Modal from "../components/Modal"



function BadgeDetails(props) {
const badge = props.badge

  return (
    <div>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges_conf-logo" src={confLogo} alt="Conf logo" />
          </div>
        </div>
      </div>

      <div className="container centrar">
        <div className="box">
          <h1 className="mt-4 mb-4 text-center ">
            {" "}
            Detalles del Conferencista
          </h1>
          <div className="display">
            <img className="details_img" src={badge.avatarUrl} />

            <div className="datos">
              <p>
                Name: <span>{badge.firstName}</span>
              </p>
              <p>
                Last Name: <span> {badge.lastName}</span>
              </p>
              <p>
                email: <span>{badge.email}</span>
              </p>
              <p>
                JobTitle:<span> {badge.jobTitle}</span>
              </p>
              <p>
                twitter: <span>{badge.twitter}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="display mt-4 mb-4">
          <div>
            <Link
              to={`/badges/${badge.id}/edit`}
              className="btn btn-primary mr-4 "
            >
              {" "}
              Edit
            </Link>
          </div>
          <div>
            <button onClick={props.onOpenModal} 
            className="btn btn-danger"> Delete</button>

            <Modal onClose={props.oncloseModal}
            modalIsOpen={props.modalIsOpen}>
              
              <div className="DeleteBadge">
                <h1> Are you Sure?</h1>
                <p>You are about to delete a badge</p>
                <button onClick={props.onDeleteBadge} className="btn btn-danger">Delete</button>
                <button onClick={props.oncloseModal} className="btn btn-primary ml-4">Cancel</button>
              </div>
            </Modal >
         
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
