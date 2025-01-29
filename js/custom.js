(function ($) {
    "use strict";

    $(document).ready(function () {
        // Ensure Bootstrap's dropdown works in mobile
        $(".dropdown-toggle").on("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            e.stopPropagation(); // Prevent closing other dropdowns

            var $dropdownMenu = $(this).next(".dropdown-menu");
            var isVisible = $dropdownMenu.hasClass("show");

            // Close all dropdowns
            $(".dropdown-menu").removeClass("show");

            // Toggle clicked dropdown
            if (!isVisible) {
                $dropdownMenu.addClass("show");
            }
        });

        // Close dropdowns when clicking anywhere else
        $(document).on("click", function (e) {
            if (!$(e.target).closest(".dropdown").length) {
                $(".dropdown-menu").removeClass("show");
            }
        });

        // Navbar toggle for mobile menu
        $('.navbar-toggler').on('click', function () {
            $('.navbar-collapse').toggleClass('show');
        });

        // Close navbar collapse when clicking on a non-dropdown item
        $('.navbar-collapse a').on('click', function () {
            var isDropdownLink = $(this).closest('.dropdown').length;
            if (!isDropdownLink) {
                $(".navbar-collapse").collapse('hide');
            }
        });

        // Smooth scrolling
        $('.smoothscroll').click(function () {
            var target = $(this).attr('href');
            var $targetElement = $(target);
            var headerHeight = $('.navbar').height();

            scrollToDiv($targetElement, headerHeight);
            return false;

            function scrollToDiv(element, navHeight) {
                var offsetTop = element.offset().top;
                var totalScroll = offsetTop - navHeight;

                $('html, body').animate({
                    scrollTop: totalScroll
                }, 300);
            }
        });
    });

})(window.jQuery);
