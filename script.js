$(document).ready(function() {
    // Initialize Save Button functionality
    const $saveButton = $('#saveButton');

    // Append arrows to each content div and set up functionality
    $('.content-div').each(function() {
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
        // Future API call can be added here to save the new structure
        updateServerData(); // Call placeholder function
        
        // Hide the Save button after saving
        $saveButton.fadeOut();
    });

    // Placeholder for an API function
    function updateServerData() {
        // Logic to update data on the server
        // e.g., $.post('/api/update', {data: getDivData()});
        console.log('Data has been saved! (Placeholder for actual server call)');
    }

    // Placeholder function to gather data from divs
    function getDivData() {
        // Return some data from the divs if needed for an API call.
        return $('.content-div').map(function() {
            return $(this).find('h2, h3, p').map((_, el) => $(el).text()).get().join(" | "); // Example: return combined text of title and paragraph
        }).get();
    }
});
