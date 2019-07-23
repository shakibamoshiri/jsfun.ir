import React, { Fragment, Component } from "react";
import { render } from "react-dom";
import Button from '@material-ui/core/Button';
const log = console.log;


const Prism = ( props ) => <pre><code className={ `language-${props.language || "javascript" }` }>{ props.children }</code></pre>;
const Title = ( props ) => <h1 className="title">{ props.children }</h1>;
const SubTitle = ( props ) => <h3 className="sub-title">{ props.children }</h3>;

const IncreaseButton = ( props ) => {
    return <span className={ props.className }>
        <button onClick={ props.increaseNumber }>{ props.children }</button>
    </span>;
};
const ib = `const IncreaseButton = ( props ) => {
    return <span className={ props.className }>
        <button onClick={ props.increaseNumber }>{ props.children }</button>
    </span>;
};`;

const DecreaseButton = ( props ) => {
    return <span className={ props.className }>
        <button onClick={ props.decreaseNumber }>{ props.children }</button>
    </span>;
};
const db = `const DecreaseButton = ( props ) => {
    return <span className={ props.className }>
        <button onClick={ props.decreaseNumber }>{ props.children }</button>
    </span>;
};`;

const MUIdecreaseButton = ( props ) => {
    return <span className={ props.className }>
        <Button variant="outlined" color="primary" onClick={ props.decreaseNumber }>
            { props.children }
        </Button>
    </span>;
};
const mdb = `const MUIdecreaseButton = ( props ) => {
    return <span className={ props.className }>
        <Button variant="outlined" color="primary" onClick={ props.decreaseNumber }>
            { props.children }
        </Button>
    </span>;
};`;

const MUIincreaseButton = ( props ) => {
    return <span className={ props.className }>
        <Button variant="outlined" color="primary" onClick={ props.increaseNumber }>
            { props.children }
        </Button>
    </span>;
};
const mib = `const MUIincreaseButton = ( props ) => {
    return <span className={ props.className }>
        <Button variant="outlined" color="primary" onClick={ props.increaseNumber }>
            { props.children }
        </Button>
    </span>;
};`;



const OrderTitle = ( props ) => {
    return <span className={ props.className }>
       { props.children } : { props.state.price }
    </span>;
};
const ot = `const OrderTitle = ( props ) => {
    return <span className={ props.className }>
       { props.children } : { props.state.price }
    </span>;
};`;

const OrderCount = ( props ) => {
    return <span className={ props.className } style={ props.style }>
        { props.state.orderCount  }
    </span>
};
const oc = `const OrderCount = ( props ) => {
    return <span className={ props.className } style={ props.style }>
        { props.state.orderCount  }
    </span>
};`;


const TotalPrice = ( props ) => {
    return <span className={ props.className }>
        { props.children } : { props.state.total }
    </span>
};
const tp = `const TotalPrice = ( props ) => {
    return <span className={ props.className }>
        { props.children } : { props.state.total }
    </span>
};`;

class OrderManager extends Component {
    constructor( props ){
        super( props );
        this.state = {
            orderCount: 0,
            price: 10,
            total: 0
        };

        this.decreaseNumber = this.decreaseNumber.bind( this );
        this.increaseNumber = this.increaseNumber.bind( this );
    };

    increaseNumber(){
        log( "this.state", this.state );
        const { total, orderCount, price } = this.state;
        this.setState({
            orderCount: orderCount + 1,
            total: total + price
        });
    }

    decreaseNumber(){
        log( "this.state", this.state );
        const { total, orderCount, price } = this.state;
        if( orderCount <= 0 ){
            alert( "Minimum" );
            return;
        }
        this.setState({
            orderCount: orderCount - 1,
            total: total - price
        });
    }

    render(){
        return <div className={ this.props.className } style={ this.props.style }>
        {
            this.props.children.map(( child, index ) => {
                return React.cloneElement( child, { key: index, ...this } )
            })
        }
        </div>;
    }
};
const om = `class OrderManager extends Component {
    constructor( props ){
        super( props );
        this.state = {
            orderCount: 0,
            price: 10,
            total: 0
        };

        this.decreaseNumber = this.decreaseNumber.bind( this );
        this.increaseNumber = this.increaseNumber.bind( this );
    };

    increaseNumber(){
        log( "this.state", this.state );
        const { total, orderCount, price } = this.state;
        this.setState({
            orderCount: orderCount + 1,
            total: total + price
        });
    }

    decreaseNumber(){
        log( "this.state", this.state );
        const { total, orderCount, price } = this.state;
        if( orderCount <= 0 ){
            alert( "Minimum" );
            return;
        }
        this.setState({
            orderCount: orderCount - 1,
            total: total - price
        });
    }

    render(){
        return <div className={ this.props.className } style={ this.props.style }>
        {
            this.props.children.map(( child, index ) => {
                return React.cloneElement( child, { key: index, ...this } )
            })
        }
        </div>;
    }
};`;

const cr1 = <OrderManager>
    <OrderTitle>Price: </OrderTitle>
    <TotalPrice>Total: </TotalPrice>
    <IncreaseButton> + </IncreaseButton>
    <OrderCount></OrderCount>
    <DecreaseButton> - </DecreaseButton>
</OrderManager>;
const ce1 = `const cr1 = <OrderManager>
    <OrderTitle>Price: </OrderTitle>
    <TotalPrice>Total: </TotalPrice>
    <IncreaseButton> + </IncreaseButton>
    <OrderCount></OrderCount>
    <DecreaseButton> - </DecreaseButton>
</OrderManager>;`

const cr2 = <OrderManager>
    <OrderTitle>Price: </OrderTitle>
    <IncreaseButton> + </IncreaseButton>
    <OrderCount></OrderCount>
    <DecreaseButton> - </DecreaseButton>
    <TotalPrice>Total: </TotalPrice>
</OrderManager>;
const ce2 = `const cr2 = <OrderManager>
    <OrderTitle>Price: </OrderTitle>
    <IncreaseButton> + </IncreaseButton>
    <OrderCount></OrderCount>
    <DecreaseButton> - </DecreaseButton>
    <TotalPrice>Total: </TotalPrice>
</OrderManager>;`;

const cr3_style = {
    display: "flex",
    backgroundColor: "#0cc",
    margin: "10px",
    padding: "10px"
};
const cr3_css = `const cr3_style = {
    display: "flex",
    backgroundColor: "#0cc",
    margin: "10px",
    padding: "10px"
};`;

const cr3 = <OrderManager className="shopping-cart-3" style={ cr3_style  }>
    <OrderTitle>Price: </OrderTitle>
    <DecreaseButton> - </DecreaseButton>
    <OrderCount></OrderCount>
    <IncreaseButton> + </IncreaseButton>
    <TotalPrice>Total: </TotalPrice>
</OrderManager>;

const ce3 = `const cr3 = <OrderManager className="shopping-cart-3" style={ cr3_style }>
    <OrderTitle>Price: </OrderTitle>
    <DecreaseButton> - </DecreaseButton>
    <OrderCount></OrderCount>
    <IncreaseButton> + </IncreaseButton>
    <TotalPrice>Total: </TotalPrice>
</OrderManager>;`;

const cr4_style = {
    display: "flex",
    backgroundColor: "#fff",
    margin: "10px",
    padding: "10px"
};
const cr4 = <OrderManager className="shopping-cart-3" style={ cr4_style  }>
    <OrderTitle>Price: </OrderTitle>
    <MUIdecreaseButton> - </MUIdecreaseButton>
    <OrderCount></OrderCount>
    <MUIincreaseButton> + </MUIincreaseButton>
    <TotalPrice>Total: </TotalPrice>
</OrderManager>;
const ce4 = `const cr4 = <OrderManager className="shopping-cart-3" style={ cr4_style  }>
    <OrderTitle>Price: </OrderTitle>
    <MUIdecreaseButton> - </MUIdecreaseButton>
    <OrderCount></OrderCount>
    <MUIincreaseButton> + </MUIincreaseButton>
    <TotalPrice>Total: </TotalPrice>
</OrderManager>;`;

const cr5 = <OrderManager className="shopping-cart-5" style={ cr4_style  }>
    <OrderTitle>Price: </OrderTitle>
    <MUIdecreaseButton> - </MUIdecreaseButton>
    <OrderCount></OrderCount>
    <MUIincreaseButton> + </MUIincreaseButton>
    <TotalPrice>Total: </TotalPrice>
</OrderManager>;

const cr6_style = {
    display: "flex",
    backgroundColor: "#fff",
    fontWeight: "bold"
};
const cr6 = <OrderManager className="shopping-cart-6" style={ cr6_style  }>
    <OrderTitle>Price: </OrderTitle>
    <MUIincreaseButton> + </MUIincreaseButton>
    <OrderCount></OrderCount>
    <MUIdecreaseButton> - </MUIdecreaseButton>
    <TotalPrice>Total: </TotalPrice>
</OrderManager>;

const root = <Fragment>
    <SubTitle>Increase Button [ + }</SubTitle>
    <p>on-click <strong>Increase</strong> should happen</p>
    <Prism>{ ib }</Prism>

    <SubTitle>Decrease Button [ - }</SubTitle>
    <p>on-click <strong>Decrease</strong> should happen</p>
    <Prism>{ db }</Prism>
    
    <SubTitle>Order Title and Price</SubTitle>
    <p>showing a word and value of count</p>
    <Prism>{ ot }</Prism>

    <SubTitle>Total Price</SubTitle>
    <p>showing the total of price according to price</p>
    <Prism>{ tp }</Prism>

    <SubTitle>Order Count</SubTitle>
    <p>according to Increase or Decrease should change</p>
    <Prism>{ oc }</Prism>

    <SubTitle>Order Manger</SubTitle>
    <p>Managing stateless components</p>
    <Prism>{ om }</Prism>

    <SubTitle>First Result</SubTitle>
    <Prism language="html" >{ ce1 }</Prism>
    <div className="code-result cr1">{ cr1 }</div>
    <p>Very ugly, right?</p>

    <SubTitle>Refactoring, change the order of components</SubTitle>
    <p>We no fear we can change the orders.</p>
    <Prism language="html" >{ ce2 }</Prism>
    <div className="code-result cr2">{ cr2 }</div>
    
    <SubTitle>Refactoring, add Flexbox and some CSS</SubTitle>
    <p>Adding some CSS</p>
    <Prism language="css" >{ cr3_css }</Prism>
    <Prism language="html" >{ ce3 }</Prism>
    <div className="code-result cr3">{ cr3 }</div>

    <SubTitle>Refactoring, add Material-UI buttons</SubTitle>
    <p><strong><i>I do not like these buttons, you can replace them with Material-UI?</i></strong></p>
    <p><strong>Sure.</strong></p>
    <p>Since we do not depend on implementation, very simply can replace these two buttons we have,
    with new ones.</p>
    <p>Import it</p>
    <Prism>{`import Button from '@material-ui/core/Button';`}</Prism>

    <p>M UI Increase Button</p>
    <Prism >{ mib }</Prism>
    
    <p>M UI Decrease Button</p>
    <Prism >{ mdb }</Prism>

    <p>Replace our old buttons with new ones</p>
    <Prism language="html" >{ ce4 }</Prism>
    <p>Also making the background #FFF to see the effect of buttons</p>
    <div className="code-result cr4">{ cr4 }</div>

    <SubTitle>Refactoring the style, horizontal view</SubTitle>
    <div className="cr5">{ cr5  }</div>
    <div className="cr5">{ cr5  }</div>
    <div className="cr5">{ cr5  }</div>
    
    <SubTitle>Refactoring the style + order of buttons, vartical view</SubTitle>
    <div className="wrapper-for-cr6">
        <span className="cr6" style={{ width: "140px" }}>{ cr6 }</span>
        <span className="cr6" style={{ width: "140px" }}>{ cr6 }</span>
        <span className="cr6" style={{ width: "140px" }}>{ cr6 }</span>
    </div>
    <SubTitle>Refactoring further</SubTitle>
    <p>Okay. We are almost done but noe quite. One problem that we have is this part:</p>
    <Prism>{`       ...
        ...
        this.state = {
            orderCount: 0,
            price: 10,
            total: 0
        };
        ...
        ...`}</Prism>

    <p>Here we hard-coded the values which shuold not be so our <strong>OrderManager</strong> users can set the price if they wanted.</p>
    <p>Thus our OrderManager should have implemented this way</p>
    <Prism language="html">{`<OrderManager price={10}, total={0}, orderCount={0}>
    <OrderTitle>Price: </OrderTitle>
    <DecreaseButton> - </DecreaseButton>
    <OrderCount></OrderCount>
    <IncreaseButton> + </IncreaseButton>
    <TotalPrice>Total: </TotalPrice>
</OrderManager>;`}</Prism>
    <p>And our state:</p>
    <Prism>{`        ...
        ...
        this.state = {
            orderCount: this.props.orderCount,
            price: this.props.price,
            total: this.props.total
        };
        ...
        ...`}</Prism>
     <p>I am sure you can do it on you own.</p>
</Fragment>

const div_id_root = document.getElementById( "root" );
render( root, div_id_root );
