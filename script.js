document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Glow
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Scroll Header Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navUl = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
            if (navUl.style.display === 'flex') {
                navUl.style.position = 'absolute';
                navUl.style.top = '100%';
                navUl.style.left = '0';
                navUl.style.width = '100%';
                navUl.style.flexDirection = 'column';
                navUl.style.background = 'rgba(10, 12, 16, 0.95)';
                navUl.style.padding = '2rem';
                navUl.style.borderBottom = '1px solid var(--glass-border)';
            }
        });
    }

    // --- Multi-language Support ---
    const translations = {
        fr: {
            page_title: "Hicham Intazga | Ingénieur Cybersécurité SOC & Threat Intelligence",
            nav_about: "Profil",
            nav_experience: "Parcours",
            nav_skills: "Compétences",
            nav_projects: "Projets",
            nav_contact: "Contact",
            hero_subtitle: "Ingénieur Cybersécurité <br><span>Pentest, SOC & Threat Intelligence</span>",
            hero_desc: "Expert en tests d'intrusion, détection d'incidents, enrichissement d'IOC et automatisation de traitements de données de sécurité.",
            hero_btn_projects: "Voir mes projets",
            hero_btn_contact: "Me contacter",
            about_subtitle: "01. Profil",
            about_title: "À propos de moi",
            about_p1: "Élève ingénieur en cybersécurité, je me passionne pour les <strong>tests d’intrusion</strong> et l’analyse de vulnérabilités. J'ai développé des compétences solides en pentest web, reconnaissance et exploitation de failles via des outils comme <strong>Burp Suite, Nmap et Metasploit</strong>.",
            about_p2: "Mon parcours inclut également une expertise en <strong>SOC et Threat Intelligence</strong>, me permettant de comprendre les mécanismes de détection et de réponse aux incidents pour une approche de sécurité globale.",
            about_location: "Basé à Casablanca, Maroc",
            stat_pentest: "Pentest",
            stat_pentest_desc: "Web & Network",
            stat_soc: "SOC/TI",
            stat_soc_desc: "Threat Intelligence",
            exp_subtitle: "02. Parcours",
            exp_title: "Expérience & Formation",
            exp_category: "Expérience",
            edu_category: "Formation",
            exp1_date: "Fév. 2026 - Juil. 2026",
            exp1_title: "Stagiaire PFE Cybersécurité",
            exp1_desc: "Mise en place d’un dispositif de Threat Intelligence pour la collecte et l’enrichissement d’IOC/CVE. Automatisation Python et veille sur Telegram/Dark Web.",
            edu1_date: "2023 - En cours",
            edu1_title: "Cycle Ingénieur -- Sécurité IT",
            edu1_desc: "Intelligence Artificielle et Sciences des Données, spécialisation Sécurité IT et Confiance Numérique.",
            exp2_date: "Avr. 2023 - Mai 2023",
            exp2_title: "Stagiaire Développeur Full-Stack",
            exp2_desc: "Développement d’une application basée sur des API REST (PHP, MySQL, Flutter). Analyse des besoins et tests d’une solution métier.",
            edu2_date: "2021 - 2023",
            edu2_title: "DUT Informatique",
            edu2_desc: "Bases solides en algorithmique, réseaux et développement logiciel.",
            skills_subtitle: "03. Expertise",
            skills_title: "Compétences Techniques",
            skill_cat1: "Pentest & Offensive",
            skill_cat2: "SOC & Ops",
            skill_cat3: "Threat Intel",
            skill_cat4: "Dev & Systèmes",
            skill_recon: "Reconnaissance Active/Passive",
            skill_soc1: "Analyse d'alertes & Logs",
            skill_soc2: "Investigation d'incidents",
            skill_ti1: "MISP / Collecte IOC/CVE",
            skill_ti2: "Enrichissement de données",
            skill_ti3: "Veille (Dark Web, Telegram)",
            skill_ti4: "NLP pour CTI (Python)",
            projects_subtitle: "04. Portfolio",
            projects_title: "Projets Marquants",
            project1_title: "Threat Intelligence Platform",
            project1_desc: "Développement d’un pipeline CTI pour la collecte, normalisation et enrichissement d’IOC/CVE à partir de sources multiples. Automatisation via Python (Regex, NLP) et intégration MISP.",
            project2_title: "Pentest Web Application",
            project2_desc: "Analyse complète d’une application web pour identifier des vulnérabilités critiques (XSS, SQLi, CSRF) et sécurisation des tokens JWT.",
            project3_title: "SOC Lab - Supervision",
            project3_desc: "Mise en place d’un environnement de supervision avec Wazuh, ELK et Snort. Collecte de logs, corrélation d’événements et analyse d’alertes.",
            project4_title: "Sécurité d’application mobile",
            project4_desc: "Étude approfondie de la sécurité des applications mobiles : stockage local, authentification et sécurisation des communications réseau.",
            project5_title: "Architecture AWS Sécurisée",
            project5_desc: "Conception d’une architecture AWS avec segmentation réseau, IAM, CloudWatch et CloudTrail pour une supervision continue.",
            certs_subtitle: "05. Reconnaissance",
            certs_title: "Certifications",
            cert1_name: "ISO/IEC 27001:2022 Associate",
            cert1_issuer: "SkillFront • Octobre 2025",
            cert2_name: "SOC Level 1",
            cert2_issuer: "TryHackMe • Août 2025",
            cert_verify: "Vérifier Certificat",
            contact_title: "Prêt à sécuriser vos infrastructures ?",
            contact_desc: "Je suis à la recherche de nouveaux défis en cybersécurité. Discutons de vos besoins.",
            contact_linkedin: "LinkedIn",
            footer_rights: "Tous droits réservés."
        },
        en: {
            page_title: "Hicham Intazga | Cybersecurity Engineer SOC & Threat Intelligence",
            nav_about: "Profile",
            nav_experience: "Journey",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_subtitle: "Cybersecurity Engineer <br><span>Pentest, SOC & Threat Intelligence</span>",
            hero_desc: "Expert in penetration testing, incident detection, IOC enrichment, and security data processing automation.",
            hero_btn_projects: "View my projects",
            hero_btn_contact: "Contact me",
            about_subtitle: "01. Profile",
            about_title: "About Me",
            about_p1: "Cybersecurity engineering student, I am passionate about <strong>penetration testing</strong> and vulnerability analysis. I have developed solid skills in web pentesting, reconnaissance, and exploitation via tools like <strong>Burp Suite, Nmap, and Metasploit</strong>.",
            about_p2: "My journey also includes expertise in <strong>SOC and Threat Intelligence</strong>, allowing me to understand detection and incident response mechanisms for a global security approach.",
            about_location: "Based in Casablanca, Morocco",
            stat_pentest: "Pentest",
            stat_pentest_desc: "Web & Network",
            stat_soc: "SOC/TI",
            stat_soc_desc: "Threat Intelligence",
            exp_subtitle: "02. Journey",
            exp_title: "Experience & Education",
            exp_category: "Experience",
            edu_category: "Education",
            exp1_date: "Feb. 2026 - July 2026",
            exp1_title: "Cybersecurity Intern (PFE)",
            exp1_desc: "Setting up a Threat Intelligence system for IOC/CVE collection and enrichment. Python automation and monitoring on Telegram/Dark Web.",
            edu1_date: "2023 - Present",
            edu1_title: "Engineering Degree -- IT Security",
            edu1_desc: "Artificial Intelligence and Data Science, specialization in IT Security and Digital Trust.",
            exp2_date: "Apr. 2023 - May 2023",
            exp2_title: "Full-Stack Developer Intern",
            exp2_desc: "Development of a REST API-based application (PHP, MySQL, Flutter). Requirements analysis and testing of a business solution.",
            edu2_date: "2021 - 2023",
            edu2_title: "Associate's Degree in Computer Science",
            edu2_desc: "Solid foundations in algorithms, networks, and software development.",
            skills_subtitle: "03. Expertise",
            skills_title: "Technical Skills",
            skill_cat1: "Pentest & Offensive",
            skill_cat2: "SOC & Ops",
            skill_cat3: "Threat Intel",
            skill_cat4: "Dev & Systems",
            skill_recon: "Active/Passive Reconnaissance",
            skill_soc1: "Alert & Log Analysis",
            skill_soc2: "Incident Investigation",
            skill_ti1: "MISP / IOC/CVE Collection",
            skill_ti2: "Data Enrichment",
            skill_ti3: "Monitoring (Dark Web, Telegram)",
            skill_ti4: "NLP for CTI (Python)",
            projects_subtitle: "04. Portfolio",
            projects_title: "Key Projects",
            project1_title: "Threat Intelligence Platform",
            project1_desc: "Development of a CTI pipeline for the collection, normalization, and enrichment of IOC/CVE from multiple sources. Automation via Python (Regex, NLP) and MISP integration.",
            project2_title: "Web Application Pentest",
            project2_desc: "Complete analysis of a web application to identify critical vulnerabilities (XSS, SQLi, CSRF) and securing JWT tokens.",
            project3_title: "SOC Lab - Monitoring",
            project3_desc: "Setup of a monitoring environment with Wazuh, ELK, and Snort. Log collection, event correlation, and alert analysis.",
            project4_title: "Mobile Application Security",
            project4_desc: "In-depth study of mobile application security: local storage, authentication, and securing network communications.",
            project5_title: "Secure AWS Architecture",
            project5_desc: "Design of an AWS architecture with network segmentation, IAM, CloudWatch, and CloudTrail for continuous monitoring.",
            certs_subtitle: "05. Recognition",
            certs_title: "Certifications",
            cert1_name: "ISO/IEC 27001:2022 Associate",
            cert1_issuer: "SkillFront • October 2025",
            cert2_name: "SOC Level 1",
            cert2_issuer: "TryHackMe • August 2025",
            cert_verify: "Verify Certificate",
            contact_title: "Ready to secure your infrastructure?",
            contact_desc: "I am looking for new challenges in cybersecurity. Let's discuss your needs.",
            contact_linkedin: "LinkedIn",
            footer_rights: "All rights reserved."
        }
    };

    const currentLangText = document.getElementById('current-lang');
    const langLinks = document.querySelectorAll('.dropdown-content a');
    let currentLang = localStorage.getItem('preferredLang') || 'fr';

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update current language display
        if (currentLangText) {
            currentLangText.textContent = lang.toUpperCase();
        }

        // Update active class in dropdown
        langLinks.forEach(link => {
            if (link.getAttribute('data-lang') === lang) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem('preferredLang', lang);
    }

    // Initialize language
    updateLanguage(currentLang);

    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = link.getAttribute('data-lang');
            if (selectedLang !== currentLang) {
                currentLang = selectedLang;
                updateLanguage(currentLang);
            }
        });
    });
});
