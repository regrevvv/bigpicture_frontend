import Header from "./Header.js"
import BestBook from "./BestBook.js"
import NewBook from "./NewBook.js"
import styles from "./styles/App.module.css"

function App() {
  return (
    <div id='wrapper' className={styles.wrapper}>
        <Header></Header>
        <div className={styles.poster}>
          poster will be added here.
        </div>
        <BestBook></BestBook>
        <NewBook></NewBook>
    </div>
  );
}

export default App;
