import _ from 'lodash';
function components() {
    let elem = document.createElement('div');
    elem.innerHTML = _.join(['hello', 'world'], '');
    return elem;
}
document.body.appendChild(components());