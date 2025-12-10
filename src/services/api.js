import axios from "axios";


const API_BASE_URL = "http://localhost:4000";

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Article API functions
export const articleApi = {
  // GET all articles
  getAll: async () => {
    const response = await apiClient.get("/articles");
    return response.data;
  },

  // GET article by ID
  getById: async (id) => {
    const response = await apiClient.get(`/articles/${id}`);
    return response.data;
  },

  // GET articles by category
  getByCategory: async (category) => {
    const response = await apiClient.get("/articles", {
      params: { category },
    });
    return response.data;
  },

  // CREATE new article
  create: async (article) => {
    const response = await apiClient.post("/articles", article);
    return response.data;
  },

  // UPDATE article
  update: async (id, article) => {
    const response = await apiClient.patch(`/articles/${id}`, article);
    return response.data;
  },

  // DELETE article
  delete: async (id) => {
    await apiClient.delete(`/articles/${id}`);
  },
};

// Category API functions
export const categoryApi = {
  // GET all categories
  getAll: async () => {
    const response = await apiClient.get("/categories");
    return response.data;
  },

  // GET category by slug
  getBySlug: async (slug) => {
    const response = await apiClient.get("/categories", {
      params: { slug },
    });
    return response.data[0];
  },
};

