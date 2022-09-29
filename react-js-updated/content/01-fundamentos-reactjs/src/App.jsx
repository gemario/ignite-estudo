import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
       
        <Sidebar />

        <main>
          <Post 
            author="Jorge Mario" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores accusamus placeat necessitatibus ex alias maxime ullam eius. Animi, nam perferendis esse possimus eaque praesentium eos accusamus, voluptatum repudiandae provident placeat!"
          />
          <Post 
            author="Paulo Plinio"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus excepturi sit veniam, dolore minus? Quibusdam numquam quasi commodi iure magnam, dolorum soluta sit quam ad voluptatum illum perspiciatis asperiores?"
          />
        </main>
      </div>
    </div>

  )  
}


