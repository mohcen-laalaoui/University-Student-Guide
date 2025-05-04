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
  if (!major) return;

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
                <img src="/api/placeholder/600/400" alt="${major.title}">
            </div>
            <div class="career-header-text">
                <h2>${major.title}</h2>
                <p>${major.description}</p>
            </div>
        </div>
        
        <div class="career-video">
            <h3>Learn More About ${major.title}</h3>
            <div class="video-container">
                <iframe width="100%" height="400" src="${major.video.url}" title="${major.video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  if (!jobDetails) return;

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
  exploreMoreBtn.addEventListener("click", () => {
    switchSection(jobDetailsSection, careerPathSection);
  });
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
