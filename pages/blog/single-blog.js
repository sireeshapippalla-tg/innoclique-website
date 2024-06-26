import React from "react";
import Link from 'next/link';
import NavbarTwo from "@/components/Layout/NavbarTwo";
import SingleBlogContent from "@/components/Blog/SingleBlogContent";
import Footer from "@/components/Layout/Footer";

export default function SingleBlog() {
  return (
    <>
      <NavbarTwo />

      <div className="page-banner-area mt-94" style={{ backgroundImage: `url(/images/blog/blog-banner-bg-2.jpg` }}>
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Blog Details</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Blog Details</li>
            </ul>
          </div>
        </div>
      </div>

      <SingleBlogContent />
  
      <Footer />
    </>
  );
}
