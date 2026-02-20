/* ========================================
   GROVER ARUQUIPA - PORTFOLIO SCRIPTS
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== SKILLS DATA ==========
    const skillsData = {
        theory: {
            name: 'Theory',
            level: 95,
            details: ['Screw Theory', 'Grassmann Geometry', 'Kinematics', 'Dynamics']
        },
        analysis: {
            name: 'Analysis',
            level: 90,
            details: ['Singularity Analysis', 'Workspace Optimization', 'Jacobian Methods', 'Fourier Methods']
        },
        design: {
            name: 'Design',
            level: 85,
            details: ['Mechanism Synthesis', 'SolidWorks', 'CAD/CAM', 'Optimization']
        },
        hardware: {
            name: 'Hardware',
            level: 85,
            details: ['Prototyping', '3D Printing', 'Actuators', 'Sensors', 'CNC']
        },
        software: {
            name: 'Software',
            level: 85,
            details: ['MATLAB', 'Python', 'ROS', 'Simulink', 'LaTeX', 'Git']
        },
        aicontrol: {
            name: 'AI & Control',
            level: 80,
            details: ['Reinforcement Learning', 'Computer Vision', 'Motion Control', 'RT-LAB', 'Neural Networks']
        }
    };

    // ========== SKILLS HEXAGON INTERACTION ==========
    const skillPoints = document.querySelectorAll('.skill-point');
    const skillDetails = document.getElementById('skillDetails');
    const hexLabels = document.querySelectorAll('.hex-label');

    skillPoints.forEach(point => {
        point.addEventListener('mouseenter', function() {
            const skillId = this.getAttribute('data-skill');
            const skill = skillsData[skillId];
            
            if (skill) {
                // Update details panel
                skillDetails.innerHTML = `
                    <div class="skill-info">
                        <h3>${skill.name}</h3>
                        <div class="skill-tags">
                            ${skill.details.map(d => `<span class="skill-tag">${d}</span>`).join('')}
                        </div>
                        <div class="skill-bar">
                            <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
                        </div>
                        <p class="skill-level">Proficiency: ${skill.level}%</p>
                    </div>
                `;

                // Highlight point
                skillPoints.forEach(p => p.classList.remove('active'));
                this.classList.add('active');

                // Highlight label
                hexLabels.forEach(label => {
                    label.classList.remove('active');
                    if (label.textContent.toLowerCase().includes(skill.name.toLowerCase().split(' ')[0])) {
                        label.classList.add('active');
                    }
                });
            }
        });

        point.addEventListener('mouseleave', function() {
            // Delay reset to allow for smooth transition
            setTimeout(() => {
                if (!document.querySelector('.skill-point:hover')) {
                    skillDetails.innerHTML = `
                        <div class="skill-placeholder">
                            <p>↑</p>
                            <p>Hover over the hexagon</p>
                            <p>to explore skills</p>
                        </div>
                    `;
                    skillPoints.forEach(p => p.classList.remove('active'));
                    hexLabels.forEach(label => label.classList.remove('active'));
                }
            }, 100);
        });
    });

    // Also allow clicking on labels
    hexLabels.forEach(label => {
        label.style.cursor = 'pointer';
        label.addEventListener('click', function() {
            const labelText = this.textContent.toLowerCase();
            let skillId = null;
            
            if (labelText.includes('theory')) skillId = 'theory';
            else if (labelText.includes('analysis')) skillId = 'analysis';
            else if (labelText.includes('design')) skillId = 'design';
            else if (labelText.includes('hardware')) skillId = 'hardware';
            else if (labelText.includes('software')) skillId = 'software';
            else if (labelText.includes('ai') || labelText.includes('control')) skillId = 'aicontrol';
            
            if (skillId) {
                const point = document.querySelector(`.skill-point[data-skill="${skillId}"]`);
                if (point) {
                    point.dispatchEvent(new Event('mouseenter'));
                }
            }
        });
    });

    // ========== TUTORIAL FILTERS ==========
    const filterBtns = document.querySelectorAll('.filter-btn');
    const tutorialCards = document.querySelectorAll('.tutorial-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            tutorialCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.display = 'block';
                } else {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });
        });
    });

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply fade-in animation to sections
    const animatedElements = document.querySelectorAll(
        '.stat-item, .prototype-card, .publication-item, .tutorial-card, .news-item, .award-item, .mentor-card'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        fadeInObserver.observe(el);
    });

    // ========== PROTOTYPE CARD HOVER ==========
    const prototypeCards = document.querySelectorAll('.prototype-card');
    prototypeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ========== CONSOLE MESSAGE ==========
    console.log('%c🤖 Grover Aruquipa - Robotics Researcher', 'color: #2c5282; font-size: 16px; font-weight: bold;');
    console.log('%cParallel Manipulators | Unlimited Rotation | Integrated Grasping', 'color: #718096; font-size: 12px;');
});
