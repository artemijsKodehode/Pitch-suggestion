import './App.css'
import './styles.css'

function App() {
  return(

    <div>
      <header>
        <h1>Pitch suggestion</h1>
      </header>

      <main>
        <ProjectCard 
        title = "About"
        description = "About myself"
        />
      </main>

      <footer>
      <p>© 2023 Artemijs</p>
      </footer>
    </div>

  )
}

function ProjectCard(props) {
  return (
    <div className='Project card'>
      <h2>{props.title}</h2>
      <p>At the moment, I’m studying information technology and looking forward to a bright future. I love programming because it makes me feel like a magician. My interest started with games and gadgets and social media and since then I’ve spent a lot of time gaming and chatting. In my spare time, I enjoy spending time with my family. They say my best features are that I’m kind and outgoing.</p>
    </div>
  )
}
export default App
