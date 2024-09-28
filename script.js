document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('business-form');
    const businessList = document.getElementById('businesses');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const category = document.getElementById('category').value;

        const li = document.createElement('li');
        li.textContent = `${name} - ${category} - ${address} - ${phone}`;
        businessList.appendChild(li);

        form.reset();
    });
});
