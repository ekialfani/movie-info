import '../styles/style.css';
import '../components/app-logo.js';
import '../components/menu-list.js';
import '../components/search-bar.js';


const main = () => {
  const menuList = document.querySelector('menu-list');
  const searchBar = document.querySelector('search-bar');

  const onMenuListClicked = (e) => {
    const target = e.target;

    if (target.classList.contains('now-playing')) {
      console.log(target.classList.value);
    }

    if (target.classList.contains('popular')) {
      console.log(target.classList.value);
    }

    if (target.classList.contains('top-rate')) {
      console.log(target.classList.value);
    }

    if (target.classList.contains('up-coming')) {
      console.log(target.classList.value);
    }

    e.preventDefault();
  };

  const onInputClicked = () => {
    const inputValue = searchBar.inputValue;

    console.log(inputValue);
  };

  searchBar.inputEvent = onInputClicked;
  menuList.clickEvent = onMenuListClicked;
};

export default main;

