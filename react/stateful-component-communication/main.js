import React, { Fragment, Component } from "react";
import { render } from "react-dom";
const log = console.log;

const Prism = ( props ) => <pre><code className={ `language-${props.language || "javascript" }` }>{ props.children }</code></pre>;
const Title = ( props ) => <h1 className="title">{ props.children }</h1>;
const SubTitle = ( props ) => <h3 className="sub-title">{ props.children }</h3>;

const root = <Fragment>
    <p>Not yet.</p>
    <p>Not yet.</p>
    <p>Not yet.</p>
    <p>Not yet.</p>
    <p>Not yet.</p>
</Fragment>

const div_id_root = document.getElementById( "root" );
render( root, div_id_root );
