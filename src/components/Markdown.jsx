import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Markdown({ children }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // eslint-disable-next-line react/no-unstable-nested-components
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return inline ? (
            <code
              style={{
                background:
                  'linear-gradient( to right, var(--sub-highlight-color) 15%, var(--highlight-color) 85%, var(--sub-highlight-color) )',
                padding: '2px',
                borderRadius: '3px',
              }}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}>
              {children}
            </code>
          ) : match ? (
            // eslint-disable-next-line react/jsx-no-undef, no-undef, react/jsx-props-no-spreading
            <SyntaxHighlighter style={nord} language={match[1]} PreTag="div" {...props}>
              {String(children)
                .replace(/\n$/, '')
                .replace(/\n&nbsp;\n/g, '')
                .replace(/\n&nbsp\n/g, '')}
            </SyntaxHighlighter>
          ) : (
            // eslint-disable-next-line react/jsx-no-undef, no-undef, react/jsx-props-no-spreading
            <SyntaxHighlighter style={nord} language="textile" PreTag="div" {...props}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          );
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        blockquote({ node, children, ...props }) {
          return (
            <div
              style={{
                background: '#f0f0f0',
                padding: '1px 15px',
                borderRadius: '10px',
              }}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}>
              {children}
            </div>
          );
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        img({ node, ...props }) {
          return (
            <img
              style={{ maxWidth: '60vw' }}
              src={props.src.replace('../../../../public/', '/')}
              alt="MarkdownRenderer__Image"
            />
          );
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        em({ node, children, ...props }) {
          return (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <span style={{ 'font-style': 'italic' }} {...props}>
              {children}
            </span>
          );
        },
      }}>
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;
