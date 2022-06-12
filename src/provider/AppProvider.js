import React, { useEffect, useState } from "react"

export const AppContext = React.createContext({})

export const AppProvider = (props) => {
  const [favoriteMovies, setFavoriteMovies] = useState([
    '',
  ]);

  useEffect(() => {
    const userStorage = localStorage.getItem("favoriteMovies")
    if (userStorage) {
      setFavoriteMovies(JSON.parse(userStorage))
    } else {
        setFavoriteMovies([
        '',
      ])
    }
  }, [])

  return (
    <AppContext.Provider value={{ favoriteMovies, setFavoriteMovies }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useApp = () => React.useContext(AppContext)