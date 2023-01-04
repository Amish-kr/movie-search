import React from "react";

export default function ShowResults(props) {
  if (props.data === null) {
    return <></>;
  }

  var listItem = props.data.map((movie) => {
    return (
      <li key={movie.show.id} className="list-item">
        <div className="link-container">
          <div>
            {movie.show.image ? (
              <div className="image">
                <a href={movie.show.url} className="link">
                  <img src={movie.show.image.medium} alt={movie.show.name} />
                </a>
              </div>
            ) : (
              <div className="image">
                <a href={movie.show.url} className="link">
                  <img src={require("./no_image.jpg")} alt={movie.show.name} />
                </a>
              </div>
            )}
          </div>
        </div>
      </li>
    );
  });
  return <ul className="list-container">{listItem}</ul>;
}
