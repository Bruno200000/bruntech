import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    Cpu,
    Code2,
    Menu,
    X,
    Facebook,
    Linkedin,
    Send,
    CheckCircle2,
    PieChart,
    Zap,
    Play,
    ExternalLink,
    Phone,
    MessageCircle,
    Search,
    Settings,
    Palette,
    Smartphone,
    Instagram
} from 'lucide-react';
import './App.css';

// Import images
import heroPerson from './assets/hero-person.png';
import academyImg from './assets/academy.png';
import acad1 from './assets/academy1.jpg';
import acad2 from './assets/academy2.jpg';
import acad3 from './assets/academy3.jpg';
import acad4 from './assets/academy4.jpg';
import port1 from './assets/portfolio1.png';
import luxemarket from './assets/luxemarket.png';
import smartbusiness from './assets/smartbusiness.png';
import cilogistics from './assets/cilogistics.png';
import bruntechportal from './assets/bruntechportal.png';
import techExcellence from './assets/tech-excellence.png';
import teamDynamic from './assets/team-dynamic.png';


interface Project {
    title: string;
    cat: string;
    img: string;
    type: 'link' | 'video';
    link: string;
    videoUrl?: string;
    desc: string;
}

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const whatsappNumber = '2250564900208';

    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const getYoutubeEmbedUrl = (url: string) => {
        const id = getYoutubeId(url);
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&rel=0` : url;
    };

    const handleWhatsAppMessage = (text: string) => {
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `*Nouveau message de contact*\n\n*Nom:* ${formData.name}\n*Email:* ${formData.email}\n*Objet:* ${formData.subject}\n*Message:* ${formData.message}`;
        handleWhatsAppMessage(text);
    };

    const handlePackSelection = (packName: string) => {
        const text = `Bonjour BRUNTECH, je suis intéressé par le *${packName}*. Pouvons-nous en discuter ?`;
        handleWhatsAppMessage(text);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#home' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Tarifs', href: '#pricing' },
        { name: 'Réalisations', href: '#portfolio' },
        { name: 'Académie', href: '#academy' },
        { name: 'À propos', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const fadeUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="app">
            {/* 1. HEADER */}
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-content">
                    <div className="logo cursor-pointer" onClick={() => scrollToSection('home')}>
                        <span className="logo-text">BRUN<span className="accent">TECH</span></span>
                    </div>

                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.href.substring(1));
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <button
                            className="btn btn-primary desktop-cta"
                            onClick={() => scrollToSection('contact')}
                        >
                            Démarrer un projet
                        </button>
                        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            <main>
                {/* 2. HERO SECTION - High-Tech Background */}
                <section id="home" className="hero-modern">
                    <div className="hero-shapes">
                        <div className="shape blob-orange"></div>
                        <div className="shape blob-blue"></div>
                    </div>
                    <div className="container hero-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="hero-text"
                        >

                            <h1 className="hero-title-modern text-white">
                                Propulsez votre <span className="accent">Vision</span> : Site Web, Application Mobile & Services Tech
                            </h1>
                            <p className="hero-p text-white opacity-90">
                                BRUNTECH est l'agence spécialisée dans la transformation numérique haute performance. Expertise IA, design premium et développement agile.
                            </p>
                            <div className="hero-actions">
                                <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>Travaillons ensemble</button>
                                <button className="btn btn-outline-white" onClick={() => scrollToSection('solutions')}>Nos Solutions</button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="hero-image-wrapper"
                        >
                            <div className="hero-img-container">
                                <img src={heroPerson} alt="Innovation" className="hero-img-main" />
                                <div className="floating-card glass shadow-lg">
                                    <Zap className="accent" size={24} />
                                    <div>
                                        <div className="bold text-dark">Innovation TECH</div>
                                        <div className="small text-muted">Technologie de pointe</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. ABOUT SECTION */}
                <section id="about" className="about-split bg-white">
                    <div className="container grid-2">
                        <motion.div {...fadeUp} className="about-img">
                            <img src={teamDynamic} alt="Équipe dynamique BRUNTECH Côte d'Ivoire" className="rounded-xl shadow-premium" />
                            <div className="experience-badge card-navy">
                                <div className="exp-num">+5 ans</div>
                                <div className="exp-text">D'Expertise</div>
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} className="about-content">
                            <h2 className="section-title text-left text-dark" style={{ color: '#000000', fontWeight: 800 }}>Qui sommes-nous ?</h2>
                            <p className="section-p text-dark" style={{ color: '#111111', fontSize: '1.2rem' }}>
                                <strong>BRUNTECH</strong> est votre partenaire de confiance pour la <strong>transformation numérique en Côte d'Ivoire</strong>. Basée à Bouaké, notre agence fusionne créativité et technologie pour propulser votre business.
                            </p>
                            <p className="section-p text-dark" style={{ color: '#111111', marginTop: '-1rem', fontSize: '1.2rem' }}>
                                Nous excellons dans le <strong>développement web premium</strong>, la création d'<strong>applications mobiles</strong> intuitives et le déploiement de solutions d'<strong>Intelligence Artificielle</strong> sur mesure.
                            </p>
                            <div className="values-grid">
                                <div className="value-item shadow-sm" style={{ color: '#000000', background: '#f9f9f9' }}>
                                    <CheckCircle2 className="accent" size={22} />
                                    <span style={{ fontWeight: 600 }}>Expertise locales & Vision Mondiale</span>
                                </div>
                                <div className="value-item shadow-sm" style={{ color: '#000000', background: '#f9f9f9' }}>
                                    <CheckCircle2 className="accent" size={22} />
                                    <span style={{ fontWeight: 600 }}>Solutions Innovantes IA</span>
                                </div>
                                <div className="value-item shadow-sm" style={{ color: '#000000', background: '#f9f9f9' }}>
                                    <CheckCircle2 className="accent" size={22} />
                                    <span style={{ fontWeight: 600 }}>Support Technique Réactif</span>
                                </div>
                            </div>
                            <button className="btn btn-primary" onClick={() => scrollToSection('portfolio')}>Découvrir nos succès</button>
                        </motion.div>
                    </div>
                </section>

                {/* 4. STATS - Dark background */}
                <section className="stats-modern">
                    <div className="container">
                        <div className="stats-container-glass stats-flex">
                            {[
                                { num: '+100', label: 'Projets' },
                                { num: '+50', label: 'Clients' },
                                { num: '+5', label: 'Solutions IA' },
                                { num: '+3', label: 'Formations' },
                            ].map((s, i) => (
                                <div key={i} className="stat-item text-center">
                                    <div className="stat-num-modern text-white">{s.num}</div>
                                    <div className="stat-label-modern text-white opacity-80">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. SOLUTIONS - White background */}
                <section id="solutions" className="solutions-section bg-white">
                    <div className="container">
                        <div className="text-center">
                            <div className="badge-modern">Services</div>
                            <h2 className="section-title text-dark">Solutions de pointe</h2>
                        </div>
                        <div className="solutions-row">
                            {[
                                { title: 'Création de Site Web', desc: 'Conception web de haute performance, responsive et optimisée SEO.', icon: <Globe /> },
                                { title: 'Solutions IA CI', desc: 'Agents intelligents et automatisation par IA pour entreprises.', icon: <Cpu /> },
                                { title: 'Applications Mobiles', desc: 'Développement Android et iOS pour une expérience utilisateur fluide.', icon: <Code2 /> },
                                { title: 'Stratégie Digitale', desc: 'Analyse de données et croissance numérique pour votre business.', icon: <PieChart /> },
                            ].map((s, i) => (
                                <motion.div key={i} whileHover={{ y: -5 }} className="service-card-modern bg-white shadow-md">
                                    <div className="service-icon-modern">{s.icon}</div>
                                    <h4 className="text-dark">{s.title}</h4>
                                    <p className="text-muted">{s.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5b. PRICING - Professional table of services */}
                <section id="pricing" className="pricing-section">
                    <div className="container">
                        <div className="text-center">
                            <div className="badge-modern">Tarifs</div>
                            <h2 className="section-title text-white">Nos Services et Tarifs</h2>
                            <p className="section-p text-white opacity-80 mx-auto" >Des solutions adaptées à chaque étape de votre croissance.</p>
                        </div>

                        <div className="pricing-grid">
                            {[
                                {
                                    name: 'PACK STARTER',
                                    price: '150 000',
                                    desc: 'Idéal pour les petites entreprises et entrepreneurs.',
                                    features: ['Site web vitrine (5 pages)', 'Design moderne et responsive', 'Formulaire de contact', 'Intégration WhatsApp', 'Optimisation mobile'],
                                    featured: false
                                },
                                {
                                    name: 'PACK BUSINESS',
                                    price: '300 000',
                                    desc: 'Parfait pour les entreprises qui veulent une forte présence en ligne.',
                                    features: ['Site web professionnel (8-10 pages)', 'Design premium', 'Optimisation SEO de base', 'Intégration Google Maps', 'Email professionnel', 'Formulaire de contact avancé'],
                                    featured: true
                                },
                                {
                                    name: 'PACK PREMIUM',
                                    price: '500 000',
                                    desc: 'Pour les entreprises qui veulent vendre en ligne.',
                                    features: ['Site e-commerce complet', 'Système de paiement (Wave/OM)', 'Gestion des commandes', 'Tableau de bord admin', 'Ajout de 20 produits', 'Support technique'],
                                    featured: false
                                }
                            ].map((pack, i) => (
                                <motion.div key={i} {...fadeUp} className={`pricing-card ${pack.featured ? 'featured' : ''}`}>
                                    <div className="pricing-header">
                                        <span className="pack-name">{pack.name}</span>
                                        <div className="pack-price">{pack.price} <span>FCFA</span></div>
                                    </div>
                                    <p className="pack-desc">{pack.desc}</p>
                                    <ul className="pack-features">
                                        {pack.features.map((f, j) => (
                                            <li key={j}><CheckCircle2 size={18} /> {f}</li>
                                        ))}
                                    </ul>
                                    <button
                                        className={`btn ${pack.featured ? 'btn-primary' : 'btn-outline'}`}
                                        onClick={() => handlePackSelection(pack.name)}
                                    >
                                        Choisir ce pack
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        <div className="additional-services">
                            <h3 className="sub-title text-center text-white">Services supplémentaires</h3>
                            <div className="services-list">
                                {[
                                    { name: 'Référencement SEO', price: '100 000 FCFA', icon: <Search size={22} />, desc: 'Visibilité maximale sur Google' },
                                    { name: 'Maintenance Mensuelle', price: '50 000 FCFA', icon: <Settings size={22} />, desc: 'Mises à jour et sécurité' },
                                    { name: 'Logo Professionnel', price: '30 000 FCFA', icon: <Palette size={22} />, desc: 'Identité visuelle unique' },
                                    { name: 'App Mobile Native', price: 'Sur devis', icon: <Smartphone size={22} />, desc: 'iOS & Android haute performance' },
                                ].map((s, i) => (
                                    <motion.div
                                        key={i}
                                        {...fadeUp}
                                        className="extra-service-card shadow-sm"
                                    >
                                        <div className="extra-service-icon">{s.icon}</div>
                                        <div className="extra-service-content">
                                            <h5>{s.name}</h5>
                                            <p className="small">{s.desc}</p>
                                        </div>
                                        <div className="extra-service-footer">
                                            <span className="extra-service-price">{s.price}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. PRODUCT SHOWCASE - Dark background */}
                <section className="product-showcase bg-dark">
                    <div className="container grid-2 items-center">
                        <motion.div {...fadeUp} className="showcase-text">
                            <div className="badge-modern">Expertise</div>
                            <h3 className="sub-title text-white">L'excellence au rendez-vous</h3>
                            <p className="section-p text-white opacity-80">Nous construisons des systèmes robustes capables de supporter votre croissance à l'international.</p>
                            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>Démarrer</button>
                        </motion.div>
                        <motion.div {...fadeUp} className="image-stack image-stack-tech">
                            <div className="tech-frame shadow-premium">
                                <img src={techExcellence} alt="Expertise Tech" className="img-tech-main" />
                                <div className="tech-overlay-grid"></div>
                            </div>

                            <div className="tech-badge-floating shadow-lg">
                                <Code2 size={20} /> Innovation CI
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 7. PORTFOLIO - Modern Gallery with Videos and Links */}
                <section id="portfolio" className="portfolio-modern bg-white">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="section-title text-dark">Nos Réalisations</h2>
                            <p className="section-p text-muted mx-auto"> Explorez nos derniers projets, des démonstrations vidéo aux plateformes en direct.</p>
                        </div>

                        <div className="projects-grid">
                            {([
                                {
                                    title: 'Lokivoire',
                                    cat: 'IMMOBILIER',
                                    img: port1,
                                    type: 'video',
                                    link: 'https://lokivoire.pro/',
                                    videoUrl: 'https://youtu.be/YbQkfbucjD4',
                                    desc: 'Plateforme immobilière innovante pour la recherche et la gestion de biens en Côte d\'Ivoire.'
                                },
                                {
                                    title: 'TRINTY AUTO',
                                    cat: 'APPLICATION DE GESTION LAVAGE AUTO',
                                    img: luxemarket,
                                    type: 'video',
                                    link: 'https://automobile.trinityconsulting-group.com/',
                                    videoUrl: 'https://youtu.be/VJbo2X0yZug',
                                    desc: 'Application de gestion de lavage auto avec une expérience utilisateur raffinée.'
                                },
                                {
                                    title: 'TRINTY SITE AUTO',
                                    cat: 'SITE WEB DYNAMIQUE',
                                    img: bruntechportal,
                                    type: 'video',
                                    link: 'https://mediumaquamarine-cobra-406229.hostingersite.com',
                                    videoUrl: 'https://youtu.be/vtPYEPOe1FU',
                                    desc: 'Site web dynamique pour la vente de voitures avec une interface moderne et intuitive.'
                                },
                                {
                                    title: 'APPLICATION DE GESTION PRODUITS',
                                    cat: 'GESTION PRODUITS',
                                    img: academyImg,
                                    type: 'video',
                                    link: '#',
                                    videoUrl: 'https://youtu.be/niJUfQgWK_E',
                                    desc: 'Application de gestion de produits avec une interface moderne et intuitive.'
                                },
                                {
                                    title: 'APPLICATION MOBILE E-COMMERCE',
                                    cat: 'APPLICATION MOBILE',
                                    img: smartbusiness,
                                    type: 'video',
                                    link: '#',
                                    videoUrl: 'https://youtube.com/shorts/zv3_WefiYQs',
                                    desc: 'Application mobile e-commerce avec une interface moderne et intuitive.'
                                },
                                {
                                    title: 'APPLICATION DE GESTION DE STOCK',
                                    cat: 'GESTION DE STOCK',
                                    img: cilogistics,
                                    type: 'video',
                                    link: '#',
                                    videoUrl: 'https://youtu.be/9_6nab3eYfc',
                                    desc: 'Application de gestion de stock avec une interface moderne et intuitive.'
                                }
                            ] as Project[]).map((project, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    className="project-card shadow-lg"
                                    whileHover={{ y: -10 }}
                                    onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                                        const video = e.currentTarget.querySelector('video');
                                        if (video) {
                                            video.muted = true;
                                            video.play().catch(err => {
                                                console.log('Autoplay blocked, retrying...', err);
                                                // Fallback: simply try playing again after a user interaction might have occurred
                                                video.play();
                                            });
                                        }
                                    }}
                                    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                                        const video = e.currentTarget.querySelector('video');
                                        if (video) {
                                            video.pause();
                                            // Optional: reset to start
                                            // video.currentTime = 0;
                                        }
                                    }}
                                >
                                    <div className="project-media" onClick={() => project.type === 'video' ? setSelectedVideo(project.videoUrl || null) : project.link !== '#' ? window.open(project.link, '_blank') : null}>
                                        {project.type === 'video' ? (
                                            <div className="video-preview-wrapper">
                                                <div className="live-badge">
                                                    <div className="pulse-dot"></div>
                                                    LIVE PREVIEW
                                                </div>
                                                {project.videoUrl && getYoutubeId(project.videoUrl) ? (
                                                    <iframe
                                                        className="project-video-bg"
                                                        src={getYoutubeEmbedUrl(project.videoUrl)}
                                                        frameBorder="0"
                                                        allow="autoplay; encrypted-media"
                                                        allowFullScreen
                                                        title={project.title}
                                                        style={{ pointerEvents: 'none', border: 'none' }}
                                                    ></iframe>
                                                ) : (
                                                    <video
                                                        src={project.videoUrl}
                                                        poster={project.img}
                                                        muted
                                                        loop
                                                        playsInline
                                                        preload="auto"
                                                        className="project-video-bg"
                                                    />
                                                )}
                                                <div className="project-overlay">
                                                    <div className="play-indicator">
                                                        <Play fill="white" size={24} />
                                                        <span>Aperçu vidéo</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <img src={project.img} alt={project.title} />
                                                <div className="project-overlay">
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-btn">
                                                        <ExternalLink size={32} />
                                                    </a>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="project-details">
                                        <div className="project-header">
                                            <span className="project-cat">{project.cat}</span>
                                            <h3 className="project-title">{project.title}</h3>
                                        </div>
                                        <p className="project-desc">{project.desc}</p>
                                        <div className="project-actions">
                                            {project.type === 'video' ? (
                                                <>
                                                    <button className="action-button" onClick={(e) => { e.stopPropagation(); setSelectedVideo(project.videoUrl || null); }}>
                                                        Voir la démo <Play size={14} style={{ fill: 'currentColor' }} />
                                                    </button>
                                                    {project.link !== '#' && (
                                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="action-link" onClick={(e) => e.stopPropagation()}>
                                                            Visiter le site <ExternalLink size={14} />
                                                        </a>
                                                    )}
                                                </>
                                            ) : (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="action-link">
                                                    Visiter le site <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. ACADEMY - Dark theme */}
                <section id="academy" className="academy-modern bg-dark">
                    <div className="container">
                        <div className="academy-card-main shadow-premium">
                            <div className="academy-grid">
                                <div className="academy-info">
                                    <div className="badge-modern text-white border-white">Formation Pro</div>
                                    <h2 className="section-title text-left text-white">BRUNTECH Academy</h2>
                                    <p className="section-p text-white opacity-90">
                                        Maîtrisez les technologies de demain avec nos experts. Nous formons la prochaine génération de leaders du digital en Côte d'Ivoire.
                                    </p>
                                    <div className="academy-stats-small">
                                        <div className="stat-sm"><strong>+50</strong> Étudiants</div>
                                        <div className="stat-sm"><strong>100%</strong> Pratique</div>
                                    </div>
                                    <button className="btn btn-primary white-bg" onClick={() => window.open('https://t.me/bruntech', '_blank')}>Rejoindre la formation</button>
                                </div>
                                <div className="academy-preview">
                                    <div className="academy-gallery">
                                        <div className="acad-img-main-col">
                                            <img
                                                src={acad1}
                                                alt="Formation 1"
                                                className="acad-img main shadow-lg cursor-pointer"
                                                onClick={() => setSelectedImage(acad1)}
                                            />
                                        </div>
                                        <div className="acad-grid-mosaic">
                                            <img
                                                src={acad4}
                                                alt="Formation 4"
                                                className="acad-img shadow-md cursor-pointer"
                                                onClick={() => setSelectedImage(acad4)}
                                            />
                                            <img
                                                src={acad2}
                                                alt="Formation 2"
                                                className="acad-img shadow-md cursor-pointer"
                                                onClick={() => setSelectedImage(acad2)}
                                            />
                                            <img
                                                src={acad3}
                                                alt="Formation 3"
                                                className="acad-img shadow-md cursor-pointer"
                                                onClick={() => setSelectedImage(acad3)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. CONTACT SECTION - Modern Form */}
                <section id="contact" className="contact-section bg-white">
                    <div className="container">
                        <div className="text-center mb-5">
                            <div className="badge-modern">Contact</div>
                            <h2 className="section-title text-dark">Parlons de votre projet</h2>
                            <p className="section-p text-muted mx-auto text-center">
                                Vous avez une idée ? Une question ? Notre équipe est prête à vous accompagner.
                            </p>
                        </div>

                        <div className="contact-grid">
                            <motion.div {...fadeUp} className="contact-info-cards">
                                <div className="contact-info-card">
                                    <div className="info-icon"><Phone size={24} /></div>
                                    <div className="info-details">
                                        <h4>Téléphone</h4>
                                        <p>+225 05 64 90 02 08</p>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <div className="info-icon"><Send size={24} /></div>
                                    <div className="info-details">
                                        <h4>Email</h4>
                                        <p>info@bruntech.ci</p>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <div className="info-icon"><Globe size={24} /></div>
                                    <div className="info-details">
                                        <h4>Localisation</h4>
                                        <p>Bouaké, Côte d'Ivoire</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div {...fadeUp} className="contact-form-wrapper shadow-premium">
                                <form className="contact-form" onSubmit={handleContactSubmit}>
                                    <div className="form-group-row">
                                        <div className="form-group">
                                            <label>Nom Complet</label>
                                            <input
                                                type="text"
                                                placeholder="Ex: Jean Kouassi"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                placeholder="Ex: jean@email.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Objet</label>
                                        <input
                                            type="text"
                                            placeholder="L'objet de votre message"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Votre Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Décrivez votre projet..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Envoyer sur WhatsApp <MessageCircle size={18} />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="cta-modern bg-light">
                    <div className="container text-center">
                        <h2 className="title-large text-dark">Prêt à innover ?</h2>
                        <p className="p-lg text-dark">Contactez-nous aujourd'hui pour une consultation gratuite.</p>
                        <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('contact')}>Démarrer l'aventure</button>
                    </div>
                </section>

            </main>

            {/* FOOTER - Dark, White text, Rounded top */}
            <footer className="footer-modern bg-dark">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-info">
                            <div className="logo cursor-pointer" onClick={() => scrollToSection('home')}>
                                <span className="logo-text text-white">BRUN<span className="accent">TECH</span></span>
                            </div>
                            <p className="text-white opacity-80">L'agence digitale de référence pour votre transformation numérique.</p>
                            <div className="social">
                                <a href="https://wa.me/2250564900208" target="_blank" rel="noopener noreferrer"><MessageCircle size={22} /></a>
                                <a href="#"><Facebook size={22} /></a>
                                <a href="#"><Instagram size={22} /></a>
                                <a href="#"><Linkedin size={22} /></a>
                                <a href="https://t.me/bruntech" target="_blank" rel="noopener noreferrer"><Send size={22} /></a>
                            </div>
                        </div>
                        <div className="footer-links">
                            <h4 className="text-white">Services</h4>
                            <ul>
                                <li onClick={() => scrollToSection('solutions')}>Web & E-commerce</li>
                                <li onClick={() => scrollToSection('solutions')}>Applications Mobiles</li>
                                <li onClick={() => scrollToSection('solutions')}>Intelligence Artificielle</li>
                                <li onClick={() => scrollToSection('pricing')}>Référencement SEO</li>
                                <li onClick={() => scrollToSection('pricing')}>Maintenance & Sécurité</li>
                                <li onClick={() => scrollToSection('pricing')}>Design Graphique</li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4 className="text-white">Agence</h4>
                            <ul>
                                <li>Côte d'Ivoire</li>
                                <li>info@bruntech.ci</li>
                                <li><a href="tel:+2250564900208" className="footer-contact-link text-accent"><Phone size={14} style={{ marginRight: '8px' }} /> +225 05 64 90 02 08</a></li>
                            </ul>
                        </div>
                        <div className="footer-newsletter">
                            <h4 className="text-white">Newsletter</h4>
                            <p className="small text-white opacity-60">Restez informé de nos dernières innovations et offres.</p>
                            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="Votre email" className="newsletter-input" />
                                <button className="newsletter-btn"><Send size={18} /></button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-white opacity-40">&copy; {new Date().getFullYear()} BRUNTECH. Made in CI.</p>
                    </div>
                </div>
            </footer>

            {/* Lightbox / Video Modal */}
            {(selectedImage || selectedVideo) && (
                <div className="image-modal-overlay" onClick={() => { setSelectedImage(null); setSelectedVideo(null); }}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => { setSelectedImage(null); setSelectedVideo(null); }}><X size={32} /></button>
                        {selectedImage ? (
                            <img src={selectedImage} alt="En grand" className="modal-image-large" />
                        ) : (
                            <div className="modal-video-container">
                                {selectedVideo && getYoutubeId(selectedVideo) ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${getYoutubeId(selectedVideo)}?autoplay=1&rel=0`}
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        title="Video Preview"
                                        className="modal-video-large"
                                    ></iframe>
                                ) : (
                                    <video
                                        src={selectedVideo!}
                                        autoPlay
                                        controls
                                        className="modal-video-large"
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
