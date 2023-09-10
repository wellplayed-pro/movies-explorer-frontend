import { useMemo, useState } from "react";
import { saveMovie, deleteMovieSaved } from "../../utils/MainApi";
import liked from "../../images/liked.svg";
import notLiked from "../../images/notLiked.svg";

const Btn = ({ isLiked, onDelete, ...movie }) => {
  const currentImg = useMemo(() => {
    if (isLiked) return liked;
    return notLiked;
  }, [isLiked]);

  const [loading, setLoading] = useState(false);

  const onClick = async (evt) => {
    evt?.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      if (isLiked) {
        await deleteMovieSaved(movie._id);
      } else {
        await saveMovie(movie);
      }
    } catch {}
    onDelete();
    setLoading(false);
  };

  return (
    <button onClick={onClick} className="btn movie__btn" type="button">
      <img src={currentImg} alt="like" />
    </button>
  );
};

export default Btn;
