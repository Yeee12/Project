import './intro.css';
const Intro = () => {
    return (  
        <div className="tro">
          <img src="/assets/tractor.png" alt="tractor" />
          <h1 className="overlay">The Role Of Technology<br></br>
          In Revolutionizing <br></br>Agriculture</h1>
          <p>Li Europan lingues es membres del sam familie. Lor separat existentie es<br></br> un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
          <div className="button-container">
            <a className="intro-button" href="/Learn More">Learn More</a>
            <a className="intro-button" href="/Get Started">Get Started</a>
          </div>
        </div>
    );
}
 
export default Intro;