/* =========================================================
   THE LUCKY LOP — SITE-WIDE JAVASCRIPT
   Handles: mobile nav menu, footer year, gallery lightbox.
   Include this file (via <script src="js/main.js">) on every page.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // close menu after a link is tapped (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- footer year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---- gallery filter (only runs if filter buttons exist) ---- */
  var filterButtons = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');
  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var category = btn.getAttribute('data-filter');
        galleryItems.forEach(function (item) {
          var show = category === 'all' || item.getAttribute('data-category') === category;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ---- lightbox (only runs if a gallery exists on the page) ---- */
  var lightbox = document.getElementById('lightbox');
  if (lightbox && galleryItems.length) {
    var lightboxImg = lightbox.querySelector('img');
    var lightboxCaption = lightbox.querySelector('.lightbox-caption');
    var closeBtn = lightbox.querySelector('.lightbox-close');
    var prevBtn = lightbox.querySelector('.lightbox-prev');
    var nextBtn = lightbox.querySelector('.lightbox-next');
    var visibleItems = [];
    var currentIndex = 0;

    function refreshVisibleItems() {
      visibleItems = Array.prototype.filter.call(galleryItems, function (item) {
        return item.style.display !== 'none';
      });
    }

    function openLightbox(item) {
      refreshVisibleItems();
      currentIndex = visibleItems.indexOf(item);
      showCurrent();
      lightbox.classList.add('open');
    }

    function showCurrent() {
      var item = visibleItems[currentIndex];
      var img = item.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || '';
      lightboxCaption.textContent = img.alt || '';
    }

    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () { openLightbox(item); });
    });

    closeBtn.addEventListener('click', function () { lightbox.classList.remove('open'); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) { lightbox.classList.remove('open'); }
    });
    prevBtn.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
      showCurrent();
    });
    nextBtn.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % visibleItems.length;
      showCurrent();
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') { lightbox.classList.remove('open'); }
      if (e.key === 'ArrowLeft') { prevBtn.click(); }
      if (e.key === 'ArrowRight') { nextBtn.click(); }
    });
  }

});
