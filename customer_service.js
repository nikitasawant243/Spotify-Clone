// Select form and reviews container
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.querySelector('.reviews-container');

// Handle form submission
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  // Get form values
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const review = document.getElementById('review').value;

  // Create a new review element
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');
  reviewElement.innerHTML = `
    <h3 class="review-title">${title}</h3>
    <p class="review-author">By ${name}</p>
    <p class="review-content">${review}</p>
  `;

  // Add the new review to the reviews container
  reviewsContainer.appendChild(reviewElement);

  // Clear the form fields
  reviewForm.reset();
});
