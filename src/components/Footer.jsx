import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
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
              <span className="text-xl font-bold">ClinicFlow</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted medical portal for appointments and healthcare management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-medical-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-medical-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-medical-blue transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-gray-300 hover:text-medical-blue transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>General Consultation</li>
              <li>Health Checkups</li>
              <li>Patient Reviews</li>
              <li>Online Appointments</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 info@clinicflow.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Medical St, Health City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ClinicFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;