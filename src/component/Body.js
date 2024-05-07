import Foster from "./body/Foster";
import Bestbook_Container from "./body/Bestbook_Container";
import FAQs from "./body/FAQ_Container";
import Newbook_Container from "./body/Newbook_Container";

function Body() {
    return (
        <>
            <Foster />
            <Bestbook_Container />
            <Newbook_Container />
            <FAQs />
        </>
    );
}

export default Body;
