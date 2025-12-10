import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { articleApi, categoryApi } from "@/services/api";

export const useArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: articleApi.getAll,
  });
};

export const useArticle = (id) => {
  return useQuery({
    queryKey: ["article", id],
    queryFn: () => {
      if (!id) throw new Error("Article ID is required");
      return articleApi.getById(id);
    },
    enabled: !!id,
  });
};

export const useArticlesByCategory = (category) => {
  return useQuery({
    queryKey: ["articles", "category", category],
    queryFn: () => articleApi.getByCategory(category),
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: categoryApi.getAll,
  });
};

export const useCategory = (slug) => {
  return useQuery({
    queryKey: ["category", slug],
    queryFn: () => {
      if (!slug) throw new Error("Category slug is required");
      return categoryApi.getBySlug(slug);
    },
    enabled: !!slug,
  });
};

export const useCreateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (article) => articleApi.create(article),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
};

export const useUpdateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, article }) =>
      articleApi.update(id, article),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["article", variables.id] });
    },
  });
};

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => articleApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
};

