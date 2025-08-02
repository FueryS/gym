import React from 'react';
import { useParams } from 'react-router-dom';
import { images } from '../Backend/imageCollector.js'; // adjust path as needed
import { motion } from 'framer-motion';
import './productPage.css';

function ProductPage() {
  const { id } = useParams();
  const imageIndex = parseInt(id, 10) - 1;
  const imagePath = images.getsImages ? images.getsImages()[imageIndex] : undefined;

  // Animation variants for smooth entrance effects
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay: 0.4 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Product details
  const heroTitle = "Premium Headphones";
  const heroSubtitle = "Experience the sound like never before";
  const price = "$299.99";
  const originalPrice = "$399.99";


  return (
    <div className="container">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="hero-content" variants={fadeInUp}>
          <motion.h1 className="hero-title" variants={fadeInUp}>
            {heroTitle}
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            {heroSubtitle}
          </motion.p>
          <motion.div className="price-container" variants={fadeInUp}>
            <span className="price">{price}</span>
            <span className="original-price">{originalPrice}</span>
          </motion.div>
        </motion.div>
        
        <motion.div className="hero-image" variants={fadeInRight}>
          <div className="product-image-placeholder">
            {imagePath ? (
              <img src={imagePath} className="placeholder-image0" alt="Product" />
            ) : (
              <span className="placeholder-text">No Image</span>
            )}
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="features"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 className="section-title" variants={fadeInUp}>
          Key Features
        </motion.h2>
        
        <motion.div className="features-grid" variants={staggerContainer}>
          {[
            { title: "Active Noise Cancellation", desc: "Block out the world and focus on your music" },
            { title: "30-Hour Battery Life", desc: "All-day listening with quick charge technology" },
            { title: "Premium Materials", desc: "Crafted with high-quality leather and metal" },
            { title: "Wireless Freedom", desc: "Seamless Bluetooth 5.0 connectivity" }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              variants={fadeInUp}
            >
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Product Details */}
      <motion.section 
        className="details"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="details-content" variants={fadeInLeft}>
          <h2 className="section-title">Engineered for Excellence</h2>
          <p className="details-text">
            Our flagship headphones combine cutting-edge technology with timeless design. 
            Each pair is meticulously crafted to deliver an unparalleled audio experience 
            that adapts to your lifestyle.
          </p>
          <ul className="specs-list">
            <li>Frequency Response: 20Hz - 20kHz</li>
            <li>Driver Size: 40mm dynamic drivers</li>
            <li>Weight: 290g</li>
            <li>Connectivity: Bluetooth 5.0, 3.5mm jack</li>
          </ul>
        </motion.div>
        
        <motion.div className="details-image" variants={fadeInRight}>
          <div className="product-image-placeholder">
            <span className="placeholder-text">Detail View</span>
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <h2 className="cta-title">Ready to Upgrade Your Audio?</h2>
        <p className="cta-text">Free shipping on orders over $200. 30-day money-back guarantee.</p>
        <div className="cta-buttons">
          <button className="primary-button">Add to Cart</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </motion.section>
    </div>
  );
};

export default ProductPage;