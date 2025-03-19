import './FileUpload.css';
import './RatingTab.css';
import FlexBox from "../../Layout/FlexBox";
import Grid from "../../Layout/Grid";

import ToggleSlider from "../../UtilityComponents/ToggleSlider";
import Dropdown from '../../Elements/Dropdown';
import { useContext } from 'react';
import MaterialIcon from '../../Elements/MaterialIcon';
import Button from '../../Elements/Button';
import FormDataContext from '../../../Context/FormDataContext';
export default function FileUpload({tabIndex}){
    const {formData, setFormData} = useContext(FormDataContext);
    const allowOnlySpecificFileTypes = formData.formTabs[tabIndex].allowOnlySpecificFileTypes;
    const maxCount = formData.formTabs[tabIndex].maxCount;
    const maxSize = formData.formTabs[tabIndex].maxSize;
    const setAllowOnlySpecificFileTypes = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].allowOnlySpecificFileTypes = val;
        return next;
    });
    const setMaxCount = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].maxCount = val;
        return next;
    });
    const setMaxSize = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].maxSize = val;
        return next;
    });
    const props1 = {
        menu:[
            {
                key: 1,
                label: <p className='linear-scale-tab__dropdown-item'>1</p>,
                onClick(){setMaxCount(this.key)}
            },
            {
                key: 5,
                label: <p className='linear-scale-tab__dropdown-item'>5</p>,
                onClick(){setMaxCount(this.key)}
            },
            {
                key: 10,
                label: <p className='linear-scale-tab__dropdown-item'>10</p>,
                onClick(){setMaxCount(this.key)}
            },
        ],
        selectedKeys: [maxCount]
    }
    const props2 = {
        menu: [
            {
                key: '1 MB',
                label: <p className='linear-scale-tab__dropdown-item'>1 MB</p>,
                onClick(){setMaxSize(this.key);}
            },
            {
                key: '10 MB',
                label: <p className='linear-scale-tab__dropdown-item'>10 MB</p>,
                onClick(){setMaxSize(this.key);}
            },
            {
                key: '100 MB',
                label: <p className='linear-scale-tab__dropdown-item'>100 MB</p>,
                onClick(){setMaxSize(this.key);}
            },
            {
                key: '1 GB',
                label: <p className='linear-scale-tab__dropdown-item'>1 GB</p>,
                onClick(){setMaxSize(this.key);}
            },
            {
                key: '10 GB',
                label: <p className='linear-scale-tab__dropdown-item'>10 GB</p>,
                onClick(){setMaxSize(this.key);}
            },
        ],
        selectedKeys: [maxSize]
    }
    return (
        <div className="tab-content">   
            <FlexBox direction="column" align="stretch" className="file-upload-tab-main">
                <div>
                    <FlexBox justify="space-between">
                        <p>Allow only specific file types</p>
                        <ToggleSlider size='large' state = {allowOnlySpecificFileTypes} onClick={() => setAllowOnlySpecificFileTypes(!allowOnlySpecificFileTypes)}/>
                    </FlexBox>
                    {allowOnlySpecificFileTypes && 
                        <Grid gap='0.25rem'>
                            <FlexBox>
                                <MaterialIcon name = 'check_box_outline_blank' className='checkbox'></MaterialIcon>
                                <span>Document</span>
                            </FlexBox>
                            <FlexBox>
                                <MaterialIcon name = 'check_box_outline_blank' className='checkbox'></MaterialIcon>
                                <span>Presentation</span>
                            </FlexBox>
                            <FlexBox>
                                <MaterialIcon name = 'check_box_outline_blank' className='checkbox'></MaterialIcon>
                                <span>Spreadsheet</span>
                            </FlexBox>
                            <FlexBox>
                                <MaterialIcon name = 'check_box_outline_blank' className='checkbox'></MaterialIcon>
                                <span>Drawing</span>
                            </FlexBox>
                            <FlexBox>
                                <MaterialIcon name = 'check_box_outline_blank' className='checkbox'></MaterialIcon>
                                <span>PDF</span>
                            </FlexBox>
                            <FlexBox>
                                <MaterialIcon name = 'check_box_outline_blank' className='checkbox'></MaterialIcon>
                                <span>Image</span>
                            </FlexBox>
                            <FlexBox>
                                <MaterialIcon name = 'check_box_outline_blank' className='checkbox'></MaterialIcon>
                                <span>Video</span>
                            </FlexBox>
                            <FlexBox>
                                <MaterialIcon name = 'check_box_outline_blank' className='checkbox'></MaterialIcon>
                                <span>Audio</span>
                            </FlexBox>
                        </Grid>
                    }
                </div>
                <FlexBox justify="space-between">
                    <p>Maximum number of files</p>
                    <Dropdown {...props1}>
                        <Button view = {Button.VIEW.DEFAULT} className="linear-scale-tab__dropdown">
                            <FlexBox gap = '0'>
                                {props1.menu.find(ele => ele.key === maxCount).label}
                                <MaterialIcon name = 'arrow_drop_down' className='dropdown-arrow'/>
                            </FlexBox>
                        </Button>
                    </Dropdown>
                </FlexBox>
                <FlexBox justify="space-between">
                    <p>Maximum File size</p>
                    <Dropdown {...props2}> 
                        <Button view = {Button.VIEW.DEFAULT} className="linear-scale-tab__dropdown">
                            <FlexBox gap = '0'>
                                {props2.menu.find(ele => ele.key === maxSize).label}
                                <MaterialIcon name = 'arrow_drop_down' className='dropdown-arrow'/>
                            </FlexBox>
                        </Button>
                    </Dropdown>
                </FlexBox>
            </FlexBox>
        </div>
    );
}