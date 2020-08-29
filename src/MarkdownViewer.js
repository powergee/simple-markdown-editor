import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';


const MarkdownViewer = props => {
    const newProps = {
        ...props,
        escapeHtml: false,
        plugins: [
            RemarkMathPlugin
        ],

        renderers: {
            ...props.renderers,
            code: (props) => {
                return (
                    <pre style={{ background: '#ebebeb', padding: 5 }}>
                        <code>
                            {props.value}
                        </code>
                    </pre>);
            },
            tableCell: (props) => {
                let style = {
                    textAlign: props.align ? props.align : 'center',
                    padding: 5
                };

                style.border = '1px solid #b5b5b5';
                if (props.isHeader) {
                    style.background = '#f2f2f2'   
                }

                return <td style={style}>{props.children}</td>
            },
            inlineCode: (props) => <code style={{ background: '#ebebeb' }}>{props.value}</code>,
            math: (props) => <BlockMath>{props.value}</BlockMath>,
            inlineMath: (props) => <InlineMath>{props.value}</InlineMath>
        }
    };

    return (
        <ReactMarkdown {...newProps}></ReactMarkdown>
    );
};

export default MarkdownViewer;