import "./MovieCard.css";
function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const minRemaining = minutes % 60;

  let hourText = "час";
  if (hours !== 1 && hours !== 21) {
    hourText = "часа";
  } else if ((hours >= 2 && hours <= 4) || (hours >= 22 && hours <= 24)) {
    hourText = "часов";
  }

  let minText = "минута";
  if (minRemaining !== 1 && minRemaining !== 21) {
    minText = "минуты";
  } else if (
    (minRemaining >= 2 && minRemaining <= 4) ||
    (minRemaining >= 22 && minRemaining <= 24)
  ) {
    minText = "минут";
  }

  if (hours === 0) return `${minRemaining} ${minText}`;

  return `${hours} ${hourText} ${minRemaining} ${minText}`;
}

const MovieCard = ({ movie, actionBtn: ActionBtn, likeMovie, unlikeMovie }) => {
  const image = movie.image?.url
    ? "https://api.nomoreparties.co" + movie.image.url
    : movie.image;

  const name = movie.nameRU;
  const time = formatTime(movie.duration);
  return (
    <li className="movie">
      <a href={movie.trailerLink} className="movie__link">
        <img className="movie__image" src={image} alt={name} />
        <div className="movie__description">
          <h2 className="movie__name">{name}</h2>
          {
            <ActionBtn
              {...movie}
              likeMovie={likeMovie}
              unlikeMovie={unlikeMovie}
            />
          }
        </div>
        <p className="movie__time">{time}</p>
      </a>
    </li>
  );
};

export default MovieCard;
