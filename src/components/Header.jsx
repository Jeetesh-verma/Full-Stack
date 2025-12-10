import { Link, useLocation } from "react-router-dom";
import { Heart, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { useCategories } from "@/hooks/useArticles";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const location = useLocation();
  const { data: categories = [] } = useCategories();
  const { user, logout } = useAuth();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-8 w-8 object-contain"
              onError={(e) => {
                const target = e.target;
                if (target instanceof HTMLImageElement) {
                  target.src = "/placeholder.svg";
                }
              }}
            />
            <span className="text-xl font-bold">NewsWave</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant={isActive("/") ? "secondary" : "ghost"} size="sm">
                Home
              </Button>
            </Link>

            {categories.slice(0, 4).map((cat) => (
              <Link key={cat.slug} to={`/category/${cat.slug}`}>
                <Button
                  variant={isActive(`/category/${cat.slug}`) ? "secondary" : "ghost"}
                  size="sm"
                >
                  <span className="mr-1">{cat.icon}</span>
                  {cat.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Link to="/favorites">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className={`h-5 w-5 ${isActive("/favorites") ? "fill-primary text-primary" : ""}`} />
              </Button>
            </Link>

            <Link to="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>

            {user?.role === "admin" && (
              <Link to="/admin">
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  Admin
                </Button>
              </Link>
            )}

            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium hidden sm:inline-block">
                  {user.name}
                </span>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button size="sm">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

