import './FileUpload.css';
import './RatingTab.css';
import FlexBox from "../../Layout/FlexBox";
import Grid from "../../Layout/Grid";

import ToggleSlider from "../../UtilityComponents/ToggleSlider";
import Select from '../../Elements/Select';
import { useState } from 'react';
import MaterialIcon from '../../Elements/MaterialIcon';

export default function FileUpload(){
    const [allowOnlySpecificFileTypes, setAllowOnlySpecificFileTypes] = useState(false);
    const [maxCount, setMaxCount] = useState(0);
    const [maxSize, setMaxSize] = useState(0);
    const props1 = {
        className: 'linear-scale-tab__dropdown',
        options:{
            syncState: [maxCount, setMaxCount]
        }
    }
    const props2 = {
        className: 'linear-scale-tab__dropdown',
        options:{
            syncState: [maxSize, setMaxSize]
        }
    }
    return (
        <div className="tab-content">   
            <FlexBox direction="column" align="stretch" className="file-upload-tab-main">
                <div>
                    <FlexBox justify="space-between">
                        <p>Allow only specific file types</p>
                        <ToggleSlider size='large' state = {allowOnlySpecificFileTypes} handlers={{onClick: () => setAllowOnlySpecificFileTypes(!allowOnlySpecificFileTypes) }}/>
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
                    <Select {...props1}>
                        <p className='linear-scale-tab__dropdown-item'>1</p>
                        <p className='linear-scale-tab__dropdown-item'>5</p>
                        <p className='linear-scale-tab__dropdown-item'>10</p>
                    </Select>
                </FlexBox>
                <FlexBox justify="space-between">
                    <p>Maximum File size</p>
                    <Select {...props2}> 
                        <p className='linear-scale-tab__dropdown-item'>1 MB</p>
                        <p className='linear-scale-tab__dropdown-item'>10 MB</p>
                        <p className='linear-scale-tab__dropdown-item'>100 MB</p>
                        <p className='linear-scale-tab__dropdown-item'>1 GB</p>
                        <p className='linear-scale-tab__dropdown-item'>10 GB</p>
                    </Select>
                </FlexBox>
            </FlexBox>
        </div>
    );
}