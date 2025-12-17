import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: "docagent",
    title: "DocAgent",
    description: "Agentic RAG-powered multi-format document QA system with specialized agents.",
    fullDescription: "An advanced agentic document QA system that leverages Retrieval-Augmented Generation (RAG) with Model Context Protocol (MCP) to create intelligent agents capable of parsing, embedding, retrieving, and answering queries from multiple document formats. It employs a multi-agent architecture with specialized agents for Ingestion, Retrieval, LLM Response (Llama 3.1), and Coordination.",
    tags: ["LangChain", "RAG", "Llama 3.1", "FAISS"],
    links: [
      { label: "GitHub", url: "https://github.com/Ragu-123/docagent" },
      { label: "Demo", url: "https://huggingface.co/spaces/ragunath-ravi/DocAgent" }
    ],
    techStack: ["LangChain", "HuggingFace", "Gradio", "Python"]
  },
  {
    id: "tamil-asr",
    title: "Tamil Speech-to-Text ASR",
    description: "Fine-tuned Whisper model for Tamil automatic speech recognition.",
    fullDescription: "Fine-tuned OpenAI's Whisper model for Tamil automatic speech recognition using a custom dataset of over 80 hours of conversational Tamil audio. Achieved a Word Error Rate (WER) of 22. The model handles diverse accents and is hosted on HuggingFace.",
    tags: ["OpenAI Whisper", "PyTorch", "HuggingFace"],
    links: [
      { label: "GitHub", url: "https://github.com/Ragu-123/whisper-mini-ta.git" },
      { label: "Demo", url: "https://huggingface.co/spaces/ragunath-ravi/whisper-tamil" },
      { label: "HuggingFace", url: "https://huggingface.co/ragunath-ravi/whisper-mini-ta" }
    ],
    techStack: ["Whisper", "Transformers", "Python", "Audio Processing"]
  },
  {
    id: "histopathology",
    title: "Histopathology Captioning",
    description: "Medical image captioning model using fine-tuned BLIP architecture.",
    fullDescription: "This model is a fine-tuned version of Salesforce/blip-image-captioning-base on a histopathology image dataset. It automatically generates captions for digital pathology slides, aiding in medical diagnosis analysis. Achieved an average loss of 0.0098.",
    tags: ["BLIP", "Medical AI", "CV"],
    links: [
      { label: "GitHub", url: "https://github.com/Ragu-123/Blip-histopathology.git" },
      { label: "HuggingFace", url: "https://huggingface.co/ragunath-ravi/blip-histopathology-finetuned" },
      { label: "Demo", url: "https://huggingface.co/spaces/ragunath-ravi/blip-histopathology" }
    ],
    techStack: ["PyTorch", "BLIP", "Computer Vision"]
  },
  {
    id: "tamil-voice",
    title: "TamilVoiceCorpus",
    description: "Large-scale Tamil Conversational ASR dataset from public sources.",
    fullDescription: "An open-source Tamil speech dataset built from publicly available sources, intended for training ASR systems. Includes 'PureVox' (clean audio) and 'AmbientVox' (noisy audio) subsets to ensure robust model training.",
    tags: ["Datasets", "Web Scraping", "HuggingFace"],
    links: [
      { label: "GitHub", url: "https://github.com/Ragu-123/TamilVoiceCorpus.git" },
      { label: "Dataset", url: "https://huggingface.co/datasets/ragunath-ravi/TamilVoiceCorpus" }
    ],
    techStack: ["Data Engineering", "Python", "Audio"]
  },
  {
    id: "cot-math",
    title: "Chain-of-Thought Math",
    description: "Preprocessed Math Reasoning dataset for LLM fine-tuning.",
    fullDescription: "A preprocessed subset of the NVIDIA Open Math Reasoning Dataset, focused on Chain-of-Thought (CoT) reasoning. Adapted for LLaMA and similar architectures, containing over 3 million rows of step-by-step reasoning samples.",
    tags: ["CoT", "OpenMath", "LLM Data"],
    links: [
      { label: "Dataset", url: "https://huggingface.co/datasets/ragunath-ravi/processed_cot_dataset" }
    ],
    techStack: ["Data Processing", "NLP", "LLMs"]
  },
  {
    id: "space-debris",
    title: "Space Debris Tracking",
    description: "Real-time debris tracking using YOLOv5 and Kalman Filter.",
    fullDescription: "A system that processes video frames to detect space debris using YOLOv5 and predicts trajectories using a Kalman Filter. It visualizes the path and bounding boxes in real-time.",
    tags: ["YOLOv5", "Kalman Filter", "Tracking"],
    links: [
      { label: "GitHub", url: "https://github.com/Ragu-123/space-debris-tracking-and-path-prediction.git" }
    ],
    techStack: ["Computer Vision", "Python", "OpenCV"]
  },
  {
    id: "audify",
    title: "Audify",
    description: "Versatile music streaming app for online and offline playback.",
    fullDescription: "A music streaming app combining online streaming (YouTube backend) and offline playback capabilities. Features a sleek UI, playlist management, and background playback.",
    tags: ["Web Scraping", "Flask", "HTML/CSS"],
    links: [
      { label: "GitHub", url: "https://github.com/Ragu-123/audify.git" },
      { label: "Download", url: "https://ragu-123.github.io/audify/" }
    ],
    techStack: ["Flask", "Python", "Web Tech"]
  },
  {
    id: "tasks",
    title: "Tasks App",
    description: "Lightweight task management tool built with Python.",
    fullDescription: "A powerful, user-friendly task management desktop application. Features include category organization, priority setting, and persistent data handling.",
    tags: ["Tkinter", "Python", "Desktop App"],
    links: [
      { label: "GitHub", url: "https://github.com/Ragu-123/tasks.git" },
      { label: "Download", url: "https://ragu-123.github.io/tasks/" }
    ],
    techStack: ["Tkinter", "Python"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
    ]
  },
  {
    title: "AI/ML Frameworks",
    skills: [
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-Learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", invert: true }
    ]
  },
  {
    title: "Deep Learning & NLP",
    skills: [
      { name: "LLMs", logo: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png", invert: true },
      { name: "Fine-tuning", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", invert: true },
      { name: "Transformers", logo: "https://cdn-icons-png.flaticon.com/512/8637/8637107.png", invert: true },
      { name: "Computer Vision", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "RAG", logo: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png", invert: true }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "AWS", logo: "https://cdn.simpleicons.org/amazonwebservices/white" },
      { name: "Vector DBs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain/white" },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ]
  },
  {
    title: "Specialized Skills",
    skills: [
      { name: "Prompt Eng.", logo: "https://cdn-icons-png.flaticon.com/512/12222/12222560.png", invert: true },
      { name: "Model Opt.", logo: "https://cdn-icons-png.flaticon.com/512/8099/8099466.png", invert: true },
      { name: "Data Aug.", logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png", invert: true },
      { name: "Graph Vis.", logo: "https://cdn-icons-png.flaticon.com/512/2857/2857433.png", invert: true },
      { name: "Multimodal AI", logo: "https://cdn-icons-png.flaticon.com/512/10664/10664869.png", invert: true }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", logo: "https://cdn-icons-png.flaticon.com/512/3074/3074767.png", invert: true },
      { name: "Critical Thinking", logo: "https://cdn-icons-png.flaticon.com/512/2436/2436855.png", invert: true },
      { name: "Team Collab", logo: "https://cdn-icons-png.flaticon.com/512/1534/1534938.png", invert: true },
      { name: "Time Mgmt", logo: "https://cdn-icons-png.flaticon.com/512/2088/2088617.png", invert: true },
      { name: "Research", logo: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png", invert: true }
    ]
  }
];

export const ABOUT_INFO = {
  education: [
    {
      title: "B.Tech Artificial Intelligence and Machine Learning",
      institution: "Saveetha Engineering College, Chennai",
      details: "GPA: 7.9/10.00 (2022-2026)"
    },
    {
      title: "Pre-University Education",
      institution: "Kalaimagal Kalalaya Metric Higher Secondary School",
      details: "Grade: 86.16% (2022)"
    },
    {
      title: "Secondary Education",
      institution: "Kalaimagal Kalalaya Metric Higher Secondary School",
      details: "Grade: 98.8% (2020)"
    }
  ],
  experience: [
    {
      title: "AI Engineer Intern",
      description: "Built facial recognition system using Vision Transformer achieving 96% accuracy. Enhanced model performance through data augmentation techniques and analyzed 50,000 images to improve feature detection capabilities."
    },
    {
      title: "Recent Highlights",
      description: "IIT Madras Shaastra IndustriAI - Ranked top 50 among 200+ teams. IBM Datathon Participant - ML and Computer Vision solutions. Koselay Award recipient for outstanding academic performance."
    }
  ],
  certifications: [
    "Machine Translation (Coursera)",
    "Exploratory Data Analysis for Machine Learning (Coursera)",
    "LangChain Chat with Your Data (Coursera)",
    "Supervised Machine Learning: Classification (Coursera)"
  ]
};