import React, { Fragment, Component } from "react";
import { render } from "react-dom";
const log = console.log;

const Prism = ( props ) => <pre><code className={ `language-${props.language || "javascript" }` }>{ props.children }</code></pre>;
const Title = ( props ) => <h1 className="title">{ props.children }</h1>;
const SubTitle = ( props ) => <h3 className="sub-title">{ props.children }</h3>;

const e1 = `const Title = ( props ) => <h1 className="title">{ props.children }</h1>
const r = <Title>this is the title</Title>
render( r, document.getElementById( "e1" ) );`

const r1 = <Title>this is the title</Title>;

const e2 = `// Here is "H1" Component
const H1 = ({ children }) => <h1>{ children }</h1>

// Here is "I" Component
const I = ({ children }) => <i>{ children }</i>

// Here "H1" has a child which is another Component "I"
// which itself has its own child
const r = <H1>
    <I>this is i tag, inside H1 tag</I>
<H1>;
render( r, document.getElementById( "e2" ) );`

const H1 = ({ children }) => <h1>{ children }</h1>
const I = ({ children }) => <i>{ children }</i>
const Note = ({ children }) => <span style={{ color: "#c80000" }}>{ children }</span>;
const P = ({ children }) => <p>{ children }</p>
const r2 = <H1>
    <I>this is i tag, inside H1 tag</I>
</H1>;

const e3 = `// Here is "H1" Component
const H1 = ({ children }) => <h1>{ children }</h1>

// Here is "I" Component
const I = ({ children }) => <i>{ children }</i>

// this component not only returns its children but makes them red!
// do not worry about CSS here :)
const Note = ({ children }) => <span style={{ color: "#c80000" }}>{ children }</span>;

const r = <H1>
    <I>this is an italic line</I>
    <I>in this one we have a <Note>note</Note> with red color</I>
<H1>;
render( r, document.getElementById( "e3" ) );`

const r3 = <H1>
    <I>this is an italic line</I>
    <I>in this one we have a <Note>note</Note> with red color</I>
</H1>;

const e4 = `// Here is "H1" Component
const H1 = ({ children }) => <h1>{ children }</h1>

// Here is "I" Component
const I = ({ children }) => <i>{ children }</i>

// this component not only returns its children but makes them red!
// do not worry about CSS here :)
const Note = ({ children }) => <span style={{ color: "#c80000" }}>{ children }</span>;

// adding P to the mix
const P = ({ children }) => <p>{ children }</p>

const r = <H1>
    <P>Very simple p tag but in JSX</P>
    <P>another p tag which has <I>italic</I> tag</P>
    <P>and this one has <Note>note</Note> tag</P>
</H1>;
render( r, document.getElementById( "e4" ) );`



const r4 = <H1>
    <P>Very simple p tag but in JSX</P>
    <P>another p tag which has <I>italic</I> tag</P>
    <P>and this one has <Note>note</Note> tag</P>
</H1>;

const e5  = `const Colorize = ({ children }) => {
    return children.map( child => {
        log( child );
        log( child.props );
        log( child.props.children );
        switch( child.props.className ){
            case "red":
            return <p style={{ color: "#f00" }} >
                { child.props.prefix + child.props.children }
            </p>
            
            case "green":
            return <p style={{ color: "#0f0" }} >
                { child.props.prefix + child.props.children }
            </p>
            
            case "blue":
            return <p style={{ color: "#00f" }}>
                { child.props.prefix + child.props.children }
            </p>
            
            default:
            return <p>{ child.props.prefix + child.props.children }</p>
        }
    });
}

const Line = ({ children }) => {
    return children;
};

const r5 = <Colorize>
    <Line className="xxx"   prefix="xxx: " >this line has no color</Line>
    <Line className="red"   prefix="red: " >this line is in red</Line>
    <Line className="green" prefix="green: " >this line is in greenr</Line>
    <Line className="blue"  prefix="blue: " >this line is in blue</Line>
    <Line className="xxx"   prefix="xxx " >this line has no color</Line>
</Colorize>;
render( r5, document.getElementById( "e5" ) );`;

const Colorize = ({ children }) => {
    return children.map( child  => {
        log( child );
        log( child.props );
        log( child.props.children );
        switch( child.props.className ){
            case "red":
            return <p style={{ color: "#f00" }} >
                { child.props.prefix + child.props.children }
            </p>
            
            case "green":
            return <p style={{ color: "#0f0" }} >
                { child.props.prefix + child.props.children }
            </p>
            
            case "blue":
            return <p style={{ color: "#00f" }}>
                { child.props.prefix + child.props.children }
            </p>
            
            default:
            return <p>{ child.props.prefix + child.props.children }</p>
        }
    });
}

const Line = ({ children }) => {
    return children;
};

const r5 = <Colorize>
    <Line className="xxx"   prefix="xxx: " >this line has no color</Line>
    <Line className="red"   prefix="red: " >this line is in red</Line>
    <Line className="green" prefix="green: " >this line is in greenr</Line>
    <Line className="blue"  prefix="blue: " >this line is in blue</Line>
    <Line className="xxx"   prefix="xxx " >this line has no color</Line>
</Colorize>;

const root = <Fragment>
    <p>We know how we can talk to to a component, right?</p>
    <p>Here is a simple one in which we pass an argument to it and tell it what to do with the argument.</p>
    <Prism>{ e1 }</Prism>
    <div id="e1" className="code-result">{ r1 }</div>
    <p><strong>What does it do with the argument?</strong></p>
    <p>Simple. It uses the <strong>props</strong> object, extracts the <strong>children</strong> and it is evaaluated as an expression.</p>
    <p>The result will be assinged to variable <strong>r</strong> and then by <strong>render</strong> function we insert it to the DOM.</p>
    <p>This is a communication between us the the component.</p>
    <p><strong>How about communication between two components?</strong></p>
    <p>Simple. Components can talk one to another by using <strong>props</strong> which acts like passing arguments to a function.</p>

    <Prism>{ e2 }</Prism>
    <div id="e3" className="code-result">{ r2 }</div>
    <p>Interesting, right? The <strong>I</strong> component returns (passes) its children to the <strong>H1</strong> component and then H1 returns its own ones to us. Good.</p>
    <p>Lets add more.</p>

    <Prism>{ e3 }</Prism>
    <div id="e3" className="code-result">{ r3 }</div>

    <p>It is no very neat. So lets add some new components to it.</p>
    <Prism>{ e4 }</Prism>
    <div id="e4" className="code-result">{ r4 }</div>
    <p>With the help of abstractoin of any tags we want - as a component - we can design our own markup language. It is amazing!, is not it?</p>
    <img width="100%" src="/build/img/react-05-component-communicatoin.svg" alt="react-05-component-communicatoin.svg" />
    
    <p>Lets get crazy!</p>
    <Prism>{ e5 }</Prism>
    
    <div id="e5" className="code-result">{ r5 }</div>
    <p><strong>How do you feel about this code? Good or Bad?</strong></p>
    <p>If good, well.</p>
    <p>if bad, it is signal that says woooow wait! what is going on here?</p>
    <p>Do not worry. We will see more examples. For now just open the dev-tools and see the console.log for these:</p>
    <ol>
        <li>log( child )</li>
        <li>log( child.props )</li>
        <li>log( child.props.children )</li>
    </ol>
    <p>Also ignore this error for now: <strong>Warning: Each child in a list should have ...</strong></p>
    <p>Back <a href="../stateful-component">Stateful Component</a></p>
    <p>Next <a href="../stateless-component-communication">Stateless Component Communication</a></p>


</Fragment>

const div_id_root = document.getElementById( "root" );
render( root, div_id_root );
