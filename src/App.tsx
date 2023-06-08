import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"

import "../src/global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Renatonapoli.png",
      name: "Renato Napoli",
      role: "Frontend Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz usando React + Vite. Fiquem a vontade para dar feedbacks. Bora pra cima!" 🚀 Há não estou salvando em banco essas informações, então deixem o feedback lá nos comentários rs...`,
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-26 17:02:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz usando React + Vite. Fiquem a vontade para dar feedbacks. Bora pra cima!" 🚀 Há não estou salvando em banco essas informações, então deixem o feedback lá nos comentários rs...`,
      },
      { type: "Link", content: "👉 <a>jane.design/doctorcare</a>" },
    ],
    publishedAt: new Date("2023-05-26 17:02:00"),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
