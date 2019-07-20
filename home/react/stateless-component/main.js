import React, { Fragment, Component } from "react";
import { render } from "react-dom";
const log = console.log;

const Prism = ( props ) => <pre><code className="language-javascript">{ props.children }</code></pre>;
const Title = ( props ) => <h1 className="title">{ props.children }</h1>;
const SubTitle = ( props ) => <h3 className="sub-title">{ props.children }</h3>;

const H1 = () => <h1>h1 tag, Stateless Component</h1>;
const stateless = `const H1 = () => <h1>h1 tag, Stateless Component</h1>;
render( <H1 />, document.getElementById( "second" ) );`;

const H1_2 = ({ content }) => <h1>{ content }</h1>;
const e2 =  `const H1 = ({ content }) => <h1>{ content }</h1>
render( <H1 content="pass this to H1 Component"  />, document.getElementById( "e2" ) );`;

const H1_3 = ( props ) => <h1>{ props.content }</h1>;
const e3 =  `const H1 = ( props ) => <h1>{ props.content }</h1>
render( <H1 content="pass this to H1 Component"  />, document.getElementById( "e3" ) );`;

const H1_4 = ( props ) => <h1>{ props.children }</h1>
const e4 =  `// stateless component
const H1 = ( props ) => <h1>{ props.children }</h1>

// direct JXS call
const result = <H1>using props.children</H1>;

// insert to the DOM
render( result, document.getElementById( "e4" ) );`;

const H1_5 = ({ children }) => <h1>{ children }</h1>
const e5 =  `const H1 = ({ children  }) => <h1>{ children }</h1>
const result = <H1>only children</H1>;
render( result, document.getElementById( "e4" ) );`;

const root = <Fragment>
    <p>Lets start with the example we saw on <a href="../three-JSX-main-patterns">Three JSX Main Patterns</a>.</p>
    <Prism>{ stateless }</Prism>
    <div id="second" className="code-result">{ <H1 /> }</div>
    <p>The first question will be <strong>why do even we use an extra function call here?</strong>.</p>
    <p>And the answer is simple: <strong>to make our code more dynamic</strong>.</p>
    <p>Lets instead of Hard Coding it with "h1 tag, Stateless Component", pass something to our H1 component.</p>

    <Prism>{ e2 }</Prism>
    <div id="e2" className="code-result">{ <H1_2 content="pass this to H1 Component" /> }</div>
    <p>You sure know this <strong>content</strong> ES6 Destrcuturing feature.</p>
    <p>Why do we destructure it? Easy. React pass an <strong>Object</strong> to our "H1" component, we are extracting just <strong>content</strong> property of that object.</p>
    <p>And of coerce it means we do not have to destructure it. We can directly use the object.</p>
    
    <Prism>{ e3  }</Prism>
    <div id="e3" className="code-result">{ <H1_3 content="without destructuring ..." /> }</div>

    <p>Is it possible to make further improvement? Yes and even more readable!</p>
    <p>Instead of passing an argument to our stateless component (= Explicit) we can use <strong>children</strong> which is a special property handled by React for us.</p>
    <Prism>{ e4 }</Prism>
    <div id="e4" className="code-result">{ <H1_4>using props.children</H1_4> }</div>
    <p>What is happening here? Easy. the "using props.children" inside h1 tag is passed to the <strong>H1</strong> component using <strong>children</strong> property on the <strong>props</strong> object.</p>
    <p>Making it shorter by just destructring the <strong>children</strong> property.</p>

    <Prism>{ e5 }</Prism>
    <div id="e5" className="code-result">{ <H1_5>only children</H1_5>  }</div>
    <p>So in each step we can make it more and more complex but lets not do it and put it on another post, something like <strong>Component Communication</strong>.</p>
    <h3 className="sub-title">Simple diagram for this pattern</h3>
    <img width="100%" src="/build/img/react-03-stateless-component.png" alt="/react-03-stateless-component.png" />

    <p>Back <a href="../JSX-direct-function-call">JSX Direct Function Call</a></p>
    <p>Next <a href="../stateful-component">Stateful Component</a></p>


</Fragment>;

const div_id_root = document.getElementById( "root" );
render( root, div_id_root );
