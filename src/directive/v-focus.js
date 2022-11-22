const focusDirective = {
    inserted (el) {
        if (el.tagName.toLocaleLowerCase() == 'input') {
            el.focus()
        } else {
            if (el.getElementsByTagName('input')) {
                el.getElementsByTagName('input')[0].focus()
            }
        }
    }

}
export default focusDirective