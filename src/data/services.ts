import { Building2, Wrench, TreePine, Gem, Heart, Car, LucideIcon } from 'lucide-react';

export interface ServiceCategory {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDesc?: string;
  description: string;
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'commercial-cleaning',
    icon: Building2,
    title: 'Commercial Cleaning',
    shortDesc: 'Offices, headquarters, shared workspaces',
    description: 'We provide professional commercial cleaning services for office buildings, corporate headquarters, shared workspaces, and multi-site operations.',
    services: [
      'Daily or scheduled cleaning',
      'High-touch surface disinfection',
      'Kitchen, bathroom, and common area cleaning',
      'Waste and recycling management',
      'Specialist floor and carpet care',
      'Meeting room refresh services',
      'Post-event and function cleaning',
    ],
  },
  {
    slug: 'industrial-specialist',
    icon: Wrench,
    title: 'Industrial & Specialist Cleaning',
    shortDesc: 'Industrial, logistics, warehouse',
    description: 'We deliver reliable and compliant cleaning solutions across industrial, logistics, and warehouse environments.',
    services: [
      'Warehouse and distribution centre cleaning',
      'Hardstand, loading dock, and car park cleaning',
      'High-pressure washing',
      'Equipment degreasing',
      'Scheduled deep cleans',
      'Fleet wash bay management',
      'GMP pharmaceutical and cleanroom facilities',
      'Laboratories and X-ray rooms',
      'Server rooms and data centres',
    ],
  },
  {
    slug: 'commercial-projects',
    icon: Building2,
    title: 'Commercial Projects',
    shortDesc: 'Fit-outs, refurbishments, upgrades',
    description: 'Our project-based services support clients through transitions, upgrades, and refurbishments.',
    services: [
      'Office fit-outs',
      'Retail and hospitality make-goods',
      'Refurbishments and extensions',
      'Change-of-use projects',
      'Commercial accommodation upgrades',
      'Aged care and healthcare fit-outs',
    ],
  },
  {
    slug: 'grounds-external',
    icon: TreePine,
    title: 'Grounds & External Services',
    shortDesc: 'Grounds, building exterior',
    description: 'We support the presentation and safety of external environments through comprehensive grounds and building services.',
    services: [
      'Landscaping and garden maintenance',
      'Pest control',
      'Roof and gutter cleaning',
      'Pressure and soft washing',
      'External rectification works',
      'Line marking',
      'Building signage installation and make-good',
    ],
  },
  {
    slug: 'luxury-premium',
    icon: Gem,
    title: 'Luxury & Premium Spaces',
    shortDesc: 'White-glove, high-end workplaces',
    description: 'Luxury environments require a higher standard of care. We specialise in discreet, white-glove cleaning for high-end workplaces.',
    services: [
      'High-shine surface and glass detailing',
      'Designer fixture and furnishing care',
      'Aromatic scenting and ambient presentation',
      'Boardroom and bathroom refresh services',
    ],
  },
  {
    slug: 'workplace-wellness',
    icon: Heart,
    title: 'Workplace Experience & Wellness',
    shortDesc: 'Wellbeing and experience services',
    description: 'We believe wellbeing is a foundation of workplace performance. Our integrated experience and wellness services help create environments that feel inviting, balanced, and energising.',
    services: [
      'Workplace scenting and air quality services',
      'Indoor plant care and floral styling',
      'Towel services and locker room presentation',
      'Onsite grooming and beauty activations',
      'Seasonal wellness activations (flu shots, hydration stations)',
      'In-house yoga, mat pilates, breathwork, and meditation',
    ],
  },
  {
    slug: 'car-fleet',
    icon: Car,
    title: 'Car & Fleet Services',
    shortDesc: 'On-site vehicle care',
    description: 'We bring convenience directly to your people with on-site vehicle care solutions.',
    services: [
      'Onsite car washing for staff and executives',
      'Fleet cleaning and detailing',
      'Mobile detailing for VIP or showroom vehicles',
      'Eco-friendly water-saving options',
      'Scheduled or on-demand services',
    ],
  },
];
