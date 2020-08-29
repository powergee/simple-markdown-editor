import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography, Divider, TextField, FilledInput } from '@material-ui/core';
import MarkdownViewer from './MarkdownViewer';

const MarkdownEditor = (props) => {
    const [text, setText] = useState(undefined);
    const [source, setSource] = useState(undefined);
    const [updating, setUpdating] = useState(undefined);

    useEffect(() => {
        setText(props.contents === undefined ? "" : props.contents);
        setSource(props.contents === undefined ? "" : props.contents);
    }, [props.contents]);

    function setSourceAfterDelay(value) {
        if (updating)
            clearTimeout(updating);
        
        // TODO: 퍼포먼스 이슈가 있을 때 대기 시간을 추가할 것.
        setUpdating(setTimeout(() => {
            setSource(value);
            console.log("updated");
        }, 0));
    }

    function handleTextChange(event) {
        setText(event.target.value);
        setSourceAfterDelay(event.target.value);
    }

    function handleTabDown(event) {
        if (event.keyCode === 9) {
            setText(event.target.value+'\t');
            setSourceAfterDelay(event.target.value+'\t');
            event.preventDefault();
        }
    }

    return (
        <Paper component="form" className="editor_root">
            <Grid container direction="row">
                <div className="editor_input_container">
                    <Typography variant="caption">Markdown 및 LaTeX 형식</Typography>
                    <FilledInput
                        className="editor_input"
                        inputProps={{ 
                            'aria-label': 'Markdown / LaTeX',
                            'autocomplete': "off",
                            'autocorrect': "off", 
                            'autocapitalize': "off",
                            'spellcheck': "false"
                        }}
                        multiline
                        rows={1}
                        rowsMax={10000}
                        value={text}
                        onChange={handleTextChange}
                        onKeyDown={handleTabDown}
                    ></FilledInput>
                </div>
                <Divider className="editor_divider" orientation="vertical" flexItem></Divider>
                <div className="editor_viewer_container">
                    <Typography variant="caption">미리 보기</Typography>
                    <MarkdownViewer source={source}/>
                </div>
            </Grid>
        </Paper>
    );
};

export default MarkdownEditor;