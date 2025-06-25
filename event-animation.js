class Meatball {
    constructor() {
        this.element = document.createElement('img');
        this.element.className = 'meatball';
        this.element.src = 'assets/meatball.png'; // You'll need to add this image to your project
        this.element.style.cssText = `
            position: absolute;
            width: 200px;
            height: 200px;
            pointer-events: none;
            z-index: -1;
            object-fit: contain;
        `;
        
        this.x = Math.random() * window.innerWidth;
        this.y = -40;
        this.speed = 0.5 + Math.random() * 2;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 4;
        
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.transform = `rotate(${this.rotation}deg)`;
        
        // Add error handling for image loading
        this.element.onerror = () => {
            console.log('Failed to load meatball image');
            this.element.remove();
        };
        
        const eventBackground = document.querySelector('.event-background');
        if (eventBackground) {
            eventBackground.appendChild(this.element);
        }
    }

    update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        
        this.element.style.top = `${this.y}px`;
        this.element.style.transform = `rotate(${this.rotation}deg)`;
        
        if (this.y > window.innerHeight + 40) {
            this.element.remove();
        }
    }
}

class MeatballAnimation {
    constructor() {
        this.meatballs = [];
        this.lastSpawn = 0;
        this.spawnInterval = 2000; // Spawn a new meatball every 2 seconds
        this.animate = this.animate.bind(this);
    }

    spawnMeatball() {
        this.meatballs.push(new Meatball());
    }

    animate(timestamp) {
        if (timestamp - this.lastSpawn > this.spawnInterval) {
            this.spawnMeatball();
            this.lastSpawn = timestamp;
        }

        this.meatballs = this.meatballs.filter(meatball => {
            meatball.update();
            return meatball.y <= window.innerHeight + 40;
        });

        requestAnimationFrame(this.animate);
    }

    start() {
        this.lastSpawn = performance.now();
        requestAnimationFrame(this.animate);
    }
}

class Schiacciate {
    constructor() {
        this.element = document.createElement('img');
        this.element.className = 'schiacciate';
        this.element.src = 'assets/schiacciate.png';
        this.element.style.cssText = `
            position: absolute;
            width: 200px;
            height: 200px;
            pointer-events: none;
            z-index: -1;
            object-fit: contain;
        `;
        
        this.x = Math.random() * window.innerWidth;
        this.y = -40;
        this.speed = 0.5 + Math.random() * 2;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 4;
        
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.transform = `rotate(${this.rotation}deg)`;
        
        // Add error handling for image loading
        this.element.onerror = () => {
            console.log('Failed to load schiacciate image');
            this.element.remove();
        };
        
        const eventBackground = document.querySelector('.event-background');
        if (eventBackground) {
            eventBackground.appendChild(this.element);
        }
    }

    update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        
        this.element.style.top = `${this.y}px`;
        this.element.style.transform = `rotate(${this.rotation}deg)`;
        
        if (this.y > window.innerHeight + 40) {
            this.element.remove();
        }
    }
}

class SchiacciateAnimation {
    constructor() {
        this.schiacciate = [];
        this.lastSpawn = 0;
        this.spawnInterval = 2000; // Spawn a new schiacciata every 2 seconds
        this.animate = this.animate.bind(this);
    }

    spawnSchiacciate() {
        this.schiacciate.push(new Schiacciate());
    }

    animate(timestamp) {
        if (timestamp - this.lastSpawn > this.spawnInterval) {
            this.spawnSchiacciate();
            this.lastSpawn = timestamp;
        }

        this.schiacciate = this.schiacciate.filter(schiacciate => {
            schiacciate.update();
            return schiacciate.y <= window.innerHeight + 40;
        });

        requestAnimationFrame(this.animate);
    }

    start() {
        this.lastSpawn = performance.now();
        requestAnimationFrame(this.animate);
    }
}

// Test image loading
function testImageLoading() {
    const meatballImg = new Image();
    const schiacciateImg = new Image();
    
    meatballImg.onload = () => console.log('Meatball image loaded successfully');
    meatballImg.onerror = () => console.error('Failed to load meatball image');
    meatballImg.src = 'assets/meatball.png';
    
    schiacciateImg.onload = () => console.log('Schiacciate image loaded successfully');
    schiacciateImg.onerror = () => console.error('Failed to load schiacciate image');
    schiacciateImg.src = 'assets/schiacciate.png';
}

// Start animations based on available elements
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, checking for animations...');
    
    // Test image loading first
    testImageLoading();
    
    // Check if event-background element exists
    const eventBackground = document.querySelector('.event-background');
    if (!eventBackground) {
        console.log('Event background not found, skipping animations');
        return;
    }
    
    // Check page type by looking at the page title
    const pageTitle = document.title;
    console.log('Page title:', pageTitle);
    
    // Try to start meatball animation if we're on meatball page
    if (pageTitle.includes('Meatballedí') || pageTitle.includes('Meatball')) {
        console.log('Attempting to start meatball animation...');
        try {
            const meatballAnimation = new MeatballAnimation();
            meatballAnimation.start();
            console.log('Meatball animation started successfully');
        } catch (error) {
            console.error('Error starting meatball animation:', error);
        }
    }
    
    // Try to start schiacciate animation if we're on schiacciate page
    if (pageTitle.includes('SchiacciArte') || pageTitle.includes('Schiacci')) {
        console.log('Attempting to start schiacciate animation...');
        try {
            const schiacciateAnimation = new SchiacciateAnimation();
            schiacciateAnimation.start();
            console.log('Schiacciate animation started successfully');
        } catch (error) {
            console.error('Error starting schiacciate animation:', error);
        }
    }
    
    // If no specific page detected, try both (for testing)
    if (!pageTitle.includes('Meatballedí') && !pageTitle.includes('SchiacciArte')) {
        console.log('No specific page detected, trying both animations...');
        
        // Try meatball animation
        try {
            const meatballAnimation = new MeatballAnimation();
            meatballAnimation.start();
            console.log('Meatball animation started (fallback)');
        } catch (error) {
            console.error('Error starting meatball animation (fallback):', error);
        }
        
        // Try schiacciate animation
        try {
            const schiacciateAnimation = new SchiacciateAnimation();
            schiacciateAnimation.start();
            console.log('Schiacciate animation started (fallback)');
        } catch (error) {
            console.error('Error starting schiacciate animation (fallback):', error);
        }
    }
}); 