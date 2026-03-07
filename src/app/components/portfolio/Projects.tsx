import { useState, useEffect, useRef } from "react";

const projects = [
  {
    idx: '01',
    title: 'Food It — Food Ordering App',
    desc: 'A clean, user-friendly food-ordering app in Figma. Focused on intuitive navigation and visual simplicity — wireframes, a cohesive UI system, streamlined menus, customizable orders, and an efficient checkout flow.',
    tags: ['Figma', 'Mobile App', 'UX Design', 'Prototyping'],
    icon: '🍔',
    type: 'Mobile Design',
  },
  {
    idx: '02',
    title: 'Lazy Project — Architect Portfolio',
    desc: 'A minimalist architect portfolio in Figma with clean grids, immersive project displays, and intuitive navigation. Visual-first, fast loading, and fully responsive.',
    tags: ['Figma', 'Portfolio', 'Responsive'],
    icon: '🏛',
    type: 'UI UX Design',
  },
  {
    idx: '03',
    title: 'Ticket Booking System',
    desc: 'A functional web application built with HTML, CSS, and Bootstrap — front-end development with UX sensibility and clean accessible component architecture.',
    tags: ['HTML/CSS', 'Bootstrap', 'Web App'],
    icon: '🎟',
    type: 'UI UX Design',
  },
  {
    idx: '04',
    title: 'AU Finja',
    desc: 'AU Finja is a financial platform designed to simplify financial operations and provide users with a seamless experience when managing financial services. The platform focuses on delivering a clean, secure, and intuitive interface that allows users to easily access financial tools and insights.',
    tags: ['Figma', 'UI/UX', 'Mobile Design', 'Prototyping'],
    icon: '💍',
    type: 'UI UX Design',
  },
  {
    idx: '05',
    title: 'DRDA',
    desc: 'The DRDA website was designed to provide a structured and accessible platform where users can easily access information related to district development programs, government initiatives, schemes, and administrative resources.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
  {
    idx: '06',
    title: 'SDI',
    desc: 'SDI is a digital platform designed to organize and manage structured information efficiently while providing users with a simple and intuitive interface. The goal of the project was to create a modern and user-friendly interface that allows users to easily access and interact with structured data and services.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
  {
    idx: '07',
    title: 'QASPL',
    desc: 'QASPL is a digital platform designed to streamline operational workflows and provide users with a structured interface to manage and access services efficiently. The objective of the project was to design a modern, intuitive, and scalable interface that simplifies complex workflows while maintaining clarity and usability.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
  {
    idx: '08',
    title: 'Travel East',
    desc: 'Travel East is a travel discovery and booking platform designed to help users explore destinations across eastern regions and plan their trips effortlessly. The goal of the project was to create a visually engaging and user-friendly interface that simplifies travel exploration and booking.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
  {
    idx: '09',
    title: 'Lenovo',
    desc: 'This project focuses on designing an improved digital experience for the Lenovo website, aimed at simplifying how users explore products, compare devices, and make purchasing decisions.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
  {
    idx: '10',
    title: 'ESG',
    desc: 'The ESG platform focuses on presenting environmental, social, and governance insights in a structured dashboard interface. The design emphasizes data visualization, clarity, and accessible reporting tools to help users understand sustainability metrics.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
  {
    idx: '11',
    title: 'Amplify',
    desc: 'Amplify is a platform designed to enhance digital communication and information management. The project focuses on clean UI patterns and structured navigation, enabling users to interact with platform features efficiently.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
  {
    idx: '12',
    title: 'LMS',
    desc: 'The LMS project is an educational platform designed to help students and instructors manage learning materials, courses, and progress. The interface prioritizes easy course navigation, structured content delivery, and simple user flows.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
  {
    idx: '13',
    title: 'Toppscholar',
    desc: 'Toppscholar is an education-focused platform designed to support students in accessing academic resources and learning tools. The design focuses on organized course listings, intuitive navigation, and improved learning accessibility.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
  {
    idx: '14',
    title: 'YCMCOU',
    desc: 'YCMCOU is an educational portal designed to provide students with information about courses, admissions, and academic resources. The goal was to create a clear and structured interface that simplifies navigation across educational services.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
  {
    idx: '15',
    title: 'Cybercrime',
    desc: 'The Cybercrime platform is designed to help users understand cyber threats and report online crimes. The design focuses on clear guidance, accessible reporting processes, and structured information to help users interact with the system easily.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
  {
    idx: '16',
    title: 'Packiyo',
    desc: 'Packiyo is a logistics and fulfillment platform designed to help businesses manage warehouse operations, inventory, orders, and shipping processes efficiently. The objective of the project was to design a clean, scalable, and intuitive dashboard interface that simplifies complex logistics workflows.',
    tags: ['Web App', 'UI/UX Design', 'Prototyping'],
    icon: '📱',
    type: 'UI UX Design',
  },
];

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const prevVisible = useRef(4);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const rows = sectionRef.current?.querySelectorAll('.proj-row');
    if (!rows) return;

    rows.forEach((row, i) => {
      const el = row as HTMLElement;
      if (i >= prevVisible.current && i < visibleProjects) {
        // Newly revealed rows — animate in with stagger
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'none';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const delay = (i - prevVisible.current) * 0.1;
            el.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
        });
      }
    });

    prevVisible.current = visibleProjects;
  }, [visibleProjects]);

  const loadMore = () => {
    setVisibleProjects(projects.length);
  };

  const showLess = () => {
    const section = sectionRef.current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => {
      setVisibleProjects(4);
      prevVisible.current = 4;
    }, 400);
  };

  return (
    <section id="projects" ref={sectionRef}>
      <div className="proj-intro rv">
        <div className="pi-title">
          <div className="pit-a">SELECTED</div>
          <div className="pit-b">WORKS</div>
        </div>

        <p className="pi-note">
          Academic and professional projects spanning mobile apps, web platforms, and design systems.
        </p>
      </div>

      {projects.slice(0, visibleProjects).map((p, i) => (
        <div
          key={p.idx}
          className="proj-row rv"
          style={i < 4 ? undefined : { opacity: 0, transform: 'translateY(40px)' }}
        >
          <div className="proj-idx">
            <span>{p.idx}</span>
          </div>

          <div className="proj-body">
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.desc}</p>

            <div className="proj-tags">
              {p.tags.map((t) => (
                <span key={t} className="pt">{t}</span>
              ))}
            </div>
          </div>

          <div className="proj-meta">
            <div className="pm-ico">{p.icon}</div>
            <div className="pm-type">{p.type}</div>
          </div>
        </div>
      ))}

      <div className="view-more-wrap">
        {visibleProjects < projects.length ? (
          <button className="view-more-btn" onClick={loadMore}>
            View More Projects
          </button>
        ) : (
          <button className="view-more-btn" onClick={showLess}>
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}
