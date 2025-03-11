import Select from './Elements/Select.jsx';
import FlexBox from './Layout/FlexBox.jsx'
import MaterialIcon from './Elements/MaterialIcon.jsx'
export default function TestComponent() {
    // const props = {
    //     itemList: [
    //         <><span className="material-symbols-outlined">short_text</span><span>Short answer</span></>,
    //         <><span className="material-symbols-outlined">segment</span><span>Paragraph</span></>,
    //         <><span className="material-symbols-outlined">radio_button_checked</span><span>Multiple choice</span></>,
    //         <><span className="material-symbols-outlined">check_box</span><span>Checkboxes</span></>,
    //         <><span className="material-symbols-outlined">arrow_drop_down_circle</span><span>Dropdown</span></>,
    //         <><span className="material-symbols-outlined">cloud_upload</span><span>File upload</span></>,
    //         <><span className="material-symbols-outlined">linear_scale</span><span>Linear scale</span></>,
    //         <><span className="material-symbols-outlined">star</span><span>Rating</span></>,
    //         <><span className="material-symbols-outlined">apps</span><span>Multiple Choice Grid</span></>,
    //         <><span className="material-symbols-outlined">grid_view</span><span>Checkbox Grid</span></>,
    //         <><span className="material-symbols-outlined">event</span><span>Date</span></>,
    //         <><span className="material-symbols-outlined">schedule</span><span>Time</span></>,
    //     ],
    // }
    const props = {
        itemList: [
            <><span className="material-symbols-outlined">short_text</span><span>Short answer</span></>,
            <><span className="material-symbols-outlined">segment</span><span>Paragraph</span></>,
            <><span className="material-symbols-outlined">radio_button_checked</span><span>Multiple choice</span></>,
            <><span className="material-symbols-outlined">check_box</span><span>Checkboxes</span></>,
            <><span className="material-symbols-outlined">arrow_drop_down_circle</span><span>Dropdown</span></>,
            <><span className="material-symbols-outlined">cloud_upload</span><span>File upload</span></>,
            <><span className="material-symbols-outlined">linear_scale</span><span>Linear scale</span></>,
            <><span className="material-symbols-outlined">star</span><span>Rating</span></>,
            <><span className="material-symbols-outlined">apps</span><span>Multiple Choice Grid</span></>,
            <><span className="material-symbols-outlined">grid_view</span><span>Checkbox Grid</span></>,
            <><span className="material-symbols-outlined">event</span><span>Date</span></>,
            <><span className="material-symbols-outlined">schedule</span><span>Time</span></>,
        ],
        node: <MaterialIcon name = 'star' />,
        options:{
            align: 'right'
        }
    }
    return (
        <FlexBox justify = 'center'>
            <Select {...props}/>
        </FlexBox>
    );
}
