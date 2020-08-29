import React, { useEffect, useState } from 'react';
import { Paper, Grid, FormControl, InputLabel, Divider, TextField, FilledInput } from '@material-ui/core';
import MarkdownViewer from './MarkdownViewer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    input: {
        height: '100%',
        alignItems: 'flex-start'
    }
})

const MarkdownEditor = (props) => {
    const [source, setSource] = useState(undefined);
    const classes = useStyles();

    useEffect(() => {
        setSource(props.contents === undefined ? "" : props.contents);
    }, [props.contents]);

    function handleTextChange(event) {
        setSource(event.target.value);
    }

    return (
        <Paper component="form" className="editor_root">
            <Grid container direction="row">
                <FormControl variant="filled" className="editor_input_form">
                    <InputLabel htmlFor="component-filled">Markdown / LaTeX</InputLabel>
                    <FilledInput
                        className="editor_input"
                        classes={{
                            root: classes.input
                        }}
                        inputProps={{ 'aria-label': 'Markdown / LaTeX', 'align-items': undefined }}
                        multiline
                        rows={1}
                        rowsMax={10000}
                        value={source}
                        onChange={handleTextChange}
                    ></FilledInput>
                </FormControl>
                <Divider className="editor_divider" orientation="vertical" flexItem></Divider>
                <MarkdownViewer className="editor_viewer" source={source} />
            </Grid>
        </Paper>
    );
};

export default MarkdownEditor;