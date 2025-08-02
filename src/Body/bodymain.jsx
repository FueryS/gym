import './bodyUtilities.css';
import './bodymain.css';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function BodyMain({ id, imagePath }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0.5, scale: 0.7 });
    }
  }, [isInView, controls]);

  return (
    <Link to={`/product/${id}`}>
      <motion.div
        ref={ref}
        className='skeliton-image'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        transition={{ duration: 0.5 }}

        style={{ overflow:'hidden', margin: '5rem 2rem'}}
      >
        <img src={imagePath} alt={`Image id: ${id}`} />
      </motion.div>
    </Link>
  );
}

export default BodyMain;
