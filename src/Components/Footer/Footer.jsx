import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-[#F4FCF3] text-neutral-content p-10">
        <nav>
          <h6 className="footer-title text-[#23BE0A]">Services</h6>
          <a className="link link-hover text-black">Branding</a>
          <a className="link link-hover text-black">Design</a>
          <a className="link link-hover text-black">Marketing</a>
          <a className="link link-hover text-black">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#23BE0A]">Company</h6>
          <a className="link link-hover text-black">About us</a>
          <a className="link link-hover text-black">Contact</a>
          <a className="link link-hover text-black">Jobs</a>
          <a className="link link-hover text-black">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#23BE0A]">Legal</h6>
          <a className="link link-hover text-black">Terms of use</a>
          <a className="link link-hover text-black">Privacy policy</a>
          <a className="link link-hover text-black">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
