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
    role: 'Data Scientist / Online Educator',
    company: 'Educater (Online Education Platform)',
    period: '08/2023 – Present',
    achievements: [
      'Conducted online education in data analytics and data science.',
      'Taught Python and ML libraries.',
      'Mentored students on real-world projects.',
      'Stayed updated on AI/ML industry trends.'
    ],
  },
   {
    role: 'Lead Data Analyst / Data Scientist',
    company: 'SmartWave Tech.',
    period: '01/2021 – Present',
    achievements: [
      'Developed and implemented data-driven business strategies.',
      'Built advanced ML models to improve predictive accuracy.',
      'Applied statistical analysis to identify patterns in large datasets.',
      'Led analysts in processing big data and generating insights.',
      'Created dashboards (Power BI, Tableau) for KPI tracking.',
      'Collaborated with teams to integrate ML into business solutions.',
    ],
  },
  {
    role: 'Volunteer Project Development (Data Analyst)',
    company: 'Volunteer',
    period: '2023 – 2024',
    achievements: [
      'Conducted research and analysis for local development projects.',
      'Built dashboards to track performance and assess impact.',
      'Delivered insights for policy decisions and resource allocation.',
    ],
  },
  {
    role: 'Intern / Water Engineer',
    company: 'Ministry of Water Resources, Asaba',
    period: '04/2021 – 11/2021',
    achievements: [
      'Performed comprehensive data analysis to improve water resource management.',
      'Developed ML models to forecast water quality.',
      'Applied machine learning to assess water quality/resources.',
      'Created dashboards for strategic planning.',
      'Ensured responsible use of ML models (bias/fairness).',
    ],
  },
  {
    role: 'Junior Data Scientist',
    company: 'Pointplus Computer Institute',
    period: '01/2018 – 06/2019',
    achievements: [
      'Implemented predictive algorithms for forecasting.',
      'Conducted model evaluation to ensure performance and reliability.',
      'Led training sessions on SQL, Power BI, Tableau, Excel, and Python.',
      'Developed classification, regression, clustering, computer vision, NLP, and voice recognition projects.',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'Certificate in Data Analytics Projects (Code: 7920229)',
    institution: 'Simplilearn SkillUP',
    period: 'Completed Feb 18, 2025',
    logoUrl: 'https://picsum.photos/seed/simplilearn/100/100',
  },
  {
    degree: 'Certificate in Introduction to Data Analytics (Code: 7917942)',
    institution: 'Simplilearn SkillUP',
    period: 'Completed Feb 17, 2025',
    logoUrl: 'https://picsum.photos/seed/simplilearn/100/100',
  },
  {
    degree: 'B.Eng. in Agricultural & Bioresources Engineering (Upper Division)',
    institution: 'University of Nigeria, Nsukka',
    period: 'Result Dated: April 12, 2023',
    logoUrl: 'https://picsum.photos/seed/unilogo/100/100',
  },
  {
    degree: 'Diploma in Computer and Information Technology (CITT)',
    institution: 'POINTPLUS ICT Training and Development Center',
    period: 'Completed Jan 31, 2014',
    logoUrl: 'https://picsum.photos/seed/pointplus/100/100',
  },
   {
    degree: 'Certificate in Computer and Information Technology (CITT)',
    institution: 'POINTPLUS ICT Training and Development Center',
    period: 'Completed Jan 31, 2014',
    logoUrl: 'https://picsum.photos/seed/pointplus/100/100',
  },
];