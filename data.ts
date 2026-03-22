
import { Doctor, Clinic, CaseStudy } from './types';

export const CLINICS: Clinic[] = [
  {
    id: 'contour',
    name: 'コントアクリニック東京',
    description: '輪郭形成・小顔整形の専門クリニック。',
    features: ['輪郭形成', '骨切り'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    doctors: ['yamamoto'],
    access: '東京都中央区銀座'
  },
  {
    id: 'kai-clinic',
    name: 'KAI CLINIC',
    description: '高度な技術による美容外科・形成外科。',
    features: ['鼻整形', 'フェイスリフト'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    doctors: ['harima'],
    access: '東京都'
  },
  {
    id: 'theclinic',
    name: 'THE CLINIC',
    description: '脂肪吸引・脂肪注入の専門性国内トップクラスの実績。',
    features: ['脂肪技術特化', 'ボディデザイン'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    doctors: ['ohashi', 'chiba', 'sato', 'tanaka', 'shida'],
    access: '東京都港区西麻布3-16-23'
  },
  {
    id: 'seishin',
    name: '聖心美容クリニック',
    description: '安全性と品質にこだわる国際基準の美容外科を提供。再生医療のパイオニア。',
    features: ['再生医療専門', 'プライバシー重視'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    doctors: ['kamakura', 'maki', 'suzuki'],
    access: '東京都港区六本木6-6-9 ピラミデビル2F'
  },
  {
    id: 'bianca',
    name: 'BIANCA CLINIC',
    description: 'デザイン性に優れた高度な審美医療を提供。',
    features: ['トータルデザイン', '最新鋭レーザー'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    doctors: ['horita', 'kim', 'watanabe'],
    access: '東京都中央区銀座1-5-6 銀座レンガ通り福神ビル 4F'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'yamamoto',
    name: '山本 崇弘',
    nameEn: 'Takahiro Yamamoto',
    title: 'コントアクリニック東京 院長',
    clinicId: 'contour',
    category: 'Facial',
    specialties: ['輪郭形成', '骨切り術'],
    qualifications: ['JSAS 専門医'],
    history: [],
    image: '/images/doctors/yamamoto.png',
    catchphrase: '理想の輪郭を追求する、骨切りのスペシャリスト。'
  },
  {
    id: 'horita',
    name: '堀田 和亮',
    nameEn: 'Kazuaki Horita',
    title: 'BIANCA CLINIC 理事長',
    clinicId: 'bianca',
    category: 'Facial',
    specialties: ['二重整形', 'フェイスリフト'],
    qualifications: ['JSAS 専門医', '日本形成外科学会 会員'],
    history: ['2008年 日本医科大学医学部卒業', '2018年 BIANCA 設立'],
    image: '/images/doctors/horita.png',
    catchphrase: 'デザインと技術の融合。理想のフェイスラインを創る。'
  },
  {
    id: 'harima',
    name: '播摩 光宣',
    nameEn: 'Mitsunobu Harima',
    title: 'KAI CLINIC 院長',
    clinicId: 'kai-clinic',
    category: 'Facial',
    specialties: ['鼻整形', '目元整形'],
    qualifications: ['JSAS 専門医'],
    history: [],
    image: '/images/doctors/harima.png',
    catchphrase: '繊細な技術で、自然な美しさを引き出す。'
  },
  {
    id: 'shida',
    name: '志田 雅明',
    nameEn: 'Masaaki Shida',
    title: 'THE CLINIC 統括院長',
    clinicId: 'theclinic',
    category: 'Body',
    specialties: ['脂肪吸引', '豊胸術'],
    qualifications: ['JSAS 専門医'],
    history: [],
    image: '/images/doctors/shida.png',
    catchphrase: 'ボディデザインの極致。理想の曲線美を叶える。'
  },
  {
    id: 'ohashi',
    name: '大橋 昌敬',
    nameEn: 'Masanori Ohashi',
    title: 'THE CLINIC 総院長',
    clinicId: 'theclinic',
    category: 'Body',
    specialties: ['脂肪吸引', 'ボディデザイン', '脂肪注入'],
    qualifications: ['JSAS 専門医', '日本形成外科学会 会員'],
    history: [],
    image: '/images/doctors/ohashi.webp',
    catchphrase: '脂肪技術の革新を追い続ける、THE CLINICの総院長。'
  }
];

export const CASES: CaseStudy[] = [
  {
    id: 'case-01',
    doctorId: 'kamakura',
    treatment: '幹細胞豊胸術',
    category: 'Regenerative',
    beforeImage: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=400',
    afterImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400',
    description: '自身の脂肪から抽出した幹細胞を添加し、自然なボリュームアップを実現。',
    risk: '腫れ、内出血、感染のリスク'
  }
];
