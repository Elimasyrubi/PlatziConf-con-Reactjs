import React from "react";

import "./styles/BadgesList.css";
import { Link } from "react-router-dom";





function BadgesList(props) {
  const badges = props.badges;
  /* INICIO DE BUSQUEDA */
  const [query, setQuery] = React.useState("");
  const [filterBadges, setFilterBadges]= React.useState(badges);

  /* const filteredbadges = badges.filter(badge => {
    return `${badge.firstName}${badge.lastName}`
    .toLowerCase()
    .includes(query.toLowerCase());
  }); */

  React.useMemo(() => {
    const result = badges.filter(badge => {
    return `${badge.firstName}${badge.lastName}`
    .toLowerCase()
    .includes(query.toLowerCase());
  });

  setFilterBadges(result)
}, [badges, query]);

/* FINAL DE BUSQUEDA */

  if (filterBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <laber>Filter Badges</laber>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No Badge were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create a new Badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <laber>Filter Badges</laber>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filterBadges.map(badge => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Link
                to={`/badges/${badge.id}/details`}
                className="text-reset text-decoration-none"
              >
                <div className="row">
                  <div className="col-4">
                    <img
                      className="BadgesListItem__avatar "
                      src={badge.avatarUrl}
                      alt="avatar"
                    />
                  </div>
                  <div className="col">
                    <div className="badges__name">
                      {badge.firstName} {badge.lastName}
                      <br />
                    </div>
                    <div className="badges__twitter">
                      <img src="https://1000marcas.net/wp-content/uploads/2019/11/Logo-Twitter.png" />
                      {badge.twitter}
                      <br />
                    </div>
                    {badge.jobTitle}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
