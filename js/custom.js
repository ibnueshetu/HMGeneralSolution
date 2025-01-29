(function ($) {
    "use strict";

    $(document).ready(function () {
        // Toggle navbar for mobile
        $('.navbar-toggler').on('click', function () {
            $('.navbar-collapse').toggleClass('show');
        });

        // Close the entire navbar when clicking the "X" button
        $('.navbar-toggler').on('click', function () {
            if ($('.navbar-collapse').hasClass('show')) {
                $('.navbar-collapse').collapse('hide'); // Properly closes navbar
            }
        });

        // Close the navbar when clicking on any link inside it (except dropdown toggles)
        $('.navbar-collapse a:not(.dropdown-toggle)').on('click', function () {
            $(".navbar-collapse").collapse('hide');
        });

        // Ensure Bootstrap dropdowns work correctly in mobile
        $(".dropdown-toggle").on("click", function (e) {
            e.preventDefault(); // Prevent default link behavior
            e.stopPropagation(); // Prevent dropdown from closing immediately

            var $dropdownMenu = $(this).next(".dropdown-menu");
            var isVisible = $dropdownMenu.hasClass("show");

            // Close other dropdowns
            $(".dropdown-menu").removeClass("show");

            // Toggle current dropdown
            if (!isVisible) {
                $dropdownMenu.addClass("show");
            }
        });

        // Close dropdowns when clicking outside
        $(document).on("click", function (e) {
            if (!$(e.target).closest(".dropdown").length) {
                $(".dropdown-menu").removeClass("show");
            }
        });
    });

})(window.jQuery);
