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
            math: ({value}) => <BlockMath>{value}</BlockMath>,
            inlineMath: ({value}) => <InlineMath>{value}</InlineMath>
        }
    };

    return (
        <ReactMarkdown {...newProps}></ReactMarkdown>
    );
};

export default MarkdownViewer;