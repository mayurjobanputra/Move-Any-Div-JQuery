$(document).ready(function() {
    // Create Save Button dynamically and append it to the body
    const $saveButton = $('<button id="saveButton">Save Moves</button>')
        .appendTo('body')
        .hide(); // Initially hidden

    // Append arrows to each content div and set up functionality
    $('.content-div').each(function() {
        $(this).append(`
            <span class="arrow up-arrow">&#8593;</span>
            <span class="arrow down-arrow">&#8595;</span>
        `);

        const $arrowUp = $(this).find('.up-arrow');
        const $arrowDown = $(this).find('.down-arrow');

        // Arrow show/hide on hover
        $(this).hover(
            function(e) {
                // Show arrows and position them near the mouse pointer
                const offsetY = 40; // Distance above the div
                const arrowSpacing = 5; // Space between arrows
                $arrowUp.css({ 
                    top: e.clientY - $(this).offset().top - offsetY, 
                    left: e.clientX - $(this).offset().left + arrowSpacing // Slight right shift
                }).show();
                $arrowDown.css({ 
                    top: e.clientY - $(this).offset().top - offsetY, 
                    left: e.clientX - $(this).offset().left + $arrowUp.outerWidth() + arrowSpacing // Align next to up arrow
                }).show();
            },
            function() {
                // Hide arrows when not hovering
                $arrowUp.hide();
                $arrowDown.hide();
            }
        );

        // Up Arrow functionality
        $arrowUp.on('click', function() {
            var currentDiv = $(this).closest('.content-div');
            var previousDiv = currentDiv.prev('.content-div');
            if (previousDiv.length) {
                currentDiv.insertBefore(previousDiv); // Move up
                showSaveButton(); // Show the Save button upon moving
            }
        });

        // Down Arrow functionality
        $arrowDown.on('click', function() {
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
});
