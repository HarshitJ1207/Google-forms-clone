const getTabType = (ix) => {
    switch (ix){
        case 'short-answer': return 0;
        case 'paragraph': return 1;
        case 'multiple-choice': return 2;
        case 'checkbox': return 3;
        case 'dropdown': return 4;
        case 'file-upload': return 5;
        case 'linear-scale': return 6;
        case 'rating': return 7;
        case 'multiple-choice-grid': return 8;
        case 'checkbox-grid': return 9;
        case 'date': return 10;
        case 'time': return 11;
        case 0: return 'short-answer';
        case 1: return 'paragraph';
        case 2: return 'multiple-choice';
        case 3: return 'checkbox';
        case 4: return 'dropdown';
        case 5: return 'file-upload';
        case 6: return 'linear-scale';
        case 7: return 'rating';
        case 8: return 'multiple-choice-grid';
        case 9: return 'checkbox-grid';
        case 10: return 'date';
        case 11: return 'time';
    } 
}

export default getTabType;