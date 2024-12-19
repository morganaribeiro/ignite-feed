import { Header } from "./components/Header";
import { Post } from './components/Post';
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/morganaribeiro.png",
      name: "Morgana Ribeiro",
      role: "Desenvolvedora Front-end @Claro.Brasil"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date("2024-12-11 15:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/marcosantoniofilho16.png",
      name: "Marcos Antônio",
      role: "Desenvolvedor Backend @Santander"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date("2024-12-12 15:00:00")
  }
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

