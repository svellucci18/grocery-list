var myContentEl = document.querySelector('#content-container');

        /**
         * An array list of object containing information about groceries.
         */
        var myGroceryList = [
            {
                name: "Eggs",
                image: "https://media.giphy.com/media/qJkRbWM1MfVjq/giphy.gif",
                isInCart: false
            },
            {
                name: "Cheese",
                image: "https://media.giphy.com/media/l1L2UkgpuiE4U/giphy.gif",
                isInCart: false
            },
            {
                name: "Bacon",
                image: "https://media.giphy.com/media/5fBH6zvK9bUXN1HKfbW/giphy.gif",
                isInCart: true
            },
            {
                name: "Tortillas",
                image: "https://media.giphy.com/media/nYDwMPUnq4aYZwKefN/giphy.gif",
                isInCart: false
            }
        ];

        /**
         * CHALLENGE: Render the data shown above!
         */
        function renderGroceryData( data ) {

            // TODO: Create HTML to display the list of grocery `data` and append it to `myContentEl`. You should be able to view the item's name and image.

            // BONUS: Only display items that are not in the cart.

            // BONUS: Add a <button> to each item for adding it to the cart.

        }

        // Provide `myGroceryList` as the data to render for the first time!
        renderGroceryData( myGroceryList );


        /**
         * BONUS: Modify the data with an event listener!
         */
        function putItemInCart( event ) {

            /**
             * BONUS: Use this event listener to respond to your <button> click to change the
             * correct item's `isInCart` property to false inside `myGroceryList`.
             * 
             * After altering the item's `isInCart`, re-render `myGroceryList`
             * 
             * Note: This requires completing the BONUS tasks in `renderGroceryData` and adding
             * a data strategy to know which item's button is being clicked.
             * Hint: Your <button> might include a data attribute such as `data-item-index` to store
             * the item's index position.
             */

        }
        myContentEl.addEventListener( 'click', putItemInCart );