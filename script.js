const disclosures = document.querySelectorAll('.js-disclosure') 
function toggleDisclosure() {
const isExpanded = this.getAttribute('aria-expanded') === 'true';
this.setAttribute('aria-expanded', !isExpanded)
}
function init() {
    if(!disclosures.length) {
        return
    }
    disclosures.forEach(component => {
        component.dataset.state ="ready"
        const disclosureBtn = component.querySelectorAll('.js-disclosure-btn'); 
        disclosureBtn.forEach(btns => {
            btns.removeAttribute('title')
            btns.removeAttribute('disabled') 
          btns.addEventListener('click', toggleDisclosure)
       })
    })
}
init()