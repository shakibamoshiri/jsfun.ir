import React, { Fragment } from "react";
import { render } from "react-dom";
const log = console.log;

const Prism = ( props ) => <pre><code className={ `language-${props.language }` }>{ props.children }</code></pre>;
const Title = ( props ) => <h1 className="title">{ props.children }</h1>;
const SubTitle = ( props ) => <h3 className="sub-title">{ props.children }</h3>;

const c_1 = <div id="cr-1" className="code-result">
    <h1>This is h1 tag;</h1>
</div>;

const e_2 = `const c_2 =
<div id="cr-2" className="code-result"> /* function call */
    <div>                           /* function call */ 
        <h1>this is h1 tag</h1>     /* function call */
    </div>
    <div>                           /* function call */
        <h1>this is h1 tag</h1>     /* function call */
    </div>
    <div>                           /* function call */
        <h1>this is h1 tag</h1>     /* function call */
    </div>                          
    <div>                           /* function call */
        <h1>this is h1 tag</h1>     /* function call */
    </div>
</div>;
render( c_2, document.getElementById( "cr-2" ) ); /* Injecting to DOM */`;

const c_2 =
<div id="cr-2" className="code-result">
    <div>
        <h1>this is h1 tag</h1>
    </div>
    <div>
        <h1>this is h1 tag</h1>
    </div>
    <div>
        <h1>this is h1 tag</h1>
    </div>
    <div>
        <h1>this is h1 tag</h1>
    </div>
</div>;

const root = <Fragment>
    <p>With this pattern we directly using JSX to dynamically create our DOM elements.</p>
    <p>While we can do it in Native DOM API like so:</p>
<Prism language="javascript">{`const h1 = document.createElement( "h1" );
h1.textContent = "This is h1 tag"
document.getElementById( "cr-1" ).appendChild( h1 );`}</Prism>
    <div id="cr-1">{ c_1 }</div>

    <p>This repetition becomes annoying when there are more elements to creates like so:</p>
<Prism language="html">{`<div>
    <div>
        <h1>this is h1 tag</h1>
    </div>
    <div>
        <h1>this is h1 tag</h1>
    </div>
    <div>
        <h1>this is h1 tag</h1>
    </div>
    <div>
        <h1>this is h1 tag</h1>
    </div>
</div>
`}</Prism>
    <p>Presentationally we know the structure of it but combining these requries us nesting many functions.</p>
    <p>Well, JSX makes it super easy for us:</p>
    <Prism language="javascript">
        { e_2 }
    </Prism>
    <div id="cr-2">{ c_2 }</div>
    <p>It is somewhow something like <strong>Get What You See</strong>.</p>
    <p>Notice how we used lowercase letter <strong>c_2</strong> whcih could be <strong>div, h1, etc</strong>, but not <strong>Div, H1</strong>.</p>
    <p>And it simplifies the dynamic creation of Native DOM API - which we would have to do it manually if we did not have JXS - and we still have a nice pseudo-HTML syntax.</p>
    <h3 className="sub-title">An oversimplified diagram for this pattern</h3>
    <img width="100%" src="/build/img/react-jsx-direct-function-call.png" alt="react-jsx-direct-function-call.png" />

    <p>Back: <a href="../three-JSX-main-patterns">Three JSX Main Patterns</a></p>
    <p>Next: <a href="../stateless-component">Stateless Component</a></p>

</Fragment>

const div_id_root = document.getElementById( "root" );
render( root, div_id_root );
