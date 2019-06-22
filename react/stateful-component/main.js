import React, { Fragment, Component } from "react";
import { render } from "react-dom";
const log = console.log;

const Prism = ( props ) => <pre><code className={ `language-${props.language || "javascript" }` }>{ props.children }</code></pre>;
const Title = ( props ) => <h1 className="title">{ props.children }</h1>;
const SubTitle = ( props ) => <h3 className="sub-title">{ props.children }</h3>;

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

const e2 = `class H extends Component {
    constructor( props ){
        super( props );
        this.state = {
            count: 0
        }
        // this arrow function does not have implicit this binding
        this.onClick = () => {
            this.setState({ count: this.state.count + 1 });
        };
    }
    render(){
        return <div>
            <h1>h1 tag, Stateful Component { this.state.count }</h1>
            <button onClick={ this.onClick }>increase ...</button>
        </div>;
    }
};`;


const H_2 = class H extends Component {
    constructor( props ){
        super( props );
        this.state = {
            count: 0
        }

        this.onClick = () => {
            this.setState({ count: this.state.count + 1 });
        };
    }
    render(){
        return <div>
            <h1>h1 tag, Stateful Component { this.state.count }</h1>
            <button onClick={ this.onClick }>increase ...</button>
        </div>;
    }
};

const e3 = `class H extends Component {
    constructor( props ){
        super( props );
        this.state = {
            count: 0
        }

        // explicit this binding because onClick has implict this binding
        this.onClick = this.onClick.bind( this );
    }

    // below onClick function has implicit this binding
    // so this.setState() will be undefined / throw exception if
    // we do not bind it to the proper owner of onClick function
    // which here is H
    onClick(){
        this.setState({ count: this.state.count + 1 });
    }
    render(){
        return <div>
            <h1>h1 tag, Stateful Component { this.state.count }</h1>
            <button onClick={ this.onClick }>increase ...</button>
        </div>;
    }
 }`;

const H_3 = class H extends Component {
    constructor( props ){
        super( props );
        this.state = {
            count: 0
        }

        this.onClick = this.onClick.bind( this );
    }

    onClick(){
        this.setState({ count: this.state.count + 1 });
    }
    render(){
        return <div>
            <h1>h1 tag, Stateful Component { this.state.count }</h1>
            <button onClick={ this.onClick }>increase ...</button>
        </div>;
    }
};


const root = <Fragment>
    <p>Lets start with the example we saw on <a href="../three-JSX-main-patterns">Three JSX Main Patterns</a>.</p>
    <Prism>{ stateful }</Prism>
    <div id="e1" className="code-result">{ <H /> }</div>
    <p>Lets inspect it step by step:</p>
    <p>1. This is Object Oriented Programming idiom which means our class uses (inheritance) some features / requirements from another class.</p>
    <p>So <strong>H</strong> is our class and <strong>Component</strong> is React class that we use.</p>
<Prism>{`class extends Component
...`}</Prism>

    <p>2. This is Class Property Initialize (= constructor) which initialize some variables / method and it is run just one time before anything else.</p>
    <Prism>{`...
        constructor( props ){
...`}</Prism>

    <p>3. This is Parent Class or Super Class Initialize (= super keyword) which pass - if needed - some arguments to the <strong>Component</strong> class.</p>
<Prism>{`...
        super( props );
...`}</Prism>
  
    <p>4. This is our variable for storing the state of the component - if there is any - which usually is.</p>
    <p>This variable is not available outside of the component unless we pass it on purpose.</p>
<Prism>{`...
        this.state = {
            count: 0
        }
...`}</Prism>

    <p>5. This is our click handler but in a somewhat strange style which just handles any click on the button - if we had any.</p>
<Prism>{`...
        this.onClick = function(){
            this.setState({ count: this.state.count + 1 });
        }.bind( this );
...`}</Prism>

    <p>6. The is a spacial function from <strong>Component</strong> that we override here or more specifically to specialize it for <strong>H</strong> class behavior / need</p>
<Prism>{`...
    render(){
        ...
            ...
            ...
        ...
    }
...`}</Prism>

    <p>7. This is JSX or JSX Direct Function Call which we saw it better</p>
<Prism>{`...
    ...
        return <div>
            <h1>h1 tag, Stateful Component { this.state.count }</h1>
            <button onClick={ this.onClick }>increase ...</button>
        </div>;
    ...
...`}</Prism>

    <p>8. Finally this is <strong>Expression Evaluator</strong> that evaluate an expression for us and injects it to the place we like / need</p>
<Prism>{`...
    ...
        ...
            ... { this.state.count } ...
            ... ={ this.onClick }> ...
        ...
    ...
...`}</Prism>

    <SubTitle>FAQ</SubTitle>
    <ul>
        <li><strong>Do we have to use constructor?</strong></li>
        <li>No. but if there are some variable and method that we have and should be initialized then the best choice will be using constructor.</li>

        <li><strong>Do we have to use "super( ... )"?</strong></li>
        <li>Yes if have used "extends" to use / inherit from another component</li>

        <li><strong>What is the use of "this.setState(...)"?</strong></li>
        <li>It is a special React function that updates our state - if we have any - then then acts as a signal that there is a need for update the DOM with which the component is rendered again</li>

        <li><strong>What is the use of "bind( this )"?</strong></li>
        <li>In JavaScript context binding is dynamic which means the keyword "this" has different usage in different places (= inside different functions). Because of that we have to make sure that wherever our onClick function is run / called "this" is bound correctly</li>
    </ul>


    <SubTitle>Refactoring</SubTitle>
    <p>Lets rewrite the H component to understand it better, specially <strong>binding</strong></p>
    <p>So we directory name our class to <strong>H</strong> instead of assigning to <strong>const H</strong>. I just want to say that both ways is possible and in more advanced code the <strong>anonymous</strong> one is more handy.</p>
    <p>We can use ES6 arrow function which does not have implicit this binding whereas if we use the keyword <strong>function</strong> it has implicit this binding.</p>
    <Prism>{ e2 }</Prism>
    <div id="e2" className="code-result">{ <H_2 />}</div>

    <SubTitle>Refactoring</SubTitle>
    <p>Putting the function declaration outside of the constructor</p>
    <Prism>{ e3 }</Prism>
    <div id="e3" className="code-result">{ <H_3 /> }</div>
    <p>Now play with the code and meanwhile loot at the below diagram. Try to find a map between what this code dos with what is in the diagram.</p>i

    <SubTitle>Stateful Component Diagram</SubTitle>
    <img style={{ width: "100%" }} src="/build/img/react-stateful.component.png" alt="react-stateful.component.png" />

    <p>Back <a href="../stateless-component">Stateless Component</a></p>
    <p>Back <a href="../component-communication">Component Communication</a></p>
</Fragment>

const div_id_root = document.getElementById( "root" );
render( root, div_id_root );
