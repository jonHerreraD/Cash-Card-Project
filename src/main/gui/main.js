document.getElementById('menu-button').addEventListener('click', function() {
    const toolBarOptions = document.getElementById('mn-w-tool-bar-options');
    if (toolBarOptions.classList.contains('hidden')) {
        toolBarOptions.classList.remove('hidden');
        toolBarOptions.classList.add('visible');
    } else {
        toolBarOptions.classList.remove('visible');
        toolBarOptions.classList.add('hidden');
    }
});