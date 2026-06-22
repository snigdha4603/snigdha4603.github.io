export const personalInfo = {
  name: 'Snigdha Anantharaju',
  title: 'Urban Data Scientist',
  tagline: 'Using maps and models to improve cities',
  location: 'New York City, NY',
  email: 'snigdha.anantharaju@nyu.edu',
  linkedin: 'https://www.linkedin.com/in/snigdha-anantharaju/',
  github: 'https://github.com/snigdha4603',
  status: 'Open to opportunities',
};

export const about = {
  paragraphs: [
    "I'm currently pursuing my Master's in Urban Data Science at NYU's Center for Urban Science and Progress (CUSP), where I explore how cities work and how we can make them better for everyone.",
    "What drives me is the intersection of data and real-world impact. I use spatial analysis and machine learning to tackle urban challenges ranging from transportation equity to climate vulnerabilities and renewable energy infrastructure. I was selected as one of six NYMTC 9/11 Memorial TransportationFellows for 2025-26 to work on transportation challenges in New York by NYMTC, and I work with NYC Department of Transportation on Vision Zero Street Improvement Projects.",
    "Beyond academics, I lead the Applied Urban Science Association and the ASPRS NYU Student Chapter, serve as a GIS Consultant at NYU Data Services, and work with the CUSP Education Team to make urban science more accessible.",
  ],
  stats: [
    { value: '4', label: 'Teaching & Mentoring Roles' },
    { value: '10+', label: 'Projects Completed' },
    { value: '5', label: 'Research Areas' },
    { value: '4+', label: 'Leadership Roles' },
  ],
};

export interface TimelineEntry {
  title: string;
  org: string;
  location: string;
  duration: string;
  link: string | null;
  description: string[];
}

export const experience: TimelineEntry[] = [
    {
    title: 'NYMTC 9/11 Memorial Transportation Research Fellow',
    org: 'NY Metropolitan Transportation Council & NYC Department of Transportation',
    location: 'New York, NY',
    duration: 'Oct 2025 - Present',
    link: 'https://www.nymtc.org/News-and-Events/Press-Releases#:~:text=NYMTC%20Announces%20New%20Scholars%20for%20its%202025%2D26%0A9%2D11%20Memorial%20Fellowship%20Program',
    description: [
      'Synthesize citywide crash frequency and severity data across top-decile high-crash corridors to design evidence-based Vision Zero interventions, directly informing capital project prioritization.',
      'Develop Python-based automation workflows for traffic counts, bike and pedestrian count data, reducing processing time by 60% and improving model reliability.',
      'Deliver technical memos and spatial analyses to guide DOT leadership for critical investments.',
    ],
  },
  {
    title: 'Graduate Research Assistant - Inclusivity in GIS Curriculum (funded by NYU Office of the Provost)',
    org: 'NYU Center for Urban Science + Progress',
    location: 'Brooklyn, NY',
    duration: 'Apr 2026 - May 2026',
    link: null,
    description: [
      'Research on making GIS education more accessible and inclusive across disciplines at NYU.',
    ],
  },
  {
    title: 'Graduate Research Assistant - Computer Vision & Transportation',
    org: 'SimSpace Lab, NYU Tandon School of Engineering',
    location: 'Brooklyn, NY',
    duration: 'Sept 2025 - May 2026',
    link: null,
    description: [
      'Build a hybrid spatial-kinematic pipeline combining Line-of-Sight (LOS) analysis with 2,000-scenario Monte Carlo simulations to assess accident avoidability.',
      'Architect a scalable YOLO26-based computer vision schema to classify pedestrian-vehicle near-collision events from videos, enabling passive city-scale safety monitoring without manual review.',
      'Apply time-to-collision and post-encroachment time metrics to identify high-risk zones and conflict patterns.',
    ],
  },
  {
    title: 'Data Science and GIS Consultant',
    org: 'New York University Data Services',
    location: 'New York, NY',
    duration: 'May 2025 - May 2026',
    link: null,
    description: [
      "Serve as the university's embedded GIS expert, advising 1,000+ students, faculty and researchers across disciplines on spatial analytics, data strategy, and visualization using ArcGIS Pro, Python, R, and QGIS.",
      'Lead technical workshops to build geospatial literacy across interdisciplinary research teams.',
    ],
  },
  {
    title: 'CUSP Education Team Graduate Assistant',
    org: 'Center for Urban Science and Progress, NYU',
    location: 'Brooklyn, NY',
    duration: 'Nov 2024 - May 2026',
    link: null,
    description: [
      'Curate and maintain a comprehensive catalog of 100+ data sources from past CUSP research and capstone projects to support future student and faculty work.',
      'Support archival initiatives including the CUSP Media Archives and Capstone Archives, ensuring organized and accessible documentation of institutional research outputs.',
      'Assist in planning and executing educational events, workshops, and academic programs; manage internal and external communications to coordinate logistics and stakeholder engagement.',
    ],
  },
  {
    title: 'Data Science and Machine Learning Intern',
    org: 'School of Planning and Architecture, Bhopal',
    location: 'Bhopal, India',
    duration: 'June 2023 - July 2023',
    link: null,
    description: [
      'Extracted and analyzed 5,000+ accessibility-related data points using Machine Learning (NLP - BERT and VADER) to evaluate inclusivity.',
      'Automated accessibility compliance audits using GANs and R-CNN, improving analysis efficiency by 30% for an accessibility tool funded by the Government of India serving 10,000+ users.',
    ],
  },
  {
    title: 'Data Science and GIS Consultant',
    org: 'Vijayawada Municipal Corporation',
    location: 'Vijayawada, India',
    duration: 'June 2022 - Aug 2022',
    link: null,
    description: [
      'Designed NMT lanes and vending zones, reducing crashes by 12% and improving pedestrian safety across six key corridors in the city.',
      'Led 4+ cross-sector workshops with stakeholders and executives to develop a TOD plan, enhancing mobility for 25K+ daily commuters.',
    ],
  },
];

export const leadership = [
  {
    title: 'Founding President',
    org: 'American Society for Phorogrammetry and Remote Sensing NYU Student Chapter',
    duration: 'Sept 2025 - Present',
    link: 'https://community.asprs.org/chapter-nyu/home',
  },
  {
    title: 'President',
    org: 'Applied Urban Science Association, NYU Tandon',
    duration: 'May 2025 - Present',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7366892066720595969/',
  },
  {
    title: 'Club Secretary',
    org: 'Club Monologue (Drama & Theatre), SPA Vijayawada',
    duration: '2021 - 2024',
    link: null,
  },
  {
    title: 'Co-ordinator',
    org: 'National Service Scheme, SPA Vijayawada',
    duration: '2023 - 2024',
    link: null,
  },
  {
    title: 'Joint Secretary',
    org: 'Ek Bharat Shrestha Bharat Cell, SPA Vijayawada',
    duration: '2023 - 2024',
    link: null,
  },
];

export const education = [
  {
    degree: 'MS Urban Data Science',
    institution: 'Tandon School of Engineering, New York University',
    duration: '2024 - Present',
    link: 'https://engineering.nyu.edu/academics/programs/applied-urban-science-and-informatics-ms',
  },
  {
    degree: 'BPlan Urban and Regional Planning',
    institution: 'School of Planning and Architecture, Vijayawada',
    duration: '2020 - 2024',
    link: 'https://www.spav.ac.in/bplanning.html',
  },
];

export const projects = [
    {
    title: 'MTA Metro North Hudson Line Climate Resilience',
    description:
      'Built an ETL pipeline for Metro-North’s 70-mile Hudson Line integrating NOAA, USGS, and NWS APIs and developed XGBoost flood risk scoring, Random Forest disruption classification, and Weibull AFT survival analysis',
    tags: ['Python', 'GIS', 'Machine Learning'],
    category: 'Machine Learning',
    link: 'https://github.com/snigdha4603/hudson_line_project',
  },
  {
    title: 'Forensic Geosimulation: Road Accident Boundaries',
    description:
      'Custom simulation for forensic spatial analysis determining the physical avoidability of a right-turn vehicle-pedestrian collision based on geometric constraints and probabilistic human factors.',
    tags: ['Python', 'AnyLogic', 'GIS', 'Java'],
    category: 'Urban Simulation',
    link: 'https://github.com/snigdha4603/ASA-final-project',
  },
  {
    title: 'Invisible Boundaries',
    description:
      'Comprehensive geospatial analysis examining accessibility disparities to healthcare across socioeconomic neighborhoods in Harris County, Texas through network analysis.',
    tags: ['ArcGIS Pro', 'Python', 'Spatial Statistics'],
    category: 'Transportation',
    link: 'https://arcg.is/0fLenD',
  },
  {
    title: 'Economic Toll of Flooding',
    description:
      'Predicting flood risk and economic loss in Florida using GIS and Machine Learning. Integrates remote sensing and satellite data for high-resolution risk mapping.',
    tags: ['QGIS', 'Google Earth Engine', 'Python', 'Remote Sensing'],
    category: 'Climate Research',
    link: 'https://arcg.is/1nrHCf1',
  },
  {
    title: 'Predicting Urban Gentrification in NYC',
    description:
      'Comprehensive analysis of gentrification trends in New York City neighborhoods using machine learning techniques to identify potential hotspots and assess socio-economic impacts.',
    tags: ['Python', 'Machine Learning'],
    category: 'Machine Learning',
    link: 'https://github.com/devennb/ML-gentrification-hotspot-analysis',
  },
  {
    title: 'Assessment for Property Tax Framework',
    description:
      'Undergraduate dissertation analyzing the property tax framework of Vijayawada Municipal Corporation, proposing a machine-learning based assessment approach.',
    tags: ['Python', 'Machine Learning', 'GIS', 'Urban Finance'],
    category: 'Urban Finance',
    link: 'https://drive.google.com/file/d/1GrMicaRCLhMGdchBC_VIY-EPTDUgexFh/view?usp=sharing',
  },
  {
    title: 'Crime-Induced Fear & Subway Ridership',
    description:
      'Analysis of how a crime incident affected subway ridership patterns on consecutive days in New York, utilizing spatial data and statistical methods.',
    tags: ['Python', 'Statistical Analysis'],
    category: 'Data Science',
    link: 'https://docs.google.com/document/d/e/2PACX-1vQ17LW3XRiX7cHxk8sjZpwy3j13QBkcPTwfPqg250GjvndRB7iZiKWt5fg9GVrFer2ed6JUm9GtgFd3/pub',
  },
  {
    title: 'SoftWhere: Finding the Best Place to Live Based on Your Commute',
    description:
      'Tool recommending housing locations by commute time.',
    tags: ['Python', 'Statistical Analysis'],
    category: 'Data Science',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR5tIK086BOW5W90hoikDWJvGogemhtGVymZGvdZ3XA6z12YgPErazkHPcIvdvED_subhlX5vOHU4kf/pub',
  },
  {
    title: 'Transit vs. Car: U.S. Spatiotemporal Patterns',
    description:
      'Guided research under Prof. Anton Rozhkov analyzing spatiotemporal patterns in urban travel across major U.S. cities using large-scale mobility data.',
    tags: ['Python', 'Statistical Analysis', 'GIS'],
    category: 'Transportation', 
    link: 'https://drive.google.com/file/d/1gHcWIa_kA0IADSixFWW2pnHQYvGj6745/view',
  },
  {
    title: 'GIS to ML: Accessible Built Environments in India',
    description:
      'Government of India-funded research applying GIS and machine learning to assess accessibility of built environments in heritage sites across Indian cities.',
    tags: ['GIS', 'Machine Learning', 'Data Analysis'],
    category: 'Machine Learning',
    link: 'https://link.springer.com/chapter/10.1007/978-981-95-1865-4_12',
  },
];

export const skills = [
  {
    category: 'Geospatial Technology',
    items: ['ArcGIS Pro', 'QGIS', 'PostGIS', 'Google Earth Engine', 'Remote Sensing', 'Spatial Statistics', 'GeoAI'],
  },
  {
    category: 'Transportation',
    items: ['Vision Zero', 'Travel Demand Modeling', 'PTV Visum', 'AnyLogic (Microsimulation)', 'Monte Carlo Simulations', 'Network Analysis', 'TransCAD', 'Synchro'],
  },
  {
    category: 'Data Science & Analytics',
    items: ['Python', 'SQL', 'R', 'Machine Learning', 'Statistical Analysis', 'Jupyter'],
  },
  {
    category: 'Visualization & Tools',
    items: ['Tableau', 'Folium', 'Matplotlib', 'Power BI', 'Adobe Creative Suite'],
  },
  {
    category: 'Urban Planning',
    items: ['Policy Analysis', 'Community Engagement', 'Land Use Planning', 'Zoning', 'Infrastructure Planning'],
  },
];

export const awards = [
    {
    title: 'Best Data-Informed Insight Capstone Award',
    org: 'NYU Center for Urban Science + Progress',
    year: '2026',
  },
  {
    title: 'Community Building and Leadership Award',
    org: 'NYU Tandon School of Engineering',
    year: '2026',
  },
  {
    title: 'NYMTC September 11 Memorial Transportation Fellowship',
    org: 'New York Metropolitan Transportation Council',
    year: '2025',
  },
  {
    title: 'GIS Mapping Competition - First Place',
    org: 'New York University',
    year: '2025',
  },
  {
    title: "King's College London Global Data Dive - Best Technical Contribution",
    org: "King's College London",
    year: '2025',
  },
  {
    title: 'CUSP Experiential Scholar',
    org: 'NYU Center for Urban Science + Progress',
    year: '2025',
  },
  {
    title: 'NYU Merit Scholarship',
    org: 'NYU Tandon School of Engineering',
    year: '2024',
  },
  {
    title: '25th NOSPLAN Convention - First Place in Current Practices for Climate Change Mitigation',
    org: 'National Institute of Urban Affairs, India',
    year: '2023',
  },
];

export interface NewsEntry {
  date: string;
  month: string;
  year: string;
  headline: string;
  body: string;
  link: string | null;
  tag: string;
}

export const news: NewsEntry[] = [
  {
    date: 'May 2025',
    month: 'May',
    year: '2025',
    headline: 'Elected President of the Applied Urban Science Association at NYU Tandon',
    body: 'Elected as President of AUSA (Applied Urban Science Association) at NYU Tandon School of Engineering. Under this role, I lead the club with 250+ members and direct 4 E-board members.I have led the launch of several flagship initiatives including Wisdom Wednesday (a faculty interview series), Metro Mondays (an urban facts social media series), and the AUSA Career Series - growing the organization from zero social media presence to an active community, and guiding AUSA off probationary status. I also increased participation by 50% and number of events by 150% with an increase in budget by 270% compared to the previous year. ',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7366892066720595969',
    tag: 'Leadership',
  },
  {
    date: 'August 2025',
    month: 'August',
    year: '2025',
    headline: 'Instructed at 2025 Foundations of Research Computing Camp at New York University',
    body: 'Led a workshop with 40+ attendees on how to use and present geospatial data effectively at the 2025 Foundations of Research Computing Camp at NYU, an intensive 3 day-long program designed to equip students with essential research computing skills. The workshop covered best practices for geospatial data visualization, storytelling with maps, and effective communication of spatial insights to both technical and non-technical audiences.',
    link: 'https://sites.google.com/nyu.edu/forc-camp/instructors?authuser=0#h.xdjzamlkrdmh',
    tag: 'Event',
  },
  {
    date: 'Sept 2025',
    month: 'Sept',
    year: '2025',
    headline: 'Chartered the ASPRS NYU Student Chapter - First in the North Atlantic Region',
    body: 'Founded and chartered the American Society for Photogrammetry and Remote Sensing (ASPRS) NYU Student Chapter - making it the first ASPRS student chapter in the entire North Atlantic Region. ASPRS is the premier professional association for those who work with geospatial information in photogrammetry, remote sensing, GIS, and related disciplines. The chapter aims to connect NYU students with cutting-edge geospatial research, industry professionals, and opportunities in the field.',
    link: 'https://community.asprs.org/chapter-nyu/home',
    tag: 'Leadership',
  },
  {
    date: 'Oct 2025',
    month: 'Oct',
    year: '2025',
    headline: 'Selected for the NYMTC September 11 Memorial Transportation Fellowship',
    body: 'Selected as one of only six graduate students across New York and New Jersey for the New York Metropolitan Transportation Council (NYMTC) September 11 Memorial Transportation Fellowship. The fellowship - established to honor the memory of transportation professionals lost on 9/11 - funds graduate students to work on pressing transportation challenges facing the New York region. Through this fellowship, I work with the NYC Department of Transportation on Vision Zero Street Improvement Projects, synthesizing crash data and developing evidence-based interventions for high-crash corridors.',
    link: 'https://www.nymtc.org/Portals/0/Pdf/PRESS%20RELEASES/2026/Council%20Meeting%202026%20Press%20Release%20-%20ASL.pdf?ver=BLjP8Ok_ui2HI6lxA914kw%3d%3d',
    tag: 'Fellowship',
  },
  {
    date: 'Nov 2025',
    month: 'Nov',
    year: '2025',
    headline: 'Won the NYU GIS Day Mapping Competition - Out of 30+ Entries',
    body: 'Placed first in NYU\'s annual GIS Day Mapping Competition, a university-wide contest with over 30 entries from students across disciplines. GIS Day is a global celebration of Geographic Information Systems and their real-world applications. The competition recognizes outstanding spatial analysis, cartographic design, and storytelling through maps.',
    link: 'https://drive.google.com/drive/folders/163AZZtzJpD70IRFBxZJwRQMeOi8XyRSn?usp=sharing',
    tag: 'Award',
  },
  {
    date: 'Dec 2025',
    month: 'Dec',
    year: '2025',
    headline: 'Hosted and Emceed the ASPRS NYU Chapter Launch and Technical Showcase',
    body: 'Hosted and emceed the inaugural event of the ASPRS NYU Student Chapter - the Chapter Launch and Technical Showcase. The event brought together students, faculty, and industry professionals to celebrate the chapter\'s founding and showcase the breadth of geospatial work happening at NYU, setting the tone for the chapter\'s future programming.',
    link: 'https://www.linkedin.com/posts/asprs-nyu-chapter_asprsnyu-asprs-nyu-activity-7399822622420795393-bJ8x',
    tag: 'Event',
  },
  {
    date: 'Jan 2026',
    month: 'Jan',
    year: '2026',
    headline: 'Represented NYU CUSP and Tandon at the 105th TRB Annual Meeting in Washington D.C.',
    body: 'Represented the NYU Center for Urban Science + Progress (CUSP) and NYU Tandon School of Engineering at the Transportation Research Board (TRB) Annual Meeting in Washington D.C. - one of the largest transportation research conferences in the world, drawing over 13,000 attendees. Engaged with cutting-edge transportation research and connected with professionals advancing the field.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7416214563760521216/',
    tag: 'Conference',
  },
  {
    date: 'Jan 2026',
    month: 'Jan',
    year: '2026',
    headline: 'Represented AUSA at NYU Tandon Club Fair - Grew Membership and Urban Science Awareness',
    body: 'Tabled and represented the Applied Urban Science Association at the NYU Tandon Club Fair, actively recruiting new members and raising awareness about the field of urban data science among incoming and current students. A key step in expanding AUSA\'s reach across the school.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7422068547817824256',
    tag: 'Outreach',
  },
  {
    date: 'Mar 11 2026',
    month: 'Mar',
    year: '2026',
    headline: "Moderated 'Women in Urban' Panel 1 - Arts, Community Development & Urban Planning",
    body: "Hosted and moderated the first panel of the AUSA Career Series: 'Women in Urban' - a discussion on the intersection of arts, community development, and urban planning. Panelists included Gesche Würfel (Visual Artist, Educator & Urbanist), Giulia Luci (Director of Sustainability, NYC Department of Housing Preservation and Development), Keri Butler (President, Municipal Art Society of New York), and Véronëque Ignace (Community Engagement Manager, NYC FloodNet).",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7437883620452790272',
    tag: 'Event',
  },
  {
    date: 'Mar 26 2026',
    month: 'Mar',
    year: '2026',
    headline: "Moderated 'Women in Urban' Panel 2 - Diverse Disciplines and AI in Urban Science",
    body: "Hosted and moderated the second 'Women in Urban' panel, exploring the diversity of disciplines under the urban umbrella and the growing role of AI in urban science. Panelists included Becky Duane (Business Development Executive, IBM), Jennifer Pehr AICP MPH WEDG (Urban Strategist & Planner), Jill Lerner (Principal at KPF and Co-chair of the Municipal Art Society of New York), and Kara Emery Ph.D. (Director of Research, AI Hub at NYU McSilver Institute).",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7443317212347695105',
    tag: 'Event',
  },
  {
    date: 'Apr 2026',
    month: 'Apr',
    year: '2026',
    headline: "Hosted Code4City - A 12-Hour Urban Tech Hackathon in Partnership with Qualcomm",
    body: "Organized Code4City, a 12-hour urban-themed hackathon running on April 26, 2026 in partnership with Qualcomm. The event invites students and developers to build technology solutions for real city challenges, embodying AUSA's mission to bridge data science and urban impact.",
    link: 'https://code4city.com',
    tag: 'Event',
  },
  {
    date: 'Apr 2026',
    month: 'Apr',
    year: '2026',
    headline: "Received 'Outstanding New Initiative' Award from NYU Tandon",
    body: "Received the 'Outstanding New Initiative' award from NYU Tandon School of Engineering in recognition of the successful launch and impact of AUSA Career Series and its flagship programs like Code4City, Wisdom Wednesday, Metro Mondays and Women in Urban.",
    link: 'https://www.linkedin.com/posts/cuspausa_tandonstudentengagement-nyurandon-nyu-activity-7462853601598586880-vPnN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOZooUBH2v8HuA4LZbTO3ZwgLharuGJHmE',
    tag: 'Award',
  },
  {
    date: 'May 1 2026',
    month: 'May',
    year: '2026',
    headline: "Received 'Best Data-Informed Capstone' Award",
    body: "Received the 'Best Data-Informed Capstone' award from the NYU Center for Urban Science + Progress for our capstone project, which applied computer vision and creating our own video labeling software to analyze and propose solutions for pedestrian safety at right-turn intersections. The award recognizes outstanding use of data (where we collected our own data) to generate insights and inform actionable recommendations for cities.",
    link: '',
    tag: 'Award',
  },
  {
    date: 'May 2026',
    month: 'May',
    year: '2026',
    headline: "Received Community Building and Leadership Award from NYU Tandon",
    body: "Received the 'Community Building and Leadership' award from the NYU Tandon School of Engineering for our contributions to fostering a collaborative and inclusive environment in urban science and technology.",
    link: '',
    tag: 'Award',
  },
];