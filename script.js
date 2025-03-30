
document.getElementById('learn-more').addEventListener('click', function() {
    const moreInfo = document.getElementById('more-info');
    moreInfo.classList.toggle('hidden');  // Affiche ou cache le texte supplémentaire
    this.textContent = moreInfo.classList.contains('hidden') ? 'En savoir plus' : 'Réduire';
});
    