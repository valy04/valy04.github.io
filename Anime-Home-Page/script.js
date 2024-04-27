document.addEventListener('DOMContentLoaded', function() {
    const uploadInput = document.getElementById('upload-input');
    const profilePicture = document.getElementById('profile-picture');
    const uploadButton = document.getElementById('upload-button');
    const removeAvatarButton = document.getElementById('remove-avatar-button');
    const dropdownTrigger = document.getElementById('dropdown-trigger');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const searchIcon = document.querySelector(".search-icon");
    const cancelIcon = document.querySelector(".cancel-icon");
    const menuContent = document.getElementById("menuContent");
    const searchBox = document.querySelector(".search-box");

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
        searchBox.classList.remove("active");
        cancelIcon.classList.add("hidden");
        searchIcon.classList.remove("hidden");
        menuContent.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (!dropdownTrigger.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    searchIcon.addEventListener("click", function() {
        menuContent.style.display = "none";
        dropdownMenu.style.display = 'none'; // Close the dropdown menu when search icon is clicked
    });

    cancelIcon.addEventListener("click", function() {
        menuContent.style.display = "none";
        dropdownMenu.style.display = 'none'; // Close the dropdown menu when cancel icon is clicked
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

    const searchBox = document.querySelector(".search-box");
    const searchIcon = searchBox.querySelector(".search-icon");
    const cancelIcon = searchBox.querySelector(".cancel-icon");
    const searchInput = document.querySelector(".search-input");

    searchIcon.addEventListener("click", () => {
        searchBox.classList.add("active");
        searchIcon.classList.add("hidden");
        cancelIcon.classList.remove("hidden");
        searchInput.focus();
        
        // Resetăm rotația SVG-ului la 0 grade
        rotation = 0;
        rotateSvg.style.transform = 'rotate(' + rotation + 'deg)';
    });

    cancelIcon.addEventListener("click", () => {
        searchBox.classList.remove("active");
        searchIcon.classList.remove("hidden");
        cancelIcon.classList.add("hidden");
        searchInput.value = ""; 
    });
});

// Search Bar

const searchBox = document.querySelector(".search-box");
const searchIcon = searchBox.querySelector(".search-icon");
const cancelIcon = searchBox.querySelector(".cancel-icon");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", () => {
    searchBox.classList.add("active");
    searchIcon.classList.add("hidden");
    cancelIcon.classList.remove("hidden");
    searchInput.focus(); 
});

cancelIcon.addEventListener("click", () => {
    searchBox.classList.remove("active");
    searchIcon.classList.remove("hidden");
    cancelIcon.classList.add("hidden");
    searchInput.value = ""; 
});

// Menu Responsive

function toggleMenu() {
    var menuContent = document.getElementById("menuContent");
    var menuInput = document.getElementById("toggleMenu");
    if (menuContent.style.display === "block") {
        menuContent.style.display = "none";
        menuInput.checked = false; 
    } else {
        menuContent.style.display = "block";
        menuInput.checked = true; 
        document.getElementById('dropdown-menu').style.display = "none"; 
        searchBox.classList.remove("active"); 
        cancelIcon.classList.add("hidden"); 
        searchIcon.classList.remove("hidden"); 
    }
}

const navBar = document.querySelector(".nav-ul-left");
function handleResize() {
    if (searchBox.classList.contains("active") && window.innerWidth <= 1150) {
        const hnlElements = navBar.querySelectorAll(".hnl");
        hnlElements.forEach(element => {
            element.classList.add("hidden-nav-bar");
        });
    } else {
        const hnlElements = navBar.querySelectorAll(".hnl");
        hnlElements.forEach(element => {
            element.classList.remove("hidden-nav-bar");
        });
    }
}

searchIcon.addEventListener("click", (event) => {
    searchBox.classList.add("active");
    searchIcon.classList.add("hidden");
    cancelIcon.classList.remove("hidden");
    handleResize();
    searchInput.focus();
    event.stopPropagation(); 
});

cancelIcon.addEventListener("click", (event) => {
    searchBox.classList.remove("active");
    searchIcon.classList.remove("hidden");
    cancelIcon.classList.add("hidden");
    handleResize();
    searchInput.value = ""; 
    event.stopPropagation(); 
});

window.addEventListener("resize", () => {
    handleResize();
});

handleResize();

// - - - - - - - - - - - MENU INPUT NO-CHECKED WHEN THE CONTENT-LIST IS CLOSE

document.addEventListener('DOMContentLoaded', function() {
    const menuInput = document.getElementById("toggleMenu");
    const menuContent = document.getElementById("menuContent");
    const searchIcon = document.querySelector(".search-icon");
    const profile = document.querySelector(".profile");

    // Function to toggle the menu input
    function toggleMenuInput() {
        if (menuContent.style.display === "none") {
            menuInput.checked = false; // Uncheck the menu input when the content-list is hidden
        }
    }

    // Event listener for clicking on the search icon
    searchIcon.addEventListener("click", function() {
        toggleMenuInput(); // Call the function to toggle the menu input
    });

    // Event listener for clicking on the profile picture
    profile.addEventListener("click", function() {
        toggleMenuInput(); // Call the function to toggle the menu input
    });
});

// - - - - - - - - - - - - HIDDEN CLASS HH WHEN SEARCH BAR IS OPEN

document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector(".search-icon");
    const cancelIcon = document.querySelector(".cancel-icon");
    const hhElements = document.querySelectorAll(".hh");

    function hideHHElements() {
        hhElements.forEach(element => {
            element.style.display = "none";
        });
    }

    function showHHElements() {
        hhElements.forEach(element => {
            element.style.display = ""; // Reset to default (CSS-defined) display value
        });
    }

    searchIcon.addEventListener("click", () => {
        if (window.innerWidth <= 650) {
            hideHHElements();
        }
    });

    cancelIcon.addEventListener("click", () => {
        if (window.innerWidth <= 650) {
            showHHElements();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 650) {
            showHHElements();
        }
    });
});


// - - - - - - - - -  BANNER 

let items = document.querySelectorAll('.slider .list .item');

// Configuration parameters
let countItem = items.length;
let itemActive = 0;
let scrolling = false;

// Alege un banner aleatoriu
let randomIndex = Math.floor(Math.random() * countItem);

// Setează bannerul activ la cel aleatoriu ales
itemActive = randomIndex;
items[itemActive].classList.add('active');

// Auto run slider
let refreshInterval = setInterval(() => {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
}, 15000);

function showSlider() {
    // Remove old active item
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active');

    // Active new item
    items[itemActive].classList.add('active');

    // Clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    }, 15000);
}

// BUTTON PREV & NEXT - - - - - BUTTON PREV & NEXT

document.addEventListener('DOMContentLoaded', function() {
    // Restul codului existent...

    const slider = document.querySelector('.slider');

    let touchstartX = 0;
    let touchendX = 0;
    let touchstartY = 0;
    let touchendY = 0;

    slider.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    });

    slider.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    });

    function handleGesture() {
        const deltaX = touchendX - touchstartX;
        const deltaY = touchendY - touchstartY;
        
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Swipe orizontal
            if (deltaX > 0) {
                // Swipe right
                if (isInSliderArea()) {
                    prevSlide();
                }
            } else {
                // Swipe left
                if (isInSliderArea()) {
                    nextSlide();
                }
            }
        }
    }

    function isInSliderArea() {
        return window.getSelection().toString() === ''; // Verifică dacă nu este selectat text
    }

    function prevSlide() {
        if (!scrolling) {
            scrolling = true;
            itemActive = (itemActive - 1 + countItem) % countItem;
            showSlider();
            setTimeout(() => { scrolling = false; }, 1000);
        }
    }

    function nextSlide() {
        if (!scrolling) {
            scrolling = true;
            itemActive = (itemActive + 1) % countItem;
            showSlider();
            setTimeout(() => { scrolling = false; }, 1000);
        }
    }

    // Adaugăm evenimentele pentru butoanele prev și next
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    prevButton.addEventListener('click', function() {
        prevSlide();
    });

    nextButton.addEventListener('click', function() {
        nextSlide();
    });

    // Verificăm dacă lățimea ferestrei este mai mică sau egală cu 900px
    function isSmallScreen() {
        return window.innerWidth <= 900;
    }

    // Verificăm lățimea ecranului și activăm gesturile tactile doar dacă ecranul este mic
    if (isSmallScreen()) {
        slider.style.touchAction = 'pan-y'; // Permitem doar gesturi de tragere pe axa Y
    }
});

// ARTICLES SCROLLING - - - - ARTICLES SCROLLING

document.addEventListener('DOMContentLoaded', function() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 900) {
        const articleSections = document.querySelectorAll('.articles-wrp');

        articleSections.forEach(function(container) {
            const prevButton = container.querySelector('.prev-button-article');
            const nextButton = container.querySelector('.next-button-article');
            let scrollStep = 1080; // valoarea implicită de scroll

            // Ascundem butonul "Previous" doar dacă este prezent în container
            if (prevButton) {
                prevButton.style.display = 'none';
            }

            container.addEventListener('scroll', function() {
                if (prevButton && container.scrollLeft > 0) {
                    prevButton.style.display = 'block';
                } else if (prevButton) {
                    prevButton.style.display = 'none';
                }

                if (nextButton && container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                    nextButton.style.display = 'none';
                } else if (nextButton) {
                    nextButton.style.display = 'block';
                }

                if (prevButton) {
                    prevButton.classList.add('scrolling');
                }
                if (nextButton) {
                    nextButton.classList.add('scrolling');
                }

                setTimeout(function() {
                    if (prevButton) {
                        prevButton.classList.remove('scrolling');
                    }
                    if (nextButton) {
                        nextButton.classList.remove('scrolling');
                    }
                }, 1);
            });

            if (prevButton) {
                prevButton.addEventListener('click', function() {
                    container.scrollLeft -= scrollStep;
                    toggleScrollSnap('left');
                });
            }

            if (nextButton) {
                nextButton.addEventListener('click', function() {
                    container.scrollLeft += scrollStep;
                    toggleScrollSnap('right');
                });
            }

            function toggleScrollSnap(direction) {
                if (direction === 'left') {
                    container.classList.add('scroll-snap-left');
                    container.classList.remove('scroll-snap-right');
                } else {
                    container.classList.add('scroll-snap-right');
                    container.classList.remove('scroll-snap-left');
                }
            }

            // Ajustăm valoarea de scroll în funcție de lățimea ferestrei
            window.addEventListener('resize', function() {
                const windowWidth = window.innerWidth;
                if (windowWidth >= 1370) {
                    scrollStep = 1080;
                } else if (windowWidth >= 1250) {
                    scrollStep = 842.5;
                } else if (windowWidth >= 900) {
                    scrollStep = 803;
                } else {
                    // Pentru lățimi de fereastră mai mici de 900px, folosim valoarea implicită
                    scrollStep = 900;
                }
            });

            // Apelăm evenimentul resize pentru a ajusta valoarea inițială de scroll la încărcarea paginii
            window.dispatchEvent(new Event('resize'));
        });
    }
});


// BUTTON TO UP - - - - BUTTON TO UP

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// CHANGE LANGUAGE - - - - CHANGE LANGUAGE

const languageButton = document.getElementById('languages');
const languageText = document.getElementById('language-text');
const titleJP = document.querySelectorAll('.title-serie-jp');
const titleEN = document.querySelectorAll('.title-serie-en');

function switchLanguage() {
    if (languageText.textContent === 'Japan') {
        languageText.textContent = 'English';
        titleJP.forEach(title => title.style.display = 'none');
        titleEN.forEach(title => title.style.display = '-webkit-box');
        localStorage.setItem('selectedLanguage', 'en');
    } else {
        languageText.textContent = 'Japan';
        titleEN.forEach(title => title.style.display = 'none');
        titleJP.forEach(title => title.style.display = '-webkit-box');
        localStorage.setItem('selectedLanguage', 'jp');
    }
}

languageButton.addEventListener('click', switchLanguage);

// Verifica dacă limba a fost anterior selectată și ajustează UI-ul în consecință
const selectedLanguage = localStorage.getItem('selectedLanguage');
if (selectedLanguage === 'en') {
    switchLanguage();
}