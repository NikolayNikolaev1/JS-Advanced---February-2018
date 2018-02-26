function search() {
    let counter = 0
    let targetValue = $('#searchText').val()
    $('#towns').find('li').each((index, el) => {
        if (el.textContent.includes(targetValue)) {
            $(el).css('font-weight', 'bold')
            counter++
        }
    })
    $('#result').text(counter + ' matches found.')
}
