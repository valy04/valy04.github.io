document.addEventListener('DOMContentLoaded', function() {
    const uploadInput = document.getElementById('upload-input');
    const profilePicture = document.getElementById('profile-picture');
    const uploadButton = document.getElementById('upload-button');
    const removeAvatarButton = document.getElementById('remove-avatar-button');
    const dropdownTrigger = document.getElementById('dropdown-trigger');
    const dropdownMenu = document.getElementById('dropdown-menu');


    const backgrounds = [
        '../resources/avatar.png',
        '../resources/avatar2.png',
        '../resources/avatar3.jpg',
        '../resources/avatar4.png',
        '../resources/avatar5.png',
        '../resources/avatar6.jpg',
        '../resources/avatar7.jpg',
        '../resources/img_avatar.png',
        '../resources/img_avatar2.png',
        '../resources/img_avatar3.png',
        '../resources/img_avatar4.png',
        '../resources/img_avatar5.png',
        // Add more background image URLs as needed
    ];

    const loadProfilePicture = function() {
        const storedPicture = localStorage.getItem('profilePicture');
        if (storedPicture) {
            profilePicture.src = storedPicture;
            removeTransparency();
        } else {
            setRandomAvatar(); // If no avatar selected, set random profile avatar
            applyTransparency();
        }
    };

    uploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(loadEvent) {
            profilePicture.src = loadEvent.target.result;
            localStorage.setItem('profilePicture', loadEvent.target.result);
            removeTransparency();
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    uploadButton.addEventListener('click', function() {
        uploadInput.click();
    });

    removeAvatarButton.addEventListener('click', function() {
        profilePicture.src = '';
        localStorage.removeItem('profilePicture');
        setRandomAvatar();
        applyTransparency();
    });

    dropdownTrigger.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });

    window.addEventListener('click', function(event) {
        if (!dropdownTrigger.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    function applyTransparency() {
        profilePicture.style.background = 'rgba(255, 255, 255, 0.5)';
        profilePicture.style.opacity = '1';
    }

    function removeTransparency() {
        profilePicture.style.background = 'none';
        profilePicture.style.opacity = '1';
    }

    function setRandomAvatar() {
        const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
        profilePicture.src = backgrounds[randomBackgroundIndex];
    }

    loadProfilePicture();
});

// Rotate SVG Profile

document.addEventListener('DOMContentLoaded', function() {
    const uploadInput = document.getElementById('upload-input');
    const profilePicture = document.getElementById('profile-picture');
    const dropdownTrigger = document.getElementById('dropdown-trigger');
    const rotateSvg = document.getElementById('rotate-svg');
    
    let rotation = 0;

    dropdownTrigger.addEventListener('click', function(event) {
        event.stopPropagation();
        rotation += 180;
        if (rotation === 180) {
            rotation = -180;
        }
        rotateSvg.style.transform = 'rotate(' + rotation + 'deg)';
    });

    window.addEventListener('click', function(event) {
        if (!dropdownTrigger.contains(event.target)) {
            rotation = 0;
            rotateSvg.style.transform = 'rotate(' + rotation + 'deg)';
        }
    });
});