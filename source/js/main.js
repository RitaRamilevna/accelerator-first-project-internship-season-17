import { menuOpen } from './modules/menu-open';
import { initNavigationToggle } from './modules/init-navigation-toggle';
import { initHeroSlider, initProgramsSlider } from './modules/init-sliders';

document.addEventListener('DOMContentLoaded', () => {
  menuOpen();
  initNavigationToggle();
  initHeroSlider();
  initProgramsSlider();
});
