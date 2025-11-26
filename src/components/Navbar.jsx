"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      router.push("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-navy">ClinicFlow</span>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link
                href="/"
                className="text-dark-text hover:text-medical-blue font-medium transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="text-dark-text hover:text-medical-blue font-medium transition-colors"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/appointment"
                className="text-dark-text hover:text-medical-blue font-medium transition-colors"
              >
                Appointments
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-dark-text hover:text-medical-blue font-medium transition-colors"
              >
                About
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-dark-text font-medium">
                    {user.displayName || user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-medical-blue hover:text-blue-dark font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-medical-blue text-white px-6 py-2 rounded-md hover:bg-blue-dark transition-all hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-navy">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
