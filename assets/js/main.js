// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
const form = document.querySelector(".contact-form");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  
  // Close menu when clicking nav links
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Enhanced form submission with validation
if (form) {
  const inputs = form.querySelectorAll("input, textarea");
  
  // Add focus/blur animations
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.parentElement.style.transform = "translateX(4px)";
    });
    
    input.addEventListener("blur", () => {
      input.parentElement.style.transform = "translateX(0)";
    });
  });
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Visual feedback
    submitButton.textContent = "Verzenden...";
    submitButton.style.opacity = "0.7";
    
    // Simulate sending
    setTimeout(() => {
      submitButton.textContent = "✓ Verzonden";
      submitButton.style.background = "var(--forest)";
      submitButton.style.color = "#fff";
      
      setTimeout(() => {
        alert("Bedankt voor uw bericht! We nemen binnen twee werkdagen contact op.");
        form.reset();
        submitButton.textContent = originalText;
        submitButton.style.opacity = "1";
        submitButton.style.background = "";
        submitButton.style.color = "";
      }, 1000);
    }, 1500);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});

// Scroll-based header shadow
const header = document.querySelector(".site-header");
if (header) {
  let lastScroll = 0;
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "";
    }
    
    lastScroll = currentScroll;
  });
}

// Intersection Observer for scroll animations (respecting user preferences)
if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate on scroll
  document.querySelectorAll(".card, .gallery-item, .note").forEach(el => {
    observer.observe(el);
  });
}
