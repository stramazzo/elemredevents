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

// Start the appropriate animation based on the current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    
    // Check if event-background element exists
    const eventBackground = document.querySelector('.event-background');
    if (!eventBackground) {
        console.log('Event background not found, skipping animations');
        return;
    }
    
    if (currentPage.includes('meatballedi.html')) {
        // Start meatball animation for meatballedi page
        try {
            const meatballAnimation = new MeatballAnimation();
            meatballAnimation.start();
        } catch (error) {
            console.log('Error starting meatball animation:', error);
        }
    } else if (currentPage.includes('schiacciarte.html')) {
        // Start schiacciate animation for schiacciarte page
        try {
            const schiacciateAnimation = new SchiacciateAnimation();
            schiacciateAnimation.start();
        } catch (error) {
            console.log('Error starting schiacciate animation:', error);
        }
    }
    // No animation for index.html or other pages
}); 