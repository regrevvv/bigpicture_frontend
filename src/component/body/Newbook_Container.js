import Newbook_Component from "./Newbook_Component";

function Newbook_Container() {
    return (
        <div>
            <h3>이달의 P-Book 신작</h3>
            <div>
                {[...Array(9)].map((value, index) => {
                    return (
                        <Newbook_Component no={index + 1}></Newbook_Component>
                    );
                })}
            </div>
        </div>
    );
}

export default Newbook_Container;
