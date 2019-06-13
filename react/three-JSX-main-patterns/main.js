import React, { Fragment, Component } from "react";
import { render } from "react-dom";
const log = console.log;

const Prism = ( props ) => <pre><code className="language-javascript">{ props.children }</code></pre>;
const Title = ( props ) => <h1 className="title">{ props.children }</h1>;
const SubTitle = ( props ) => <h3 className="sub-title">{ props.children }</h3>;

const jsx_function_call = `const h1 = <h1>This is h1 tag</h1>
render( h1, document.getElementById( "first" ) );`;
const h1 = <h1>This is h1 tag</h1>;

const stateless = `const H1 = () => <h1>h1 tag, Stateless Component</h1>;
render( <H1 />, document.getElementById( "second" ) );`;
const H1 = () => <h1>h1 tag, Stateless Component</h1>;

const stateful = `const H = class extends Component {
    constructor( props ){
        super( props );
        this.state = {
            count: 0
        }

        this.onClick = function(){
            this.setState({ count: this.state.count + 1 });
        }.bind( this );
    }
    render(){
        return <div>
            <h1>h1 tag, Stateful Component { this.state.count }</h1>
            <button onClick={ this.onClick }>increase ...</button>
        </div>;
    }
};`;

const H = class extends Component {
    constructor( props ){
        super( props );
        this.state = {
            count: 0
        }

        this.onClick = function(){
            this.setState({ count: this.state.count + 1 });
        }.bind( this );
    }
    render(){
        return <div>
            <h1>h1 tag, Stateful Component { this.state.count }</h1>
            <button onClick={ this.onClick }>increase ...</button>
        </div>;
    }
}

const two_notes = `// usually people do this
class H extends Component { ...

// But we did this:
const H = class extends Component {

// Also people do this:
this.onClick = this.onClick.bind( this )

// And we did this:
this.onClick = function(){ ...
...
}.bind( this )`;

const root = <Fragment>
    <p>By looking at any React Code we can identify some patterns that almost covers most part of it.</p>
    <p>Since JSX is a wrapper for creating DOM but in XML fashion, everything is almost JSX but we can categorize it into two</p>
    <ol>
        <li>JSX Direct Function Call</li>
        <li>JSX Indirect Function Call</li>
            <ol>
                <li>Stateless Component or Pure Function</li>
                <li>Stateful Component or Impure Function</li>
            </ol>
    </ol>
    <p>Thus we will have about three patterns.</p>
    <ul>
        <li>JSX Direct Function Call</li>
        <li>Stateless Component or Pure Function</li>
        <li>Stateful Component or Impure Function</li>
    </ul>

    <SubTitle>1. JSX Direct Function Call</SubTitle>
    <Prism>{ jsx_function_call  }</Prism>
    <div className="code-result" id="first">{ h1 }</div>
    <p>There is nothing special about it. It is just a wrapper for creating DOM elements, like using pure DOM API</p>
    <Prism>{`const h1 = document.createElement( "h1" );
h1.textContent = "This is h1 tag";`}</Prism>


    <SubTitle>2. Stateless Component or Pure Function</SubTitle>
    <Prism>{ stateless }</Prism>
    <div className="code-result" id="second">{ <H1 /> }</div>
    <p>Here we have the same idea except this time we are able to pass an argument (or more) because we have wrapped our "h1" tag using another function.</p>
    <p>And thus we will have a <strong>Component</strong>.</p>
    <p>What is a Component?</p>
    <p>It is a wrapper around JSX that we can pass argument(s) into it. Simple right?</p>
    <p>And for identifying it as a Component we follow the Facebook Convention and use Uppercase letter for naming it. So it becomes <strong>H1</strong> and not <strong>h1</strong>.</p>

    <SubTitle>3. Stateful Component or Impure Function</SubTitle>
    <p>Along with the ability to use an argument, if we give a component the power to modify the sate of itself or others components then it become <strong>Stateless Component</strong>.</p>
    <p>Simple counting app with a button.</p>
    <Prism>{ stateful }</Prism>
    <div className="code-result" id="third">{ <H /> }</div>
    <p>Again nothing special about it. We are manipulating the DOm but in an organized we that we can name it: Self State Management.</p>
    <p>The component keeps track of its states if it has any.</p>

    <SubTitle>Two Notes</SubTitle>
    <Prism>{ two_notes }</Prism>
    <p>Do not worry about these two, we will see what they are and why we did them.</p>
    <p>We will inspect these three one by one and explore them more.</p>

    <SubTitle>Simplifying these three patterns in a diagram:</SubTitle>
    <img style={{ width: "100%" }} src="/build/jsx.svg" alt="" />
    <p>Next <a href="../JSX-direct-function-call">JSX Direct Function Call</a></p>



</Fragment>; 
render( root, document.getElementById( "root" ) );
