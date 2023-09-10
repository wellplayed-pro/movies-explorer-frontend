import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, signOut, getUser, setProfile } from "./MainApi";
import { useMovies } from "./useMovies";

export const CurrentUserContext = createContext();

export const UserProvider = ({ children }) => {
  // Здесь можно инициализировать данные пользователя (например, из /api/me)
  const [user, setUser] = useState(null);
  const isAuth = useMemo(() => (user && user?.name ? true : false), [user]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { clearAll } = useMovies();

  // Функция для обновления данных о пользователе
  const signIn = async ({ email, password }) => {
    try {
      const user = await login({ email, password });
      setUser(user);
      navigate("/movies");
    } catch (err) {
      throw err;
    }
  };

  const logout = async () => {
    if (!isAuth) return;

    await signOut();
    setUser(null);
    clearAll();
    navigate("/");
  };

  const update = async ({ name, email }) => {
    await setProfile({ name, email });
    setUser({ name, email });
  };

  const checkToken = async () => {
    if (isAuth) return;
    setLoading(true);

    try {
      const user = await getUser();
      setUser(user);
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ user, signIn, isAuth, logout, checkToken, update }}
    >
      {!isLoading && children}
    </CurrentUserContext.Provider>
  );
};
