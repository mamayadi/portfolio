'use strict';

/* =============================================
   TRANSLATIONS
   ============================================= */
const i18n = {
  fr: {
    'nav.about':           'À propos',
    'nav.skills':          'Compétences',
    'nav.experience':      'Expérience',
    'nav.education':       'Formation',
    'nav.certifications':  'Certifications',
    'nav.contact':         'Contact',

    'hero.available': 'Disponible',
    'hero.greeting':  'Bonjour, je suis',
    'hero.title':     'Ingénieur DevOps',
    'hero.subtitle':  'Kubernetes · Docker · Azure · Terraform · CI/CD · Ansible',
    'hero.cta1':      'Voir mon parcours',
    'hero.cta2':      'Télécharger le CV',
    'hero.cta3':      'Me contacter',
    'hero.stat1':     "ans d'expérience",
    'hero.stat2':     'certifications',
    'hero.stat3':     'technologies',

    'about.tag':       '// à propos',
    'about.title':     'À Propos de Moi',
    'about.p1':        "Ingénieur DevOps passionné avec plus de 5 ans d'expérience dans la conception et l'opération d'infrastructures cloud-native modernes. Spécialisé dans la conteneurisation, l'orchestration Kubernetes, les pipelines CI/CD robustes et l'automatisation des infrastructures.",
    'about.p2':        "Fort d'une expertise reconnue chez APRIL et SiFAST, j'ai mené des migrations complexes, optimisé des performances système et déployé des solutions à grande échelle dans des environnements Agile. Certifié Azure Administrator Associate et HashiCorp Terraform Associate.",
    'about.languages': 'Langues',
    'lang.fr':         'Français',
    'lang.fr_lvl':     'Courant',
    'lang.en':         'Anglais',
    'lang.en_lvl':     'Courant',
    'lang.ar':         'Arabe',
    'lang.ar_lvl':     'Maternelle',

    'skills.tag':  '// compétences',
    'skills.title':'Compétences Techniques',
    'skills.cat1': 'Conteneurisation & Orchestration',
    'skills.cat2': 'CI/CD & Automatisation',
    'skills.cat3': 'Cloud & Infrastructure',
    'skills.cat4': 'Monitoring & Logs',
    'skills.cat5': 'Langages & Scripts',
    'skills.cat6': 'API & Outils',

    'exp.tag':         '// expérience',
    'exp.title':       'Expérience Professionnelle',
    'exp.role_devops': 'Ingénieur DevOps',

    'exp.april.i1': "Étude et réalisation d'un POC de migration OnPremise vers une architecture SaaS hybride conteneurisée",
    'exp.april.i2': "Tests de charge (latence, taux d'erreur) sur l'introspection des jetons Gravitee depuis plusieurs zones géographiques",
    'exp.april.i3': "Mise en place d'une solution de cache Redis pour optimiser l'introspection des jetons JWT",
    'exp.april.i4': "Migration de la plateforme Gravitee APIM/AM de la version 3 vers la version 4",
    'exp.april.i5': "Développement des rôles/Playbooks Ansible pour le déploiement de Gravitee APIM/AM v4, Elasticsearch, Redis et Grafana avec Podman en respectant les règles SELinux",
    'exp.april.i6': "Déploiement d'infrastructure (Gravitee) et application (Uptime Kuma) dans Azure via Terraform",
    'exp.april.i7': "Développement des pipelines Jenkins avec scripts Bash/Python : automatisation des KPIs Gravitee AM, gestion des souscriptions d'API et déploiement de templates",
    'exp.april.i8': "Centralisation de la chaîne complète de journalisation avec Filebeat, Logstash, Logrotate vers Elasticsearch",
    'exp.april.i9': "Supervision via Grafana, Kibana et Azure Insights · Diagnostic et résolution des incidents · Méthodologie Agile Scrum",

    'exp.sifast.g1':       "Conteneurisation des applications avec Docker (Angular, React, Node, Python, PHP, JAVA)",
    'exp.sifast.g2':       "Création de charts Helm configurables prêts à déployer sur Kubernetes",
    'exp.sifast.g3':       "Configuration des pipelines CI/CD Jenkins multi-environnements (intégration, recette et production)",
    'exp.sifast.g4':       "Analyse de la qualité du code avec SonarQube · Automatisation via Ansible, ArgoCD, scripting",
    'exp.sifast.showMore': 'Voir les projets détaillés',
    'exp.sifast.proj1':    'Projet : SiFAST DevOps Plateforme',
    'exp.sifast.p1i1':     "Développement frontend Angular 12 et APIs RESTful Symfony 5.4",
    'exp.sifast.p1i2':     "API de génération et archivage des charts Helm dans Nexus",
    'exp.sifast.p1i3':     "API de déploiement automatisé sur Kubernetes, avec ou sans ArgoCD",
    'exp.sifast.proj2':    'Projet : Kubernetes Containerd',
    'exp.sifast.p2i1':     "Installation et configuration du cluster Kubernetes (master + nœuds)",
    'exp.sifast.p2i2':     "Configuration HPA (Horizontal Pod Autoscaling) pour projets scalables",
    'exp.sifast.p2i3':     "Playbooks Ansible et scripts Bash pour automatiser les mises à jour du cluster",
    'exp.sifast.proj3':    'Projet : Monitoring',
    'exp.sifast.p3i1':     "Prometheus et Grafana dans Kubernetes · Supervision Jenkins",
    'exp.sifast.p3i2':     "Déploiement de Loki pour la centralisation et l'analyse des logs",
    'exp.sifast.p3i3':     "Métriques de disponibilité et d'expiration des certificats SSL (Uptime Kuma)",
    'exp.sifast.proj4':    'Mission : Electre (Livrehebdo & Boutique)',
    'exp.sifast.p4i1':     "Migration Apache vers stack Nginx/PHP-FPM",
    'exp.sifast.p4i2':     "Chart HELM, pipelines CI/CD Jenkins · Déploiement Capistrano + Ansible",
    'exp.sifast.proj5':    'Mission : Nablacosmetics',
    'exp.sifast.p5i1':     "Pipeline CI/CD GitLab : PHP CS Fixer, déploiement multi-env Azure",
    'exp.sifast.p5i2':     "Script Bash auto-patch des vulnérabilités (CVE GitHub)",

    'edu.tag':     '// formation',
    'edu.title':   'Formation',
    'edu.deg1':    'Génie Informatique',
    'edu.deg2':    'Licence en Technologies Multimédia et Web',
    'edu.mention': 'Mention Excellente · Major de Promotion',

    'cert.tag':      '// certifications',
    'cert.title':    'Certifications',
    'cert.azure':    'Azure Administrator Associate',
    'cert.terraform':'Terraform Associate',

    'contact.tag':  '// contact',
    'contact.title':'Me Contacter',
    'contact.sub':  'Disponible pour de nouvelles opportunités',
    'contact.email':'Email',
    'contact.phone':'Téléphone',

    'footer.role':  'Ingénieur DevOps',
  },

  en: {
    'nav.about':           'About',
    'nav.skills':          'Skills',
    'nav.experience':      'Experience',
    'nav.education':       'Education',
    'nav.certifications':  'Certifications',
    'nav.contact':         'Contact',

    'hero.available': 'Available',
    'hero.greeting':  "Hello, I'm",
    'hero.title':     'DevOps Engineer',
    'hero.subtitle':  'Kubernetes · Docker · Azure · Terraform · CI/CD · Ansible',
    'hero.cta1':      'View my journey',
    'hero.cta2':      'Download CV',
    'hero.cta3':      'Contact me',
    'hero.stat1':     'years of experience',
    'hero.stat2':     'certifications',
    'hero.stat3':     'technologies',

    'about.tag':       '// about',
    'about.title':     'About Me',
    'about.p1':        "Passionate DevOps Engineer with 5+ years of experience designing and operating modern cloud-native infrastructures. Specialized in containerization, Kubernetes orchestration, robust CI/CD pipelines, and infrastructure automation.",
    'about.p2':        "With proven expertise at APRIL and SiFAST, I have led complex migrations, optimized system performance, and deployed large-scale solutions in Agile environments. Certified Azure Administrator Associate and HashiCorp Terraform Associate.",
    'about.languages': 'Languages',
    'lang.fr':         'French',
    'lang.fr_lvl':     'Fluent',
    'lang.en':         'English',
    'lang.en_lvl':     'Fluent',
    'lang.ar':         'Arabic',
    'lang.ar_lvl':     'Native',

    'skills.tag':  '// skills',
    'skills.title':'Technical Skills',
    'skills.cat1': 'Containerization & Orchestration',
    'skills.cat2': 'CI/CD & Automation',
    'skills.cat3': 'Cloud & Infrastructure',
    'skills.cat4': 'Monitoring & Logging',
    'skills.cat5': 'Languages & Scripting',
    'skills.cat6': 'API & Tools',

    'exp.tag':         '// experience',
    'exp.title':       'Work Experience',
    'exp.role_devops': 'DevOps Engineer',

    'exp.april.i1': "Study and POC of migrating an OnPremise solution to a containerized hybrid SaaS architecture",
    'exp.april.i2': "Load testing (latency, error rate) on Gravitee token introspection from multiple geographic zones",
    'exp.april.i3': "Implementation of a Redis cache solution to optimize JWT token introspection",
    'exp.april.i4': "Migration of the Gravitee APIM/AM platform from version 3 to version 4",
    'exp.april.i5': "Development of Ansible roles/Playbooks for deploying Gravitee APIM/AM v4, Elasticsearch, Redis, and Grafana with Podman following SELinux rules",
    'exp.april.i6': "Infrastructure deployment (Gravitee) and application (Uptime Kuma) in Azure via Terraform",
    'exp.april.i7': "Development of Jenkins pipelines with Bash/Python scripts: Gravitee AM KPI automation, API subscription management, and template deployment",
    'exp.april.i8': "Centralization of the complete logging chain with Filebeat, Logstash, Logrotate to Elasticsearch",
    'exp.april.i9': "Monitoring via Grafana, Kibana, and Azure Insights · Incident resolution · Agile Scrum methodology",

    'exp.sifast.g1':       "Containerization of applications with Docker (Angular, React, Node, Python, PHP, JAVA)",
    'exp.sifast.g2':       "Creation of configurable Helm charts ready to deploy on Kubernetes",
    'exp.sifast.g3':       "Configuration of multi-environment Jenkins CI/CD pipelines (integration, staging, production)",
    'exp.sifast.g4':       "Code quality analysis with SonarQube · Deployment automation via Ansible, ArgoCD, scripting",
    'exp.sifast.showMore': 'View detailed projects',
    'exp.sifast.proj1':    'Project: SiFAST DevOps Platform',
    'exp.sifast.p1i1':     "Frontend development with Angular 12 and RESTful APIs with Symfony 5.4",
    'exp.sifast.p1i2':     "API for generating and archiving Helm charts in Nexus",
    'exp.sifast.p1i3':     "Automated Helm chart deployment API on Kubernetes, with or without ArgoCD",
    'exp.sifast.proj2':    'Project: Kubernetes Containerd',
    'exp.sifast.p2i1':     "Installation and configuration of Kubernetes cluster (master + worker nodes)",
    'exp.sifast.p2i2':     "HPA controller configuration (Horizontal Pod Autoscaling) for scalable projects",
    'exp.sifast.p2i3':     "Ansible Playbooks and Bash scripts to automate cluster updates",
    'exp.sifast.proj3':    'Project: Monitoring',
    'exp.sifast.p3i1':     "Prometheus and Grafana in Kubernetes · Jenkins monitoring",
    'exp.sifast.p3i2':     "Loki deployment for centralized log collection and analysis",
    'exp.sifast.p3i3':     "Availability metrics and SSL certificate expiration monitoring (Uptime Kuma)",
    'exp.sifast.proj4':    'Client Mission: Electre (Livrehebdo & Boutique)',
    'exp.sifast.p4i1':     "Migration from Apache web server to Nginx/PHP-FPM stack",
    'exp.sifast.p4i2':     "HELM chart, Jenkins CI/CD pipelines · Capistrano + Ansible deployment",
    'exp.sifast.proj5':    'Client Mission: Nablacosmetics',
    'exp.sifast.p5i1':     "GitLab CI/CD pipeline: PHP CS Fixer, multi-environment Azure deployment",
    'exp.sifast.p5i2':     "Bash script for auto-patching vulnerabilities (CVE GitHub)",

    'edu.tag':     '// education',
    'edu.title':   'Education',
    'edu.deg1':    'Computer Engineering',
    'edu.deg2':    'Bachelor in Multimedia & Web Technologies',
    'edu.mention': 'Highest Honors · Valedictorian',

    'cert.tag':      '// certifications',
    'cert.title':    'Certifications',
    'cert.azure':    'Azure Administrator Associate',
    'cert.terraform':'Terraform Associate',

    'contact.tag':  '// contact',
    'contact.title':'Get In Touch',
    'contact.sub':  'Open to new opportunities',
    'contact.email':'Email',
    'contact.phone':'Phone',

    'footer.copy':  '© 2025 Mohamed AYADI · DevOps Engineer',
  }
};

/* =============================================
   LANGUAGE
   ============================================= */
let lang = localStorage.getItem('portfolio-lang') || 'fr';

function applyLang(newLang) {
  lang = newLang;
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-lang', lang);

  const active   = document.getElementById('lang-active');
  const inactive = document.getElementById('lang-inactive');
  if (active)   active.textContent   = lang.toUpperCase();
  if (inactive) inactive.textContent = lang === 'fr' ? 'EN' : 'FR';
}

/* =============================================
   NAVBAR
   ============================================= */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  const langBtn   = document.getElementById('lang-toggle');
  const sections  = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Active section highlight
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      const link = navLinks.querySelector(`a[href="#${sec.id}"]`);
      if (!link) return;
      const inView = scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight;
      link.classList.toggle('active', inView);
    });
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  langBtn?.addEventListener('click', () => applyLang(lang === 'fr' ? 'en' : 'fr'));
}

/* =============================================
   SCROLL REVEAL
   ============================================= */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* =============================================
   ACCORDION
   ============================================= */
function initAccordion() {
  const btn  = document.getElementById('sifast-acc-btn');
  const body = document.getElementById('sifast-acc-body');
  if (!btn || !body) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    body.classList.toggle('open');
  });
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  applyLang(lang);
  initNavbar();
  initReveal();
  initAccordion();
});
