//import styles from "./styles/BestBook.module.css"
import Bestbook_Component from "./Bestbook_Component";

function Bestbook_Container() {
    return (
        <div>
            <h3>P-Book 베스트</h3>
            {[...Array(10)].map((value, index) => {
                return <Bestbook_Component no={index + 1}></Bestbook_Component>;
            })}
        </div>
    );
}

export default Bestbook_Container;
