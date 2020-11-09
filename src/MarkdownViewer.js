import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import { BlockMath, InlineMath } from 'react-katex';
import { Paper, Table, TableRow, TableHead, TableCell, TableBody, TableContainer } from '@material-ui/core';
import 'katex/dist/katex.min.css';
import emoji from 'emoji-dictionary';

const OutlinedPaper = props => {
    return (<Paper variant="outlined">{props.children}</Paper>);
}

const MarkdownViewer = props => {
    const newProps = {
        escapeHtml: false,
        plugins: [
            RemarkMathPlugin
        ],

        renderers: {
            text: (props) => props.value.replace(/:[^:\s]*(?:::[^:\s]*)*:/gi, name => emoji.getUnicode(name)),
            break: (props) => <br></br>,
            paragraph: (props) => <p className="markdown_paragraph">{props.children}</p>,
            emphasis: (props) => <em className="markdown_emphasis">{props.children}</em>,
            link: (props) => <a className="markdown_link" href={props.href}>{props.children}</a>,
            linkReference: (props) => <a className="markdown_link" href={props.href}>{props.children}</a>,
            strong: (props) => <strong className="markdown_strong">{props.children}</strong>,
            delete: (props) => <del>{props.children}</del>,
            list: (props) => props.start ? <ol className="markdown_ol">{props.children}</ol> : <ul className="markdown_ul">{props.children}</ul>,
            listItem: (props) => <li className="markdown_list_item">{props.children}</li>,
            blockquote: (props) => (
                <blockquote className="markdown_blockquote">
                    {props.children}
                </blockquote>),
            code: (props) => (
                <pre className="markdown_pre">
                    <code>
                        {props.value}
                    </code>
                </pre>),
            // table: (props) => (
            //     <table className="markdown_table">{props.children}</table>
            // ),
            // tableCell: (props) => {
            //     let style = {
            //         textAlign: props.align ? props.align : 'center',
            //         padding: "6px 13px"
            //     };

            //     style.border = '1px solid #dfe2e5';
            //     if (props.isHeader) {
            //         style.background = '#f2f2f2'   
            //     }

            //     return <td style={style}>{props.children}</td>
            // },
            table: (props) => (
                <TableContainer className="markdown_table_container" component={OutlinedPaper}>
                    <Table>
                        {props.children}
                    </Table>
                </TableContainer>
            ),
            tableHead: (props) => <TableHead>{props.children}</TableHead>,
            tableBody: (props) => <TableBody>{props.children}</TableBody>,
            tableRow: (props) => <TableRow>{props.children}</TableRow>,
            tableCell: (props) => {
                let className = props.isHeader ? "markdown_header_cell" : "markdown_body_cell";
                let align = props.align ? props.align : "center";
                return <TableCell className={className} align={align}>{props.children}</TableCell>
            },
            inlineCode: (props) => <code className="markdown_inline_code">{props.value}</code>,
            math: (props) => <BlockMath>{props.value}</BlockMath>,
            inlineMath: (props) => <InlineMath>{props.value}</InlineMath>
        }
    };

    return (
        <ReactMarkdown className="markdown_viewer" {...props} {...newProps}></ReactMarkdown>
    );
};

export default MarkdownViewer;