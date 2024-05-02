import styles from "./styles/NewBook.module.css"

function NewBook() {
    return (
        <div className={styles.wrapper}>
            <h3>이달의 P-Book 신작</h3>
            <div className={styles.grid}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </div>
        </div>
    )
}

export default NewBook;