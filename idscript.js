// Function to get the query parameter from the URL
        function getQueryParam(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Function to update the content based on the id parameter
        function updateContent() {
            const id = getQueryParam('id');
            const infotext = document.getElementById('infotext');

            // Check if there's an ID and display content accordingly
            if (id) {
                if (id === "bullfrog") {
                    infotext.innerHTML = 'we got frogs';
                } else if (id === "elephant") {
                    infotext.innerHTML = 'we outta elephants';
                } else {
                    infotext.innerHTML = 'sike! thats the wrong number!';
                }
        }
    }
        // Call the updateContent function when the page loads
        window.onload = updateContent;