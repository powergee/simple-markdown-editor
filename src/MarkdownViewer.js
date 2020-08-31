import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const MarkdownViewer = props => {
    const newProps = {
        escapeHtml: false,
        plugins: [
            RemarkMathPlugin
        ],

        renderers: {
            text: (props) => (props.value),
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
            table: (props) => (
                <table className="markdown_table">{props.children}</table>
            ),
            tableCell: (props) => {
                let style = {
                    textAlign: props.align ? props.align : 'center',
                    padding: "6px 13px"
                };

                style.border = '1px solid #dfe2e5';
                if (props.isHeader) {
                    style.background = '#f2f2f2'   
                }

                return <td style={style}>{props.children}</td>
            },
            inlineCode: (props) => <code className="markdown_inline_code">{props.value}</code>,
            math: (props) => <BlockMath>{props.value}</BlockMath>,
            inlineMath: (props) => <InlineMath>{props.value}</InlineMath>
        }
    };

    return (
        <ReactMarkdown {...props} {...newProps}></ReactMarkdown>
    );
};

export default MarkdownViewer;