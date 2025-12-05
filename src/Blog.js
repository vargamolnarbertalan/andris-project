import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import './BaseTemplate.css';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Load the LinkedIn widget script if it hasn't been loaded yet
    const scriptSrc = 'https://widgets.sociablekit.com/linkedin-profile-posts/widget.js';
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="single-page-content" style={styles.pageContainer}>
        <Navbar />
        
        <section id="blogSection">
          <div className="container text-center">
            <h1 className="myTitle introTitle intro display-4">{t('blog')}</h1>
            <div className="blog-content" style={styles.blogContent}>
              <div className="sk-ww-linkedin-profile-post" data-embed-id="25629962"></div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section id="footerSection" className="">
          <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div className="col-md-4 d-flex align-items-center">
                <span className="center-title text-body-secondary">© {new Date().getFullYear()}</span>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </>
  );
};

const styles = {
  pageContainer: {
    lineHeight: 1.6
  },
  blogContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px'
  }
};

export default Blog;

