var domainName = "http://127.0.0.1:3000";

function clearAllCookies() {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}

function disablePageCaching() {
    document.querySelector('meta[http-equiv="cache-control"]').setAttribute('content', 'no-cache');
    document.querySelector('meta[http-equiv="pragma"]').setAttribute('content', 'no-cache');
}

document.addEventListener('DOMContentLoaded', async function () {
    const usernameSpan = document.getElementById('customUsername');
    const emailSpan = document.getElementById('customEmail');
    const dropdownContent = document.getElementById('customDropdownContent');
    const logoutBtn = document.getElementById('customLogoutBtn');

    try {
        // Make a GET request to fetch user details
        const response = await fetch(domainName + '/getUserDetails');
        const userData = await response.json();

        if (!userData.success) {
            throw new Error(userData.message);
        }

        // Update profile section with retrieved user details
        const { username, email } = userData.data;
        usernameSpan.textContent = username;
        emailSpan.textContent = email;

        logoutBtn.addEventListener('click', function () {
            // Perform logout actions here, e.g., redirect to the login page
            alert('Logged out successfully');

            clearAllCookies(); // clear all cookies for this domain
            localStorage.clear(); // clear all local storage for this domain

            // Redirect to the login page after clearing cookies and local storage
            window.location.href = '/index';
        });

        const dropbtn = document.querySelector('.custom-dropbtn');
        const dropdownIcon = document.querySelector('.custom-dropbtn i');

        // Toggle dropdown when clicking on the dropbtn or the icon
        dropbtn.addEventListener('click', toggleDropdown);
        dropdownIcon.addEventListener('click', toggleDropdown);
    } catch (error) {
        console.error('Error fetching user details:', error);
        // Handle error, e.g., display an error message to the user
    }

    // Disable page caching when the DOM content is loaded
    disablePageCaching();
});

function toggleDropdown_p() {
    const dropdownContent = document.getElementById('customDropdownContent');
    if (dropdownContent.classList.contains('show')) {
        dropdownContent.style.right = '0'; // Ensure dropdown is always shown on the right edge
    }
    dropdownContent.classList.toggle('show');
}

window.addEventListener('resize', function () {
    const dropdownContent = document.getElementById('customDropdownContent');
    if (dropdownContent.classList.contains('show')) {
        dropdownContent.style.right = '0'; // Ensure dropdown is always shown on the right edge
    }
});
