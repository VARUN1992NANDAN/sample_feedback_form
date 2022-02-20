const form = document.getElementById('signup-form');
const feedback = document.getElementById('feedback');
const feedbacktwo = document.getElementById('feedbacktwo');
const feedbackthree = document.getElementById('feedbackthree');
form.addEventListener('input', e=> {
    e.preventDefault();
    const name = form.name.value;
    const pattern = /^([a-zA-Z]+\s)*([a-zA-Z]+)$/;
    if (pattern.test(name)) {
        feedback.textContent = 'valid'
    }else{
        feedback.textContent = 'invalid'
    }
});
form.addEventListener('input', e=> {
    e.preventDefault();
    const mn = form.mn.value;
    const pattern = /^[0-9]{10}$/;
    if (pattern.test(mn)) {
        feedbacktwo.textContent = 'valid'
    }else{
        feedbacktwo.textContent = 'invalid'
    }
});
form.addEventListener('input', e=> {
    e.preventDefault();
    const eid = form.eid.value;
    const pattern = /^[a-zA-Z0-9@.]{11,22}$/;
    if (pattern.test(eid)) {
        feedbackthree.textContent = 'valid'
    }else{
        feedbackthree.textContent = 'invalid'
    }
});

