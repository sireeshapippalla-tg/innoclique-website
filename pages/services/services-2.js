import React from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";
import AllServicesCardStyle2 from "@/components/Services/AllServicesCardStyle2";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";

export default function Services2() {
  return (
    <>
      <Navbar />

    
      <div className="page-banner-area mt-94" >
        <div className="container bancontainer">
          <div className="content-left">
            <div
              className="page-banner-content"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <h2>Services</h2>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>Services</li>
              </ul>
            </div>
          </div>
          
          <div className="banner-image col-md-8">
            <img src="/images/services/ServicesBan.png" />
            </div>
          
        </div>
      </div>
  
      <AllServicesCardStyle2 />

      <ContactForm />

      <Footer />
    </>
  );
}
