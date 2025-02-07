// const sample_data = {
//     'form-name': 'new sample form',
//     'form-title': 'test 123',
//     'form-description': 'sample form description',
//     'form-tabs': [
//         {
//             'type': 'short-answer',
//             'question': 'question 1'
//         },
//         {
//             'type': 'multiple-choice',
//             'question': 'question 2',
//             'question-image':  the image will come here as question-image
//             'options': ['option 1', 'option 2', 'option 3'] 
//         },
//         {
//             'type': 'dropdown',
//             'question': 'question 3',
//             'options': ['option 1', 'option 2', 'option 3'] 
//         },
//         {
//             'type': 'multiple-choice-grid',
//             'question': 'question 4',
//             'rows': ['sfsfs', 'adsfsddf','dsfsdfs'],
//             'columns': ['ad', 'asda']
//         },
//         {
//             'type': 'checkbox-grid',
//             'question': 'question 4',
//             'rows': ['sfsfs', 'adsfsddf','dsfsdfs'],
//             'columns': ['ad', 'asda']
//         },
//         {
//             'type': 'linear',
//             'question': 'idk',
//             'min-point': {
//                 'value': 3,
//                 'label': 'bad',
//             },
//             'max-point': {
//                 'value': 7,
//                 'label': 'good',
//             }
//         },
//         {
//             'type': 'rating',
//             'question': 'idk',
//             'max': 7
//         },
//         {
//             'type': 'add-file',
//             'question': 'add-file'
//         }
//     ]
// }

// localStorage.setItem("formData", JSON.stringify(sample_data));

const loadData = (data) => {
    document.querySelector('.form-name-textbox').value = data['form-name'];
    document.querySelector('.form-questionnaire-title-bar').value = data['form-title'];
    document.querySelector('.form-questionnaire-description-bar').value = data['form-description'];
    const form = document.querySelector('.form-questionnaire-area');
    const exisitingTabs = document.querySelectorAll('.form-questionnaire-tab');
    for(let tab of exisitingTabs) {
        if(tab.classList.contains('title-tab')) continue;
        else tab.remove();
    }
    for(let tab of data['form-tabs']){
        const newTab = document.createElement('div');
        newTab.classList.add('form-questionnaire-tab');
        newTab.innerHTML = `
            ${tabHeader}
            <div class = 'form-questionnaire-tab-question-image'></div>
            <div class="form-questionnaire-tab-content-area">
                ${templateMap[tab.type]}
            </div>
            <hr style="height:0.1rem; width: 100%; border-color: rgb(218,220,224);">
            ${tabFooter}
        `;
        newTab.querySelector('.form-questionnaire-question-bar').value = tab.question;
        newTab.firstElementChild.lastElementChild.value = tab.type;
        const contentArea = newTab.querySelector('.form-questionnaire-tab-content-area');
        if (tab.type === 'multiple-choice' || tab.type === 'checkbox' || tab.type === 'dropdown' ) {
            for(let option of tab.options){
                const newOption = document.createElement('div');
                newOption.classList.add('form-questionnaire-option-container');
                newOption.innerHTML = templateOptionsMap[tab.type];
                newOption.children[1].value = option;
                contentArea.insertBefore(newOption , contentArea.lastElementChild);
            }
            if(tab.type === 'dropdown'){
                let count = 1;
                for(let option of contentArea.children){
                    option.firstElementChild.innerText = `${count++}.`;
                }
            }
        }
        else if(tab.type === 'multiple-choice-grid' || tab.type === 'checkbox-grid'){
            const rowDiv = contentArea.querySelectorAll('.form-questionnaire-multiple-choice-grid-inner')[0];
            const colDiv = contentArea.querySelectorAll('.form-questionnaire-multiple-choice-grid-inner')[1];
            for(let option of tab.rows){
                const newOption = document.createElement('div');
                newOption.classList.add('form-questionnaire-option-container');
                newOption.innerHTML = templateOptionsMap['grid-row'];
                newOption.children[1].value = option;
                rowDiv.insertBefore(newOption, rowDiv.lastElementChild);
            }
            let count = 1;
            rowDiv.querySelectorAll('.form-questionnaire-option-container').forEach(ele => ele.firstElementChild.innerHTML = `${count++}.`)
            for(let option of tab.columns){
                const newOption = document.createElement('div');
                newOption.classList.add('form-questionnaire-option-container');
                newOption.innerHTML = tab.type === 'multiple-choice-grid' ? templateOptionsMap['grid-column-multiple-choice']: templateOptionsMap['grid-column-checkbox'];
                newOption.children[1].value = option;
                colDiv.insertBefore(newOption, colDiv.lastElementChild);
            }
        }
        else if(tab.type === 'linear'){
            const innerContainer1 = contentArea.querySelector('.form-questionnaire-linear-scale-inner-container-1')
            innerContainer1.firstElementChild.value = tab['min-point']['value'];
            innerContainer1.lastElementChild.value = tab['max-point']['value'];
            const innerContainers2 = contentArea.querySelectorAll('.form-questionnaire-linear-scale-inner-container-2');
            innerContainers2[0].firstElementChild.innerText = tab['min-point']['value'];
            innerContainers2[0].lastElementChild.value = tab['min-point']['label'];
            innerContainers2[1].firstElementChild.innerText = tab['max-point']['value'];
            innerContainers2[1].lastElementChild.value = tab['max-point']['label'];
        }
        else if(tab.type === 'rating'){
            contentArea.querySelector('.form-questionnaire-rating-dropdown').value = tab.max;
            const innerContainers = contentArea.querySelectorAll('.form-questionnaire-rating-container-2 div');
            innerContainers[0].innerHTML = '';
            innerContainers[1].innerHTML = '';
            for(let i = 0; i < tab.max; i++){
                innerContainers[0].innerHTML += `<p>${i+1}</p>`;
                innerContainers[1].innerHTML += `<span class="material-symbols-outlined">star</span>`;
            }
        }
        form.appendChild(newTab);
    }
}


const undoStack = [];
const redoStack = [];
const saveChanges = () => {
    const data = {}
    data['form-name'] = document.querySelector('.form-name-textbox').value;
    data['form-title'] = document.querySelector('.form-questionnaire-title-bar').value;
    data['form-description'] = document.querySelector('.form-questionnaire-description-bar').value;
    const tabs = document.querySelectorAll('.form-questionnaire-tab');
    data['form-tabs'] = []
    tabs.forEach(tab => {
        if(tab.classList.contains('title-tab')) return;
        tabData = {};
        tabData.question = tab.querySelector('.form-questionnaire-question-bar').value;
        tabData.type = tab.querySelector('.form-questionnaire-type-dropdown').value;
        if (tabData.type === 'multiple-choice' || tabData.type === 'checkbox' || tabData.type === 'dropdown' ) {
            tabData.options = [];
            tab.querySelectorAll('.form-questionnaire-option-bar').forEach(option => tabData.options.push(option.value));
        }
        else if(tabData.type === 'multiple-choice-grid' || tabData.type === 'checkbox-grid'){
            const sections = tab.querySelectorAll('.form-questionnaire-multiple-choice-grid-inner');
            tabData.rows = [];
            tabData.columns = [];
            sections[0].querySelectorAll('.form-questionnaire-option-bar').forEach(option => tabData.rows.push(option.value));
            sections[1].querySelectorAll('.form-questionnaire-option-bar').forEach(option => tabData.columns.push(option.value));
        }
        else if(tabData.type === 'rating'){
            tabData.max = tab.querySelector('.form-questionnaire-rating-dropdown').value;
        }
        else if(tabData.type === 'linear'){
            const sections = tab.querySelectorAll('.form-questionnaire-linear-scale-inner-container-2');
            tabData['min-point'] = {};
            tabData['max-point'] = {};
            tabData['min-point']['label'] = sections[0].firstElementChild.innerHTML;
            tabData['min-point']['value'] = sections[0].lastElementChild.value;
            tabData['max-point']['label'] = sections[1].firstElementChild.innerHTML;
            tabData['max-point']['value'] = sections[1].lastElementChild.value;
        }
        data['form-tabs'].push(tabData);
    });
    if(data['form-tabs'].length === 0){
        data['form-tabs'].push({
            'question': '',
            'type': 'short-answer'
        });
    }
    if(undoStack.length === 0) {
        undoStack.push(data);
        redoStack.length = 0;
    }
    else {
        const prevState = JSON.stringify(undoStack[undoStack.length - 1]);
        const currState = JSON.stringify(data);
        if(currState != prevState){
            redoStack.length = 0;
            undoStack.push(data);
        }
    }
};

const data = localStorage.getItem('formData') ? JSON.parse(localStorage.getItem("formData")): {
    'form-name': 'New Form',
    'form-title': '',
    'form-description': '',
    'form-tabs': [
        {
            'type': 'short-answer',
            'question': 'Question 1'
        }
    ]
};
loadData(data);
undoStack.push(data);
window.addEventListener("beforeunload", () => localStorage.setItem("formData", JSON.stringify(undoStack[undoStack.length-1])));

document.addEventListener('keydown', function(event) {
    console.log(event);
    if(event.ctrlKey && event.shiftKey && (event.key === 'z' || event.key === 'Z')){
        if(redoStack.length === 0) return;
        undoStack.push(redoStack.pop());
        loadData(undoStack[undoStack.length - 1]);
    }
    else if (event.ctrlKey && (event.key === 'z' || event.key === 'Z')) {
        if(undoStack.length === 1) return;
        redoStack.push(undoStack.pop());
        loadData(undoStack[undoStack.length - 1]);
    }
});