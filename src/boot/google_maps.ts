import { boot } from 'quasar/wrappers';

export default boot(async () => {
  window.google = null!;
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${apiKey}&language=pt-BR`;

  document.head.appendChild(script);
});
