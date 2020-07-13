const prev = document.querySelector('.arrow.prev');
const next = document.querySelector('.arrow.next');
const moveCards = (isNext) => {
    let current = document.querySelector('.current'),
        newCurrent = isNext ? current.nextElementSibling : current.previousElementSibling;

    if (newCurrent) {
        current.classList.remove('current');
        newCurrent.classList.add('current');

        if (isNext && newCurrent.nextElementSibling == null) {
            next.classList.add('disabled');
        }
        else if (!isNext && newCurrent.previousElementSibling == null) {
            prev.classList.add('disabled');
        } else {
            prev.classList.remove('disabled');
            next.classList.remove('disabled');
        }
    }
};

prev.onclick = () => moveCards(false);
next.onclick = () => moveCards(true);
prev.classList.add('disabled');