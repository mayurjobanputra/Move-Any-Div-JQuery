$(document).ready(function() {
    // Initialize Save Button functionality
    const $saveButton = $('#saveButton');

    // Append arrows to each content div and set up functionality
    $('.content-div').each(function() {
        addArrowButtons($(this)); // Call function to add arrows

        // Up Arrow functionality
        $(this).find('.up-arrow').on('click', function() {
            var currentDiv = $(this).closest('.content-div');
            var previousDiv = currentDiv.prev('.content-div');
            if (previousDiv.length) {
                currentDiv.insertBefore(previousDiv); // Move up
                showSaveButton(); // Show the Save button upon moving
            }
        });

        // Down Arrow functionality
        $(this).find('.down-arrow').on('click', function() {
            var currentDiv = $(this).closest('.content-div');
            var nextDiv = currentDiv.next('.content-div');
            if (nextDiv.length) {
                currentDiv.insertAfter(nextDiv); // Move down
                showSaveButton(); // Show the Save button upon moving
            }
        });
    });

    // Function to show the Save button
    function showSaveButton() {
        $saveButton.fadeIn(); // Show the button with a fade effect
    }

    // Save Button Click Event
    $saveButton.on('click', function() {
        updateServerData(); // Call placeholder function
        
        // Hide the Save button after saving
        $saveButton.fadeOut();
    });

    // Placeholder for an API function
    function updateServerData() {
        console.log('Data has been saved! (Placeholder for actual server call)');
    }

    // Function to add arrow buttons dynamically
    function addArrowButtons($div) {
        $div.prepend(`
            <span class="arrow up-arrow">&#8593;</span>
            <span class="arrow down-arrow">&#8595;</span>
        `);
    }
});
