// Site content. Everything here comes from the original Google Site or from the owner.
// Edit this file, then run: node build.js https://your-site-address

const SCHOLAR = lang => `https://scholar.google.com/citations?hl=${lang}&user=fIiTDfoAAAAJ&view_op=list_works&sortby=pubdate`;
const LINKS = {
  cv: "https://drive.google.com/file/d/1X6kQuTxCZ6U-BqVdB0HX_KRlAnU8sYYs/view?usp=sharing",
  scholar: SCHOLAR,
  dblp: "https://dblp.uni-trier.de/pers/hd/m/Mezni:Haithem",
  orcid: "https://orcid.org/0000-0001-9932-8433",
  github: "https://github.com/agai-research"
};
const CONTACT = {
  email1: "haithem.mezni@fsjegj.rnu.tn",
  email2: "haithem.mezni@gmail.com",
  phone: "+21654136080",
  phoneShow: "+216 54 136 080",
  formTo: "haithem.mezni@fsjegj.rnu.tn"
};

// Biography restored from the original home page (full content), lightly corrected.
const BIO = {
  en: [
    "I am an Associate Professor of Computer Science at the University of Jendouba, Tunisia, and a member of the Service & Cloud Computing research team at the SMART research laboratory. I received my PhD and my Habilitation (accreditation to supervise research) in computer science from the University of Manouba, Tunisia, in 2014 and 2021 respectively. My research interests include service lifecycle management, cloud computing and recommender systems. I have supervised and co-coordinated several research projects on Web service management, cloud service recommendation, cloud resource provisioning and management, and service composition.",
    "My publication record includes articles in peer-reviewed journals such as IEEE TKDE, IEEE TSC, JNCA, DKE, FGCS, SoCo, JSS, IJAR, Cluster Computing, Journal of Grid Computing and JAIHC. I have also served as a guest editor for international journals, including the International Journal of Approximate Reasoning, the Computing journal and ACM Transactions on the Web, and I have co-chaired several international conferences, workshops and special tracks.",
    "For further details, please visit my pages on <a href=\"{scholar}\">Google Scholar</a> and <a href=\"https://dblp.uni-trier.de/pers/hd/m/Mezni:Haithem\">DBLP</a>."
  ],
  fr: [
    "Je suis maître de conférences en informatique à l’Université de Jendouba (Tunisie) et membre de l’équipe de recherche Service & Cloud Computing du laboratoire SMART. J’ai obtenu mon doctorat et mon habilitation universitaire (habilitation à diriger des recherches) en informatique à l’Université de la Manouba (Tunisie), respectivement en 2014 et en 2021. Mes recherches portent sur la gestion du cycle de vie des services, le cloud computing et les systèmes de recommandation. J’ai encadré et co-coordonné plusieurs projets de recherche sur la gestion des services web, la recommandation de services cloud, le provisionnement et la gestion des ressources cloud, et la composition de services.",
    "Mes publications comprennent des articles dans des revues à comité de lecture telles que IEEE TKDE, IEEE TSC, JNCA, DKE, FGCS, SoCo, JSS, IJAR, Cluster Computing, Journal of Grid Computing et JAIHC. J’ai également été éditeur invité de revues internationales, dont International Journal of Approximate Reasoning, Computing et ACM Transactions on the Web, et j’ai co-présidé plusieurs conférences, workshops et special tracks internationaux.",
    "Pour plus de détails, consultez mes pages <a href=\"{scholar}\">Google Scholar</a> et <a href=\"https://dblp.uni-trier.de/pers/hd/m/Mezni:Haithem\">DBLP</a>."
  ]
};

// News: all items of the original home page, in the original order (most recent first).
// [icon, en, fr]
const NEWS = [
 ["calendar-days",`We are organizing the <a href="https://conferences.sigappfr.org/wise2026/special-track-wekgr/">Special Track on Knowledge Graphs and RAG on the Web (WeKGR 2026)</a>.`,
                  `Nous organisons le <a href="https://conferences.sigappfr.org/wise2026/special-track-wekgr/">Special Track on Knowledge Graphs and RAG on the Web (WeKGR 2026)</a>.`],
 ["school",`<a href="http://wiseai.ieee.tn/">WiseAI</a>: Spring School on Ethical, Trustworthy, and Advanced AI Systems.`,
           `<a href="http://wiseai.ieee.tn/">WiseAI</a> : école de printemps sur les systèmes d’IA éthiques, fiables et avancés.`],
 ["mic",`Our international workshop “GraphAI for Future Intelligent Systems (GAI4FIS@ICDE’26)” will be held in conjunction with the <a href="https://icde2026.github.io/workshops.html">IEEE International Conference on Data Engineering (ICDE 2026)</a>.`,
        `Notre workshop international «\u00A0GraphAI for Future Intelligent Systems (GAI4FIS@ICDE’26)\u00A0» se tiendra avec l’<a href="https://icde2026.github.io/workshops.html">IEEE International Conference on Data Engineering (ICDE 2026)</a>.`],
 ["book-marked",`ACM Transactions on the Web: Special Issue on “Web for Good”. Find the call for papers on the <a href="https://dl.acm.org/pb-assets/static_journal_pages/tweb/pdf/TWEB_CfP_SI-Web-for-Good-1740425332177.pdf">journal SI page</a>.`,
                `ACM Transactions on the Web : numéro spécial «\u00A0Web for Good\u00A0». L’appel à contributions est sur la <a href="https://dl.acm.org/pb-assets/static_journal_pages/tweb/pdf/TWEB_CfP_SI-Web-for-Good-1740425332177.pdf">page du numéro spécial</a>.`],
 ["calendar-days",`The ACS/IEEE 22nd International Conference on Computer Systems and Applications, <a href="https://conferences.sigappfr.org/aiccsa2025/">AICCSA 2025</a>, will be held in Doha, Qatar (19–22 October).`,
                  `La 22e conférence internationale ACS/IEEE sur les systèmes informatiques et applications, <a href="https://conferences.sigappfr.org/aiccsa2025/">AICCSA 2025</a>, se tiendra à Doha, au Qatar (19–22 octobre).`],
 ["mic",`We organize the fourth edition of <a href="https://project.inria.fr/sglm/">SGLM</a>, the International Workshop on Scalable and Deep Graph Learning and Mining, held in Rome, Italy, in conjunction with the <a href="https://2025.ijcnn.org/">International Joint Conference on Neural Networks</a> (June 30 – July 5, 2025).`,
        `Nous organisons la quatrième édition de <a href="https://project.inria.fr/sglm/">SGLM</a>, l’International Workshop on Scalable and Deep Graph Learning and Mining, à Rome (Italie), avec l’<a href="https://2025.ijcnn.org/">International Joint Conference on Neural Networks</a> (30 juin – 5 juillet 2025).`],
 ["book-marked",`Springer Computing Journal: Special Issue on “AI and Data Science for Secure Societies”. Find the call for papers on the <a href="https://link.springer.com/collections/eceebjbhbd">SI journal page</a>.`,
                `Revue Springer Computing : numéro spécial «\u00A0AI and Data Science for Secure Societies\u00A0». L’appel à contributions est sur la <a href="https://link.springer.com/collections/eceebjbhbd">page du numéro spécial</a>.`],
 ["calendar-days",`The <a href="https://wise2024-qatar.com/">24th International Conference on Web Information Systems Engineering (WISE’24)</a> will be held in Qatar, on November 25–28, 2024.`,
                  `La <a href="https://wise2024-qatar.com/">24e International Conference on Web Information Systems Engineering (WISE’24)</a> se tiendra au Qatar du 25 au 28 novembre 2024.`],
 ["book-open",`Our paper “Context-Aware Service Recommendation Based on Knowledge Graph Embedding” has been accepted by the ICDE 2023 TKDE Poster session.`,
              `Notre article «\u00A0Context-Aware Service Recommendation Based on Knowledge Graph Embedding\u00A0» a été accepté à la session posters TKDE d’ICDE 2023.`],
 ["book-open",`Our survey paper “Web Service Adaptation: a Decade’s Overview” has been accepted for publication in an upcoming issue of the Elsevier journal Computer Science Review.`,
              `Notre article de synthèse «\u00A0Web Service Adaptation: a Decade’s Overview\u00A0» a été accepté pour publication dans la revue Computer Science Review (Elsevier).`],
 ["book-open",`Our survey paper on “Big Services” has been accepted for publication in an upcoming issue of the journal Computing, Springer.`,
              `Notre article de synthèse sur les «\u00A0Big Services\u00A0» a été accepté pour publication dans la revue Computing (Springer).`],
 ["mic",`We organize the first edition of the <a href="https://sites.google.com/view/bigservices2021/">BigServices</a> International Workshop, held in Dubai, UAE, on 22 November 2021, in conjunction with the 19th International Conference on Service Oriented Computing, <a href="http://www.icsoc.org/">ICSOC 2021</a>.`,
        `Nous organisons la première édition du workshop international <a href="https://sites.google.com/view/bigservices2021/">BigServices</a>, à Dubaï (Émirats arabes unis), le 22 novembre 2021, avec la 19e International Conference on Service Oriented Computing, <a href="http://www.icsoc.org/">ICSOC 2021</a>.`],
 ["book-open",`Our paper “Temporal Knowledge Graph Embedding for Effective Service Recommendation” has been accepted for publication in an upcoming issue of the IEEE Transactions on Services Computing.`,
              `Notre article «\u00A0Temporal Knowledge Graph Embedding for Effective Service Recommendation\u00A0» a été accepté pour publication dans IEEE Transactions on Services Computing.`],
 ["book-open",`Our paper “Context-aware Service Recommendation based on Knowledge Graph Embedding” has been accepted for publication in an upcoming issue of the IEEE Transactions on Knowledge and Data Engineering.`,
              `Notre article «\u00A0Context-aware Service Recommendation based on Knowledge Graph Embedding\u00A0» a été accepté pour publication dans IEEE Transactions on Knowledge and Data Engineering.`],
 ["book-open",`Our paper “Towards Big Services Composition” has been accepted for publication in the International Journal of Web and Grid Services, InderScience.`,
              `Notre article «\u00A0Towards Big Services Composition\u00A0» a été accepté pour publication dans International Journal of Web and Grid Services (InderScience).`],
 ["book-open",`Our paper “On the Use of Big Data Frameworks for Big Service Composition” has been accepted for publication in the Journal of Network and Computer Applications, Elsevier.`,
              `Notre article «\u00A0On the Use of Big Data Frameworks for Big Service Composition\u00A0» a été accepté pour publication dans Journal of Network and Computer Applications (Elsevier).`],
 ["book-marked",`Editorial: Special issue on <a href="https://www.sciencedirect.com/science/article/abs/pii/S0888613X19302890">Uncertainty in Cloud Computing: Concepts, Challenges and Current Solutions</a>. International Journal of Approximate Reasoning, Elsevier.`,
                `Éditorial : numéro spécial <a href="https://www.sciencedirect.com/science/article/abs/pii/S0888613X19302890">Uncertainty in Cloud Computing: Concepts, Challenges and Current Solutions</a>. International Journal of Approximate Reasoning (Elsevier).`],
 ["book-open",`Our paper “The Uncertain Cloud: State of the Art and Research Challenges” has been accepted for publication in the International Journal of Approximate Reasoning, Elsevier.`,
              `Notre article «\u00A0The Uncertain Cloud: State of the Art and Research Challenges\u00A0» a été accepté pour publication dans International Journal of Approximate Reasoning (Elsevier).`],
 ["mic",`We organize the second edition of the <a href="https://sites.google.com/site/ucc18workshop/">UCC International Workshop</a>, held in Nicosia, Cyprus, on 10 December 2018, in conjunction with the 10th IEEE International Conference on Cloud Computing Technology and Science, <a href="http://cyprusconferences.org/cloudcom2018/">CloudCom 2018</a>.`,
        `Nous organisons la deuxième édition du <a href="https://sites.google.com/site/ucc18workshop/">workshop international UCC</a>, à Nicosie (Chypre), le 10 décembre 2018, avec la 10e IEEE International Conference on Cloud Computing Technology and Science, <a href="http://cyprusconferences.org/cloudcom2018/">CloudCom 2018</a>.`],
 ["book-open",`Our paper “A Cloud Services Recommendation System Based on Fuzzy Formal Concept Analysis” has been accepted for publication in the journal Data & Knowledge Engineering, Elsevier.`,
              `Notre article «\u00A0A Cloud Services Recommendation System Based on Fuzzy Formal Concept Analysis\u00A0» a été accepté pour publication dans Data & Knowledge Engineering (Elsevier).`],
 ["book-open",`Our paper “Time-aware service recommendation: taxonomy, review and challenges” has been accepted for publication in the journal Software: Practice and Experience, Wiley.`,
              `Notre article «\u00A0Time-aware service recommendation: taxonomy, review and challenges\u00A0» a été accepté pour publication dans Software: Practice and Experience (Wiley).`],
 ["book-open",`Our paper “An Experimental Survey on Big Data Frameworks” has been accepted for publication in the journal Future Generation Computer Systems, Elsevier.`,
              `Notre article «\u00A0An Experimental Survey on Big Data Frameworks\u00A0» a été accepté pour publication dans Future Generation Computer Systems (Elsevier).`],
 ["book-marked",`We organize a Special Issue on <a href="https://www.journals.elsevier.com/international-journal-of-approximate-reasoning/call-for-papers/special-issue-on-uncertainty-in-cloud-computing-concepts-cha">Uncertainty in Cloud Computing: Concepts, Challenges and Current Solutions</a>, International Journal of Approximate Reasoning. Paper submission deadline: January 31, 2018.`,
                `Nous organisons un numéro spécial <a href="https://www.journals.elsevier.com/international-journal-of-approximate-reasoning/call-for-papers/special-issue-on-uncertainty-in-cloud-computing-concepts-cha">Uncertainty in Cloud Computing: Concepts, Challenges and Current Solutions</a>, International Journal of Approximate Reasoning. Date limite de soumission : 31 janvier 2018.`],
 ["mic",`I am co-chairing the International Workshop on <a href="https://sites.google.com/site/ucc17workshop/">Uncertainty in Cloud Computing</a> (UCC’17) in conjunction with DEXA 2017.`,
        `Je co-préside l’International Workshop on <a href="https://sites.google.com/site/ucc17workshop/">Uncertainty in Cloud Computing</a> (UCC’17), organisé avec DEXA 2017.`],
 ["book-open",`Our paper “<a href="https://www.sciencedirect.com/science/article/pii/S0164121217301760">Multi-cloud Service Composition using Formal Concept Analysis</a>” has been accepted for publication in the Journal of Systems and Software, Elsevier.`,
              `Notre article «\u00A0<a href="https://www.sciencedirect.com/science/article/pii/S0164121217301760">Multi-cloud Service Composition using Formal Concept Analysis</a>\u00A0» a été accepté pour publication dans Journal of Systems and Software (Elsevier).`]
];
const NEWS_VISIBLE = 8;

// Research areas restored from the original Research page. [icon, en title, fr title, en text, fr text, link]
const AREAS = [
 ["globe","Web services","Services web","Service selection and composition, service recommendation, service adaptation.","Sélection et composition de services, recommandation de services, adaptation de services.",""],
 ["cloud","Cloud computing","Cloud computing","Resource provisioning and management, cloud service composition and recommendation, service placement.","Provisionnement et gestion des ressources, composition et recommandation de services cloud, placement de services.",""],
 ["sparkles","Recommender systems","Systèmes de recommandation","Service recommendation, federated recommender, RS applications.","Recommandation de services, recommandation fédérée, applications des systèmes de recommandation.",""],
 ["radio-tower","Service-Oriented Computing with applications","Informatique orientée services et ses applications","","",""],
 ["bot","Agentic AI","IA agentique","LLM-based agents and multi-agent systems, agentic AI frameworks, composition of agent tools and workflows.","Agents fondés sur les grands modèles de langage et systèmes multi-agents, cadriciels d’IA agentique, composition d’outils et de workflows pour agents.",""]
];

// Project titles restored exactly as on the original Research page.
const PROJECTS = [
 ["SmartEdu4All: Towards an Intelligent Cyber-Physical System for Smart Educational Applications","SmartEdu4All : vers un système cyber-physique intelligent pour les applications éducatives","Accepted","Accepté"],
 ["Trust Management System for Smart Applications in Intelligent Cyber-Physical Systems","Système de gestion de la confiance pour les applications intelligentes dans les systèmes cyber-physiques intelligents","Accepted","Accepté"],
 ["Connected Vehicle as a Service: An Edge/Cloud System for the Resilient Scheduling of Multi-modal Transportation Services in Smart Urban Networks","Connected Vehicle as a Service : système edge/cloud pour l’ordonnancement résilient de services de transport multimodaux dans les réseaux urbains intelligents","Grant No. RPFAP-77-1445, PNU, KSA, started 2024","Subvention n° RPFAP-77-1445, PNU, Arabie saoudite, démarré en 2024"],
 ["A framework for the predictive scheduling and routing of drone delivery services","Un cadre pour l’ordonnancement et le routage prédictifs des services de livraison par drone","Grant No. RPFAP-78-1445, PNU, KSA, started 2024","Subvention n° RPFAP-78-1445, PNU, Arabie saoudite, démarré en 2024"],
 ["Multi-cloud Management Platform and a Search Engine for Smart City Services","Plateforme de gestion multi-cloud et moteur de recherche pour les services de la ville intelligente","Grant No. RI-44-0878, PNU, KSA, started 2022","Subvention n° RI-44-0878, PNU, Arabie saoudite, démarré en 2022"],
 ["Recommender System for Smart Healthcare Services in Virtual Hospitals","Système de recommandation de services de santé intelligents dans les hôpitaux virtuels","Grant No. 44-PRFA-P-90, PNU, KSA, started 2023","Subvention n° 44-PRFA-P-90, PNU, Arabie saoudite, démarré en 2023"],
 ["A framework for the recommendation of smart transportation services","Un cadre pour la recommandation de services de transport intelligents","Grant No. 44-PRFA-P-76, PNU, KSA, started 2023","Subvention n° 44-PRFA-P-76, PNU, Arabie saoudite, démarré en 2023"],
 ["A customer-oriented cloud platform for the scheduling and management of drone delivery services","Une plateforme cloud orientée client pour l’ordonnancement et la gestion des services de livraison par drone","Grant No. 44-PRFA-P-91, PNU, KSA, started 2023","Subvention n° 44-PRFA-P-91, PNU, Arabie saoudite, démarré en 2023"],
 ["SmartWater: an Intelligent Service-based Framework to Support Real-Time Water Monitoring in IoT Environments","SmartWater : un cadre intelligent à base de services pour la surveillance de l’eau en temps réel dans les environnements IoT","Grant No. 442/210, Taibah University, KSA, 2020–2023","Subvention n° 442/210, Université Taibah, Arabie saoudite, 2020–2023"]
];

const EDITING = [
 ["2025","Web for Good","ACM Transactions on the Web","https://dl.acm.org/doi/10.1145/3837870"],
 ["2025","AI and Data Science for Secure Societies","Springer Computing Journal","https://link.springer.com/collections/eceebjbhbd"],
 ["2018","Uncertainty in Cloud Computing: Concepts, Challenges and Current Solutions","International Journal of Approximate Reasoning","https://www.sciencedirect.com/journal/international-journal-of-approximate-reasoning/special-issue/105R2T19H58"]
];

// Events restored with the full descriptions of the original Research page. [year, group, en, fr, url]
const EVENTS = [
 ["2026","org","Special Track on Knowledge Graphs and RAG on the Web (WeKGR 2026), WISE 2026","Special Track on Knowledge Graphs and RAG on the Web (WeKGR 2026), WISE 2026","https://conferences.sigappfr.org/wise2026/special-track-wekgr/"],
 ["2026","org","GraphAI4FIS@ICDE 2026 workshop","Workshop GraphAI4FIS@ICDE 2026","https://icde2026.github.io/workshops.html"],
 ["","org","WiseAI: Spring School on Ethical, Trustworthy, and Advanced AI Systems","WiseAI : école de printemps sur les systèmes d’IA éthiques, fiables et avancés","http://wiseai.ieee.tn/"],
 ["2021","org","BigServices@ICSOC 2021: First International Workshop on Big Services, in conjunction with the 19th International Conference on Service Oriented Computing (ICSOC 2021), Dubai, UAE, November 22, 2021","BigServices@ICSOC 2021 : premier workshop international sur les Big Services, avec la 19e International Conference on Service Oriented Computing (ICSOC 2021), Dubaï, 22 novembre 2021","https://sites.google.com/view/bigservices2021/"],
 ["2018","org","UCC 2018: 2nd International Workshop on Uncertainty in Cloud Computing, in conjunction with the 10th IEEE International Conference on Cloud Computing Technology and Science (CloudCom 2018), Nicosia, Cyprus, December 10, 2018","UCC 2018 : 2e workshop international sur l’incertitude dans le cloud computing, avec la 10e IEEE CloudCom 2018, Nicosie, Chypre, 10 décembre 2018","https://sites.google.com/site/ucc18workshop/"],
 ["2017","org","ASD 2017: 11th Conference on Advanced Decision Support Systems, Tabarka, Tunisia, April 27–29, 2017","ASD 2017 : 11e conférence sur les systèmes avancés d’aide à la décision, Tabarka, Tunisie, 27–29 avril 2017","http://asd2017.asd-conf.net/"],
 ["2017","org","BDASP4IoT’17: 1st Spring School on Big Data Analytics and Stream Processing for IoT, Tabarka, Tunisia, April 24–26, 2017","BDASP4IoT’17 : 1re école de printemps sur l’analyse de big data et le traitement de flux pour l’IoT, Tabarka, Tunisie, 24–26 avril 2017","http://asd-conf.net/asd2017/ecole/"],
 ["2025","chair","Workshops, Special Tracks and Tutorials Co-chair, ACS/IEEE AICCSA 2025","Co-président workshops, special tracks et tutoriels, ACS/IEEE AICCSA 2025","https://conferences.sigappfr.org/aiccsa2025/"],
 ["2025","chair","Workshop co-chair, SGLM@IJCNN 2025","Co-président du workshop SGLM@IJCNN 2025","https://project.inria.fr/sglm/"],
 ["2024","chair","Demos and Posters Co-Chair, WISE 2024","Co-président démos et posters, WISE 2024","https://wise2024-qatar.com/call-for-demos-and-posters/"],
 ["2024","chair","Publicity chair, WISE 2024","Responsable de la communication, WISE 2024","https://wise2024-qatar.com/"],
 ["2022","chair","Chair of the Internet of Things track, SMARTTECH 2022","Président de la session Internet des objets, SMARTTECH 2022","http://smarttech.riotu-lab.org/"],
 ["2017","chair","UCC 2017: 1st International Workshop on Uncertainty in Cloud Computing, in conjunction with the 28th International Conference on Database and Expert Systems Applications (DEXA 2017), Lyon, France, August 28–31, 2017 (co-chair)","UCC 2017 : 1er workshop international sur l’incertitude dans le cloud computing, avec la 28e conférence DEXA 2017, Lyon, France, 28–31 août 2017 (co-président)","https://sites.google.com/site/ucc17workshop/"],
 ["2025","pc","Program Committee, WISE 2025","Comité de programme, WISE 2025","https://wise2025.ficloud.org/"]
];

// Reviewing: full list of the original Research page.
const REVIEW = ["ACM Transactions on the Web","IEEE Transactions on Knowledge and Data Engineering","IEEE Transactions on Services Computing","IEEE Transactions on Systems, Man, and Cybernetics","Journal of Swarm and Evolutionary Computation","Journal of Future Generation Computer Systems","IEEE Transactions on Cybernetics","Journal of Applied Soft Computing","Journal of Ambient Intelligence and Humanized Computing","Journal of Concurrency and Computation: Practice and Experience","Journal of Web Service Research","Journal of Knowledge and Information Systems","IEEE Access","Journal of Systems and Service-Oriented Engineering","Journal of Information Technology and Web Engineering","Journal of Information & Communications Technology Express","International Conference on Service-Oriented Computing","International Conference on Cooperative Information Systems","International Conference on Advanced Decision-Making Systems"];

// PhD students: the four current students come from the 2025–2026 progress reports. [name, title, year, title language]
const PHD = [
 ["Anouer Mezni","A Synergy Between Agentic AI and Large Reasoning Models for Generative and Explainable Multi-Agent Recommendations","2025–2026","en"],
 ["Chiheb Hajlaoui","Orchestration intelligente pour le service des grands modèles de langage à travers le continuum edge–cloud","2025–2026","fr"],
 ["Manar Bahri","Bugs Management for Agentic AI-Based Systems","2025–2026","en"],
 ["Oussema Brahmi","Cost-based container placement in the cloud","2025–2026","en"],
 ["Wissem Inoubli","Analysis and Mining of Large Dynamic Graphs: case of graph clustering","2016","en"],
 ["Ameni Hedhli","A prediction-based approach for BPaaS management in multi-cloud environments","2017","en"],
 ["Souad Ghazouani","Multi-cloud service composition","2019","en"]
];
const MSC = [
 ["Mohamed Gharbi","Towards big service composition","2018"],
 ["Faten Belhaj","A parallel approach for multi-cloud service recommendation","2017"],
 ["Mouna Bouzazi","Towards an autonomic multi-cloud environment for optimal resource provisioning","2017"],
 ["Fatma Lahmar","Secure multi-cloud service composition based on rough sets and Fuzzy Formal Concept Analysis","2017"],
 ["Ameni Hedhli","A DFA-based approach for the deployment of BPaaS fragments in the Cloud","2017"],
 ["Mayssa Fayala","Time-aware Web service recommendation based on multi-valued QoS prediction","2017"],
 ["Taher Abdeljaouad","Cloud Services Recommendation System Based on Fuzzy Formal Concept Analysis","2016"],
 ["Tarek Mahdhi","A Prediction-based VM Consolidation Approach in IaaS Cloud Data Centers","2016"],
 ["Mariem Kbekbi","Reusing Process Fragments for Fast Service Composition: a Clustering-based Approach","2016"],
 ["Zied Hermi","Data partitioning strategy to approximate single large-scale subgraph mining (co-advising with Sabeur Aridhi, University of Lorraine, France)","2016"],
 ["Mohamed Amin Hajji","A composite particle swarm optimization approach for the composite SaaS placement in cloud environment","2016"],
 ["Mariem Medini","A FCA-based approach for multi-cloud services composition","2015"],
 ["Abir Boudhina","Cross-layer adaptation of autonomic Web services","2015"],
 ["Ibtissem Khedher","A business process reverse engineering approach based on mood awareness (co-advising with Noura Faci, Université Lyon 1, France)","2015"],
 ["Karima Ibdilli","Web service selection based on the negotiation of autonomic behavior","2015"],
 ["Sami Abidi","Composite SaaS placement using multi-swarm optimization and cooperative learning","2015"]
];

// Teaching. Current teaching: University of Jendouba only (ISET and Taibah are not current).
const TEACH = {
 current: [
  { en:"University of Jendouba", fr:"Université de Jendouba", when:{en:"",fr:""}, now:true,
    items:{en:["IT project management (3rd year, business computing)","Web technologies: HTML, CSS, JavaScript (1st year, computer science)","Object-oriented modeling (UML)"],
           fr:["Gestion de projets informatiques (3e année, informatique de gestion)","Technologies web : HTML, CSS, JavaScript (1re année, informatique)","Modélisation objet (UML)"]} }
 ],
 master: [
  { en:"University of Jendouba", fr:"Université de Jendouba", when:{en:"2013–2018",fr:"2013–2018"},
    items:{en:["Distributed systems","Service-oriented architecture","Database administration","Application servers and IDE","Large-scale databases","Web Intelligence"],
           fr:["Systèmes distribués","Architecture orientée services","Administration des bases de données","Serveurs d’applications et IDE","Bases de données à grande échelle","Intelligence du Web"]} },
  { en:"Higher Institute of Management of Tunis", fr:"Institut supérieur de gestion de Tunis", when:{en:"2015–2017",fr:"2015–2017"},
    items:{en:["Web Intelligence"], fr:["Intelligence du Web"]} }
 ],
 under: [
  { en:"Taibah University, Saudi Arabia", fr:"Université Taibah, Arabie saoudite", when:{en:"Started in 2018",fr:"Début en 2018"},
    groups:[
      {en:"Programming and Web", fr:"Programmation et Web", items:{en:["Introduction to programming","Programming 2","Introduction to Web programming","Internet applications 1","Web administration"], fr:["Introduction à la programmation","Programmation 2","Introduction à la programmation web","Applications Internet 1","Administration web"]}},
      {en:"Systems, data and multimedia", fr:"Systèmes, données et multimédia", items:{en:["Network operating systems","Database management","System analysis and design","Multimedia"], fr:["Systèmes d’exploitation réseau","Gestion de bases de données","Analyse et conception de systèmes","Multimédia"]}},
      {en:"Cybersecurity", fr:"Cybersécurité", items:{en:["Cybersecurity risk analysis","Cybersecurity design principles"], fr:["Analyse des risques en cybersécurité","Principes de conception en cybersécurité"]}}
    ] },
  { en:"University of Jendouba", fr:"Université de Jendouba", when:{en:"2005–2018",fr:"2005–2018"},
    groups:[
      {en:"Programming and algorithms", fr:"Programmation et algorithmique", items:{en:["Algorithmic and data structures","Algorithmic and programming","C programming","Object-oriented programming","Event-based programming","Mobile programming","Compilation"], fr:["Algorithmique et structures de données","Algorithmique et programmation","Programmation C","Programmation orientée objet","Programmation événementielle","Programmation mobile","Compilation"]}},
      {en:"Databases", fr:"Bases de données", items:{en:["Databases","Database management systems","Database administration","Database development environments"], fr:["Bases de données","Systèmes de gestion de bases de données","Administration des bases de données","Environnements de développement de bases de données"]}},
      {en:"Systems, architectures and distributed computing", fr:"Systèmes, architectures et informatique distribuée", items:{en:["Operating systems","Distributed systems","Distributed architectures and application servers","Service-oriented architectures","Software architectures"], fr:["Systèmes d’exploitation","Systèmes distribués","Architectures distribuées et serveurs d’applications","Architectures orientées services","Architectures logicielles"]}},
      {en:"Information systems, Web and multimedia", fr:"Systèmes d’information, Web et multimédia", items:{en:["Information system design methodologies","Website management","Human–computer interaction","Multimedia development","C2i certification"], fr:["Méthodologies de conception des systèmes d’information","Gestion de sites web","Interaction homme–machine","Développement multimédia","Certification C2i"]}},
      {en:"Artificial intelligence and security", fr:"Intelligence artificielle et sécurité", items:{en:["Artificial intelligence","Computer security"], fr:["Intelligence artificielle","Sécurité informatique"]}}
    ] },
  { en:"Higher Institute of Technological Studies of Jendouba (ISET)", fr:"Institut supérieur des études technologiques de Jendouba (ISET)", when:{en:"2010–2013",fr:"2010–2013"},
    items:{en:["Human–computer interaction","Multimedia development","Event-based programming","Software architectures","Algorithmic and programming","Object-oriented programming"],
           fr:["Interaction homme–machine","Développement multimédia","Programmation événementielle","Architectures logicielles","Algorithmique et programmation","Programmation orientée objet"]} },
  { en:"International University of Tunis", fr:"Université Internationale de Tunis", when:{en:"2014–2017",fr:"2014–2017"},
    items:{en:["Tools for distributed applications","Client–server architectures","XML and Web Technologies","Software development"],
           fr:["Outils pour les applications distribuées","Architectures client–serveur","XML et technologies du Web","Développement logiciel"]} },
  { en:"Central University, Tunis", fr:"Université Centrale, Tunis", when:{en:"2016–2017",fr:"2016–2017"},
    items:{en:["MTA cloud fundamentals","Large-scale data processing"], fr:["Fondamentaux du cloud (MTA)","Traitement de données à grande échelle"]} }
 ]
};

// CV restored with all details of the original CV page.
// [year, icon, en title, fr title, [en details], [fr details]]
const EDU = [
 ["2021","award","Habilitation (accreditation to supervise research) in Computer Science","Habilitation universitaire en informatique",
   ["Jendouba University, Tunisia"],["Université de Jendouba, Tunisie"]],
 ["2014","graduation-cap","PhD in Computer Science","Doctorat en informatique",
   ["Topic: A synergy between Autonomic Computing and Agent Technology for self-adaptive Web services","Defended on January 10, 2014","Distinction: Very Honorable","Doctoral School of Computer Sciences, University of Manouba, Tunisia"],
   ["Sujet : A synergy between Autonomic Computing and Agent Technology for self-adaptive Web services","Soutenu le 10 janvier 2014","Mention : très honorable","École doctorale en sciences informatiques, Université de la Manouba, Tunisie"]],
 ["2005","book-marked","Master in Computer Sciences: Data, Knowledge and Distributed Systems","Mastère en informatique : Données, connaissances et systèmes distribués",
   ["Topic: Feature extraction methods in grid computing environments","Distinction: Very Good","University of Jendouba (Tunisia) in cooperation with INSA de Lyon (France)","Funding: grant from the Ministry of Higher Education and Research, Tunisia"],
   ["Sujet : méthodes d’extraction de caractéristiques dans les environnements de grilles de calcul","Mention : très bien","Université de Jendouba (Tunisie) en coopération avec l’INSA de Lyon (France)","Financement : bourse du ministère de l’Enseignement supérieur et de la Recherche, Tunisie"]],
 ["2004","book-open","Four-year Bachelor in Computer Science (Business Informatics)","Maîtrise en informatique de gestion",
   ["Distinction: Good","Faculty of Law, Economics and Management of Jendouba (Tunisia)"],
   ["Mention : bien","Faculté des sciences juridiques, économiques et de gestion de Jendouba (Tunisie)"]]
];
// [start, end ("" = present, "-" = end date not given), en inst, fr inst, en role, fr role]
const POS = [
 ["2018","-","Taibah University, KSA","Université Taibah, Arabie saoudite","Faculty member","Enseignant-chercheur"],
 ["2014","2016","International University in Tunis","Université Internationale de Tunis","Part-time teacher","Enseignant vacataire"],
 ["2015","","Higher Institute of Management in Tunis","Institut supérieur de gestion de Tunis","Part-time teacher","Enseignant vacataire"],
 ["2013","","University of Jendouba","Université de Jendouba","Associate Professor in Computer Science (Assistant Professor from 2013)","Maître de conférences en informatique (maître assistant à partir de 2013)"],
 ["2010","2013","Higher Institute of Technological Studies of Jendouba","Institut supérieur des études technologiques de Jendouba","Technologist in Computer Science","Technologue en informatique"],
 ["2005","2010","Faculty of Law, Economics and Management of Jendouba","Faculté des sciences juridiques, économiques et de gestion de Jendouba","Teacher in Computer Science","Enseignant en informatique"]
];
const SERVICE = [
 ["Coordinator of the Research Master’s Program in Computer Science (Data, Knowledge, and Distributed Systems).","Coordinateur du mastère de recherche en informatique (Données, connaissances et systèmes distribués)."],
 ["Member of the National Sectoral Committee for ICT, responsible for evaluating and accrediting university training programs within the LMD system.","Membre de la commission sectorielle nationale TIC, chargée de l’évaluation et de l’habilitation des formations universitaires du système LMD."],
 ["Member of the National Sectoral Committee for ICT, responsible for evaluating projects related to university training courses within the LMD system that are proposed for qualification and requalification (since 2026).","Membre de la commission sectorielle nationale TIC, chargée de l’évaluation des projets de formations universitaires du système LMD proposés pour habilitation et réhabilitation (depuis 2026)."],
 ["Member of academic units: E-learning, Scientific research and innovation.","Membre des cellules universitaires : e-learning, recherche scientifique et innovation."],
 ["Member of the scientific council of the Faculty of Law, Economics and Management of Jendouba, Tunisia (since 2014).","Membre du conseil scientifique de la Faculté des sciences juridiques, économiques et de gestion de Jendouba (depuis 2014)."],
 ["Member of the higher education’s quality support program in Tunisia (2016).","Membre du programme d’appui à la qualité de l’enseignement supérieur en Tunisie (2016)."],
 ["Coordinator of the National Academic Center of Scientific and Technical Documentation (CNUDST) at the Higher Institute of Technological Studies of Jendouba, Tunisia (2012–2013).","Coordinateur du Centre national universitaire de documentation scientifique et technique (CNUDST) à l’ISET de Jendouba (2012–2013)."],
 ["Member of the graduation projects and internships unit at the Higher Institute of Technological Studies of Jendouba, Tunisia (2011–2013).","Membre de la cellule projets de fin d’études et stages à l’ISET de Jendouba (2011–2013)."]
];
const OTHER = [
 ["Training Officer with the Independent High Authority for Elections in Tunisia (2014 and 2017).","Formateur auprès de l’Instance supérieure indépendante pour les élections en Tunisie (2014 et 2017)."],
 ["Trainer with the Sylvo-Pastoral Institute in Tabarka (2008), and the National Center for Training-of-Trainers in Tunis (2011).","Formateur à l’Institut sylvo-pastoral de Tabarka (2008) et au Centre national de formation de formateurs à Tunis (2011)."]
];


// Source code: public repositories of https://github.com/agai-research (read on 25 November 2026).
// [repo, display name, icon, GitHub title, en description, fr description, language (checked in each repository), license (not displayed)]
const CODE_ORG = "agai-research";
const CODE = [
 ["SelectFlow","SelectFlow","workflow","Toolkit Composition under Model-Controlled Tool Selection for Cross-Organizational Workflows",
  "Composes, for each task of a cross-organizational workflow, a model host and the toolkit of MCP tools offered to its LLM agent, under coverage, context-budget, data-flow and QoS constraints. Includes the experiments, a web portal and a demo video.",
  "Compose, pour chaque tâche d’un workflow inter-organisationnel, l’hôte du modèle et la boîte à outils MCP proposée à son agent LLM, sous contraintes de couverture, de budget de contexte, de flux de données et de QoS. Comprend les expérimentations, un portail web et une vidéo de démonstration.","Python",""],
 ["EmerKit","EmerKit","graduation-cap","EmerKit: Composing MCP Toolkits for LLM Agents in Learning Workflows",
  "Derives a learning workflow from a learner’s request and equips each task with a small toolkit of MCP tools, accounting for QoS, tool interference, context-window saturation and education-specific data-flow norms. Includes datasets, experiments, an interactive portal and a demo video.",
  "Dérive un workflow d’apprentissage à partir de la demande d’un apprenant et dote chaque tâche d’une petite boîte à outils MCP, en tenant compte de la QoS, de l’interférence entre outils, de la saturation de la fenêtre de contexte et des normes de flux de données propres à l’éducation. Comprend les jeux de données, les expérimentations, un portail interactif et une vidéo de démonstration.","Python",""],
 ["daas-gc","DaaS-GC","plane","Partitioning the Sky: A Region-based Graph Clustering Approach for the Composition of UAV Delivery Services",
  "Region-based graph clustering of a skyway network, A*-based delivery path search over the partitions and drone formation selection, with scripts that reproduce every figure of the article.",
  "Partitionnement par clustering de graphe d’un réseau de couloirs aériens, recherche de trajets de livraison par A* sur les partitions et sélection de la formation de drones, avec les scripts qui reproduisent toutes les figures de l’article.","Python",""],
 ["HyFragComp","HyFragComp","landmark","Evolving Reuse of LLM-Composed Service Workflows for Smart Governance",
  "A reuse layer for LLM-composed service workflows over a hypergraph of process fragments, applied to public-service procedures: stored compositions are aligned, re-validated, and only the difference is recomposed by GraphRAG.",
  "Couche de réutilisation des workflows de services composés par LLM sur un hypergraphe de fragments de processus, appliquée aux procédures de services publics : les compositions mémorisées sont alignées et revalidées, et seule la différence est recomposée par GraphRAG.","Python",""],
 ["SmartGovEvoFrag","SmartGovEvoFrag","landmark","Evolving Reuse of LLM-Composed Service Workflows for Smart Governance",
  "Earlier repository of the same approach, running the eight LLM roles on a local rule-and-embedding engine.",
  "Dépôt antérieur de la même approche, dans lequel les huit rôles LLM s’exécutent sur un moteur local à base de règles et de plongements.","Python",""],
 ["HyFRAC","HyFRAC","network","Agentic GraphRAG with Neuro-Symbolic Reasoning over Service Hypergraphs for Fragment-Based Smart Applications",
  "A hypergraph-based, fragment-reusing agentic pipeline with neuro-symbolic filtering that composes smart-service applications from free-text requests.",
  "Pipeline agentique fondé sur un hypergraphe et la réutilisation de fragments, avec filtrage neuro-symbolique, qui compose des applications de services intelligents à partir de requêtes en texte libre.","Python",""],
 ["uhkg-rec","UHKG-Rec","heart-pulse","Enhancing Service Recommendation in Smart Healthcare Networks via Pattern-driven Probabilistic Representation Learning",
  "Builds a healthcare knowledge graph, mines requirement and service patterns and learns probabilistic meta-path embeddings to recommend treatment plans, with KGAT and CAGE baselines.",
  "Construit un graphe de connaissances de santé, extrait des motifs de besoins et de services et apprend des plongements probabilistes guidés par méta-chemins pour recommander des plans de traitement, avec les références KGAT et CAGE.","Python",""],
 ["dpos-ncgt-iotconf","DPoS-NCGT","scale","Decentralized Conflict Resolution in IoT-enabled Smart Environments via Delegated Proof of Stake and Non-Cooperative Game Theory",
  "Conflict-aware clustering of IoT devices, Delegated Proof of Stake election and non-cooperative game negotiation to resolve conflicts in smart environments, compared with the APCR and DCR methods.",
  "Clustering des objets IoT tenant compte des conflits, élection par Delegated Proof of Stake et négociation par théorie des jeux non coopératifs pour résoudre les conflits dans les environnements intelligents, comparés aux méthodes APCR et DCR.","Python",""],
 ["LLM-DMCRO","LLM-DMCRO","atom","An LLM-Guided Dual-Molecular Optimization Approach for the Generation of Smart Learning Workflows",
  "LLM agents derive abstract learning workflows checked by external critics; a dual-molecular Chemical Reaction Optimization then binds a service and a resource to every activity.",
  "Des agents LLM dérivent des workflows d’apprentissage abstraits vérifiés par des critiques externes ; une optimisation par réactions chimiques à double molécule associe ensuite un service et une ressource à chaque activité.","Python",""],
 ["3wca-iotsc","3WCA-IoTSC","shield-check","A 3-Way Conflict Analysis Model for Trustworthy ICPS Applications",
  "Three-way conflict analysis of the stances of service providers towards shared IoT resources, used to build the best non-conflicting IoT service composition, with an application to smart education.",
  "Analyse des conflits à trois voies des positions des fournisseurs de services envers les ressources IoT partagées, utilisée pour construire la meilleure composition de services IoT sans conflit, avec une application à l’éducation intelligente.","Python",""],
 ["trust-mpgnn","Trust-MPGNN","waypoints","Conflict-aware Composition of IoT Services: an Approach based on MetaPath-Guided Trust Learning",
  "Builds a trust knowledge graph of ICPS entities, learns trust and conflict relations with a metapath-guided GNN and composes trustworthy, non-conflicting IoT services.",
  "Construit un graphe de connaissances de confiance entre entités ICPS, apprend les relations de confiance et de conflit avec un GNN guidé par méta-chemins et compose des services IoT fiables et sans conflit.","Python",""],
 ["daas-kge","DaaS-KGE","route","Drone-as-a-Service: Proximity-aware Composition of UAV-based Delivery Services",
  "Repository of the Drone-as-a-Service approach for the proximity-aware composition of UAV delivery services.",
  "Dépôt de l’approche Drone-as-a-Service pour la composition de services de livraison par drone tenant compte de la proximité.","Python",""]
];
// Other repositories (not implementations of an approach)
const CODE_OTHER = [
 ["graphai4fis","GraphAI4FIS","globe","International Workshop on GraphAI for Future Intelligent Systems",
  "Website of the GAI4FIS workshop held with IEEE ICDE 2026.",
  "Site web du workshop GAI4FIS organisé avec IEEE ICDE 2026.","HTML",""]
];

/* Publications: [year, kind, authors, title, venue, url, topics]
   kind: j = journal or editorial, c = conference or workshop paper, ch = book chapter
   topics: assigned by hand (comment P1): comp, reco, cloud, adapt, bigdata, kg, smart, uav */
const P = [
[2026,"j","Jaber Kouki, Haithem Mezni, Shiyam Alalmaei, Hela Elmannai","Decentralized Conflict Resolution in IoT-Enabled Smart Environments via Delegated Proof of Stake and Non-Cooperative Game Theory","Journal of Network and Systems Management, Springer (to appear)","",["smart"]],
[2026,"j","Mouhamed Gaith Ayadi, Haithem Mezni, Shiyam Alalmaei, Hela Elmannai","Enhancing Service Recommendation in Smart Healthcare Networks via Pattern-driven Probabilistic Representation Learning","Expert Systems, Wiley","https://onlinelibrary.wiley.com/doi/10.1111/exsy.70389",["reco","smart"]],
[2026,"j","Haithem Mezni, Mahmoud Barhamgi, Wenqi Fan, Xiangliang Zhang, Chirine Ghedira","Introduction to the Special Issue on Web for Good","ACM Transactions on the Web, ACM","https://dl.acm.org/doi/10.1145/3837870",[]],
[2026,"j","Fedia Ghedass, Haithem Mezni, Maali Alabdulhafith, Hela Elmannai","Conflict-aware Composition of IoT Services: an Approach based on MetaPath-Guided Trust Learning","Software: Practice and Experience, Wiley","https://onlinelibrary.wiley.com/doi/10.1002/spe.70100",["comp","smart"]],
[2025,"j","Haithem Mezni, Mokhtar Sellami, Abeer Algarni, Hela Elmannai","CrossRecSmart: A Cross-Network Anchor-Based Representation Learning for the Recommendation of Smart Services","Journal of Supercomputing, Springer","https://link.springer.com/article/10.1007/s11227-025-07950-z",["reco","smart"]],
[2025,"j","Haithem Mezni, Zaki Brahmi, Hela Elmannai, Reem Alkanhel","Connected Vehicle as a Service: Multi-modal Selection of Transportation Services with Composite Particle Swarm Optimization","Soft Computing, Springer (accepted)","",["comp","smart"]],
[2025,"j","Zaki Brahmi, Haithem Mezni, Hela Elmannai, Reem Ibrahim Alkanhel","Multi-modal VaaS Selection in Smart Mobility Networks via Spectral Hyper-graph Clustering and Quantum-driven Optimization","Concurrency and Computation: Practice and Experience, Wiley (accepted)","",["comp","smart"]],
[2025,"j","Haithem Mezni, Mokhtar Sellami, Hela Elmannai, Reem Ibrahim Alkanhel","Federated Resource Prediction in UAV Networks for Efficient Composition of Drone Delivery Services","Computer Networks, 271, 111642, Elsevier","https://www.sciencedirect.com/science/article/pii/S1389128625006097",["uav","comp"]],
[2025,"j","Mouhamed Gaith Ayadi, Haithem Mezni, Hela Elmannai, Reem Ibrahim Alkanhel","Privacy-Preserving Cross-network Service Recommendation via Federated Learning of Unified User Representations","Data & Knowledge Engineering, Elsevier","https://www.sciencedirect.com/science/article/pii/S0169023X25000175",["reco"]],
[2025,"j","Haithem Mezni, Mokhtar Sellami, Hela Elmannai, Reem Alkanhel","DaaS Composition: Enhancing UAV Delivery Services via LSTM-based Resource Prediction and Flight Patterns Mining","Computing, Springer","https://link.springer.com/article/10.1007/s00607-025-01417-y",["uav","comp"]],
[2024,"j","Mokhtar Sellami, Haithem Mezni, Hela Elmannai, Reem Alkanhel","Drone-as-a-Service: Proximity-aware Composition of UAV-based Delivery Services","Cluster Computing, Springer","https://link.springer.com/article/10.1007/s10586-024-04992-5",["uav","comp"]],
[2024,"j","Haithem Mezni, Hiba Yahyaoui, Hela Elmannai, Reem Ibrahim Alkanhel","Personalized Service Recommendation in Smart Mobility Networks","Cluster Computing, Springer","https://link.springer.com/article/10.1007/s10586-024-04694-y",["reco","smart"]],
[2024,"j","Mouhamed Gaith Ayadi, Haithem Mezni","Enabling Configurable Workflows in Smart Environments with Knowledge-based Process Fragment Reuse","Journal of Grid Computing, Springer","https://link.springer.com/article/10.1007/s10723-024-09763-5",["comp","kg","smart"]],
[2024,"j","Haithem Mezni, Mokhtar Sellami, Amal Al-Rasheed, Hela Elmannai","Cross-network Service Recommendation in Smart Cities","Concurrency and Computation: Practice and Experience, e8063, Wiley","https://onlinelibrary.wiley.com/doi/10.1002/cpe.8063",["reco","smart"]],
[2024,"j","Ameni Hedhli, Haithem Mezni, Lamjed Ben Said","BPaaS Placement over Optimum Cloud Availability Zones","Cluster Computing, 1–21, Springer","https://link.springer.com/article/10.1007/s10586-023-04186-5",["cloud"]],
[2023,"j","Mouhamed Gaith Ayadi, Haithem Mezni, Rana Alnashwan, Hela Elmannai","Effective Healthcare Service Recommendation with Network Representation Learning: a Recursive Neural Network Approach","Data & Knowledge Engineering, 148, Elsevier","https://www.sciencedirect.com/science/article/abs/pii/S0169023X23000939",["reco","smart"]],
[2023,"j","Maha Driss, Wadii Boulila, Haithem Mezni, Mokhtar Sellami, Safa Ben Atitallah, Nouf Alharbi","An Evidence Theory Based Embedding Model for the Management of Smart Water Environments","Sensors, 23(10), 4672, MDPI","https://www.mdpi.com/1424-8220/23/10/4672",["smart","kg"]],
[2023,"j","Haithem Mezni","Web Service Adaptation: a Decade’s Overview","Computer Science Review, 48, 100535, Elsevier","https://www.sciencedirect.com/science/article/abs/pii/S1574013723000023",["adapt"]],
[2022,"j","Wissem Inoubli, Sabeur Aridhi, Haithem Mezni, Mondher Maddouri, Engelbert Mephu Nguifo","A Distributed and Incremental Algorithm for Large-Scale Graph Clustering","Future Generation Computer Systems, Elsevier","https://www.sciencedirect.com/science/article/pii/S0167739X22001376",["bigdata"]],
[2022,"j","Haithem Mezni, Maha Driss, Wadii Boulila, Safa Ben Atitallah, Mokhtar Sellami, Nouf Alharbi","A Service-oriented and Sensor Cloud-based Framework for Smart Monitoring of Water Environments","Remote Sensing, 14(4), 922, MDPI","https://www.mdpi.com/2072-4292/14/4/922",["smart","cloud"]],
[2022,"j","Haithem Mezni, Fatimetou Sidi Hamoud, Faouzi Ben Charrada","Predictive Service Placement in Cloud using Deep Learning and Frequent Subgraph Mining","Journal of Ambient Intelligence and Humanized Computing, Springer","https://link.springer.com/article/10.1007/s12652-022-03720-4",["cloud","bigdata"]],
[2022,"j","Ameni Hedhli, Haithem Mezni, Lamjed Ben Said","Predictive BPaaS Management with Quantum and Neural Computing","Journal of Software: Evolution and Process, Wiley","https://onlinelibrary.wiley.com/doi/10.1002/smr.2421",["cloud"]],
[2021,"j","Haithem Mezni, Mokhtar Sellami, Sabeur Aridhi, Faouzi Ben Charrada","Towards Big Services: A Synergy Between Service Computing and Parallel Programming","Computing, Springer","https://link.springer.com/article/10.1007/s00607-021-00999-7",["bigdata","comp"]],
[2021,"j","Ameni Hedhli, Haithem Mezni","A Survey of Service Placement in Cloud Environments","Journal of Grid Computing, 19(3), Springer","https://link.springer.com/article/10.1007/s10723-021-09565-z",["cloud"]],
[2021,"j","Mokhtar Sellami, Haithem Mezni, Mohand-Said Hacid, Mohamed Mohsen Gammoudi","Clustering-based Data Placement in Cloud Computing: a Predictive Approach","Cluster Computing, Springer","https://link.springer.com/article/10.1007/s10586-021-03332-1",["cloud"]],
[2021,"j","Haithem Mezni","Temporal Knowledge Graph Embedding for Effective Service Recommendation","IEEE Transactions on Services Computing","https://ieeexplore.ieee.org/document/9411699",["reco","kg"]],
[2021,"j","Haithem Mezni, Djamal Benslimane, Ladjel Bellatreche","Context-aware Service Recommendation based on Knowledge Graph Embedding","IEEE Transactions on Knowledge and Data Engineering","https://ieeexplore.ieee.org/document/9354956",["reco","kg"]],
[2021,"j","Fatma Lahmar, Haithem Mezni","Security-aware Multi-cloud Service Composition by Exploiting Rough Sets and Fuzzy FCA","Journal of Soft Computing, Springer","http://links.springernature.com/f/a/FI-T4bvHYb93BrxuUdvX8w~~/AABE5gA~/RgRh1veTP0QwaHR0cDovL3d3dy5zcHJpbmdlci5jb20vLS8yL0FYYllCZWEyNTh5YXNfWm12eUtJVwNzcGNCCl_rE8T1X2YJTB9SF2hhaXRoZW0ubWV6bmlAZ21haWwuY29tWAQAAAbn",["comp","cloud"]],
[2020,"j","Mokhtar Sellami, Haithem Mezni, Mohand-Said Hacid","On the Use of Big Data Frameworks for Big Service Composition","Journal of Network and Computer Applications, Elsevier","https://doi.org/10.1016/j.jnca.2020.102732",["bigdata","comp"]],
[2020,"j","Mohamed Gharbi, Haithem Mezni","Towards Big Services Composition","International Journal of Web and Grid Services, 16(4), 393–421, Inderscience","https://www.inderscienceonline.com/doi/abs/10.1504/IJWGS.2020.110946",["bigdata","comp"]],
[2020,"j","Souad Ghazouani, Haithem Mezni, Yahia Slimani","Bringing Semantics to Multi-cloud Service Compositions","Software: Practice and Experience, 50(4), 447–469, Wiley","https://onlinelibrary.wiley.com/doi/abs/10.1002/spe.2789",["comp","cloud","kg"]],
[2020,"j","Mayssa Fayala, Haithem Mezni","Web Service Recommendation based on Time-aware Users Clustering and Multi-valued QoS Prediction","Concurrency and Computation: Practice and Experience, 32(9), e5603, Wiley","https://onlinelibrary.wiley.com/doi/abs/10.1002/cpe.5603",["reco"]],
[2019,"j","Allel Hadjali, Haithem Mezni, Sabeur Aridhi, Andrei Tchernykh","Special Issue on Uncertainty in Cloud Computing: Concepts, Challenges and Current Solutions (editorial)","International Journal of Approximate Reasoning, Elsevier","https://www.sciencedirect.com/science/article/abs/pii/S0888613X19302890",["cloud"]],
[2018,"j","Ameni Hedhli, Haithem Mezni","A DFA-based Approach for the Deployment of BPaaS Fragments in the Cloud","Concurrency and Computation: Practice and Experience, Wiley","https://onlinelibrary.wiley.com/doi/10.1002/cpe.5075",["cloud"]],
[2018,"j","Tarek Mahdhi, Haithem Mezni","A Prediction-based VM Consolidation Approach in IaaS Cloud Data Centers","Journal of Systems and Software, 146, Elsevier","https://doi.org/10.1016/j.jss.2018.09.083",["cloud"]],
[2018,"j","Haithem Mezni, Sofiane Ait Arab, Djamal Benslimane, Karim Benouaret","An Evolutionary Clustering Approach based on Temporal Aspects for Context-aware Service Recommendation","Journal of Ambient Intelligence and Humanized Computing, Springer","https://link.springer.com/article/10.1007/s12652-018-1079-6",["reco"]],
[2018,"j","Haithem Mezni, Sabeur Aridhi, Allel Hadjali","The Uncertain Cloud: State of the Art and Research Challenges","International Journal of Approximate Reasoning, Elsevier","https://www.sciencedirect.com/science/article/pii/S0888613X18300574",["cloud"]],
[2018,"j","Haithem Mezni, Taher Abdeljaouad","A Cloud Services Recommendation System Based on Fuzzy Formal Concept Analysis","Data & Knowledge Engineering, 116, 100–123, Elsevier","https://www.sciencedirect.com/science/article/pii/S0169023X17304664",["reco","cloud"]],
[2018,"j","Haithem Mezni, Mayssa Fayala","Time-aware Service Recommendation: Taxonomy, Review and Challenges","Software: Practice and Experience, Wiley","https://doi.org/10.1002/spe.2605",["reco"]],
[2018,"j","Wissem Inoubli, Sabeur Aridhi, Haithem Mezni, Mondher Maddouri, Engelbert Mephu Nguifo","An Experimental Survey on Big Data Frameworks","Future Generation Computer Systems, 86, 546–564, Elsevier","https://www.sciencedirect.com/science/article/pii/S0167739X17327450",["bigdata"]],
[2018,"j","Haithem Mezni, Mariem Kbekbi","Reusing Process Fragments for Fast Service Composition: a Clustering-based Approach","Enterprise Information Systems, pp. 1–29, Taylor & Francis","https://www.tandfonline.com/doi/abs/10.1080/17517575.2018.1460866",["comp"]],
[2018,"j","Haithem Mezni, Mokhtar Sellami","A Negotiation-based Service Selection Approach Using Swarm Intelligence and Kernel Density Estimation","Software: Practice and Experience, Wiley","https://onlinelibrary.wiley.com/doi/abs/10.1002/spe.2575",["comp"]],
[2018,"j","Fatma Lahmar, Haithem Mezni","Multi-cloud Service Composition: a Survey of Current Approaches and Issues","Journal of Software: Evolution and Process, Wiley","https://onlinelibrary.wiley.com/doi/abs/10.1002/smr.1947",["comp","cloud"]],
[2018,"j","Haithem Mezni, Mokhtar Sellami, Jaber Kouki","Security-aware SaaS Placement using Swarm Intelligence","Journal of Software: Evolution and Process, Wiley","https://onlinelibrary.wiley.com/doi/10.1002/smr.1932",["cloud"]],
[2017,"j","Haithem Mezni, Mokhtar Sellami","Multi-cloud Service Composition using Formal Concept Analysis","Journal of Systems and Software, 134, 138–152, Elsevier","https://www.sciencedirect.com/science/article/pii/S0164121217301760",["comp","cloud"]],
[2017,"j","Mohamed Amin Hajji, Haithem Mezni","A Composite Particle Swarm Optimization Approach for the Composite SaaS Placement in Cloud Environment","Soft Computing, 22(12), 4025–4045, Springer","https://link.springer.com/article/10.1007/s00500-017-2613-8",["cloud"]],
[2014,"j","Haithem Mezni, Walid Chainbi, Khaled Ghedira","Extending Policy Languages for Expressing the Self-adaptation of Web Services","Journal of Universal Computer Science, 20(8), 1130–1151","http://www.jucs.org/jucs_20_8/extending_policy_languages_for",["adapt"]],
[2012,"j","Walid Chainbi, Haithem Mezni, Khaled Ghedira","AFAWS: An Agent-Based Framework for Autonomic Web Services","Multiagent and Grid Systems, 8(1), 45–68, IOS Press","https://dl.acm.org/citation.cfm?id=2595136",["adapt"]],
[2025,"c","Hana Derouiche, Zaki Brahmi, Haithem Mezni","Agentic AI Frameworks: Architectures, Protocols, and Design Challenges","ACS/IEEE 22nd International Conference on Computer Systems and Applications (AICCSA), Special Track: Agentic AI for Stream and Service-based Systems (AA2S), Qatar","",[]],
[2023,"c","Haithem Mezni, Djamal Benslimane, Ladjel Bellatreche","Context-aware Service Recommendation based on Knowledge Graph Embedding (extended abstract)","39th IEEE International Conference on Data Engineering (ICDE 2023), TKDE poster track","https://ieeexplore.ieee.org/document/9354956",["reco","kg"]],
[2021,"c","Ameni Hedhli, Haithem Mezni, Lamjed Ben Said","A Quantum-Inspired Neural Network Model for Predictive BPaaS Management","32nd International Conference on Database and Expert Systems Applications (DEXA 2021)","",["cloud"]],
[2018,"c","Wissem Inoubli, Sabeur Aridhi, Haithem Mezni, Mondher Maddouri, Engelbert Mephu Nguifo","A Comparative Study on Streaming Frameworks for Big Data","VLDB 2018, 44th International Conference on Very Large Data Bases: Workshop LADaS, Latin American Data Science, pp. 1–8","https://hal.inria.fr/hal-01835437/",["bigdata"]],
[2017,"c","Wissem Inoubli, Sabeur Aridhi, Haithem Mezni, Mondher Maddouri, Engelbert Mephu Nguifo","An Experimental Survey on Big Data Frameworks","Extremely Large Databases Conference (XLDB 2017)","https://members.loria.fr/SAridhi/wp-content/blogs.dir/125/files/sites/125/2017/10/Inoubli-et-al-XLDB-poster.pdf",["bigdata"]],
[2017,"c","Haithem Mezni","A Multi-recommender System for Service Provisioning in Multi-cloud Environment","28th International Workshop on Database and Expert Systems Applications (DEXA Workshops), 142–146, IEEE","https://ieeexplore.ieee.org/document/8049703/",["reco","cloud"]],
[2017,"c","Haithem Mezni, Jaber Kouki","A Multi-swarm based Approach with Cooperative Learning Strategy for Composite SaaS Placement","32nd International Symposium on Applied Computing (SAC 2017), pp. 399–404, ACM","https://dl.acm.org/citation.cfm?id=3019612.3019632",["cloud"]],
[2016,"c","Jaber Kouki, Haithem Mezni","Semantic QoS Synchronization of Web Services","IEEE International Symposium on Networks, Computers and Communications (ISNCC 2016), 1–6","https://ieeexplore.ieee.org/document/7746060/",["kg"]],
[2015,"c","Haithem Mezni, Mokhtar Sellami","AWS-Ont: an Ontology for the Self-management of Service-based Systems","8th IEEE International Conference on Service-Oriented Computing and Applications (SOCA 2015)","https://ieeexplore.ieee.org/document/7399096/",["adapt","kg"]],
[2014,"c","Haithem Mezni","Towards Trustworthy Service Adaptation: An Ontology-based Cross-layer Approach","5th IEEE International Conference on Software Engineering and Service Sciences (ICSESS 2014), Beijing, China","https://ieeexplore.ieee.org/document/6933520/",["adapt","kg"]],
[2012,"c","Haithem Mezni, Walid Chainbi, Khaled Ghedira","AWS-Policy: an Extension for Autonomic Web Service Description","International Workshop on Adaptation of Web Services, Niagara Falls, Ontario, Canada, Procedia Computer Science","https://www.sciencedirect.com/science/article/pii/S1877050912004796",["adapt"]],
[2011,"c","Haithem Mezni, Walid Chainbi, Khaled Ghedira","An Autonomic Registry-Based SOA Model","IEEE International Conference on Service-Oriented Computing and Applications (SOCA 2011), 1–4","https://ieeexplore.ieee.org/document/6166265/",["adapt"]],
[2010,"ch","Walid Chainbi, Haithem Mezni, Khaled Ghedira","An Autonomic Computing Architecture for Self-* Web Services","Autonomic Computing and Communications Systems, Vol. 23, pp. 252–267, Springer","https://link.springer.com/chapter/10.1007/978-3-642-11482-3_17",["adapt"]],
[2010,"c","Walid Chainbi, Haithem Mezni, Khaled Ghedira","PECoDiM: An Agent Based Framework for Autonomic Web Services","6th World Congress on Services, 543–550, IEEE","https://ieeexplore.ieee.org/document/5575480/",["adapt"]],
[2006,"c","Chirine Ghedira, Haithem Mezni","Through Personalized Web Service Composition Specification: From BPEL to C-BPEL","Electronic Notes in Theoretical Computer Science, 146(1), 117–132","http://ac.els-cdn.com/S1571066106000181/1-s2.0-S1571066106000181-main.pdf?_tid=b0fb2b34-9246-11e7-9655-00000aab0f27&acdnat=1504621977_44fbb926d6097f20b0fb859301751245",["comp"]]
];

// Research map topics (comment P2: graph mining separated from knowledge graphs)
const TOPICS = [
 {id:"adapt", en:"Self-adaptive services", fr:"Services auto-adaptatifs", x:250, y:58},
 {id:"reco", en:"Recommendation", fr:"Recommandation", x:100, y:150},
 {id:"cloud", en:"Cloud computing", fr:"Cloud computing", x:415, y:90},
 {id:"comp", en:"Service composition", fr:"Composition de services", x:262, y:206},
 {id:"bigdata", en:"Big data and graph mining", fr:"Big data et fouille de graphes", x:452, y:214},
 {id:"kg", en:"Knowledge graphs and semantics", fr:"Graphes de connaissances et sémantique", x:100, y:300},
 {id:"smart", en:"Smart environments and IoT", fr:"Environnements intelligents et IoT", x:268, y:345},
 {id:"uav", en:"Drone delivery", fr:"Livraison par drone", x:445, y:330}
];
const EDGES = [["comp","reco"],["comp","cloud"],["comp","adapt"],["comp","smart"],["comp","uav"],["comp","bigdata"],["reco","kg"],["reco","smart"],["reco","cloud"],["cloud","bigdata"],["cloud","adapt"],["smart","uav"],["kg","smart"],["kg","adapt"]];

module.exports = { CODE_ORG, CODE, CODE_OTHER, NEWS_VISIBLE, LINKS, CONTACT, BIO, NEWS, AREAS, PROJECTS, EDITING, EVENTS, REVIEW, PHD, MSC, TEACH, EDU, POS, SERVICE, OTHER, P, TOPICS, EDGES };
