import React, { Fragment, Component } from "react";
import { render } from "react-dom";
const log = console.log;

const Prism = ( props ) => <pre><code className={ `language-${props.language || "javascript" }` }>{ props.children }</code></pre>;
const Title = ( props ) => <h1 className="title">{ props.children }</h1>;
const SubTitle = ( props ) => <h3 className="sub-title">{ props.children }</h3>;

class Order extends Component {
    constructor( props ){
        super( props );
        this.state = {
            orderCount: 0
        };

        // bind this in Order to onOrder function
        this.onOrder = this.onOrder.bind( this );
    };

    // handle on-click event
    onOrder(){
        log( this.state );
        this.setState({ orderCount: this.state.orderCount + 1 });
    }

    // inherit from Component
    render(){
        return <div className="order">
            <p>Number of Order: { this.state.orderCount }</p>
            <button onClick={ this.onOrder }>Order Now</button>
        </div>;
    }
};

const r1 = <Order />;
const e1 = `class Order extends Component {
    constructor( props ){
        super( props );
        this.state = {
            orderCount: 0
        };

        // bind this in Order to onOrder function
        this.onOrder = this.onOrder.bind( this );
    };

    // handle on-click event
    onOrder(){
        log( this.state );
        this.setState({ orderCount: this.state.orderCount + 1 });
    }

    // inherit from Component
    render(){
        return <div className="order">
            <p>Number of Order: { this.state.orderCount }</p>
            <button onClick={ this.onOrder }>Order Now</button>
        </div>;
    }
};

// just calling the Order component
const e1 = <Order />;

render( e1, document.getElementById( "e1" );`;

const OrderButton = ( props ) => {
    return <div className="just-order">
        <button onClick={ props.onOrder }>{ props.children }</button>
    </div>;
};

const OrderTitle = ( props ) => {
    return <div className="order-title">
        <p>{ props.children } : { props.state.orderCount  }</p>
    </div>;
};

class OrderManager extends Component {
    constructor( props ){
        super( props );
        this.state = {
            orderCount: 0
        };

        // bind this in Order to onOrder function
        this.onOrder = this.onOrder.bind( this );
    };

    // handle on-click event
    onOrder(){
        log( "this.state", this.state );
        this.setState({ orderCount: this.state.orderCount + 1 });
    }

    // inherit from Component
    render(){
        return <div className="order">
            { this.props.children.map(( child, index ) => React.cloneElement( child, { key: index, ...this } ) ) }
        </div>;
    }
};

const r2 = <OrderManager>
    <OrderButton >Order now :)</OrderButton>
    <OrderTitle>Number of Order </OrderTitle>
</OrderManager>;

const e2 = `// stateless component
const OrderButton = ( props ) => {
    return <div className="just-order">
        <button onClick={ props.onOrder }>{ props.children }</button>
    </div>;
};

// stateless component
const OrderTitle = ( props ) => {
    return <div className="order-title">
        <p>{ props.children } : { props.state.orderCount  }</p>
    </div>;
};

// stateful component
class OrderManager extends Component {
    constructor( props ){
        super( props );
        this.state = {
            orderCount: 0
        };

        // bind this in Order to onOrder function
        this.onOrder = this.onOrder.bind( this );
    };

    // handle on-click event
    onOrder(){
        log( "this.state", this.state );
        this.setState({ orderCount: this.state.orderCount + 1 });
    }

    // inherit from Component
    render(){
        return <div className="order">
            { this.props.children.map(( child, index ) => React.cloneElement( child, { key: index, ...this } ) ) }
        </div>;
    }
};

// our view
const e2 = <OrderManager>
    <OrderTitle>Number of Order </OrderTitle>
    <OrderButton >Order now :)</OrderButton>
</OrderManager>;

render( e1, document.getElementById( "e2" );`;

const e3 = `<OrderManager>
    <OrderTitle>Number of Order </OrderTitle>
    <OrderButton >Order now :)</OrderButton>
</OrderManager>;`

const r3 = <OrderManager>
    <OrderTitle>Number of Order </OrderTitle>
    <OrderButton >Order now :)</OrderButton>
</OrderManager>;

const FancyOrderButton = ( props ) => {
    return <div className="just-order">
        <button
            onClick={ props.onOrder }
            style={
                { border: "none",
                padding: "5px 10px",
                backgroundColor: "#fff",
                cursor: "pointer",
                borderRadius: "5px",
                boxShadow: "0 0 10px #ccc",
                margin: "10px" }
                }>
            { props.children }
        </button>
    </div>;
};

const fob = `const FancyOrderButton = ( props ) => {
    return <div className="just-order">
        <button
            onClick={ props.onOrde }
            style={{ border: "none",
                padding: "5px 10px",
                backgroundColor: "#fff",
                cursor: "pointer",
                borderRadius: "5px",
                boxShadow: "0 0 10px #ccc",
                margin: "10px" }}>
            { props.children }
        </button>
    </div>;
};`;

const e4 = `<OrderManager>
    <OrderTitle>Number of Order </OrderTitle>
    <FancyOrderButton>Order with Fancy Button</FancyOrderButton>
</OrderManager>;`;

const r4 = <OrderManager>
    <OrderTitle>Number of Order </OrderTitle>
    <FancyOrderButton>Order with Fancy Button</FancyOrderButton>
</OrderManager>;


const root = <Fragment>
    <p>While we have stateless components and they can be great; but in some cases we need to interact with our components and do things other than just presentation.</p>
    <p>For example shopping. What if we want to have 3 books? We should be able to <strong>increase</strong> a number to tell the page / website that we want three of this product.</p>
    <p>Now the component for such a task has to be able to:</p>
    <ul>
        <li>Communicate with the user - something other than other components</li>
        <li>Also keeps track of what is happening. For example <strong>increasing</strong></li>
    </ul>
    <p>In this case our components on the page should be able to talk to each other, plus talk to the user.</p>

    <SubTitle>Example 1. talking to a user</SubTitle>
    <p>Here we have a simple component that does simple thing. Just showing the number of order according to the times of user-click on the order button.</p>
    <p>A user tells what he / she wants and our component does that.</p>
    <Prism>{ e1 }</Prism>
    <div id="e1" className="code-result">{ r1 }</div>

    <SubTitle>Example 2.talking between components</SubTitle>
    <Prism>{ e2 }</Prism>
    <div id="e2" className="code-result">{ r2  }</div>
    <p>Do not worry about this one; we will go through each part one by one.</p>
    <p>Here we have three components:</p>
    <ol>
        <li>OrderManager | for managing the state</li>
        <li>OrderTitle | for showing the title and orderCount to the user</li>
        <li>OrderButton | for showing the button to the user</li>
    </ol>
    <p>The <strong>OrderManager</strong> will hold the state for us and the other two help to create the view</p>
    <p>At first it looks complicated but soon we will see why this pattern is important.</p>
    <p><strong>Do you remember the flow of dependency in stateless component?</strong></p>
    <p>Here it is; from the outermost nested into innermost.</p>
    <img src="/build/img/react-stateless-component-dependency-flow.svg.png" alt="react-stateless-component-dependency-flow.svg.png" />
    <p>This flow has an important feature that makes later change in our component very easy.</p>
    <p>Since the flow is from outside into inside, we simple can:</p>
    <ol>
        <li>remove</li>
        <li>change</li>
        <li>move</li>
    </ol>
    <p>one of those component. In fact we have prevent ourselves from <strong>Dependency Injection</strong>.</p>
    <p>Lets change the order of those two components, moving the button down:</p>
    <Prism language="html" >{ e3 }</Prism>
    <div id="e3" className="code-result">{ r3 }</div>
    <p>Not only we are able to move (change the view) but also able to <strong>replace</strong> the OrderButton with another one very easily without touching the OrderManager. Tacking the FancyOrderButton</p>
    <Prism language="html" >{ fob }</Prism>
    <p>And replacing it with OrderButton</p>
    <Prism language="html" >{ e3 }</Prism>
    <p>We will have the same view with different button without touching the OrderManager</p>
    <Prism language="html" >{ e4 }</Prism>
    <div id="e4" className="code-result">{ r4 }</div>
    <p>So we have a very simple API to work with this order component. Lets see what we have.</p>
    <p>The <strong>OrderManager</strong> is just like the first <strong>Order</strong> component but instead of using static view:</p>
<Prism language="html">{ `render(){
    return <div className="order">
        <p>Number of Order: { this.state.orderCount }</p>
        <button onClick={ this.onOrder }>Order Now</button>
    </div>;
}`}</Prism>
    <p>we have dynamic view:</p>
<Prism>{`render(){
    return <div className="order">
        { this.props.children.map(( child, index ) => {
            React.cloneElement( child, { key: index, ...this } ) } )
        }
    </div>;
}`}</Prism>
    <p>Why did we do that? For making the view <strong>independent</strong> from the <strong>Order</strong> component</p>
    <p>Why is it important? Why is making them independent good? For change in the future. For prevent ourselves form Dependency Injection.</p>
    
    <SubTitle>How does dynamic view works?</SubTitle>
    <p>Remember the <a href="../">Stateless Component Communication</a> in which we learned we can pass <strong>elements</strong> to our stateless component using <strong>children</strong>.</p>
    <p>Based on this feature we can create two stateless components and pass them to the <strong>OrderManager</strong>. Then OrderManager is able to map over them and show them.</p>
    <p>The problem here we will face is that in our stateless components communication we did not have state but here we have state.</p>
    <p>And somehow we have to pass the state in <strong>OrderManager</strong> to our stateless component (= children of OrderManager) so they be aware of the state.</p>
    <p>We can do it via <a href="https://reactjs.org/docs/react-api.html#cloneelement">reactjs.org/docs/react-api.html#cloneelement</a>.</p>
    <p>Also the DOM API has something like this <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode">developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode</a> to help us have a clone of an element.</p>
    <p>With <strong>React.cloneElement()</strong> we can pass our state down in OrderManager into our stateless components (= children of OrderManager) so they can deal with the state if they need it.</p>
    <p>The <strong>OrderTitle</strong> needs <strong>state.orderCount</strong> and the <strong>OrderButton</strong> has an <strong>on-click</strong> handler to call the OrderManager onOrder function.</p>
    <p>So we have passed down the state (= ...this ) to OrderTitle and OrderButton which becomes <strong>props</strong> of those components and therefore they can talk to each other. Also note that these two are the same::</p>
    <ol>
        <li>this.onOrder | inside OrderManager</li>
        <li>props.onOrder | inside OrderButton</li>
    </ol>
    <p>Since we have two children - we have an array - and can use map function to extract each <strong>child</strong> then clone each one plus add "this" and "key" to each child.</p>
    <p>The return value of cloneElement is a new element that has access to "this" in the OrderManager. In this way they can communicate with their parent.</p>

    <SubTitle>Stateful Component Communication Flow</SubTitle>
    <img src="/build/img/react-stateful-component-communication-flow.png" alt="stateful-component-communication-flow.svg.png" />

    <SubTitle>Stateful Component Dependency Flow</SubTitle>
    <img src="/build/img/react-stateful-component-dependency-flow.png" alt="react-stateful-component-dependency-flow.png" />

    <p>Back <a href="../stateless-component-communication">Stateless Component Communication</a></p>
    <p>Next <a href="../lets-create-a-simple-shopping-cart">Lets Create a Simple Shopping Cart</a></p>

</Fragment>

const div_id_root = document.getElementById( "root" );
render( root, div_id_root );
