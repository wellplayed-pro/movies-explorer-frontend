import { useState } from "react";
import { deleteMovieSaved } from "../../utils/MainApi";
import unlike from "../../images/unlike.svg";

const DeleteBtn = ({ onDelete, ...movie }) => {
  const [loading, setLoading] = useState(false);

  const onClick = async (evt) => {
    evt?.preventDefault();
    if (loading) return;
    setLoading(true);

    await deleteMovieSaved(movie._id);
    setLoading(false);
    if (onDelete) onDelete();
  };

  return (
    <button onClick={onClick} className="btn movie__btn" type="button">
      <img src={unlike} alt="like" />
    </button>
  );
};

export default DeleteBtn;
