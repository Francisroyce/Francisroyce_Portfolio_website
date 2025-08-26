
import type { SkillCategory, Project, ExperienceItem, EducationItem } from '../types';

export const skillData: SkillCategory[] = [
  {
    category: 'Programming & Machine Learning',
    skills: [
      { name: 'Python (NumPy, Pandas, Scikit-learn)', level: 95 },
      { name: 'TensorFlow & PyTorch', level: 90 },
      { name: 'SQL', level: 90 },
      { name: 'Matplotlib', level: 85 },
    ],
  },
  {
    category: 'Data Analytics & Visualization',
    skills: [
      { name: 'Tableau', level: 95 },
      { name: 'Power BI', level: 95 },
      { name: 'Microsoft Excel', level: 90 },
    ],
  },
  {
    category: 'Predictive Analytics',
    skills: [
      { name: 'Regression Models', level: 90 },
      { name: 'Classification Algorithms', level: 90 },
      { name: 'Clustering Techniques', level: 85 },
      { name: 'Time-Series Forecasting', level: 80 },
    ],
  },
   {
    category: 'Deep Learning',
    skills: [
      { name: 'Convolutional Neural Networks (CNNs)', level: 85 },
      { name: 'Natural Language Processing (NLP)', level: 80 },
      { name: 'Computer Vision', level: 85 },
    ],
  },
  {
    category: 'Advanced Machine Learning & MLOps',
    skills: [
        { name: 'ML Model Development (Classification, Regression)', level: 95 },
        { name: 'Large-Scale Data Preprocessing', level: 90 },
        { name: 'Algorithm Optimization & Scalability', level: 90 },
        { name: 'Cloud ML Deployment (AWS, Azure, GCP)', level: 85 },
        { name: 'ML Pipelines (Docker, Kubernetes)', level: 80 },
        { name: 'Hyperparameter Tuning & A/B Testing', level: 90 },
        { name: 'Model Monitoring & Retraining', level: 85 },
        { name: 'ML Documentation & Reporting', level: 95 },
    ],
  },
  {
    category: 'Business Acumen',
    skills: [
      { name: 'KPI Monitoring', level: 95 },
      { name: 'Forecasting Methodologies', level: 90 },
      { name: 'Strategic Planning', level: 85 },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Leadership', level: 95 },
      { name: 'Effective Communication', level: 95 },
      { name: 'Mentorship', level: 90 },
      { name: 'Technical Collaboration', level: 95 },
      { name: 'Continuous Learning & Adaptability', level: 95 },
    ],
  },
];

export const projectData: Project[] = [
  {
    title: 'Grade Predictor',
    description: 'A machine learning model forecasting academic performance using regression analysis to help students and educators identify potential risks.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    imageUrl: 'https://picsum.photos/seed/gradepredictor/500/300',
    liveUrl: 'https://grade-predictor-mn1i.onrender.com',
    repoUrl: 'https://github.com/Francisroyce?tab=repositories',
  },
  {
    title: 'Language Detection',
    description: 'An NLP model that accurately identifies languages from text inputs, useful for content filtering and translation services.',
    technologies: ['Python', 'NLTK', 'Spacy', 'FastAPI'],
    imageUrl: 'https://picsum.photos/seed/langdetect/500/300',
    liveUrl: 'https://language-detect-ml.onrender.com',
    repoUrl: 'https://github.com/Francisroyce?tab=repositories',
  },
  {
    title: 'PoultryGuard AI',
    description: 'An AI-powered system for early poultry disease detection via image recognition of droppings, improving farm health management.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
    imageUrl: 'https://picsum.photos/seed/poultryai/500/300',
    liveUrl: 'https://poultryguard-ai.onrender.com',
    repoUrl: 'https://github.com/Francisroyce?tab=repositories',
  },
  {
    title: 'Breast Cancer Predictor',
    description: 'A machine learning model for early breast cancer detection from diagnostic data, enhancing prognostic accuracy.',
    technologies: ['Python', 'Scikit-learn', 'Seaborn', 'Dash'],
    imageUrl: 'https://picsum.photos/seed/cancerpredictor/500/300',
    liveUrl: 'https://breast-cancer-predictor-7gts.onrender.com',
    repoUrl: 'https://github.com/Francisroyce?tab=repositories',
  },
];

export const experienceData: ExperienceItem[] = [
    {
    role: 'Lead Data Analyst',
    company: 'SmartWave Tech',
    period: '2023 – Present',
    achievements: [
      'Led data analysis initiatives, developing strategies that improved business decision-making.',
      'Optimized data collection and processing workflows, increasing team efficiency by 25%.',
      'Created Tableau and Power BI dashboards to track key performance indicators (KPIs).',
      'Improved customer segmentation and predictive analytics capabilities.'
    ],
  },
  {
    role: 'Data Scientist',
    company: 'Educater (Online Education Platform)',
    period: '2023 – Present',
    achievements: [
      'Developed data analytics curriculum and conducted training sessions.',
      'Developed predictive models to personalize student learning paths.',
      'Integrated AI solutions to automate grading and feedback systems.',
      'Provided mentorship and guidance to students on real-world data analytics projects.'
    ],
  },
  {
    role: 'Intern (Data Analyst)',
    company: 'Ministry of Water Resources, Asaba',
    period: '2021',
    achievements: [
      'Performed comprehensive data analysis to improve policy formation and water management.',
      'Developed machine learning models to forecast water quality measurements.',
      'Assisted in data collection and cleaning for large-scale environmental studies.',
    ],
  },
  {
    role: 'Junior Data Scientist',
    company: 'Pointplus Computer Institute',
    period: '2018 – 2019',
    achievements: [
      'Supported data-driven training programs by preparing datasets and examples.',
      'Performed exploratory data analysis (EDA) to uncover insights for curriculum development.',
      'Assisted students in developing data-driven projects.'
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.Eng. in Agricultural & Bioresources Engineering',
    institution: 'University of Nigeria, Nsukka',
    period: '2016 – 2022',
    logoUrl: 'https://picsum.photos/seed/unilogo/100/100',
  },
  {
    degree: 'Certificate in Data Science and Analytics',
    institution: 'Simplilearn Skillup',
    period: 'Expected Feb 2025',
    logoUrl: 'https://picsum.photos/seed/simplilearn/100/100',
  },
  {
    degree: 'Certificate in Computer and Information Technology',
    institution: 'Pointplus ICT Institute',
    period: 'Completed',
    logoUrl: 'https://picsum.photos/seed/pointplus/100/100',
  },
];
