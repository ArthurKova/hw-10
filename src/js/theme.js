const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeBtn = document.querySelector('.theme-switch__toggle');

themeBtn.addEventListener('input', event => {
  themeSwitch();
  const checked = themeBtn.checked;
  localStorage.setItem(
    'user-data',
    JSON.stringify({ checked, theme: checked ? Theme.DARK : Theme.LIGHT })
  );
});

function themeSwitch() {
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);
}

(function userOnVisit() {
  const themeStatus = JSON.parse(localStorage.getItem('user-data'));
  if (!themeStatus) {
    return document.body.classList.add(Theme.LIGHT);
  }
  themeStatus.checked ? (themeBtn.checked = true) : (themeBtn.checked = false);
  themeSwitch();
})();
