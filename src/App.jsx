import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/category/:slug" element={<CategoryPage />} />
                <Route path="/article/:id" element={<ArticlePage />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/settings" element={<Settings />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <Admin />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

