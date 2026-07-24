// Translations Dictionary
const translations = {
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_cv: "السيرة الذاتية",
        nav_works: "المشاريع",
        nav_contact: "التواصل",
        
        // Home
        home_greeting: "مرحباً، أنا",
        home_name: "علي <span class='gradient-text'>خالد</span>",
        home_title: "مطور تطبيقات Flutter ومعيد بالجامعة المصرية الاهلية EELU",
        home_desc: "أمتلك خبرة واسعة في تطوير تطبيقات الهواتف المحمولة وتدريس البرمجة. أسعى دائماً لبناء تطبيقات ذات أداء عالي وحلول برمجية مبتكرة.",
        btn_works: "شاهد أعمالي",
        btn_contact: "تواصل معي",
        btn_download_cv: "تحميل CV",
        
        // CV
        cv_title: "السيرة",
        cv_title_highlight: "الذاتية",
        cv_exp: "الخبرات العملية",
        
        exp1_date: "2023 - الآن",
        exp1_title: "مطور Flutter",
        exp1_company: "Apex Technology",
        exp1_desc: "تطوير تطبيقات هواتف محمولة والمساهمة في بناء منتجات برمجية فعلية باستخدام أحدث تقنيات Flutter و Dart.",
        
        exp2_date: "2020 - الآن",
        exp2_title: "مدرب برمجة",
        exp2_company: "UpgradeX",
        exp2_desc: "تدريب الطلاب على أساسيات البرمجة ومهارات حل المشكلات وتطوير التطبيقات.",
        
        exp3_date: "الحالي",
        exp3_title: "معيد بكلية الحاسبات",
        exp3_company: "الجامعة المصرية للتعلم الإلكتروني (EELU)",
        exp3_desc: "مساعدة الطلاب في الجانب العملي للمقررات البرمجية وتقديم الدعم الأكاديمي.",
        
        cv_edu: "التعليم",
        edu_date: "2019 - 2023",
        edu_title: "بكالوريوس حاسبات ومعلومات",
        edu_uni: "جامعة المنوفية",
        edu_desc: "تخرجت بتقدير امتياز مع مرتبة الشرف (GPA 3.13).",
        cv_skills: "المهارات",
        
        // Works & Filters
        works_title: "أبرز",
        works_title_highlight: "المشاريع",
        filter_all: "الكل",
        filter_apex: "Apex Technology",
        filter_other: "مشاريعي",
        proj2_title: "Multi Vendor Market",
        proj2_desc: "تطبيق متجر إلكتروني متعدد البائعين والتوصيل مع لوحة تحكم متكاملة.",
        proj3_title: "Gym Mobile Application",
        proj3_desc: "تطبيق لإدارة الصالات الرياضية ومتابعة المتدربين والاشتراكات.",
        
        // Contact
        contact_title: "تواصل",
        contact_title_highlight: "معي",
        contact_sub: "لنتحدث عن مشروعك القادم",
        contact_desc: "متاح للعمل على مشاريع جديدة أو تقديم استشارات برمجية وتدريب.",
        contact_email: "البريد الإلكتروني",
        contact_phone: "الهاتف",
        contact_location: "الموقع",
        contact_city: "مدينة السادات، مصر",
        
        // Form Placeholders
        form_name: "الاسم الكامل",
        form_email: "البريد الإلكتروني",
        form_subj: "الموضوع",
        form_msg: "رسالتك...",
        form_submit: "إرسال الرسالة"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_cv: "Resume",
        nav_works: "Projects",
        nav_contact: "Contact",
        
        // Home
        home_greeting: "Hello, I am",
        home_name: "Ali <span class='gradient-text'>Khaled</span>",
        home_title: "Flutter Developer & Teaching Assistant EELU ",
        home_desc: "I have extensive experience in mobile app development and teaching programming. I always strive to build high-performance apps and innovative software solutions.",
        btn_works: "View My Works",
        btn_contact: "Contact Me",
        btn_download_cv: "Download CV",
        
        // CV
        cv_title: "My",
        cv_title_highlight: "Resume",
        cv_exp: "Experience",
        
        exp1_date: "2023 - Present",
        exp1_title: "Flutter Developer",
        exp1_company: "Apex Technology",
        exp1_desc: "Developing mobile applications and contributing to real-world software products using modern Flutter & Dart technologies.",
        
        exp2_date: "2020 - Present",
        exp2_title: "Programming Instructor",
        exp2_company: "UpgradeX",
        exp2_desc: "Training students in programming fundamentals, problem-solving, and app development.",
        
        exp3_date: "Current",
        exp3_title: "Teaching Assistant",
        exp3_company: "Egyptian E-Learning University (EELU)",
        exp3_desc: "Assisting students with practical programming courses and providing academic support.",
        
        cv_edu: "Education",
        edu_date: "2019 - 2023",
        edu_title: "Bachelor of Computers & Information",
        edu_uni: "Menofia University",
        edu_desc: "Graduated with Honors, GPA: 3.13.",
        cv_skills: "Skills",
        
        // Works & Filters
        works_title: "Featured",
        works_title_highlight: "Projects",
        filter_all: "All",
        filter_apex: "Apex Technology",
        filter_other: "My Projects",
        proj2_title: "Multi Vendor Market",
        proj2_desc: "A multi-vendor e-commerce app with a comprehensive dashboard.",
        proj3_title: "Gym Mobile Application",
        proj3_desc: "App for managing gyms, tracking members, and subscriptions.",
        
        // Contact
        contact_title: "Contact",
        contact_title_highlight: "Me",
        contact_sub: "Let's Talk About Your Project",
        contact_desc: "Available for new projects, software consulting, and training.",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_location: "Location",
        contact_city: "Sadat City, Egypt",
        
        // Form Placeholders
        form_name: "Full Name",
        form_email: "Email Address",
        form_subj: "Subject",
        form_msg: "Your Message...",
        form_submit: "Send Message"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    /* ==============================================
       Language Switcher Logic
       ============================================== */
    const langToggleBtn = document.getElementById('lang-toggle');
    const htmlElement = document.documentElement;
    
    // Check saved language
    let currentLang = localStorage.getItem('portfolio_lang') || 'en';
    
    const setLanguage = (lang) => {
        currentLang = lang;
        htmlElement.lang = lang;
        htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        langToggleBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
        
        // Update texts
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        
        localStorage.setItem('portfolio_lang', lang);
    };
    
    // Initial load
    setLanguage(currentLang);
    
    langToggleBtn.addEventListener('click', () => {
        setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });

    /* ==============================================
       Theme Switcher Logic
       ============================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check saved theme
    let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';
    
    const setTheme = (theme) => {
        currentTheme = theme;
        bodyElement.setAttribute('data-theme', theme);
        
        if (theme === 'light') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
        
        localStorage.setItem('portfolio_theme', theme);
    };
    
    // Initial load
    setTheme(currentTheme);
    
    themeToggleBtn.addEventListener('click', () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    /* ==============================================
       Navbar Scroll Effect & Mobile Menu
       ============================================== */
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });

    /* ==============================================
       Works Category Filtering
       ============================================== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            workCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    /* ==============================================
       Lightbox Modal for Image Preview
       ============================================== */
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    let currentCardIndex = 0;
    let visibleCards = [];

    const updateVisibleCards = () => {
        visibleCards = Array.from(workCards).filter(card => card.style.display !== 'none');
    };

    const openLightbox = (index) => {
        updateVisibleCards();
        if (visibleCards.length === 0) return;

        currentCardIndex = index;
        const card = visibleCards[currentCardIndex];
        const imgSrc = card.getAttribute('data-img');
        const title = card.getAttribute('data-title') || '';

        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = title;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    workCards.forEach((card) => {
        card.addEventListener('click', () => {
            updateVisibleCards();
            const indexInVisible = visibleCards.indexOf(card);
            openLightbox(indexInVisible !== -1 ? indexInVisible : 0);
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });

    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        currentCardIndex = (currentCardIndex - 1 + visibleCards.length) % visibleCards.length;
        openLightbox(currentCardIndex);
    });

    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        currentCardIndex = (currentCardIndex + 1) % visibleCards.length;
        openLightbox(currentCardIndex);
    });

    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            if (htmlElement.dir === 'rtl') {
                if (e.key === 'ArrowRight') lightboxPrev.click();
                if (e.key === 'ArrowLeft') lightboxNext.click();
            } else {
                if (e.key === 'ArrowLeft') lightboxPrev.click();
                if (e.key === 'ArrowRight') lightboxNext.click();
            }
        }
    });

    /* ==============================================
       Scroll Reveal Animations
       ============================================== */
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });
    
    revealElements.forEach(el => revealObserver.observe(el));

    /* ==============================================
       Active Link Highlighting on Scroll
       ============================================== */
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });
});
