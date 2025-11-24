const tooltip = document.createElement('div');
tooltip.className = 'tooltip-custom';
document.body.appendChild(tooltip);

document.querySelectorAll('[data-title]').forEach(el => {
    let timer;

    el.addEventListener('mouseenter', e => {
        timer = setTimeout(() => {
            tooltip.textContent = el.getAttribute('data-title');

            let left = e.clientX + 15;
            let top = e.clientY + 20;

            if (left + tooltip.offsetWidth > window.innerWidth) {
                left = window.innerWidth - tooltip.offsetWidth - 5;
            }

            if (top + tooltip.offsetHeight > window.innerHeight) {
                top = window.innerHeight - tooltip.offsetHeight - 5;
            }

            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            tooltip.classList.add('show');
        }, 1000);
    });

    el.addEventListener('mouseleave', () => {
        clearTimeout(timer);
        tooltip.classList.remove('show');
    });
});