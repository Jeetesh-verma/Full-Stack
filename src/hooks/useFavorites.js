import { useState, useEffect } from "react";
import * as favoritesUtil from "@/utils/favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(favoritesUtil.getFavorites());
  }, []);

  const addFavorite = (article) => {
    favoritesUtil.addFavorite(article);
    setFavorites(favoritesUtil.getFavorites());
  };

  const removeFavorite = (articleId) => {
    favoritesUtil.removeFavorite(articleId);
    setFavorites(favoritesUtil.getFavorites());
  };

  const toggleFavorite = (article) => {
    if (favoritesUtil.isFavorite(article.id)) {
      removeFavorite(article.id);
    } else {
      addFavorite(article);
    }
  };

  const isFavorite = (articleId) => {
    return favoritesUtil.isFavorite(articleId);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };
};

