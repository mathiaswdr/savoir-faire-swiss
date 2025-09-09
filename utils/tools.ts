export function scrollToSection(sectionId: string, offsetY?: number) {
    const section = document.getElementById(sectionId);
    if(!offsetY){
      offsetY = 0
    }

    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset + offsetY;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  // Fonction pour trouver un objet par son slug
// export function findItemBySlug(items, slug) {
//   return items.find(item => item.slug === slug);
// }




export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}