const FAQ_default_uri = "./public_assets/FAQ_default.svg";

function FAQ_Component(props) {
    return (
        <div>
            <img src={FAQ_default_uri} alt="FAQ 이미지"></img>
            <br></br>
            <strong>{props.faq_no.toString()}번째 FAQ.</strong>
            <br></br>
            FAQ 내용
        </div>
    );
}

export default FAQ_Component;
