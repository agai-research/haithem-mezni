# Journal des modifications

## Version 6

### Corrections demandées

- **Page Code** :
  - suppression de la section « Other repositories » (site du workshop GraphAI4FIS), aussi retirée des données structurées de la page ;
  - suppression de l’affichage des licences ;
  - langage indiqué : Python pour toutes les implémentations, après vérification du contenu de chaque dépôt. SelectFlow et EmerKit étaient affichés en HTML, car GitHub retenait leur portail web ; Trust-MPGNN était affiché en Jupyter Notebook ; DaaS-KGE n’avait aucun langage, car son code est dans un notebook Google Colab dont le lien figure dans le dépôt.
- **Bouton de luminosité** : supprimé de l’en-tête, avec le script qui mémorisait le choix. Le site suit toujours automatiquement le mode clair ou sombre de l’appareil.
- **Lien « Home » / « Accueil »** : le lien pointait vers le dossier (`./`), ce qui fonctionnait sur un serveur mais ouvrait la liste des fichiers lorsque les pages étaient consultées en local. Il pointe maintenant vers `index.html`, de même que le logo, les liens de langue et la redirection de la page racine.

### Vérifications

- **Liens internes** : les liens des 14 pages ont été vérifiés (menus, logo, langue, ancres, tuiles), sans aucun lien cassé ni lien vers un dossier. Les 13 liens GitHub répondent correctement. Les liens externes vers les éditeurs et les conférences proviennent de votre site d’origine et ne pouvaient pas être testés depuis cet environnement.
- **Standards et indexation** : HTML valide sur toutes les pages. Lighthouse obtient 100 en SEO, accessibilité et bonnes pratiques sur ordinateur et sur mobile. En performance : 98 à 100 sur mobile et 100 sur ordinateur.
- **Responsive design** : 14 pages testées à 9 largeurs d’écran (smartphones de 320 à 414 px, tablettes de 768 à 1024 px, écrans de 1280 et 1440 px), sans aucun débordement horizontal. Deux ajustements : le contenu BibTeX replié ne déborde plus de l’écran, et la carte de recherche est plus grande sur tablette pour que ses libellés restent lisibles.
- **Accessibilité** : les nœuds de la carte de recherche ont un nom accessible identique à leur texte visible.

## Version 5

### Corrections demandées

- **Numéros spéciaux** : « Web for Good » renvoie à https://dl.acm.org/doi/10.1145/3837870 et « AI and Data Science for Secure Societies » à https://link.springer.com/collections/eceebjbhbd (Recherche > Numéros spéciaux, et actualité correspondante sur l’accueil). L’actualité « Web for Good » garde son lien vers l’appel à contributions, puisqu’elle annonce cet appel.
- **Icônes réelles** : logos officiels de Google Scholar, DBLP, ORCID et GitHub dans le pied de page, de Gmail et WhatsApp sur la page Contact, de GitHub sur la page Code (icônes Simple Icons, intégrées au site, sans chargement externe).
- **Recherche** : liens retirés des axes « Web services » et « Cloud computing » ; ajout de l’axe « Agentic AI / IA agentique », repris aussi dans les thèmes de l’accueil.
- **CV** : suppression du second lien Google Drive.
- **Nouvelle page « Code » / « Codes »** : les 13 dépôts publics de github.com/agai-research, présentés en cartes de style GitHub. Chaque carte comporte une icône représentant l’approche, le nom de l’approche, le chemin du dépôt, le titre de l’article, une courte description rédigée d’après le README du dépôt, le langage, la licence, le lien vers le code source et, si l’article est publié, le lien vers l’article. Le site de workshop GraphAI4FIS est présenté à part. Un bouton renvoie vers votre espace GitHub, également ajouté au pied de page.

### Audit d’indexation et de performance

Les 14 pages ont été vérifiées par un validateur HTML (aucune erreur), un contrôle des liens internes (aucun lien cassé) et Lighthouse en mode mobile (accueil : performances 92, accessibilité 100, bonnes pratiques 100, SEO 100 ; publications et code : performances 98 et 100, autres catégories 100).

Améliorations apportées :

- **Données structurées** : ProfilePage et Person (accueil), liste d’articles ScholarlyArticle (publications), liste SoftwareSourceCode (code), fil d’Ariane sur chaque page.
- **Métadonnées** : descriptions de l’accueil raccourcies sous 160 caractères ; titre ajouté à la page racine ; liens internes vers l’accueil harmonisés avec l’adresse canonique.
- **Icônes et manifeste** : icônes PNG pour les navigateurs et les écrans d’accueil iOS et Android, ainsi qu’un manifeste web.
- **Compatibilité GitHub Pages** : fichier `.nojekyll` (publication directe, sans traitement Jekyll), page 404 avec liens absolus, compatible avec une adresse de projet.
- **Accessibilité** : le nom accessible du bouton de langue reprend son texte visible.
- **Adresse du site** : script `set-site-url.py` pour inscrire l’adresse réelle en une commande. Le README détaille le choix du dépôt GitHub et l’indexation dans Google Search Console et Bing.

## Version 4 : corrections demandées

### Contenu restauré

J’ai comparé chaque page du site avec votre site Google d’origine et restauré tout ce qui avait été supprimé ou raccourci.

- **Accueil** : biographie complète d’origine (revues, éditeur invité, co-présidences, liens Google Scholar et DBLP) et les 25 actualités d’origine. Les 8 plus récentes sont affichées, les autres s’ouvrent en un clic. Les années que j’avais ajoutées aux actualités sont retirées, car elles ne figuraient pas sur votre site.
- **Recherche** : intitulés et descriptions d’origine des axes de recherche, avec leurs liens. Titres complets des projets. Descriptions complètes des événements, dont les dates et lieux de BigServices, UCC 2017 et UCC 2018. WISE 2024 (deux rôles) et ASD 2017 / BDASP4IoT’17 sont à nouveau séparés. Les 19 revues et conférences d’expertise sont listées sous leur nom d’origine.
- **Publications** : les deux catégories d’origine sont rétablies (articles de revues et éditoriaux / chapitres et communications). Le résumé étendu ICDE 2023 et le poster XLDB 2017 reprennent leur place parmi les communications, et le titre XLDB redevient celui d’origine. Le compteur indique à nouveau 63 publications. Sont aussi rétablis les liens des articles Soft Computing 2021 et C-BPEL 2006, la mention « accepted » des deux articles sans lien, ainsi que les pages et lieux manquants (BPaaS Placement, EIS, AICCSA, VLDB, ICSESS, AWS-Policy, chapitre 2010).
- **Enseignement** : liste complète des cours de l’Université de Jendouba (2005–2018), y compris les cours que j’avais retirés comme doublons. Les dates de l’Université Internationale de Tunis redeviennent 2014–2017, comme sur votre page d’origine.
- **CV** : détails d’origine de la formation (sujets, mentions, date de soutenance, financement), second lien Google Drive, deux lignes distinctes pour la commission sectorielle TIC, deux lignes distinctes pour les autres activités.

### Corrections

- **Enseignements actuels** : seule l’Université de Jendouba est indiquée comme actuelle. L’ISET et l’Université Taibah sont classés parmi les enseignements passés ; pour Taibah, seule l’année de début (2018) est indiquée.
- **CV** : le poste à Taibah n’est plus indiqué « en cours ».
- **Doctorants** : ajout de vos quatre doctorants (nom, sujet, année universitaire 2025–2026), d’après leurs rapports d’avancement.
- **Google Scholar** : le lien ouvre la liste des publications triée par année décroissante (anglais ou français selon la version du site).

### Suppressions demandées

- **Accueil** : bouton « Download CV » et mention « PhD (2014) and Habilitation (2021) in Computer Science ». Le lien vers le CV est aussi retiré du pied de page, qui apparaît sur l’accueil. Il reste disponible sur la page CV, son emplacement d’origine.
- **Publications** : texte d’introduction.
- **Contact** : adresse postale, texte d’introduction, phrase sur FormSubmit et case de consentement avec son texte.

### Formulaire de contact

Le formulaire envoie un POST standard à FormSubmit vers haithem.mezni@fsjegj.rnu.tn. Après l’envoi, le visiteur revient sur la page Contact, qui affiche une confirmation. Ce fonctionnement est compatible avec GitHub Pages. L’envoi a été vérifié en simulant la réponse de FormSubmit : champs transmis, objet de l’email, retour sur la page et message de confirmation. Il reste une étape à faire une seule fois après la mise en ligne : envoyer un premier message, puis cliquer sur le lien d’activation reçu de FormSubmit.

### Mise en page plus compacte

L’interligne est réduit et les marges, les cartes et les listes sont resserrées. Sur grand écran, plusieurs sections passent sur deux colonnes : présentation et chiffres clés, projets, événements, doctorants, carte et filtres des publications, coordonnées et formulaire. Chaque publication occupe désormais trois lignes au lieu de cinq.

---

## Version 3 : application de l’analyse critique (historique)

Chaque changement apporté au site est rattaché à un commentaire de l’analyse critique (Analyse_critique_site_web.docx). Les commentaires non appliqués sont listés avec leur raison. Aucune information nouvelle n’a été ajoutée sans venir de vous.

## Changements demandés directement

- **Nouveau thème** : couleur bordeaux, polices Bricolage Grotesque et Figtree hébergées avec le site, mise en page à en-tête horizontal (fin de la colonne latérale et de la barre d’onglets mobile), modes clair et sombre.
- **Photo** : votre photo remplace le monogramme « HM » (en-tête, page d’accueil, aperçu de partage).

## Structure générale

| N° | Statut | Ce qui a été fait / raison |
|---|---|---|
| G1 | Appliqué | Chaque page est un fichier HTML statique lisible sans JavaScript ; le script ne sert qu’aux filtres, au thème et au formulaire. |
| G2 | Appliqué | Un fichier par page, avec titre et description propres. |
| G3 | Appliqué | Versions sous `/en/` et `/fr/`, balises `hreflang`, `sitemap.xml` bilingue. |
| G4 | Appliqué | Icônes intégrées dans chaque page (sprite SVG), plus de CDN. |
| G5 | Appliqué | Polices hébergées avec le site et préchargées. |
| G6 | Appliqué | Votre photo, optimisée en WebP (9 Ko). |
| G7 | Appliqué | Colonne latérale supprimée : le nom n’apparaît plus qu’une fois dans le bandeau d’accueil, en plus de l’en-tête. |
| G8 | Appliqué | Les profils (Scholar, DBLP, ORCID, CV) sont regroupés dans le pied de page. |
| G9 | Appliqué | Barre d’onglets remplacée par un menu défilant, libellés complets. |
| G10 | Appliqué | Pied de page traduit. |
| G11 | Appliqué | Tous les libellés d’accessibilité sont traduits. |
| G12 | Appliqué | Lien « Aller au contenu » ajouté. |
| G13 | Appliqué | Résolu par les vraies pages : chaque changement de page recharge la page. |
| G14 | Appliqué | Nouvelle palette vérifiée (contraste d’au moins 5:1 pour les textes en couleur). |
| G15 | Appliqué | Balises Open Graph, données structurées « Person » et favicon. L’adresse du site reste à renseigner (voir README). |
| G16 | Appliqué | Date de mise à jour générée automatiquement. |
| G17 | Appliqué | Bouton clair/sombre mémorisé. |

## Accueil

| N° | Statut | Ce qui a été fait / raison |
|---|---|---|
| A1 | Appliqué | Biographie ramenée à deux paragraphes ; seule la phrase énumérant les revues a été retirée (les revues figurent dans Publications). |
| A2 | Appliqué | Les tuiles mènent directement aux sections Projets, Événements et Encadrement. |
| A3 | Appliqué | Le total compte 61 publications distinctes (le résumé ICDE et le poster XLDB reprennent des articles déjà comptés). |
| A4 | Appliqué | La tuile compte 11 événements organisés ou présidés ; le comité de programme WISE 2025 n’y est plus compté. |
| A5 | Partiel | La tuile précise « 2015–2019 » ; la liste ne peut pas être mise à jour sans vos doctorants actuels. |
| A6 | Ignoré | Les mois des actualités ne sont pas connus. |
| A7 | Appliqué | Quatre actualités ; l’annonce AICCSA 2025 reste dans Recherche > Événements, lien ajouté. |
| A8 | Appliqué | Thèmes de recherche cliquables dans le bandeau d’accueil. |

## Recherche

| N° | Statut | Ce qui a été fait / raison |
|---|---|---|
| R1 | Appliqué | Sommaire fixe en haut de page. |
| R2 | Ignoré | Créer un axe « IA agentique » demande votre validation. |
| R3 | Ignoré | Financeur et période des deux projets acceptés non fournis. |
| R4 | Ignoré | Votre rôle dans chaque projet n’est pas connu. |
| R5 | Appliqué | Icône répétée retirée des lignes de projets. |
| R6 | Appliqué | Chaque groupe d’événements porte un titre explicite. |
| R7 | Appliqué | Événements regroupés : Organisation, Présidence, Comités de programme. |
| R8 | Appliqué | Noms complets pour IEEE TKDE et IEEE TSC. |
| R9 | Ignoré | Nature de l’année (inscription ou soutenance) non connue. |
| R10 | Ignoré | Doctorants actuels non fournis. |
| R11 | Appliqué | Mention « sujets dans leur langue d’origine » dans la version française. |

## Publications

| N° | Statut | Ce qui a été fait / raison |
|---|---|---|
| P1 | Appliqué | Thèmes attribués à la main à chaque publication. |
| P2 | Appliqué | « Big data et fouille de graphes » séparé de « Graphes de connaissances et sémantique » ; « Villes intelligentes » renommé « Environnements intelligents et IoT » car il couvre aussi la santé et l’eau. |
| P3 | Appliqué | Sur petit écran, la carte est remplacée par des boutons de thèmes. |
| P4 | Appliqué | Libellés longs sur deux lignes, avec un fond qui masque les traits. |
| P5 | Appliqué | Étiquette textuelle Revue / Conférence / Chapitre / Poster. |
| P6 | Appliqué | Quatre catégories ; le résumé ICDE et le poster XLDB passent en « Posters et résumés », le chapitre LNICST en « Chapitres ». |
| P7 | Ignoré | Volumes et pages manquants pour plusieurs références. |
| P8 | Partiel | Liens ACM passés en HTTPS ; les DOI manquants ne sont pas inventés. |
| P9 | Appliqué | DOI affiché quand il figure dans le lien de l’éditeur ; notice BibTeX copiable pour chaque entrée. |
| P10 | Ignoré | Liens vers des versions en libre accès non fournis. |
| P11 | Appliqué | La recherche ignore accents et tirets. |

## Enseignement

| N° | Statut | Ce qui a été fait / raison |
|---|---|---|
| E1 | Partiel | L’UML est rattaché à l’ISET de Jendouba et les niveaux sont indiqués, d’après ce que vous m’avez indiqué ; l’établissement exact des deux autres cours reste à confirmer. |
| E2 | Appliqué | Badge « En cours » aussi pour Taibah, comme l’indiquait votre site (« 2018–Present ») ; à confirmer. |
| E3 | Appliqué | Listes longues regroupées par domaine. |
| E4 | Ignoré | Réorganiser par matière changerait la structure de la page. |
| E5 | Ignoré | Aucune ressource pédagogique fournie. |

## CV

| N° | Statut | Ce qui a été fait / raison |
|---|---|---|
| C1 | Appliqué | « 2013 – aujourd’hui » au lieu de « 2013– ». |
| C2 | Ignoré | Année de nomination comme maître de conférences non fournie. |
| C3 | Ignoré | Nature du poste à Taibah non fournie. |
| C4 | Ignoré | Université de l’habilitation à vérifier par vous ; la valeur actuelle est conservée. |
| C5 | Ignoré | Aucun PDF du CV fourni ; le lien Google Drive est conservé. |
| C6 | Ignoré | Dates manquantes. |
| C7 | Appliqué | Les deux lignes « Autres activités » sont fusionnées en une seule, sans perte d’information. |
| C8 | Ignoré | Distinctions, langues et compétences non fournies. |

## Contact

| N° | Statut | Ce qui a été fait / raison |
|---|---|---|
| K1 | Appliqué | Formulaire standard envoyé à FormSubmit : il fonctionne dès que le site est hébergé, même sans JavaScript. |
| K2 | Partiel | Adresses écrites en entités HTML ; l’alias FormSubmit sera disponible après activation (voir README). |
| K3 | Appliqué | L’envoi classique active le captcha de FormSubmit, en plus du champ piège. |
| K4 | Ignoré | Votre numéro figure sur votre site actuel ; le retirer est votre décision. |
| K5 | Appliqué | Adresse institutionnelle marquée « À privilégier ». |
| K6 | Ignoré | Nom de l’établissement associé à la BP 336 non confirmé. |
| K7 | Appliqué | Case de consentement obligatoire et phrase sur l’usage des données. |
| K8 | Appliqué | Préfixe de l’objet traduit : « [Site web] » / « [Website] ». |
| K9 | Ignoré | Profils LinkedIn ou ResearchGate non fournis. |
