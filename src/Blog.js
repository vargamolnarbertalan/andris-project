import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import './BaseTemplate.css';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Blog = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [widgetKey, setWidgetKey] = useState(0);

  // Scroll to top when navigating to blog page
  useEffect(() => {
    if (location.pathname === '/blog') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  // Load widget script on mount/navigation
  useEffect(() => {
    // Update key to force React to unmount and remount the widget div
    setWidgetKey(Date.now());

    const scriptSrc = 'https://widgets.sociablekit.com/linkedin-profile-posts/widget.js';
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="single-page-content" style={styles.pageContainer}>
        <Navbar />
        
        <section id="blogSection">
          <div className="container text-center">
            <h1 className="myTitle introTitle intro display-4">{t('blog')}</h1>
            <div className="blog-header refs" style={styles.blogHeader}>
              <div className="gradient-border">
                <img className="pic textImage" src="/img/avatar.jpg" alt="avatar"></img>
              </div>
              <div className="blog-tagline-wrapper">
                <h2 className="blog-tagline intro myTitle" dangerouslySetInnerHTML={{ __html: t('blogTagline') }}></h2>
              </div>
              <img className="blog-outline-image" src="/outline-three.png" alt="outline map" />
            </div>
            <div className="blog-content" style={styles.blogContent}>
              <div key={widgetKey} className="sk-ww-linkedin-profile-post" data-embed-id="25629962"></div>
              <div className="widget-reload-container" style={styles.reloadContainer}>
                <p className="widget-reload-message" style={styles.reloadMessage}>{t('widgetNotLoaded')}</p>
                <button 
                  className="widget-reload-btn" 
                  onClick={() => window.location.reload()}
                  style={styles.reloadButton}
                >
                  {t('reloadWidget')}
                </button>
              </div>
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
  blogHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: '20px 0',
    gap: '30px',
    width: '95%',
    maxWidth: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '30px',
    position: 'relative'
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
    position: 'relative'
  },
  reloadContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    padding: '20px 0',
    textAlign: 'center',
    width: '100%',
    marginTop: '20px'
  },
  reloadMessage: {
    color: '#455368',
    fontSize: '16px',
    margin: 0
  },
  reloadButton: {
    backgroundColor: 'var(--andris-blue)',
    border: '2px solid var(--andris-bluelight)',
    borderRadius: '8px',
    padding: '10px 24px',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
  }
};

export default Blog;

