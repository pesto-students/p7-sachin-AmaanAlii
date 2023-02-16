import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="page">
      <div class="topnav">
        <h1 class="navhead">Shortly</h1>
        <div class="midnav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#Resources">Resources</a>
        </div>
        <div class="rightnav">
          <a href="#login">Login</a>
          <a href="#SignUp">Sign Up</a>
        </div>
      </div>
      <div class="mainpage">
        <div class="container">
          <div class="midtext">
            <h1>More than just Shorter Links!</h1>
            <h4>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </h4>
          </div>
          <div class="imagecontainer">
            <img src="mainimage.jpg" alt="Image"></img>
          </div>
        </div>
        <div class="linkio">
          <div class="linkbutton">
            <input
              type="text"
              name="linkinput"
              placeholder="Shorten a link here..."
            ></input>
            <button>Shorten it!</button>
          </div>
          <div class="linkdisplay">
            <input
              type="text"
              name="linkinput"
              placeholder="Shortened Link will be displayed here..."
            ></input>
            <button>Copy Link</button>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="left">
          <h1>Shortly</h1>
        </div>
        <div class="mid">
          <div class="features">
            <h3>Features</h3>
            <a href="#linkshortnening">Link Shortnening</a>
            <a href="#brandedlinks">Branded Links</a>
            <a href="#analytics">Analytics</a>
          </div>
          <div class="resources">
            <h3>Resources</h3>
            <a href="#blog">Blog</a>
            <a href="#developers">Developers</a>
            <a href="#support">Support</a>
          </div>
          <div class="company">
            <h3>Company</h3>
            <a href="#about">About</a>
            <a href="#ourteam">Our Team</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div class="right">
          <a href="#login">Login</a>
          <a href="#SignUp">Sign Up</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
