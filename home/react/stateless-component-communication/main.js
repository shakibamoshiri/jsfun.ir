import React, { Fragment, Component } from "react";
import { render } from "react-dom";
const log = console.log;

const Prism = ( props ) => <pre><code className={ `language-${props.language || "javascript" }` }>{ props.children }</code></pre>;
const Title = ( props ) => <h1 className="title">{ props.children }</h1>;
const SubTitle = ( props ) => <h3 className="sub-title">{ props.children }</h3>;

const H1 = ({ children }) => <h1>{ children }</h1>;
const H2 = ({ children }) => <h2>{ children }</h2>;
const H3 = ({ children }) => <h3>{ children }</h3>;
const H4 = ({ children }) => <h4>{ children }</h4>;
const H5 = ({ children }) => <h5>{ children }</h5>;

const r1 = <H1>
    <H2>
        <H3>
            <H4>
                <H5>the innermost child</H5>
            </H4>
        </H3>
    </H2>
</H1>

const e1 = `const H1 = ({ children }) => <h1>{ children }</h1>;
const H2 = ({ children }) => <h2>{ children }</h2>;
const H3 = ({ children }) => <h3>{ children }</h3>;
const H4 = ({ children }) => <h4>{ children }</h4>;
const H5 = ({ children }) => <h5>{ children }</h5>;

const r1 = <H1>
    <H2>
        <H3>
            <H4>
                <H5>the innermost child</H5>
            </H4>
        </H3>
    </H2>
</H1>
redner( r1, document.getElementById( "r1" );`;

const Header = props => {
    return <div className="header"
                style={{ height: "100px", backgroundColor: props.bg }}>
                { props.children }
           </div>
}

const Main = $ => {
    return <div className="main-part"
                style={{ height: "300px", backgroundColor: $.bg }}>
                { $.children }
           </div>
}

const Footer = any_name_could_be => {
    return <div className="footer"
                style={{ height: "100px", backgroundColor: any_name_could_be.bg }}>
                { any_name_could_be.children }
           </div>
}

const Template = () => <div className="template">
    <Header bg="#fe0" >Header Part</Header>
    <Main bg="#0cf" >Main Part</Main>
    <Footer bg="#0cc">Footer Part</Footer>
</div>;

const r2 = <Template></Template>;

const e2 = `const Header = props => {
    return <div className="header"
                style={{ height: "100px", backgroundColor: props.bg }}>
                { props.children }
           </div>
}

const Main = $ => {
    return <div className="main-part"
                style={{ height: "300px", backgroundColor: $.bg }}>
                { $.children }
           </div>
}

const Footer = any_name_could_be => {
    return <div className="footer"
                style={{ height: "100px", backgroundColor: any_name_could_be.bg }}>
                { any_name_could_be.children }
           </div>
}

const Template = () => <div className="template">
    <Header bg="#fe0" >Header Part</Header>
    <Main bg="#0cf" >Main Part</Main>
    <Footer bg="#0cc">Footer Part</Footer>
</div>;

const r2 = <Template></Template>;
redner( r2, document.getElementById( "r2" );`;

const root = <Fragment>
    <p>In the previous post we saw how we can pass what we want to a stateless component. It had two common patterns:</p>
    <ol>
        <li>Using as a attribute on the component</li>
        <li>Using as a child on the component</li>
    </ol>
    <p>In either way we are doing it in inner-out flow. Or child-towards-parent flow.</p>
    <p>Here is an example:</p>
    <Prism>{ e1 }</Prism>
    <div id="r1" className="code-result">{ r1 }</div>
    
    <p>Here we have nested H tags that one is the child of another.</p>
    <p>This style is very useful for presentation and view when we want to know the logic just by looking at the view.</p>
    <p>But since using nested H tags has no really usability it does not make sense too much. Lets have a more practical one.</p>
    <p>For example a template of <strong>Header</strong> and <strong>Main</strong> and <strong>Footer</strong>.</p>
    <div id="r2" className="code-result">{ r2 }</div>
    <p>Which has the code:</p>
    <Prism>{ e2 }</Prism>
    
    <SubTitle>Step by Step Inspecting</SubTitle>
    <Prism>{`const r2 = <Template></Template>;`}</Prism>
    <p>JSX function call that is executed and the result is assigned to r2.</p>

    <Prism>{`const Template = () => <div className="template">
    <Header bg="#fe0" >Header Part</Header>
    <Main bg="#0cf" >Main Part</Main>
    <Footer bg="#0cc">Footer Part</Footer>
</div>;`}</Prism>
    <p>When <strong>Template</strong> is executed this function with no argument is executed and its three JSX function calls are also executed.</p>
    
    <Prism>{`<Header bg="#fe0" >Header Part</Header>`}</Prism>
    <p>When <strong>Header</strong> is executed all its attributes like: <strong>bg</strong> and if there were others and also its children are packed and passed to the function.</p>
    <p>Then we can use this packed / passed object and give it a name we like:</p>
    <ol>
        <li>props</li>
        <li>$</li>
        <li>any_name_could_be</li>
    </ol>

    <p>In face we are doing something like this:</p>
    <Prism>{`function Header( props ){
    // using
    props.bg
    // or
    props.children
};
...
const _obj = {
    bg: "#fe0",
    children, result-of-nested-JSX-calls
};
...
Header( _obj  );`}</Prism>
    <p>And the same is true for <strong>Main</strong> and <strong>Footer</strong>.</p>


    <SubTitle>Summary</SubTitle>
    <p>In stateless components JSX packs either attribute or children of a component and passes it to its parents.</p>
    <p>It happens from innermost / deepest level towards outermost / shallowest level.</p>
    <p>There is no state, no user interaction and it is just components communication.</p>

    <SubTitle>Stateless Components Communication Flow</SubTitle>
    <img style={{ width: "100%"  }} src="/build/img/react-stateless-component-communication-flow.svg.png" alt="react-stateless-component-communication-flow.svg.png" />
    <p>In this flow a child only talks to its parent and not the opposite!</p>
    <p>It is from the innermost towards the outermost.</p>

    <SubTitle>Stateless Components Dependency Flow</SubTitle>
    <img style={{ width: "100%" }}  src="/build/img/react-stateless-component-dependency-flow.svg.png" alt="react-stateless-component-communication-flow.svg.png" />
    <p>In this flow a parent depends upon its child / children and not the opposite!</p>
    <p>It is from the outermost towards the innermost.</p>

    <SubTitle>Problem</SubTitle>
    <p><strong>What if we want to change a color by clicking on a button?</strong></p>
    <p>Good problem. We need a better component communication to handle asynchronous communication so in any time after executing a JSX function will let us do something with them.</p>

    <SubTitle>Solution?</SubTitle>
    <p>Stateful Component Communication.</p>

    <p>Back <a href="../stateless-component-communication">Stateless Component Communication</a></p>
    <p>Next <a href="../stateful-component-communication">Stateful Component Communication</a></p>
</Fragment>

const div_id_root = document.getElementById( "root" );
render( root, div_id_root );
