import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'http://github.com/gemario.png',
      name: 'Jorge Mario',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },  
    ],
    publishedAt: new Date('2022-09-29 00:32:26'),
  },
  {
    id: 2,
    author: {
      avatarURL: 'http://github.com/jcolscript.png',
      name: 'José Lima',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },  
    ],
    publishedAt: new Date('2022-10-07 00:32:26'),
  },
];

export function App() {

  return (
    <div>

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
    </div>

  )  
}


