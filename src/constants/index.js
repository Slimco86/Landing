import { rosen_logo } from "../assets";
import { photo } from "../assets";
import { azure_icon,
         blender_icon,
         cpp_icon,
         cs_icon,
         docker_icon,
         elk_icon,
         git_icon,
         k8s_icon,
         mongo_icon,
         np_icon,
         ocv_icon,
         pandas_icon,
         python_icon,
         pcl_icon,
         react_icon,
         ros_icon,
         torch_icon,
         tf_icon,
         js_icon,
         qt_icon } from "../assets/icons"

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",

    },
    {
      id: "testimonials",
      title: "Testimonials",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

export const Angles = {"":0,
                      "#about":0,
                      "#work":0,
                      "#projects":30, 
                      "#testimonials": 0.0, 
                      "#contact": 0}

export const Positions = {"":{x:0,y:-300,z:0},
                      "#about":{x:3,y:-300,z:15},
                      "#work":{x:0,y:-350,z:5},
                      "#projects":{x:15,y:-200,z:7}, 
                      "#testimonials": {x:0,y:180,z:0}, 
                      "#contact": {x:12,y:11,z:12}}



export const Projects = [
  {
    logo:"https://github.com/Slimco86/CDA/raw/master/pictures/disp1.png",
    title:"Coupled Dipole Approximation",
    description:"Implementation of coupled dipole algorithm with few optimizations resulting from static typing and parallelization achieved via Cython compiler."+
        " Allows user to calculate the response of the non spherical particles which can be approximated by a dipole (for gold up to 100 nm in radius, based on Mie expansion coefficients). The program supports a variety of different lattice arrangements and different matrials.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cython",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
    ],
    source_code_link:"https://github.com/Slimco86/CDA",
  },
  {
    logo:"https://github.com/Slimco86/PolyNet/raw/master/media/example1.gif",
    title:"PolyNet",
    description:"Polynet is a multitask, human-centric network aiming to provide a detailed analysis and tracking for multi-human view scenes. "+
    "The main objective and the challenge is to achieve real-time on edge-device performance to make it feasible for certain applications and to fulfill GDPR requirements. "+
    "In particular, the tasks can be split into three categories: detection, classification, and landmark estimation. "+ 
    "These tasks are split between multiple output heads, to perform the complex analysis. Detection, classification and keypoint regression are all done on multiple levels.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    source_code_link:"https://github.com/Slimco86/PolyNet",
  },
  {
    logo:"https://github.com/Slimco86/DCGAN/raw/master/Results/faces/epochs.png",
    title:"DCGAN",
    description:"General DCGAN architechture implemented in Keras with Tensorflow backend, wraped in convinient API."+
    "The GAN stands for Generative Adversarial Network, and its name is self explanatory. The model consists of the two branches, one generative another is discriminative."+
    " The generative branch uses random noise as an input and sequentially transforms this noise into the image."+
    " The discriminative branch is used to compare the generated image with the real sample images and to define which one is real and which is fake."+
    " The goal of the generative branch, to learn how to 'trick' the discriminative branch." + 
    " The goal of the discriminative is to learn how not to be 'tricked'. Thus, two branches are competing between each other, establishing a so-called minmax game",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Keras",
        color: "pink-text-gradient",
      },
    ],
    source_code_link:"https://github.com/Slimco86/DCGAN",
  },
]


export const experiences = [
  {
    title: "Machine Learning Team Lead",
    company_name: "Rosen Group USA",
    icon: rosen_logo,
    iconBg: "#050816AA",
    date: "April 2022 - Now",
    summary: "Driving the expansion of R&D initiatives for the ROSEN Group in the US region, I "+
    "spearheaded the architectural design and implementation of an internal framework dedicated to "+
    "accelerating multi-modal machine learning research and development. A key aspect of this "+
    "endeavor involved streamlining the monitoring and sampling of task-specific datasets from"+
    "the extensive 100+ TB data sources. By guiding the progression of ML development, I directed efforts "+
    "towards effectively addressing core business challenges in alignment with the market demands.",
    points: [
      "Working in conjunction with international teams of data scientists and ML engineers, "+
      "I have outlined the system s functional, non-functional, and data prerequisites, guaranteeing" + 
      " comprehensive coverage of potential ML use cases.",
      
      "Introduced a new asset-centric data management paradigm which became a standard across data-driven projects within the company.",
      
      "Formed and led the core development team of 4 engineers for prototyping the system,"+ 
      " focused on data gathering, alignment, quality tracking and interactive sampling services as"+ 
      " well as model training pipelines",
      
      "Achieved a remarkable 30-fold reduction in the timeline from ideation-to-experimentation across 70% of use cases.",

      "Utilizing the framework trained multiple multi-modal detection and regression models"+ 
      " outperforming its previous classical counterparts by 18% in probability of detection and by 6% "+
      "in profile depth estimation tasks, on average.",

      "Established collaboration with non-destructive testing laboratories in MSU and OSU resulting in a series of research projects.",

      "Act as an industrial advisor, aligning research endeavors with business and market requirements.",


    ],
  },
  {
    title: "Robotics Team Lead",
    company_name: "Rosen Group GmbH",
    icon: rosen_logo,
    iconBg: "#050816AA",
    date: "October 2020 - April 2022",
    summary:" Development of the autonomous mobile robot for the integrity assessment of oil "+
    "storage facilities. Successful delivery of the prototype exceeding commercial and operational "+ 
    "requirements, pledging an 80% gross profit margin increase on the 10% revenue-generating service",
    points: [
      "Acting as a liaison between the stakeholders and the development team.",
      
      "Design of the product architecture. Definition of the core technologies. "+
      "Alignment of the product capabilities with the product requirements.",
      
      "Planning and coordination of the development process of the cross-functional team of 5"+ 
      " engineers (3 software engineers, 2 hardware engineers). Definition and delegation of the work packages.",
      
      "Established automated domain-randomized simulation environment for rigorous iterative "+ 
      "development and evaluation of SLAM and Navigation algorithms.",

      "Support in the core component development with the focus on graph-based geometrical "+ 
      "SLAM, Laser Triangulation, autonomous Exploration and Navigation algorithms",

      "Implemented multiple CV algorithms for edge detection to fulfill strict technical requirements for environment segmentation.",

      "Initiation of further research activities in the fields of Reinforcement Learning, Graph-Based"+ 
      " Navigation and sensor fusion on FPGA."


    ],
  },
  {
    title: "Computer Vision Engineer",
    company_name: "Rosen Group GmbH",
    icon: rosen_logo,
    iconBg: "#050816AA",
    date: "August 2019 - October 2020",
    summary: "Design and development of the system for automated visual data analysis from gas "+
    "and water in-pipeline inspection tools. Generalization for single- and multi-camera rigs. "+
    "Definition of the new service, sold and utilized already for more than 10 000 kilometres of "+
    "pipeline inspection data.",
    points: [
      "Unsupervised anomaly detection,localization and tracking in visual data streams based on "+
      "spatio-temporal statistics and VAE trained in self-supervised manner",
      
      "Multitask neural network focused on object detection and semantic segmentation. ResNet/"+
      "EffNet backbone, BiFPN+multiheads trained simultaneously (Focal-loss, BCE+Dice loss). "+
      "Achieved mAP@0.5 0.72 object detection on 11 classes and mIoU 0.38 semantic segmentation "+
      "on 4 noise classes on new test streams.",
      
      "Application of custom and SOTA Generative Adversarial Networks (PGAN) for dataset extension. "+
      "Replaced with automated domain randomized simulation environment.",

      "Development of CV pipeline for 360 degree stereo rig (4-6 cameras dependent on the inspection tool diameter). "+
      "The functionality covers: tool pose estimation, visual odometry and sparse 3D reconstruction, image stitching.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: "",
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

var ua = String.fromCodePoint(0x1F633)
export const facts = [
  {title: "Countries",
   img: "https://i.pinimg.com/originals/b3/37/1c/b3371cd154b44e27c95989b8b9bc189b.jpg",
   fact_text: 'I was born and raised in Ukraine'+ ua +
    '. My heart remains with my homeland. I moved to Germany to continue my studies and research.'+
    'This was my first experience living in the foreign colture for a long time. I have learn a lot.'+
    'I moved to the US and dove deep into the cultural diversity. My path only begins here.',

  },
  {title: "Research",
   img: "https://aipp.silverchair-cdn.com/aipp/content_public/journal/sci/2019/32/10.1063_1.5123494/3/m_320008_1_f1.jpeg?Expires=1704962723&Signature=rQ995DlUvPg46eqB8FSJbLHUkkyYfOprfC-D7niL2C5M-dtAXkKguG0BZNg6guKXgTOd1vtu30UxVYtsaSSI4ojQLyjU2sRwwImiITcpJdi0A9qA-KIliJUZo4ATeKZx05dCQqCBbs1BiW-D5bzMnLk~-cFM36igyy6Cc3dFx068If6RREn1RvksnxIxw6xBSahSKELRa6GkEWMgHF0ORizft2uzJYizFdEUIMmZlB-bZqpTAbAF8t8BflVjPCQZ~k8JvqkIUsb7lwSLfDlEU4Q1VkIuGRKtaQDRXTbj4GDf5bcjVgkgmdtamIOA9~CMtOTx7gIe00xjd9UZS~PquA__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA",
   fact_text: 'I did my bachelor in solid state physics, back in Ukraine.'+
    ' I studied electrical and thermal properties of Graphene, hot material topic back in the days.'+
    'During my master studies I did optical studies on Fabre salts, to experimentally confirm thermodynamic'+
    ' phase diagram, while driving the material to extremly low temperature and high pressure.'+
    'I continued with the PhD research in the field of nanophotonics plasmonics'+
    ' in search of potential of all-optical modulator, or in other words, optical transistor.'+
    'It was a fun time, but mentally challanging',

  },
  {title: "Photography",
   img: photo,
   fact_text: 'I did my bachelor in solid state physics, back in Ukraine.'+
    ' I studied electrical and thermal properties of Graphene, hot material topic back in the days.'+
    'During my master studies I did optical studies on Fabre salts, to experimentally confirm thermodynamic'+
    ' phase diagram, while driving the material to extremly low temperature and high pressure.'+
    'I continued with the PhD research in the field of nanophotonics plasmonics'+
    ' in search of potential of all-optical modulator, or in other words, optical transistor.'+
    'It was a fun time, but mentally challanging',

  },
  
]


export const languages = [
  {
    name: "Python",
    icon: python_icon,
  },
  {
    name: "C++",
    icon: cpp_icon,
  },
  {
    name: "JavaScript",
    icon: js_icon,
  },
  {
    name: "C#",
    icon: cs_icon,
  },
]

export const frameworks = [
  
  {
    name: "PyTorch",
    icon: torch_icon,
  },
  {
    name: "TensorFlow",
    icon: tf_icon,
  },
  {
    name: "OpenCV",
    icon: ocv_icon,
  },
  {
    name: "Numpy",
    icon: np_icon,
  },
  {
    name: "Pandas",
    icon: pandas_icon,
  },
  {
    name: "MongoDB",
    icon: mongo_icon,
  },
  {
    name: "PCL",
    icon: pcl_icon,
  },
  {
    name: "ROS",
    icon: ros_icon,
  },
  {
    name: "Qt",
    icon: qt_icon,
  },
  {
    name: "React JS",
    icon: react_icon,
  },
  {
    name: "ELK",
    icon: elk_icon,
  },
  {
    name: "git",
    icon: git_icon,
  },
  {
    name: "Kubernetes",
    icon: k8s_icon,
  },
  {
    name: "docker",
    icon: docker_icon,
  },
  {
    name: "Azure",
    icon: azure_icon,
  },
];

export const tickers = ["IBM","AMD"]


export const about_text = "my name is Eugene. I am a passionate researcher, explorer and advanturer. "+
"I always starve for new experiences and seek more knowledge. This is what have " +
"been driving me through my life and made my entire journey so far. I traveled around "+
"the world, lived in three countries and did research in several fields, "+ 
"starting from physics and neurobiology ending up with artificial inteligence " +
"and music theory. In my work I combine the collected knowledge from all these " +
"domains, to solve industrial and engineering problems realted to AI, automation and robotics, "+
"to improve the current state of integrity assesment of global energy system. "+
"Apart from my professional activity I am also enthusiastic about photography, "+
 "music and a range of sport activities such as cycling, snowboarding "+ 
 "and bodybuilding. Last, but not the least, competitive video gaming has been "+
 "with me since my early school years. Here are some facts about me:"

 const d = new Date(Date.now())
 let years = d.getFullYear() - 2019
 export const core_text = "For the last "+years+" years I was dedicated to implementing ML and AI "+
 "advances in the domain of public safety and energy resource transportation. Specifically, I focused"+
 " on enhancing a variety of non-destructive measurement techniques, for industrial asset integrity assesment,"+
 " with automated processing, to reduce the cost of analytics and time-to-action. Mostly, my expertise "+
 " lies in the domains of computer vision, sensor fusion, perception and multi-modal inference."+
 " My approaches however, are also baked with my background in solid-state-physics and photonics, which"+
 " in combination usually result in non-trivial solutions."+
 " In most of my projects I was able to drive the solution from the ideation phase up to the full integration,"+
 " through multiple MVP and testing stages. First, as an individual contributor, working on standard computer vision tasks."+
 " Soon, as a leader of a small team working on internal computer vision framework, covering multiple use cases."+
 " Later, as a team leader, working on the development of a robot, for multi-modal inspection, being responsible for"+ 
 " for the entire technical side of the solution. After, I moved to the US, to expand our companys R&D growth on the US market."+
 " Here, I was leading a team working on the development of the internal framework for acceleration of algorithm"+
 " development for multi-modal inference. Although, In most of my roles I was acting as technical leader, I always combined"+
 " this activity with the hands-on approach, putting my efforts and expertise to solve the challanges and support my collegues."+
 " Thus, I have collected an extensive technical expertise in several programming languages: Python, C++, JS and C#."+
 " "

 export const framework_text = "The vast majority of my work revolves around algorithm development and implementation."+
 " Mostly, data driven algorithms. As a result, the frontline tools and frameworks I utilize in my day-to-day work are also data-centric."+
 " Pandas, Rapids cuDF, PySpark for tabular data structuring manipulation and transformation. Scikit-learn, XGBoost for simple baseline solutions."+
 " PyTorch and TensorFlow for more complex and elaborate solutions, involving deep learning, which is usually the case."+
 " Of course, most of the development and research is done in Python, allowing fast experimentation. The production solutions "+
 " are sometimes converted into C++. Mainly for IoT and robotic deployment, where performance and power efficiency"+
 " is of a great importance. In these cases the developed deep learning solutions go through model optimization stage,"+
 " involving model quantization and prunning. I have experience of such an optimization using TensorRT, which worked well"+
 " with our target deployment hardware, also provided by Nvidia (Jetson series). Apart from that, most of the robotic solutions"+
 " involving computer vision and sensor fusion, are convient to develop directly in C++, as it is supported by ROS and there are "+
 " plenty of libraries, like OpenCV, PCL and Eigen, which accelerate the development and deployment stage."+
 " Offline solutions, or the once which are deployed on premises or in cloud, I utilize a standard stack of tools,"+
 " reflecting my microservice-based development experience. Git for version control, Docker for solution packaging and"+
 " Kubernetes for deployment and resource management. In terms of cloud-based services, I have some experience with Azure."+
 " Last, but not the least, throught my hobbies and work, I have also obtained some expertise working with 3D rednering engines"+
 " such as Blender and game development platforms such as Unity. This combination of tools is extremely useful in the domain of "+
 " computer vision, as one can generate synthetic data cheaply and effieciently, when specific data is a concern."