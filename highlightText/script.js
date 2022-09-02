function search() {
  let texttosearch = document.querySelector('.text-to-search').value
  let paragraph = document.querySelector('.paragraph')
  texttosearch = texttosearch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  let pattern = new RegExp(`${texttosearch}`, 'gi')
  paragraph.innerHTML = paragraph.textContent.replace(
    pattern,
    (match) => `<mark>${match}</mark>`,
  )
}