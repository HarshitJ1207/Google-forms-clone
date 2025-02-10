const templateMap = {
    "short-answer": `
      <p class="form-questionnaire-short-answer-bar">Short answer text</p>
    `,
    "long-answer": `
      <p class="form-questionnaire-long-answer-bar">Long answer text</p>
    `,
    "multiple-choice": `
      <div class="form-questionnaire-option-container">
        <span class="material-symbols-outlined">radio_button_unchecked</span>
        <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
          <span style="color: gray; cursor: pointer;" class="add-option">Add option</span>
          or <span style="color: rgb(26, 115, 232); cursor: pointer;">add "Other"</span>
        </p>
      </div>
    `,
    "checkbox": `
        <div class = 'form-questionnaire-option-container'>
            <span class="material-symbols-outlined">check_box_outline_blank</span>
            <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                <span style="color: gray; cursor: pointer;" class="add-option">Add option</span>
                or <span style="color: rgb(26, 115, 232); cursor: pointer;">add "Other"</span>
            </p>
        </div>
    `,
    "dropdown": `
        <div class = 'form-questionnaire-option-container'>
            <p style="font-size: 0.9rem; margin: 0;">1.</p>
            <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                <span style="color: gray; cursor: pointer;" class="add-option">Add option</span>
                or <span style="color: rgb(26, 115, 232); cursor: pointer;">add "Other"</span>
                </p>
        </div>
    `,
    "add-file": `
        <div class = 'form-questionnaire-add-file-container'>
            <div class = 'form-questionnaire-add-file-inner-container'>
                <p style="font-size: 0.9rem;">Allow only specific file types</p>
            </div>
            <div class = 'form-questionnaire-add-file-inner-container'>
                <p style="font-size: 0.9rem;">Maximum number of files</p>
                <select class="form-questionnaire-add-file-dropdown">
                    <option value='1'>1</option>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    </select>
            </div>
            <div class = 'form-questionnaire-add-file-inner-container'>
                <p style="font-size: 0.9rem;">Maximum file size</p>
                <select class="form-questionnaire-add-file-dropdown">
                    <option value='1'>1 MB</option>
                    <option value='1'>10 MB</option>
                    <option value='1'>100 MB</option>
                    <option value='1'>1 GB</option>
                    <option value='1'>10 GB</option>
                </select>
            </div>
        </div>
        <div class = 'form-questionnaire-add-file-container-2'>
            <p style="margin: 0; font-size: 0.75rem; color: gray;">This form can accept upto 1 GB of files. <span style="color:rgb(26, 115, 232);">Change</span></p>
            <div style="display: flex; align-items: center; gap: 0.625rem; color: rgb(26, 115, 232); font-size: 0.8rem;">
                <span class = 'material-symbols-outlined' style="color: rgb(26, 115, 232);">Add_to_drive</span> 
                <span>View folder</span>
            </div>  
        </div>
    `,
    "linear": `
        <div class = 'form-questionnaire-linear-scale-container'>
            <div class = 'form-questionnaire-linear-scale-inner-container-1'>
                <select class="form-questionnaire-linear-scale-dropdown">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <p style="font-size: 0.9rem;">to</p>
                <select class="form-questionnaire-linear-scale-dropdown">
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <div class = 'form-questionnaire-linear-scale-inner-container-2'>
                <p class = 'form-questionnaire-linear-scale-inner-label'>1</p>
                <input type = 'text' class = 'form-questionnaire-linear-scale-inner-textbox' placeholder="Label (optional)">
            </div>
            <div class = 'form-questionnaire-linear-scale-inner-container-2'>
                <p class = 'form-questionnaire-linear-scale-inner-label'>5</p>
                <input type = 'text' class = 'form-questionnaire-linear-scale-inner-textbox' placeholder="Label (optional)">
            </div>
        </div>
    `,
    "rating": `
        <div class = 'form-questionnaire-linear-scale-container'>
            <div class = 'form-questionnaire-linear-scale-inner-container-1'>
                <select class="form-questionnaire-rating-dropdown">
                    <option>5</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                <select class="form-questionnaire-rating-dropdown">
                    <option value = '1'>⭐</option>
                </select>
            </div>
        </div>
        <div class = 'form-questionnaire-rating-container-2'>
            <div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
            <div>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
            </div>
        </div>
    `,
    "multiple-choice-grid": `
        <div class = 'form-questionnaire-multiple-choice-grid'>
            <div class = 'form-questionnaire-multiple-choice-grid-inner'>
                <p style="font-weight: 900; margin:0;">Rows</p>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">1.</p>
                    <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                        <span style="color: gray; cursor: pointer;" class="add-row">Add row</span>
                    </p>
                </div>
            </div>
            <div class = 'form-questionnaire-multiple-choice-grid-inner'>
                <p style="font-weight: 900; margin:0;">Column</p>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">radio_button_unchecked</span>
                    <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                        <span style="color: gray; cursor: pointer;" class="add-column-multiple-choice">Add column</span>
                    </p>
                </div>
            </div>
        </div>
    `,
    "checkbox-grid": `
        <div class = 'form-questionnaire-multiple-choice-grid'>
            <div class = 'form-questionnaire-multiple-choice-grid-inner'>
                <p style="font-weight: 900; margin:0;">Rows</p>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">1.</p>
                    <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                        <span style="color: gray; cursor: pointer;" class="add-row">Add row</span>
                    </p>
                </div>
            </div>
            <div class = 'form-questionnaire-multiple-choice-grid-inner'>
                <p style="font-weight: 900; margin:0;">Column</p>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">check_box_outline_blank</span>
                    <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                        <span style="color: gray; cursor: pointer;" class="add-column-checkbox">Add Column</span>
                    </p>
                </div>
            </div>
        </div>
    `,
    "date": `
        <div class = 'form-questionnaire-date-container'>
            <p class = 'form-questionnaire-date-bar'>Month, Day, Year</p>
            <span class="material-symbols-outlined">event</span>
        </div>
    `,
    "time": `
        <div class = 'form-questionnaire-date-container'>
            <p class = 'form-questionnaire-date-bar'>Time</p>
            <span class="material-symbols-outlined">schedule</span>
        </div>
    `,
};

const templateOptionsMap = {
    'multiple-choice': `
        <span class="material-symbols-outlined">radio_button_unchecked</span>
        <input class="form-questionnaire-option-bar" value="New option">
        <span class="material-symbols-outlined add-image">image</span>
        <span class="material-symbols-outlined remove-option">close</span>
    `,
    'checkbox': `
        <span class="material-symbols-outlined">check_box_outline_blank</span>
        <input class = 'form-questionnaire-option-bar' value="New option">
        <span class="material-symbols-outlined add-image">image</span>
        <span class="material-symbols-outlined remove-option">close</span>
    `,
    'dropdown': `
        <p style="font-size: 0.9rem; margin: 0;">1.</p>
        <input class = 'form-questionnaire-option-bar' value="New option">
        <span class="material-symbols-outlined add-image">image</span>
        <span class="material-symbols-outlined remove-option">close</span>
    `,
    'grid-row':`
        <p style="font-size: 0.9rem; margin: 0;">1.</p>
        <input class = 'form-questionnaire-option-bar' value="New row">
        <span class="material-symbols-outlined remove-row">close</span>
    `,
    'grid-column-multiple-choice': `
        <span class="material-symbols-outlined">radio_button_unchecked</span>
        <input class="form-questionnaire-option-bar" value="New column">
        <span class="material-symbols-outlined remove-option">close</span>
    `,
    'grid-column-checkbox': `
        <span class="material-symbols-outlined">check_box_outline_blank</span>
        <input class = 'form-questionnaire-option-bar' value="New column">
        <span class="material-symbols-outlined remove-option">close</span>
    `
}
const tabHeader = `
    <div class = 'form-questionnaire-tab-header'>
		<div class = 'form-questionnaire-question-bar-container'>
			<input class="form-questionnaire-question-bar" placeholder="Question">
			<div class = 'form-questionnaire-question-bar-formating-options'>
				<span class = 'material-symbols-outlined'>format_bold</span>
				<span class = 'material-symbols-outlined'>format_italic</span>
				<span class = 'material-symbols-outlined'>format_underlined</span>
				<span class = 'material-symbols-outlined'>link</span>
				<span class = 'material-symbols-outlined'>format_clear</span>
			</div>
		</div>
        <span class="material-symbols-outlined add-image">image</span>
        <select class="form-questionnaire-type-dropdown">
            <option value = 'short-answer'>Short Answer</option>
            <option value = 'long-answer'>Paragraph</option>
            <option value = 'multiple-choice'>Multiple Choice</option>
            <option value = 'checkbox'>CheckBox</option>
            <option value = 'dropdown'>Dropdown</option>
            <option value = 'add-file'>File Upload</option>
            <option value = 'linear'>Linear Scale</option>
            <option value = 'rating'>Rating</option>
            <option value = 'multiple-choice-grid'>Multiple Choice Grid</option>
            <option value = 'checkbox-grid'>Checkbox Grid</option>
            <option value = 'date'>Date</option>
            <option value = 'time'>Time</option>
        </select>
    </div>
`;
const tabFooter = `
    <div class="form-questionnaire-tab-footer">
        <span class="material-symbols-outlined duplicate-tab">content_copy</span>
        <span class="material-symbols-outlined delete-tab">delete</span>
        <span class="material-symbols-outlined add-tab">add</span>
        <hr style="height:1.5rem; width: 0.1rem; margin: 0;">
        <span class="material-symbols-outlined">more_vert</span>
    </div>
`;

{

// const sample_data = {
//     'form-name': 'new sample form',
//     'form-title': 'test 123',
//     'form-description': 'sample form description',
//     'form-tabs': [ //sections
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

}

const undoStack = [];
const redoStack = [];

const form = document.querySelector(".form-questionnaire-area");

const dbName = 'form-images';
const objectStoreName = 'question-images';

let db = null;
const openDatabase = () => {
    if(db) return db;
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);

        request.onerror = () => reject('Error opening database');
        
        request.onsuccess = (event) => {
            db = event.target.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            console.log('upgrade needed run');
            const db = event.target.result;
            db.createObjectStore(objectStoreName, { autoIncrement: true });
        };
    });
}
const getTabIndex = (imageInputDiv) => {
    let tab = imageInputDiv.closest('.form-questionnaire-tab');
    let ix = -1;
    let index = -1;
    for(let child of form.children){
        if(tab === child) ix = index;
        index++;
    }
    return ix;
}

const saveImageToDB = async (imageFile, imageInputDiv) => {
    if(!db) await openDatabase();
    const index = getTabIndex(imageInputDiv);
    const transaction = db.transaction(objectStoreName, "readwrite");
    const store = transaction.objectStore(objectStoreName);
    store.put({data: imageFile }).onsuccess = (event) => {
        form.children[index+1].querySelector('img').alt = event.target.result;
        const data = structuredClone(undoStack[undoStack.length - 1]);
        data['form-tabs'][index]['question-image'] = event.target.result;
        undoStack.push(data);
        console.log('new stack change published');
        console.log(`image index ${event.target.result} saved in tab ${index}`)
    }
}

const displayImage = (file , imageInputDiv) => {
    imageInputDiv.style.display = 'block';
    const preview = document.createElement('img');
    preview.src = URL.createObjectURL(file);
    preview.style.display = 'block';
    preview.style.width = '100%';
    preview.style.objectFit = 'contain';
    preview.style.maxHeight = '25rem'
    imageInputDiv.innerHTML = '';
    imageInputDiv.append(preview);
}

const loadImageFromDB =  async (imageId = 1 , imageInputDiv) => {
    if(!db) await openDatabase();
    const transaction = db.transaction(objectStoreName);
    const store = transaction.objectStore(objectStoreName);
    const request = store.get(imageId);
    request.onsuccess = () => {
        console.log('sucesss')
        if (request.result) {
            displayImage(request.result.data, imageInputDiv);
            imageInputDiv.querySelector('img').alt = imageId;
        }
    };
}

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
        const img = tab.querySelector('img');
        if(img) {
            tabData['question-image'] = +img.alt;
        }
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
        console.log('new stack change published');
    }
    else {
        const prevState = JSON.stringify(undoStack[undoStack.length - 1]);
        const currState = JSON.stringify(data);
        if(currState != prevState){
            redoStack.length = 0;
            undoStack.push(data);
            console.log('new stack change published');
        }
    }
};

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
        if(tab['question-image']){
            loadImageFromDB(tab['question-image'] , newTab.querySelector('.form-questionnaire-tab-question-image'))
        }
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

{
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
}

window.addEventListener("beforeunload", () => localStorage.setItem("formData", JSON.stringify(undoStack[undoStack.length-1])));
document.addEventListener('keydown', function(event) {
    if(event.ctrlKey && event.shiftKey && (event.key === 'z' || event.key === 'Z')){
        if(redoStack.length === 0) return;
        undoStack.push(redoStack.pop());
        loadData(undoStack[undoStack.length - 1]);
    }
    else if (event.ctrlKey && (event.key === 'z' || event.key === 'Z')) {
        console.log('undoCalled');
        if(undoStack.length === 1) return;
        redoStack.push(undoStack.pop());
        loadData(undoStack[undoStack.length - 1]);
    }
});

let imageInputDiv;
document.addEventListener("change", async (event) => {
    if (event.target.matches(".form-questionnaire-type-dropdown")) {
        const parentTab = event.target.closest(".form-questionnaire-tab");
        const contentArea = parentTab.querySelector(".form-questionnaire-tab-content-area");
        const selectedValue = event.target.value;
        contentArea.innerHTML = templateMap[selectedValue] || "";
    }
    if(event.target.matches("#hidden-image-input")){
        const file = event.target.files[0];
        if (file && imageInputDiv) {
            displayImage(file, imageInputDiv)
            await saveImageToDB(file, imageInputDiv);
        }
        event.target.value = "";
    }
    else saveChanges();
});


{
	const navbar = document.querySelector('.navbar');
	const themePaletteSidebar = document.querySelector('.theme-palette-sidebar');
	const navbarHeight = navbar.offsetHeight;
	themePaletteSidebar.style.height = `calc(100% - ${navbarHeight}px)`;
    const form = document.querySelector('.form-questionnaire-area');
    form.style.marginTop = `${navbarHeight}px`
}

{
	const paletteButton = document.querySelector('#palette-button');
	const closePaletteButton = document.querySelector('#close-palette-button');
	const themePaletteSidebar = document.querySelector('.theme-palette-sidebar');
	
	paletteButton.addEventListener('click', () => {
		themePaletteSidebar.style.display = (themePaletteSidebar.style.display == 'block' ? 'none': 'block');
	});
	
	closePaletteButton.addEventListener('click', () => {
		themePaletteSidebar.style.display = 'none';
	});
}

{
	const colorDivs = document.querySelectorAll('.theme-palette-sidebar-color-grid div');
	colorDivs.forEach((div) => {
		div.addEventListener('click', () => {
			const color = window.getComputedStyle(div).backgroundColor;
			document.documentElement.style.setProperty('--primary-color', color);
		});
	});
	
	const backgroundColorDivs = document.querySelectorAll('.background-options-container div');
	backgroundColorDivs.forEach((div) => {
		div.addEventListener('click', () => {
			const color = window.getComputedStyle(div).backgroundColor;
			document.documentElement.style.setProperty('--background-color', color);
		});
	});
}

form.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-option")) {
        const tab = event.target.closest('.form-questionnaire-tab');
        const contentArea = event.target.closest('.form-questionnaire-tab-content-area');
        const type = tab.firstElementChild.lastElementChild.value;
        const newOptionsContainer = document.createElement('div');
        newOptionsContainer.classList.add('form-questionnaire-option-container');
        newOptionsContainer.innerHTML = templateOptionsMap[type];
        contentArea.insertBefore(newOptionsContainer, contentArea.lastElementChild);
        if(type === 'dropdown'){
            const allOptions = contentArea.querySelectorAll('.form-questionnaire-option-container');
            let count = 1;
            for(let option of allOptions){
                option.firstElementChild.innerText = `${count++}.`;
            }
        }
        saveChanges();
    }
    else if(event.target.classList.contains('remove-option')){
        const optionContainerTBD = event.target.closest(".form-questionnaire-option-container");
        const tab = event.target.closest('.form-questionnaire-tab');
        const contentArea = event.target.closest('.form-questionnaire-tab-content-area');
        const type = tab.firstElementChild.lastElementChild.value;
        optionContainerTBD.remove();
        if(type === 'dropdown'){
            const allOptions = contentArea.querySelectorAll('.form-questionnaire-option-container');
            let count = 1;
            for(let option of allOptions){
                option.firstElementChild.innerText = `${count++}.`;
            }
        }
        saveChanges();
    }
    else if (event.target.classList.contains("add-row")) {
        const parent = event.target.closest('.form-questionnaire-multiple-choice-grid-inner');
        const newRow = document.createElement('div');
        newRow.classList.add('form-questionnaire-option-container')
        newRow.innerHTML = templateOptionsMap['grid-row'];
        parent.insertBefore(newRow , parent.lastElementChild);
        const allOptions = parent.querySelectorAll('.form-questionnaire-option-container');
        let count = 1;
        for(let option of allOptions){
            option.firstElementChild.innerText = `${count++}.`;
        }
        saveChanges();
    }
    else if(event.target.classList.contains('add-column-multiple-choice')){
        const parent = event.target.closest('.form-questionnaire-multiple-choice-grid-inner');
        const newRow = document.createElement('div');
        newRow.classList.add('form-questionnaire-option-container')
        newRow.innerHTML = templateOptionsMap['grid-column-multiple-choice'];
        parent.insertBefore(newRow , parent.lastElementChild);
        saveChanges();
    }
    else if(event.target.classList.contains('add-column-checkbox')){
        const parent = event.target.closest('.form-questionnaire-multiple-choice-grid-inner');
        const newRow = document.createElement('div');
        newRow.classList.add('form-questionnaire-option-container')
        newRow.innerHTML = templateOptionsMap['grid-column-checkbox'];
        parent.insertBefore(newRow , parent.lastElementChild);
        saveChanges();
    }
    else if(event.target.classList.contains('remove-row')){
        const parent = event.target.closest('.form-questionnaire-multiple-choice-grid-inner');
        const giveOption = event.target.closest('.form-questionnaire-option-container');
        giveOption.remove();
        const allOptions = parent.querySelectorAll('.form-questionnaire-option-container');
        let count = 1;
        for(let option of allOptions){
            option.firstElementChild.innerText = `${count++}.`;
        }
        saveChanges();
    }
    else if(event.target.classList.contains('remove-column')){
        const giveOption = event.target.closest('.form-questionnaire-option-container');
        giveOption.remove();
        saveChanges();
    }
    else if (event.target.classList.contains('add-tab')) {
        const givenTab = event.target.closest(".form-questionnaire-tab");
        const newTab = document.createElement('div');
        newTab.classList.add('form-questionnaire-tab');
        newTab.innerHTML = `
            ${tabHeader}
            <div class = 'form-questionnaire-tab-question-image'></div>
            <div class="form-questionnaire-tab-content-area">
                ${templateMap['short-answer']}
            </div>
			<hr style="height:0.1rem; width: 100%; border-color: rgb(218,220,224);">
            ${tabFooter}
        `;
        form.insertBefore(newTab, givenTab.nextSibling);
        saveChanges();
    }
    else if (event.target.classList.contains('delete-tab')) {
        if(form.children.length === 2) return;
        const givenTab = event.target.closest(".form-questionnaire-tab");
        givenTab.remove();
        saveChanges();
    }
    else if (event.target.classList.contains('duplicate-tab')) {
        const givenTab = event.target.closest(".form-questionnaire-tab");
        const clonedTab = givenTab.cloneNode(true);
        form.insertBefore(clonedTab, givenTab.nextSibling);
        clonedTab.querySelector('.form-questionnaire-type-dropdown').value = givenTab.querySelector('.form-questionnaire-type-dropdown').value;
        saveChanges();
    }
    else if(event.target.classList.contains('add-image')){
        const givenTab = event.target.closest(".form-questionnaire-tab");
        imageInputDiv = givenTab.querySelector('.form-questionnaire-tab-question-image')
        document.getElementById('hidden-image-input').click();
    }
});


