import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, User, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "History", path: "/history" },
    { name: "Saffron Map", path: "/saffron-map" },
    { name: "Blog", path: "/blog" },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const getUserInitials = () => {
    if (user?.user_metadata?.display_name) {
      return user.user_metadata.display_name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase();
    }
    return user?.email?.[0].toUpperCase() || 'U';
  };

  if (isMobile) {
    return (
      <>
        <nav className="fixed top-4 right-4 z-50">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-background/10 backdrop-blur-md border border-white/20 rounded-full p-3 text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
              <ul className="flex flex-col space-y-6 text-center">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={handleNavClick}
                      className={`text-2xl font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? "text-saffron-gold"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center space-y-4 pt-8 border-t border-white/20">
                {!loading && (
                  <>
                    {user ? (
                       <div className="flex flex-col items-center space-y-4">
                        <Avatar className="h-12 w-12 border border-white/20">
                          <AvatarFallback className="bg-primary/20 text-white text-lg">
                            {getUserInitials()}
                          </AvatarFallback>
                        </Avatar>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleSignOut}
                          className="text-destructive hover:bg-destructive/10"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          navigate('/auth');
                          handleNavClick();
                        }}
                        className="text-white/90 hover:text-white hover:bg-white/10"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Sign In
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Desktop Navigation
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-background/10 backdrop-blur-md border border-white/20 rounded-full px-20 py-3 shadow-elegant min-w-[780px]">
        <div className="flex items-center justify-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                    location.pathname === item.path
                      ? "text-saffron-gold"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 border-l border-white/20 pl-6">
            {!loading && (
              <>
                {user ? (
                   <div className="flex items-center space-x-3">
                     <DropdownMenu>
                       <DropdownMenuTrigger asChild>
                         <Button variant="ghost" size="sm" className="p-0">
                           <Avatar className="h-8 w-8 border border-white/20">
                             <AvatarFallback className="bg-primary/20 text-white text-sm">
                               {getUserInitials()}
                             </AvatarFallback>
                           </Avatar>
                         </Button>
                       </DropdownMenuTrigger>
                       <DropdownMenuContent align="end">
                         <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                           <LogOut className="w-4 h-4 mr-2" />
                           Sign Out
                         </DropdownMenuItem>
                       </DropdownMenuContent>
                     </DropdownMenu>
                   </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/auth')}
                    className="text-white/90 hover:text-white hover:bg-white/10"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;