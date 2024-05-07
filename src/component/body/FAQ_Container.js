import FAQ_Component from "./FAQ_Component.js";

function FAQ_Container() {
    return (
        <div>
            <FAQ_Component faq_no={1}></FAQ_Component>
            <FAQ_Component faq_no={2}></FAQ_Component>
        </div>
    );
}

export default FAQ_Container;
