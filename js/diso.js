const exclusionList = ['ND', 'NOD', 'NCD'];
document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (event) => {
        if (exclusionList.includes(link.id)) {
            console.log("don't link deez", link.id);
            return;
        }
        event.preventDefault();
        console.log("link deez", link.href);
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = link.href;
        }, 200);
    });
});
document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
        console.log("formed", form);
    });
});
window.addEventListener('beforeunload', (event) => {
    if (event.key !== '`') {
        console.log("I don't feel so good...");
        document.body.classList.add('fade-out');
    }
});
