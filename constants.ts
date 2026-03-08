
import { Translation } from './types';

export const UI_STRINGS: Translation = {
  // Global Navigation
  nav_home: { ja: 'トップページ', en: 'Home', zh: '首页', vi: 'Trang chủ' },
  nav_about: { ja: 'SMLとは', en: 'About SML', zh: '关于 SML', vi: 'Về SML' },
  nav_for_clinics: { ja: 'forクリニック', en: 'For Clinics', zh: '面向诊所', vi: 'Dành cho phòng khám' },
  nav_for_agents: { ja: 'forエージェント', en: 'For Agents', zh: '面向代理商', vi: 'Dành cho đại lý' },
  nav_news: { ja: 'NEWS', en: 'NEWS', zh: '新闻', vi: 'Tin tức' },
  nav_contact: { ja: 'お問合せ', en: 'Contact', zh: '联系', vi: 'Liên hệ' },
  
  // Sub-menu Titles
  sub_category_concern: { ja: '悩み', en: 'Concerns', zh: '烦恼', vi: 'Triệu chứng' },
  sub_category_treatment: { ja: '施術', en: 'Treatments', zh: '疗法', vi: 'Điều trị' },

  // Footer用
  nav_doctors: { ja: '医師一覧', en: 'Doctors', zh: '医生', vi: 'Bác sĩ' },
  
  hero_copy: { 
    ja: '日本の最高峰医療を、\n世界とつなぐ。', 
    en: "Connecting Japan's pinnacle of medical care with the world.", 
    zh: '将日本顶尖医疗与世界连接。', 
    vi: 'Kết nối y tế hàng đầu Nhật Bản với thế giới.' 
  },
  hero_subtitle: { 
    ja: 'インバウンド患者と日本医療をつなぐ正規ルートプラットフォーム', 
    en: 'Authorized route platform connecting inbound patients and Japanese medicine', 
    zh: '连接入境患者与日本医療的正式渠道平台', 
    vi: 'Nền tảng tuyến đường chính thức kết nối bệnh nhân nước ngoài and y tế Nhật Bản' 
  },
  cta_doctors: { ja: '医師を探す', en: 'Find Doctors', zh: '查找医生', vi: 'Tìm bác sĩ' },
  cta_cases: { ja: '症例を見る', en: 'View Cases', zh: '查看案例', vi: 'Xem ca bệnh' },

  // Home Page Sections
  features_title: { ja: 'SMLのミッション', en: 'SML Mission', zh: 'SML 的使命', vi: 'Sứ mệnh của SML' },
  features_subtitle: { ja: 'インバウンド患者様へ、日本が誇る最高峰の医療技術を正規ルートでつなぎます。', en: 'Connecting inbound patients with Japan\'s pinnacle of medical technology through official routes.', zh: '为入境患者提供正规渠道，连接日本顶尖医疗技术。', vi: 'Kết nối bệnh nhân nước ngoài với công nghệ y tế hàng đầu Nhật Bản thông qua các tuyến đường chính thức.' },
  feature_1_title: { ja: '厳選された認定医', en: 'Selected Certified Doctors', zh: '严选认证医生', vi: 'Bác sĩ được chứng nhận' },
  feature_1_desc: { ja: '技術・実績・倫理観において、独自の厳しい基準をクリアした「マスタークラス」の医師のみを掲載。', en: 'Only "Master Class" doctors who have cleared our strict standards in skill, results, and ethics are listed.', zh: '仅列出在技术、业绩和职业道德方面通过独家严格标准的“大师级”医生。', vi: 'Chỉ những bác sĩ "Master Class" đã vượt qua các tiêu chuẩn khắt khe về kỹ năng, kết quả và đạo đức mới được liệt kê.' },
  feature_2_title: { ja: '正規ルートの透明性', en: 'Transparent Official Route', zh: '正规渠道的透明性', vi: 'Tính minh bạch của tuyến đường chính thức' },
  feature_2_desc: { ja: 'クリニックとの直接提携により、不透明な手数料を排除。適正な価格と高品質なサービスを保証します。', en: 'Direct partnership with clinics eliminates opaque fees, ensuring fair pricing and high-quality service.', zh: '通过与诊所直接合作，消除不透明的手续费，保证合理的价格和高质量的服务。', vi: 'Hợp tác trực tiếp với các phòng khám giúp loại bỏ các khoản phí không minh bạch, đảm bảo giá cả hợp lý và dịch vụ chất lượng cao.' },
  feature_3_title: { ja: '万全のサポート体制', en: 'Full Support System', zh: '完善的支援体制', vi: 'Hệ thống hỗ trợ đầy đủ' },
  feature_3_desc: { ja: '医療通訳から滞在まで、専門のエージェントが患者様の日本での医療体験をトータルでサポート。', en: 'Specialized agents provide total support for patients\' medical experience in Japan, from medical interpretation to stay.', zh: '从医疗口译到住宿，专业代理人为患者在日本的医疗体验提供全面支持。', vi: 'Các đại lý chuyên nghiệp hỗ trợ toàn diện cho trải nghiệm y tế của bệnh nhân tại Nhật Bản, từ thông dịch y tế đến lưu trú.' },
  
  concerns_title: { ja: '悩みから探す', en: 'Browse by Concern', zh: '按烦恼查找', vi: 'Tìm theo triệu chứng' },
  doctors_title: { ja: '認定医師一覧', en: 'Certified Doctors', zh: '认证医生列表', vi: 'Danh sách bác sĩ' },
  doctors_subtitle: { ja: '各分野の頂点に立つ、日本の名医たち。', en: 'Japan\'s master doctors at the pinnacle of their respective fields.', zh: '站在各领域顶端的日本名医们。', vi: 'Các bác sĩ bậc thầy của Nhật Bản ở đỉnh cao trong lĩnh vực tương ứng của họ.' },
};

export const LANGUAGES = [
  { code: 'ja', name: '日本語' },
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'vi', name: 'Tiếng Việt' },
];
