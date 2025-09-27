import React from 'react';
import Container from './Container';

const Footer = () => {
    return (
      <footer className="bg-black text-gray-300 px-8 py-12 ">
        <div className="grid md:grid-cols-5 gap-8 ">
          <div>
            <h3 className="text-white font-semibold mb-2">
              CS — Ticket System
            </h3>
            <p className="text-sm text-gray-300">
              A Customer Support (CS) Ticket System is a software tool used by
              organizations to manage, track, and resolve customer queries or
              issues efficiently. Instead of handling support requests through
              scattered emails or phone calls, a ticket system organizes each
              request into a “ticket,” which acts as a record of the
              communication and progress of the issue.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm">
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>support@ph.com</li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-sm mt-8">
          © 2025 CS — Ticket System. All rights reserved.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </footer>
    );
};
;

export default Footer;