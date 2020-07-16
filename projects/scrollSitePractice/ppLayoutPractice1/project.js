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

const prevSecond = document.querySelector('.arrowSecond.prevSecond');
const nextSecond = document.querySelector('.arrowSecond.nextSecond');
const moveCardsSecond = (isNext) => {
    let current = document.querySelector('.currentSecond'),
        newCurrentSecond = isNext ? current.nextElementSibling : current.previousElementSibling;

    if (newCurrentSecond) {
        current.classList.remove('currentSecond');
        newCurrentSecond.classList.add('currentSecond');

        if (isNext && newCurrentSecond.nextElementSibling == null) {
            nextSecond.classList.add('disabledSecond');
        }
        else if (!isNext && newCurrentSecond.previousElementSibling == null) {
            prevSecond.classList.add('disabledSecond');
        } else {
            prevSecond.classList.remove('disabledSecond');
            nextSecond.classList.remove('disabledSecond');
        }
    }
};

prevSecond.onclick = () => moveCardsSecond(false);
nextSecond.onclick = () => moveCardsSecond(true);
prevSecond.classList.add('disabledSecond');