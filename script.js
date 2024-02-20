function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.style.display = (sidebar.style.display === "none") ? "block" : "none";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Add these functions to your existing JavaScript code

// Add these functions to your existing JavaScript code

function navigateToResume() {
    // Get the resume link
    var resumeLink = document.getElementById('resumeLink').href;
    
    // Open the resume link in a new tab/window
    window.open(resumeLink, '_blank');
}

function navigateToSkills() {
    // Get the skills section offset top value
    var skillsSectionOffsetTop = document.getElementById('skills').offsetTop;

    // Scroll to the skills section with smooth behavior
    window.scrollTo({
        top: skillsSectionOffsetTop,
        behavior: 'smooth'
    });

    // Close the sidebar
    w3_close();
}

function navigateToExperience() {
    // Get the experience section offset top value
    var experienceSectionOffsetTop = document.getElementById('experience').offsetTop;

    // Scroll to the experience section with smooth behavior
    window.scrollTo({
        top: experienceSectionOffsetTop,
        behavior: 'smooth'
    });

    // Close the sidebar
    w3_close();
}

function navigateToProjects() {
    // Get the projects section offset top value
    var projectsSectionOffsetTop = document.getElementById('projects').offsetTop;

    // Scroll to the projects section with smooth behavior
    window.scrollTo({
        top: projectsSectionOffsetTop,
        behavior: 'smooth'
    });

    // Close the sidebar
    w3_close();
}

function navigateToContact() {
    // Get the contact section offset top value
    var contactSectionOffsetTop = document.getElementById('contact').offsetTop;

    // Scroll to the contact section with smooth behavior
    window.scrollTo({
        top: contactSectionOffsetTop,
        behavior: 'smooth'
    });

    // Close the sidebar
    w3_close();
}
