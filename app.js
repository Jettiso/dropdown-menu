document.addEventListener('click', e => {
    const isDropDownMenu = e.target.matches('[data-dropdown-button]')
    if (!isDropDownMenu && e.target.closest('[data-dropdown]') != null) return
})