var menuIcon = document.querySelector(".menu_icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidbar");
    container.classList.toggle("large_container");
}
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu_icon');
    const searchBox = document.querySelector('.search_box input');
    const searchButton = document.querySelector('.search_box img');
    const notificationIcon = document.querySelector('.nav_right img[alt="notification.png"]');
    const videoThumbnails = document.querySelectorAll('.vid_list');

    // Toggle Menu
    menuIcon.addEventListener('click', function () {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('show_sidebar');
    });

    // Handle Search
    searchButton.addEventListener('click', function () {
        const searchQuery = searchBox.value.trim();
        if (searchQuery !== '') {
            // Perform search action
            console.log('Performing search for:', searchQuery);
        }
    });

    searchBox.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });

    // Handle Notification
    notificationIcon.addEventListener('click', function () {
        // Handle notification action
        console.log('Notification clicked');
    });

    // Handle Video Click
    videoThumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            const videoUrl = thumbnail.querySelector('a').href;
            // Open video or perform action
            console.log('Opening video:https://www.youtube.com/watch?v=66tfvFeALBQ', videoUrl);
        });
    });
});
