// SIDEBAR FUNCTIONALITIES

// TOGGLE
function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.style.display = (sidebar.style.display === "none") ? "block" : "none";
}

// CLOSE
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// RESUME NAVIGATION
function navigateToResume() {
    var resumeLink = document.getElementById('resumeLink').href;
    window.open(resumeLink, '_blank');
}

// SKILLS
function navigateToSkills() {
    var skillsSectionOffsetTop = document.getElementById('skills').offsetTop;
    window.scrollTo({
        top: skillsSectionOffsetTop,
        behavior: 'smooth'
    });

    w3_close();
}

// EXPERIENCE
function navigateToExperience() {
    var experienceSectionOffsetTop = document.getElementById('experience').offsetTop;
    window.scrollTo({
        top: experienceSectionOffsetTop,
        behavior: 'smooth'
    });

    w3_close();
}

// PROJECTS
function navigateToProjects() {
    var projectsSectionOffsetTop = document.getElementById('projects').offsetTop;
    window.scrollTo({
        top: projectsSectionOffsetTop,
        behavior: 'smooth'
    });

    w3_close();
}

// CONTACT
function navigateToContact() {
    var contactSectionOffsetTop = document.getElementById('contact').offsetTop;
    window.scrollTo({
        top: contactSectionOffsetTop,
        behavior: 'smooth'
    });

    w3_close();
}
