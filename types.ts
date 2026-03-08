
export type Language = 'ja' | 'en' | 'zh' | 'vi';

export interface Doctor {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  clinicId: string;
  specialties: string[];
  qualifications: string[];
  history: string[];
  image: string;
  catchphrase?: string;
  category: 'Regenerative' | 'Facial' | 'Body' | 'Reproductive' | 'Life';
}

export interface Clinic {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  doctors: string[]; // IDs
  access: string;
}

export interface CaseStudy {
  id: string;
  doctorId: string;
  treatment: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  risk: string;
}

export interface Translation {
  [key: string]: {
    [lang in Language]: string;
  };
}
