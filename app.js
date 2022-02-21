const labels = document.querySelectorAll('.form-input label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => {
            return `<span style="transition-delay: ${idx * 40}ms">${letter}</span>`
        })
        .join('')
})