const localStorageKey = 'to-do-list-gs'

function newTask(){
    let input = document.getElementById('input-new-task')

    if(!input.value){
        alert('Digite algo para inserir em sua lista')
    } //else if()
    else{
        let values = JSON.parse(localStorage.getItem('') || '[]');
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
    }
}