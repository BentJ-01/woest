// Falling leaves easter egg
document.addEventListener('DOMContentLoaded', () => {
  const logoCircle = document.querySelector('.logo-circle');
  
  logoCircle.addEventListener('click', () => {
    createFallingLeaves();
  });
});

function createFallingLeaves() {
  const numLeaves = 30;
  
  // PNG leaf images from bladeren folder
  const leafImages = [
    'assets/img/bladeren/mapleblad.png',
    'assets/img/bladeren/groenblad2.png',
    'assets/img/bladeren/groenblad1.png',
    'assets/img/bladeren/groenBlad.png',
    'assets/img/bladeren/eikenblad.png',
    'assets/img/bladeren/doodBlad.png'
  ];
  
  /* SVG leaves (commented out - uncomment to use instead of PNG)
  const leafSVGs = [
    // Oak leaf - highly detailed
    `<svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="oak${Date.now()}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#5a7c3e"/>
          <stop offset="40%" stop-color="#4a6332"/>
          <stop offset="100%" stop-color="#344821"/>
        </linearGradient>
      </defs>
      <path d="M40 5 C44 8 48 14 50 22 C56 22 62 26 62 32 C62 36 59 39 54 42 C61 45 64 52 62 58 C60 63 55 66 48 66 C51 73 50 80 45 87 C42 92 40 95 40 97 C40 95 38 92 35 87 C30 80 29 73 32 66 C25 66 20 63 18 58 C16 52 19 45 26 42 C21 39 18 36 18 32 C18 26 24 22 30 22 C32 14 36 8 40 5 Z" fill="url(#oak${Date.now()})"/>
      <line x1="40" y1="8" x2="40" y2="97" stroke="#2a3a1c" stroke-width="1.5"/>
      <path d="M40 26 C33 25 26 27 21 32" stroke="#3a4a25" stroke-width="0.9" fill="none"/>
      <path d="M40 26 C47 25 54 27 59 32" stroke="#3a4a25" stroke-width="0.9" fill="none"/>
      <path d="M40 46 C34 46 28 49 23 54" stroke="#3a4a25" stroke-width="0.8" fill="none"/>
      <path d="M40 46 C46 46 52 49 57 54" stroke="#3a4a25" stroke-width="0.8" fill="none"/>
      <path d="M40 66 C35 67 30 70 26 75" stroke="#3a4a25" stroke-width="0.7" fill="none"/>
      <path d="M40 66 C45 67 50 70 54 75" stroke="#3a4a25" stroke-width="0.7" fill="none"/>
    </svg>`,
    
    // Maple leaf - detailed autumn
    `<svg viewBox="0 0 95 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="maple${Date.now()}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#d94d2e"/>
          <stop offset="50%" stop-color="#b33520"/>
          <stop offset="100%" stop-color="#8a1f14"/>
        </linearGradient>
      </defs>
      <path d="M47 4 C48 15 49 22 51 31 C58 24 65 20 74 20 C69 28 65 34 62 40 C71 42 80 47 87 54 C78 56 69 58 60 60 C65 69 67 78 67 88 C60 82 53 77 47 71 C41 77 34 82 27 88 C27 78 29 69 34 60 C25 58 16 56 7 54 C14 47 23 42 32 40 C29 34 25 28 20 20 C29 20 36 24 43 31 C45 22 46 15 47 4 Z" fill="url(#maple${Date.now()})"/>
      <line x1="47" y1="6" x2="47" y2="89" stroke="#691a11" stroke-width="1.8"/>
      <path d="M47 33 C40 30 31 29 22 31" stroke="#7a221a" stroke-width="1" fill="none"/>
      <path d="M47 33 C54 30 63 29 72 31" stroke="#7a221a" stroke-width="1" fill="none"/>
      <path d="M47 54 C39 54 31 58 25 64" stroke="#7a221a" stroke-width="0.9" fill="none"/>
      <path d="M47 54 C55 54 63 58 69 64" stroke="#7a221a" stroke-width="0.9" fill="none"/>
    </svg>`,
    
    // Birch leaf - golden with texture
    `<svg viewBox="0 0 70 95" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="birch${Date.now()}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ddb157"/>
          <stop offset="50%" stop-color="#c19438"/>
          <stop offset="100%" stop-color="#946e25"/>
        </linearGradient>
      </defs>
      <path d="M35 4 C44 11 53 22 55 36 C56 54 50 72 43 85 C39 91 36 93 35 94 C34 93 31 91 27 85 C20 72 14 54 15 36 C17 22 26 11 35 4 Z" fill="url(#birch${Date.now()})"/>
      <line x1="35" y1="6" x2="35" y2="93" stroke="#725420" stroke-width="1.4"/>
      <path d="M35 24 C28 25 21 29 16 36" stroke="#8a6528" stroke-width="0.9" fill="none"/>
      <path d="M35 24 C42 25 49 29 54 36" stroke="#8a6528" stroke-width="0.9" fill="none"/>
      <path d="M35 42 C28 44 22 48 18 55" stroke="#8a6528" stroke-width="0.8" fill="none"/>
      <path d="M35 42 C42 44 48 48 52 55" stroke="#8a6528" stroke-width="0.8" fill="none"/>
      <path d="M35 60 C29 62 24 66 21 72" stroke="#8a6528" stroke-width="0.7" fill="none"/>
      <path d="M35 60 C41 62 46 66 49 72" stroke="#8a6528" stroke-width="0.7" fill="none"/>
      <path d="M35 76 C31 78 27 81 25 86" stroke="#8a6528" stroke-width="0.6" fill="none"/>
      <path d="M35 76 C39 78 43 81 45 86" stroke="#8a6528" stroke-width="0.6" fill="none"/>
    </svg>`,
    
    // Ash leaf - forest green detailed
    `<svg viewBox="0 0 65 105" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ash${Date.now()}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#72985a"/>
          <stop offset="50%" stop-color="#557d3e"/>
          <stop offset="100%" stop-color="#3a5729"/>
        </linearGradient>
      </defs>
      <path d="M32 5 C39 13 46 24 48 38 C49 56 45 76 40 90 C37 98 33 102 32 104 C31 102 27 98 24 90 C19 76 15 56 16 38 C18 24 25 13 32 5 Z" fill="url(#ash${Date.now()})"/>
      <line x1="32" y1="7" x2="32" y2="103" stroke="#2d421f" stroke-width="1.3"/>
      <path d="M32 26 C26 27 20 31 16 38" stroke="#3d5228" stroke-width="0.9" fill="none"/>
      <path d="M32 26 C38 27 44 31 48 38" stroke="#3d5228" stroke-width="0.9" fill="none"/>
      <path d="M32 46 C26 48 21 53 17 60" stroke="#3d5228" stroke-width="0.8" fill="none"/>
      <path d="M32 46 C38 48 43 53 47 60" stroke="#3d5228" stroke-width="0.8" fill="none"/>
      <path d="M32 66 C27 68 23 72 20 78" stroke="#3d5228" stroke-width="0.7" fill="none"/>
      <path d="M32 66 C37 68 41 72 44 78" stroke="#3d5228" stroke-width="0.7" fill="none"/>
      <path d="M32 84 C28 86 25 90 23 95" stroke="#3d5228" stroke-width="0.6" fill="none"/>
      <path d="M32 84 C36 86 39 90 41 95" stroke="#3d5228" stroke-width="0.6" fill="none"/>
    </svg>`,
    
    // Beech leaf - detailed green
    `<svg viewBox="0 0 75 98" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="beech${Date.now()}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#82ab60"/>
          <stop offset="50%" stop-color="#658d40"/>
          <stop offset="100%" stop-color="#45622c"/>
        </linearGradient>
      </defs>
      <path d="M37 4 C45 9 52 18 55 29 C57 43 54 59 49 73 C46 83 41 93 37 96 C33 93 28 83 25 73 C20 59 17 43 19 29 C22 18 29 9 37 4 Z" fill="url(#beech${Date.now()})"/>
      <line x1="37" y1="6" x2="37" y2="95" stroke="#334d22" stroke-width="1.3"/>
      <path d="M37 22 C30 23 24 27 19 32" stroke="#436228" stroke-width="0.9" fill="none"/>
      <path d="M37 22 C44 23 50 27 55 32" stroke="#436228" stroke-width="0.9" fill="none"/>
      <path d="M37 38 C31 40 25 45 21 52" stroke="#436228" stroke-width="0.8" fill="none"/>
      <path d="M37 38 C43 40 49 45 53 52" stroke="#436228" stroke-width="0.8" fill="none"/>
      <path d="M37 54 C32 56 27 61 24 68" stroke="#436228" stroke-width="0.7" fill="none"/>
      <path d="M37 54 C42 56 47 61 50 68" stroke="#436228" stroke-width="0.7" fill="none"/>
      <path d="M37 70 C33 72 29 76 27 82" stroke="#436228" stroke-width="0.6" fill="none"/>
      <path d="M37 70 C41 72 45 76 47 82" stroke="#436228" stroke-width="0.6" fill="none"/>
    </svg>`,
    
    // Willow leaf - elongated realistic
    `<svg viewBox="0 0 50 115" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="willow${Date.now()}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#90be60"/>
          <stop offset="50%" stop-color="#659a3a"/>
          <stop offset="100%" stop-color="#426627"/>
        </linearGradient>
      </defs>
      <path d="M25 4 C32 14 37 30 37 48 C37 70 32 94 25 110 C18 94 13 70 13 48 C13 30 18 14 25 4 Z" fill="url(#willow${Date.now()})"/>
      <line x1="25" y1="6" x2="25" y2="109" stroke="#314d21" stroke-width="1.2"/>
      <path d="M25 32 C20 36 17 41 15 48" stroke="#405d2a" stroke-width="0.8" fill="none"/>
      <path d="M25 32 C30 36 33 41 35 48" stroke="#405d2a" stroke-width="0.8" fill="none"/>
      <path d="M25 58 C21 62 18 67 16 74" stroke="#405d2a" stroke-width="0.7" fill="none"/>
      <path d="M25 58 C29 62 32 67 34 74" stroke="#405d2a" stroke-width="0.7" fill="none"/>
      <path d="M25 82 C21 86 19 91 17 98" stroke="#405d2a" stroke-width="0.6" fill="none"/>
      <path d="M25 82 C29 86 31 91 33 98" stroke="#405d2a" stroke-width="0.6" fill="none"/>
    </svg>`,
    
    // Poplar leaf - heart-shaped detailed
    `<svg viewBox="0 0 78 92" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="poplar${Date.now()}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7eb25c"/>
          <stop offset="50%" stop-color="#5d8d3c"/>
          <stop offset="100%" stop-color="#3e5f28"/>
        </linearGradient>
      </defs>
      <path d="M39 5 C48 10 58 22 60 36 C62 54 56 72 46 84 C43 88 40 90 39 91 C38 90 35 88 32 84 C22 72 16 54 18 36 C20 22 30 10 39 5 Z" fill="url(#poplar${Date.now()})"/>
      <line x1="39" y1="7" x2="39" y2="90" stroke="#2f4a22" stroke-width="1.3"/>
      <path d="M39 26 C32 27 25 31 20 38" stroke="#3f5a28" stroke-width="0.9" fill="none"/>
      <path d="M39 26 C46 27 53 31 58 38" stroke="#3f5a28" stroke-width="0.9" fill="none"/>
      <path d="M39 44 C33 46 27 51 23 58" stroke="#3f5a28" stroke-width="0.8" fill="none"/>
      <path d="M39 44 C45 46 51 51 55 58" stroke="#3f5a28" stroke-width="0.8" fill="none"/>
      <path d="M39 62 C34 64 29 68 26 74" stroke="#3f5a28" stroke-width="0.7" fill="none"/>
      <path d="M39 62 C44 64 49 68 52 74" stroke="#3f5a28" stroke-width="0.7" fill="none"/>
    </svg>`
  ];
  */

  for (let i = 0; i < numLeaves; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'falling-leaf';
    
    // Use random PNG image from bladeren folder
    const img = document.createElement('img');
    img.src = leafImages[Math.floor(Math.random() * leafImages.length)];
    img.alt = 'falling leaf';
    img.style.width = '100%';
    img.style.height = '100%';
    leaf.appendChild(img);
    
    // Uncomment below to use SVG instead
    // leaf.innerHTML = leafSVGs[Math.floor(Math.random() * leafSVGs.length)];
    
    // Random starting position
    leaf.style.left = Math.random() * 100 + '%';
    leaf.style.top = '-100px';
    
    // Highly randomized animation properties for each leaf
    const randomDelay = Math.random() * 4; // 0-4 seconds delay
    const randomDuration = Math.random() * 10 + 5; // 5-15 seconds (some very slow)
    const randomRotation = (Math.random() * 2160 + 360) * (Math.random() < 0.5 ? 1 : -1); // Spin left or right
    const randomXOffset = (Math.random() - 0.5) * 300; // -150 to 150px horizontal drift
    
    leaf.style.setProperty('--random-delay', randomDelay + 's');
    leaf.style.setProperty('--random-duration', randomDuration + 's');
    leaf.style.setProperty('--random-rotation', randomRotation + 'deg');
    leaf.style.setProperty('--random-x', randomXOffset + 'px');
    
    document.body.appendChild(leaf);
    
    // Add drag functionality
    let isDragging = false;
    let offsetX, offsetY;
    let removalTimeout;
    
    // Set initial removal timeout
    removalTimeout = setTimeout(() => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      leaf.remove();
    }, (randomDelay + randomDuration) * 1000 + 5000);
    
    leaf.addEventListener('mousedown', (e) => {
      // Get current computed position BEFORE stopping animation
      const rect = leaf.getBoundingClientRect();
      
      // Clear the removal timeout since user is interacting
      clearTimeout(removalTimeout);
      
      // Now stop animation and freeze position
      isDragging = true;
      leaf.classList.add('grabbed');
      leaf.style.left = rect.left + 'px';
      leaf.style.top = rect.top + 'px';
      
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      e.preventDefault();
    });
    
    const handleMouseMove = (e) => {
      if (isDragging && leaf.parentElement) {
        leaf.style.left = (e.clientX - offsetX) + 'px';
        leaf.style.top = (e.clientY - offsetY) + 'px';
      }
    };
    
    const handleMouseUp = () => {
      if (isDragging) {
        isDragging = false;
        leaf.classList.remove('grabbed');
        // Keep the leaf at the released position, resume falling from there
        const currentTop = parseFloat(leaf.style.top);
        const windowHeight = window.innerHeight;
        const remainingDistance = windowHeight - currentTop + 120;
        const remainingDuration = (remainingDistance / windowHeight) * randomDuration;
        
        if (remainingDuration > 0) {
          leaf.style.setProperty('--random-duration', remainingDuration + 's');
          leaf.style.setProperty('--random-delay', '0s');
          leaf.style.animation = 'none';
          setTimeout(() => {
            leaf.style.animation = `fall ${remainingDuration}s ease-in forwards`;
          }, 10);
          
          // Set new removal timeout based on remaining duration
          removalTimeout = setTimeout(() => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            leaf.remove();
          }, remainingDuration * 1000 + 1000);
        } else {
          // Leaf is below screen, remove immediately
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          leaf.remove();
        }
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }
}
