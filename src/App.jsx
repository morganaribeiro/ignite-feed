import { Header } from "./components/Header";
import { Post } from './components/Post';
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Morgana Ribeiro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorum quis delectus id dolores fugiat! Quisquam cumque nam amet possimus autem et est, magni animi voluptatum aspernatur sed eum saepe!"
          />
          <Post 
            author="Marcos Antônio"
            content="Um novo post muito legal!"
          />
          <Post 
            author="Morgana Ribeiro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorum quis delectus id dolores fugiat! Quisquam cumque nam amet possimus autem et est, magni animi voluptatum aspernatur sed eum saepe!"
          />
          <Post 
            author="Marcos Antônio"
            content="Um novo post muito legal!"
          />
        </main>
      </div>
    </>
  )
}

