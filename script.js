import { hashtags } from './hashtags.js';

document.addEventListener('DOMContentLoaded', () => {
    const hashtagElement = document.getElementById('hashtag-display');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const categoryBadge = document.getElementById('category-badge');
    const container = document.querySelector('.container');

    function getRandomHashtag() {
        const randomIndex = Math.floor(Math.random() * hashtags.length);
        return hashtags[randomIndex];
    }

    function updateDisplay() {
        // Add fade out effect
        hashtagElement.style.opacity = '0';
        categoryBadge.style.opacity = '0';

        setTimeout(() => {
            const item = getRandomHashtag();
            hashtagElement.textContent = item.tag;
            categoryBadge.textContent = item.category;

            // Add fade in effect
            hashtagElement.style.opacity = '1';
            categoryBadge.style.opacity = '1';

            // Random subtle background gradient shift
            const hue = Math.floor(Math.random() * 360);
            document.body.style.setProperty('--primary-hue', hue);
        }, 300);
    }

    generateBtn.addEventListener('click', () => {
        generateBtn.classList.add('clicked');
        setTimeout(() => generateBtn.classList.remove('clicked'), 200);
        updateDisplay();
    });

    copyBtn.addEventListener('click', () => {
        const text = hashtagElement.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<span class="material-icons">check</span> Copied!';
            copyBtn.classList.add('success');

            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.classList.remove('success');
            }, 2000);
        });
    });

    // Initial load
    updateDisplay();
});
