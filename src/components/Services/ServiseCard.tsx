import React from 'react';
import styles from './Services.module.css';


interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.services_section}>
      <img src={imageUrl} alt={title} className={styles.services_section_images} />
      <div className={styles.services_block}>
        <p className={styles.services_section_upper}>{title}</p>
        <p className={styles.services_section_lower}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;