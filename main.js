// main.js
document.getElementById('descargarApp').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://play.google.com/store/apps/details?id=com.carlosvpinto.dollar_mexico', '_blank');
});

// Opiniones de ejemplo
const reviews = [
  {
    name: "Ana López",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "¡Excelente app! Siempre actualizada y muy fácil de usar.",
    stars: 5
  },
  {
    name: "Carlos Méndez",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Rápida y confiable, la consulto todos los días para el tipo de cambio.",
    stars: 5
  },
  {
    name: "María Fernanda",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "La mejor app para consultar el dólar en México. ¡Muy recomendada!",
    stars: 5
  }
];

function renderStars(count) {
  let stars = '';
  for(let i = 0; i < count; i++) {
    stars += `<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
  }
  return stars;
}

function renderReviews() {
  const reviewsList = document.getElementById('reviewsList');
  reviews.forEach(review => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <img class="review-avatar" src="${review.avatar}" alt="Avatar de ${review.name}">
      <div class="review-content">
        <div class="review-header">
          <span class="review-username">${review.name}</span>
          <span class="review-stars">${renderStars(review.stars)}</span>
        </div>
        <div class="review-text">${review.text}</div>
      </div>
    `;
    reviewsList.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderReviews);


