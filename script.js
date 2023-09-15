const textarea = document.getElementById('textarea')
const tagsEl = document.getElementById('tags')

textarea.focus()
// this atomatically puts the cursor in focus to start typing

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key  === 'Enter') {
        setTimeout(() => {
            e,target.value = ''
        }, 10)


        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// .split turns a string into an array using a comma
// .filter is a high order array that enables you to return certain things based on a conditional

function randomSelect() {
  const times = 30
// this is the number of times it takes to highlight before it stops
 
const interval = setInterval(() => {
    const randomTag = pickRandomTag()

if (randomTag !== undefined) {
    highlightTag(randomTag)

    setTimeout(() => {
        unHighlightTag(randomTag)
    }, 100)
}
}, 100);

setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)
    }, 100)

}, times * 100)
}
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags [Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')

}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}


















