// Handle search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    if (searchQuery) {
      alert(`Searching for: ${searchQuery}`);
      // You can add real search functionality here by filtering products dynamically.
    }
  });
  
  // View product details
  function viewDetails(productId) {
    // This is where you would dynamically load the product page or details.
    // For now, we'll just redirect to a generic product page for simplicity.
    window.location.href = 'product.html';
  }
  