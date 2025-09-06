// Get the form and input elements from the HTML
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Add an event listener that waits for the form to be submitted
searchForm.addEventListener('submit', function (event) {
  // Prevent the page from reloading, which is the default form behavior
  event.preventDefault();

  // Get the text the user typed into the search box
  const query = searchInput.value;

  // If the query isn't empty, perform the search
  if (query) {
    // Construct the Google search URL with the user's query
    // encodeURIComponent handles special characters like spaces
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    // Redirect the browser to the search URL
    window.location.href = searchUrl;
  }
});







