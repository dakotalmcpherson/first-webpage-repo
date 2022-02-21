const labels = document.querySelectorAll('.form-input label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map(letter => {
            return `<span>${letter}</span>`
        })
        .join('')
})