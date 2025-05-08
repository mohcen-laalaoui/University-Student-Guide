// Data for the career simulator
const majorsData = {
  "computer-science": {
    id: "computer-science",
    title: "Computer Science",
    description:
      "Computer Science is the study of computers and computational systems, focusing on how they work, how they are used, and how to design software and hardware to solve problems efficiently.",
    image: "img/cs.jpg",
    video: {
      url: "https://www.youtube.com/watch?v=i6F7seJWxyQ",
      title: "A Day in the Life of a Computer Scientist",
    },
    jobs: [
      {
        id: "software-engineer",
        title: "Software Engineer",
        description: "Develops software applications.",
        salary: "$110k",
        satisfaction: "High",
        growth: "Excellent",
      },
      {
        id: "data-scientist",
        title: "Data Scientist",
        description: "Analyzes data to extract insights.",
        salary: "$120k",
        satisfaction: "High",
        growth: "Excellent",
      },
    ],
  },
  business: {
    id: "business",
    title: "Business Administration",
    description: "A versatile degree for future leaders and managers.",
    image: "img/business.jpg",
    video: {
      url: "https://www.youtube.com/watch?v=Q9uCrQHodl0",
      title: "What can you do with a Business Degree?",
    },
    jobs: [
      {
        id: "marketing-manager",
        title: "Marketing Manager",
        description: "Manages marketing campaigns.",
        salary: "$90k",
        satisfaction: "Medium",
        growth: "Good",
      },
      {
        id: "financial-analyst",
        title: "Financial Analyst",
        description: "Analyzes financial data.",
        salary: "$100k",
        satisfaction: "Medium",
        growth: "Good",
      },
    ],
  },
  healthcare: {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Healthcare for students refers to the medical and wellness services provided to help students stay healthy, including regular check-ups, vaccinations, mental health support, and treatment for illness or injury, often offered through school or university clinics..",
    image: "img/health.jpg",
    video: {
      url: "https://www.youtube.com/watch?v=KVehf8hyufs",
      title: "A Day in the Life of a Healthcare Professional",
    },
    jobs: [
      {
        id: "registered-nurse",
        title: "Registered Nurse",
        description: "Provides direct patient care.",
        salary: "$75k",
        satisfaction: " живутHigh",
        growth: "Excellent",
      },
      {
        id: "physician-assistant",
        title: "Physician Assistant",
        description: "Advanced healthcare provider working with physicians.",
        salary: "$115k",
        satisfaction: "High",
        growth: "Excellent",
      },
    ],
  },
  engineering: {
    id: "engineering",
    title: "Engineering",
    description: "Build the future through innovative solutions.",
    image: "img/engineering.jpg",
    video: {
      url: "https://www.youtube.com/watch?v=bipTWWHya8A",
      title: "What Engineers Do Every Day",
    },
    jobs: [
      {
        id: "mechanical-engineer",
        title: "Mechanical Engineer",
        description: "Designs and builds mechanical systems.",
        salary: "$95k",
        satisfaction: "High",
        growth: "Good",
      },
      {
        id: "civil-engineer",
        title: "Civil Engineer",
        description: "Designs and supervises infrastructure projects.",
        salary: "$90k",
        satisfaction: "Medium",
        growth: "Good",
      },
    ],
  },
  arts: {
    id: "arts",
    title: "Arts & Design",
    description: "Express yourself through creative works.",
    image: "img/art.jpg",
    video: {
      url: "https://www.youtube.com/watch?v=QZQyV9BB50E",
      title: "Careers in Art and Design",
    },
    jobs: [
      {
        id: "graphic-designer",
        title: "Graphic Designer",
        description: "Creates visual concepts for various media.",
        salary: "$55k",
        satisfaction: "Medium",
        growth: "Moderate",
      },
      {
        id: "ux-designer",
        title: "UX Designer",
        description: "Designs user experiences for digital products.",
        salary: "$95k",
        satisfaction: "High",
        growth: "Excellent",
      },
    ],
  },
  education: {
    id: "education",
    title: "Education",
    description: "Shape the future through teaching.",
    image: "img/education.jpg",
    video: {
      url: "https://www.youtube.com/watch?v=-_DRrRbxbkc",
      title: "Why Choose a Career in Education",
    },
    jobs: [
      {
        id: "elementary-teacher",
        title: "Elementary Teacher",
        description: "Teaches young students fundamental subjects.",
        salary: "$60k",
        satisfaction: "High",
        growth: "Stable",
      },
      {
        id: "school-counselor",
        title: "School Counselor",
        description: "Provides guidance to students.",
        salary: "$65k",
        satisfaction: "High",
        growth: "Good",
      },
    ],
  },
};

const jobDetailsData = {
  "software-engineer": {
    id: "software-engineer",
    title: "Software Engineer",
    description:
      "Software engineers design, develop, test, and evaluate software applications and systems. They work in a variety of industries, including technology, healthcare, finance, and education.",
    salary: "$110,000",
    salaryRange: "$80,000 - $140,000",
    satisfaction: "High",
    growth: "Excellent",
    workLife: "Good",
    skills: [
      {
        name: "Problem-solving",
        description: "Ability to identify and solve complex problems.",
      },
      {
        name: "Programming",
        description:
          "Proficiency in programming languages such as Java, Python, or C++.",
      },
      {
        name: "Teamwork",
        description: "Ability to work effectively in a team environment.",
      },
    ],
    education: {
      required: "Bachelor's degree in Computer Science or related field",
      preferred: "Master's degree in Computer Science",
      certifications: [
        "Certified Software Development Professional (CSDP)",
        "AWS Certified Developer",
      ],
    },
    dayInLife:
      "A software engineer typically spends their day writing code, testing software, debugging issues, and collaborating with other engineers and stakeholders.",
    companies: ["Google", "Microsoft", "Amazon"],
  },
  "data-scientist": {
    id: "data-scientist",
    title: "Data Scientist",
    description:
      "Data scientists analyze large datasets to extract insights and develop data-driven solutions. They use statistical modeling, machine learning, and data visualization techniques to solve business problems.",
    salary: "$120,000",
    salaryRange: "$90,000 - $150,000",
    satisfaction: "High",
    growth: "Excellent",
    workLife: "Moderate",
    skills: [
      {
        name: "Statistical Analysis",
        description: "Proficiency in statistical methods and techniques.",
      },
      {
        name: "Machine Learning",
        description: "Experience with machine learning algorithms and tools.",
      },
      {
        name: "Data Visualization",
        description: "Ability to create compelling data visualizations.",
      },
    ],
    education: {
      required:
        "Bachelor's degree in Statistics, Mathematics, or Computer Science",
      preferred: "Master's or Ph.D. in a related field",
      certifications: [
        "Certified Analytics Professional (CAP)",
        "Data Science Council of America (DASCA) certifications",
      ],
    },
    dayInLife:
      "A data scientist typically spends their day collecting and cleaning data, building statistical models, and communicating their findings to stakeholders.",
    companies: ["Facebook", "IBM", "Accenture"],
  },
  "marketing-manager": {
    id: "marketing-manager",
    title: "Marketing Manager",
    description:
      "Marketing managers plan, direct, and coordinate marketing activities and campaigns. They analyze market trends, develop marketing strategies, and manage marketing budgets.",
    salary: "$90,000",
    salaryRange: "$70,000 - $120,000",
    satisfaction: "Medium",
    growth: "Good",
    workLife: "Moderate",
    skills: [
      {
        name: "Marketing Strategy",
        description:
          "Ability to develop and implement effective marketing strategies.",
      },
      {
        name: "Market Research",
        description:
          "Experience conducting market research and analyzing consumer behavior.",
      },
      {
        name: "Communication",
        description: "Excellent written and verbal communication skills.",
      },
    ],
    education: {
      required:
        "Bachelor's degree in Marketing, Business Administration, or related field",
      preferred: "Master's degree in Marketing or MBA",
      certifications: [
        "Professional Certified Marketer (PCM)",
        "Google Ads Certifications",
      ],
    },
    dayInLife:
      "A marketing manager typically spends their day planning marketing campaigns, analyzing market data, and managing marketing budgets.",
    companies: ["Nike", "Coca-Cola", "Procter & Gamble"],
  },
  "mechanical-engineer": {
    id: "mechanical-engineer",
    title: "Mechanical Engineer",
    description:
      "Mechanical engineers design, develop, build, and test mechanical devices and systems. They work on products ranging from medical devices to engines and machines.",
    salary: "$95,000",
    salaryRange: "$70,000 - $120,000",
    satisfaction: "High",
    growth: "Good",
    workLife: "Good",
    skills: [
      {
        name: "CAD Software",
        description: "Proficiency in computer-aided design software.",
      },
      {
        name: "Analytical Skills",
        description: "Strong analytical and problem-solving abilities.",
      },
      {
        name: "Technical Knowledge",
        description: "In-depth understanding of mechanical systems.",
      },
    ],
    education: {
      required: "Bachelor's degree in Mechanical Engineering",
      preferred: "Master's degree in Mechanical Engineering",
      certifications: [
        "Professional Engineer (PE) license",
        "Certified Mechanical Engineer",
      ],
    },
    dayInLife:
      "A mechanical engineer typically spends their day designing components, running simulations, testing prototypes, and consulting with clients or team members.",
    companies: ["Boeing", "Tesla", "GE"],
  },
  "graphic-designer": {
    id: "graphic-designer",
    title: "Graphic Designer",
    description:
      "Graphic designers create visual concepts that inspire, inform, and captivate consumers. They develop the overall layout and production design for advertisements, brochures, magazines, and corporate reports.",
    salary: "$55,000",
    salaryRange: "$40,000 - $85,000",
    satisfaction: "Medium",
    growth: "Moderate",
    workLife: "Good",
    skills: [
      {
        name: "Design Software",
        description:
          "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
      },
      {
        name: "Creative Thinking",
        description: "Ability to generate innovative design solutions.",
      },
      {
        name: "Communication",
        description: "Strong visual communication skills.",
      },
    ],
    education: {
      required: "Bachelor's degree in Graphic Design or related field",
      preferred: "Bachelor's degree in Graphic Design",
      certifications: [
        "Adobe Certified Expert (ACE)",
        "Certified Graphic Designer",
      ],
    },
    dayInLife:
      "A graphic designer typically spends their day creating designs, meeting with clients, reviewing design briefs, and collaborating with marketing teams.",
    companies: ["Pentagram", "IDEO", "In-house corporate design teams"],
  },
};

// DOM Elements
const introSection = document.getElementById("intro");
const majorSelectionSection = document.getElementById("major-selection");
const careerPathSection = document.getElementById("career-path");
const jobDetailsSection = document.getElementById("job-details");
const majorDetailsContainer = document.getElementById("major-details");
const jobContentContainer = document.getElementById("job-content");
const backButtons = document.querySelectorAll(".back-button");
const majorCards = document.querySelectorAll(".major-card");
const startBtn = document.getElementById("start-btn");

// Function to switch between sections
function switchSection(fromSection, toSection) {
  console.log("Switching sections", fromSection.id, "to", toSection.id);
  fromSection.classList.remove("active-section");
  fromSection.classList.add("hidden-section");
  toSection.classList.remove("hidden-section");
  toSection.classList.add("active-section");
  window.scrollTo(0, 0);
}

// Initialize event listeners once DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");

  // Start button event listener
  if (startBtn) {
    console.log("Start button found");
    startBtn.addEventListener("click", () => {
      console.log("Start button clicked");
      if (introSection && majorSelectionSection) {
        switchSection(introSection, majorSelectionSection);
      } else {
        console.error("Could not find intro or major selection sections");
      }
    });
  } else {
    console.error("Could not find start button with id 'start-btn'");
  }

  // Major cards event listeners
  majorCards.forEach((card) => {
    card.addEventListener("click", () => {
      const majorId = card.getAttribute("data-major");
      displayMajorDetails(majorId);
      switchSection(majorSelectionSection, careerPathSection);
    });
  });

  // Back buttons event listeners
  backButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const parentSection = button.closest("section");
      if (parentSection.id === "career-path") {
        switchSection(careerPathSection, majorSelectionSection);
      } else if (parentSection.id === "job-details") {
        switchSection(jobDetailsSection, careerPathSection);
      }
    });
  });
});

function displayMajorDetails(majorId) {
  const major = majorsData[majorId];
  if (!major) {
    console.error("Major not found:", majorId);
    return;
  }

  // Convert YouTube watch URL to embed URL
  const videoId = major.video.url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)?.[1];
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : "";

  let jobsHTML = "";
  major.jobs.forEach((job) => {
    jobsHTML += `
            <div class="job-card" data-job-id="${job.id}">
                <h3 class="job-title">${job.title}</h3>
                <p>${job.description}</p>
                <div class="job-stats">
                    <div class="stat">
                        <div class="stat-value">${job.salary}</div>
                        <div class="stat-label">Avg. Salary</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${job.satisfaction}</div>
                        <div class="stat-label">Job Satisfaction</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${job.growth}</div>
                        <div class="stat-label">Growth Rate</div>
                    </div>
                </div>
                <button class="btn-primary view-job-btn">View Details</button>
            </div>
        `;
  });

  const majorHTML = `
        <div class="career-header">
            <div class="career-header-image">
                <img src="${major.image}" alt="${major.title}">
            </div>
            <div class="career-header-text">
                <h2>${major.title}</h2>
                <p>${major.description}</p>
            </div>
        </div>
        
        <div class="career-video">
            <h3>Learn More About ${major.title}</h3>
            <div class="video-container">
                ${
                  embedUrl
                    ? `<iframe width="100%" height="400" src="${embedUrl}" title="${major.video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                    : "<p>Video unavailable</p>"
                }
            </div>
        </div>
        
        <div class="jobs-section">
            <h3>Common Career Paths</h3>
            <p>Explore potential careers with a ${major.title} degree:</p>
            <div class="jobs-grid">
                ${jobsHTML}
            </div>
        </div>
    `;

  majorDetailsContainer.innerHTML = majorHTML;

  // Add event listeners to job cards
  const viewJobButtons = document.querySelectorAll(".view-job-btn");
  viewJobButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const jobCard = button.closest(".job-card");
      const jobId = jobCard.getAttribute("data-job-id");
      displayJobDetails(jobId);
      switchSection(careerPathSection, jobDetailsSection);
    });
  });
}

function displayJobDetails(jobId) {
  const jobDetails = jobDetailsData[jobId];
  if (!jobDetails) {
    console.error("Job details not found:", jobId);
    return;
  }

  let skillsHTML = "";
  jobDetails.skills.forEach((skill) => {
    skillsHTML += `
            <div class="skill-item">
                <div class="skill-icon"><i class="fas fa-check-circle"></i></div>
                <div class="skill-info">
                    <strong>${skill.name}</strong>: ${skill.description}
                </div>
            </div>
        `;
  });

  const jobHTML = `
        <div class="job-detail-header">
            <h2 class="job-detail-title">${jobDetails.title}</h2>
            <p>${jobDetails.description}</p>
            
            <div class="job-detail-stats">
                <div class="detail-stat">
                    <div class="detail-stat-value">${jobDetails.salary}</div>
                    <div class="detail-stat-label">Average Salary</div>
                </div>
                <div class="detail-stat">
                    <div class="detail-stat-value">${
                      jobDetails.salaryRange
                    }</div>
                    <div class="detail-stat-label">Salary Range</div>
                </div>
                <div class="detail-stat">
                    <div class="detail-stat-value">${
                      jobDetails.satisfaction
                    }</div>
                    <div class="detail-stat-label">Job Satisfaction</div>
                </div>
                <div class="detail-stat">
                    <div class="detail-stat-value">${jobDetails.growth}</div>
                    <div class="detail-stat-label">Job Growth</div>
                </div>
                <div class="detail-stat">
                    <div class="detail-stat-value">${jobDetails.workLife}</div>
                    <div class="detail-stat-label">Work-Life Balance</div>
                </div>
            </div>
        </div>
        
        <div class="skills-section">
            <h3><i class="fas fa-tools"></i> Required Skills</h3>
            <p>Key skills needed to succeed as a ${jobDetails.title}:</p>
            <div class="skills-grid">
                ${skillsHTML}
            </div>
        </div>
        
        <div class="education-section">
            <h3><i class="fas fa-graduation-cap"></i> Education & Certifications</h3>
            <p><strong>Required Education:</strong> ${
              jobDetails.education.required
            }</p>
            <p><strong>Preferred Education:</strong> ${
              jobDetails.education.preferred
            }</p>
            <p><strong>Valuable Certifications:</strong></p>
            <ul>
                ${jobDetails.education.certifications
                  .map((cert) => `<li>${cert}</li>`)
                  .join("")}
            </ul>
        </div>
        
        <div class="day-in-life">
            <h3><i class="fas fa-calendar-day"></i> A Day in the Life</h3>
            <p>${jobDetails.dayInLife}</p>
            <p><strong>Common Employers:</strong> ${jobDetails.companies.join(
              ", "
            )}</p>
        </div>
        
        <button class="btn-primary" id="explore-more-btn">Explore More Careers</button>
    `;

  jobContentContainer.innerHTML = jobHTML;

  // Add event listener to explore more button
  const exploreMoreBtn = document.getElementById("explore-more-btn");
  if (exploreMoreBtn) {
    exploreMoreBtn.addEventListener("click", () => {
      switchSection(jobDetailsSection, careerPathSection);
    });
  }
}

// Add animation to elements when they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".major-card, .job-card, .skills-section, .education-section, .day-in-life"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    element.style.opacity = 0;
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(element);
  });
}

// Initialize animations
window.addEventListener("load", animateOnScroll);
