// content.js — Business-specific data for all pages.
// To adapt this template for a new business, update the values in this file.
// Render logic lives in shared.js and components; content lives here.

import { images } from './imagePaths.js';

export const services = [
  {
    title: 'Mini-Split Installation',
    description: 'Custom installation for homes and businesses.',
    image: images.miniSplitInstall
  },
  {
    title: 'Repair & Diagnostics',
    description: 'Fast troubleshooting and repairs for all brands.',
    image: images.repair
  },
  {
    title: 'Maintenance',
    description: 'Keep your system running efficiently year-round.',
    image: images.maintenance
  },
  {
    title: 'Consultation',
    description: 'Expert advice for new projects or upgrades.',
    image: images.consultation
  }
];

export const projects = [
  {
    title: 'Downtown Loft Retrofit',
    description: 'Installed 3-zone system in historic building.',
    image: images.loft1
  },
  {
    title: 'Garage Workshop Upgrade',
    description: 'Efficient heating/cooling for year-round comfort.',
    image: images.garage1
  },
  {
    title: 'Home Office Solution',
    description: 'Quiet, energy-efficient mini-split for productivity.',
    image: images.office1
  },
  {
    title: 'Retail Storefront',
    description: 'Discreet installation for customer comfort.',
    image: images.store1
  }
];

// Blog posts — add new entries here when publishing.
// Set href to the post's HTML file path when the page exists.
export const blogPosts = [
  {
    title: 'Inverter vs Non-Inverter Mini-Split Systems',
    excerpt: 'Understanding the difference between inverter and non-inverter HVAC systems can help you choose the right mini-split solution for efficiency and long-term performance.',
    date: 'Coming Soon',
    href: '#'
  },
  {
    title: 'How to Size a Mini-Split for Your Space',
    excerpt: 'Choosing the right BTU capacity is critical for efficiency and comfort. Learn how room size, ceiling height, and climate all affect your system selection.',
    date: 'Coming Soon',
    href: '#'
  },
  {
    title: 'Mini-Split Maintenance Tips for Homeowners',
    excerpt: 'Regular maintenance keeps your mini-split running efficiently and extends equipment lifespan. Here are the key tasks every homeowner should know.',
    date: 'Coming Soon',
    href: '#'
  }
];

export const about = {
  hero: {
    headline: 'About Windsanity Mini-Splits',
    subheadline: 'Veteran-owned HVAC specialists with over 75 years of combined industry experience.'
  },
  story: {
    heading: 'Who We Are',
    paragraphs: [
      'Windsanity Mini-Splits is a veteran-owned company delivering professional ductless HVAC solutions backed by more than 75 years of combined industry experience.',
      'Our team focuses on helping customers choose the right system for their space—whether it\'s a home, RV, garage, workshop, or commercial project. We believe comfort should be efficient, reliable, and built to last.',
      'When you work with Windsanity, you\'re partnering with experienced professionals committed to quality installation and dependable service.'
    ]
  },
  highlights: [
    'Veteran-owned and operated',
    '75+ years of combined industry experience',
    'Residential, commercial, and specialty installations',
    'Nationwide installation support',
    'Committed to quality and dependable service'
  ]
};

export const valueProp = {
  heading: 'Why Choose Mini-Splits?',
  benefits: [
    'Lower energy usage',
    'Quiet operation',
    'Zoned temperature control',
    'Flexible installation for unique spaces'
  ],
  body: 'Mini-split systems are ideal for homes, garages, offices, workshops, and renovation projects where traditional HVAC systems are impractical.'
};
