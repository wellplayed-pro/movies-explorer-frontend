import { useState } from "react";
import unlike from "../../images/unlike.svg";

const DeleteBtn = ({ unlikeMovie, ...movie }) => {
  const [loading, setLoading] = useState(false);

  const onClick = async (evt) => {
    evt?.preventDefault();
    if (loading) return;
    setLoading(true);

    await unlikeMovie(movie._id);
    setLoading(false);
  };

  return (
    <button onClick={onClick} className="btn movie__btn" type="button">
      <img src={unlike} alt="like" />
    </button>
  );
};

export default DeleteBtn;
