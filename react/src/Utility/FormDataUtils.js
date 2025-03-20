class FormDataUtils {
    static defaultValues = {
        question: "",
        required: false,
        options: ["Option 1"],
        rows: ["Row 1"],
        columns: ["Column 1"],
        minValue: 1,
        maxValue: 5,
        minValueLabel: '',
        maxValueLabel: '',
        symbol: 'grade',
        count: 5,
        maxSize: '10 MB',
        maxCount: 1,
        allowOnlySpecificFileTypes: false,
        allowedFileTypes: [0, 0, 0, 0, 0, 0, 0, 0]
    };

    static getDefaultObject(type) {
        const base = {
            type: type,
            question: this.defaultValues.question,
            required: this.defaultValues.required
        };

        switch (type) {
            case "short-answer":
            case "paragraph":
            case "date":
            case "time":
                return base;
            case "file-upload":
                return {
                    ...base,
                    maxSize: this.defaultValues.maxSize,
                    maxCount: this.defaultValues.maxCount,
                    allowOnlySpecificFileTypes: this.defaultValues.allowOnlySpecificFileTypes,
                    allowedFileTypes: this.defaultValues.allowedFileTypes
                }

            case "multiple-choice":
            case "checkbox":
                return { ...base, options: [...this.defaultValues.options], other: false };

            case "dropdown":
                return { ...base, options: [...this.defaultValues.options] };

            case "multiple-choice-grid":
            case "checkbox-grid":
                return { ...base, rows: [...this.defaultValues.rows], columns: [...this.defaultValues.columns] };

            case "linear-scale":
                return {
                    ...base,
                    minValue: this.defaultValues.minValue,
                    maxValue: this.defaultValues.maxValue,
                    minValueLabel: this.defaultValues.minValueLabel,
                    maxValueLabel: this.defaultValues.maxValueLabel
                };

            case "rating":
                return { ...base, symbol: this.defaultValues.symbol, count: this.defaultValues.count };

            default:
                throw new Error(`Unknown type: ${type}`);
        }
    }

    static convertObject(obj, newType) {
        const newObj = this.getDefaultObject(newType);

        // Preserve common fields
        newObj.question = obj.question;
        newObj.required = obj.required;
        newObj.type = newType;

        // Preserve options if converting between multiple-choice, checkbox, or dropdown
        if ("options" in obj && "options" in newObj) {
            newObj.options = [...obj.options];
        }

        // Preserver other if converting between mutliple-choice and checkbox
        if ("other" in obj && "other" in newObj) {
            newObj.other = obj.other;
        }

        // Preserve rows and columns if converting between grid types
        if ("rows" in obj && "rows" in newObj) {
            newObj.rows = [...obj.rows];
        }
        if ("columns" in obj && "columns" in newObj) {
            newObj.columns = [...obj.columns];
        }

        return newObj;
    }
}

export default FormDataUtils;