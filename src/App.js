import React from 'react';
import logo from './logo.svg';
import pdeception from './pdeception.png';
import selfportrait from './selfportrait.png';
import './App.css';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    let pageUrl = window.location.href;
    this.state = pageUrl.includes("/#")
		? {
	    	isNewsPage:pageUrl.includes("/#news"),
	    	isProjectsPage:pageUrl.includes("/#projects"),
	    	isAboutPage:pageUrl.includes("/#about"),
	    	isContactPage:pageUrl.includes("/#contact")
	    }
    	: {
	    	isNewsPage:true,
	    	isProjectsPage:false,
	    	isAboutPage:false,
	    	isContactPage:false
	    };
  }
  
  render(){
    return (
		<div id="NavBar">
	        <ul>
    		  <li class="webheader">Matthew Rosegreen</li>
	          <li onClick={
	          	() => {this.setState({
			    	isNewsPage:true,
			    	isProjectsPage:false,
			    	isAboutPage:false,
			    	isContactPage:false
			    });}
	          } class={this.state.isNewsPage ? "active" : ""}><a href="#news"><i class="fa fa-calendar"></i>News</a></li>
	          <li onClick={
	          	() => {this.setState({
			    	isNewsPage:false,
			    	isProjectsPage:true,
			    	isAboutPage:false,
			    	isContactPage:false
			    });}
      		  } class={this.state.isProjectsPage ? "active" : ""}><a href="#projects"><i class="fa fa-gamepad"></i>Projects</a></li>
	          <li onClick={
	          	() => {this.setState({
			    	isNewsPage:false,
			    	isProjectsPage:false,
			    	isAboutPage:true,
			    	isContactPage:false
			    });}
	          } class={this.state.isAboutPage ? "active" : ""}><a href="#about"><i class="fa fa-user"></i>About Me</a></li>
	          <li onClick={
	          	() => {this.setState({
			    	isNewsPage:false,
			    	isProjectsPage:false,
			    	isAboutPage:false,
			    	isContactPage:true
			    });}
	      	  } class={this.state.isContactPage ? "active" : ""}><a href="#contact"><i class="fa fa-envelope"></i>Contact</a></li>
	        </ul>
	    	<div>
				{this.state.isNewsPage && <News />}
				{this.state.isProjectsPage && <Projects />}
				{this.state.isAboutPage && <About />}
				{this.state.isContactPage && <Contact />}
		    </div>
    	</div>
    );
  }
}




class App extends React.Component {
	render(){
		return <div>
	    	<NavBar />
		</div>;
	}
}

//<About />

function About() {
  return (
  	<div id="About">
  		<h1 class="page-header">About Me</h1>
	  	<div class="about-info">
  	  		<div>
  	  			<img class="portrait" src={selfportrait} />
  	  			<h1>Hello there! I'm Matthew and I write code for fun...</h1>
  			</div>
  	  		<table class="achievements">
  	  			<tbody>
	  	  			<tr>
	  	  				<td>
	  	  					<i class="fa fa-graduation-cap"></i>
	  	  				</td>
	  	  				<td>
	  	  					<i class="fa fa-check-circle"></i>
	  	  				</td>
	  	  				<td>
	  	  					<i class="fa fa-trophy"></i>
	  	  				</td>
	  				</tr>
	  	  			<tr>
	  	  				<td>
	  	  					<p>Studied at Nottingham Trent University</p>
	  	  					<p>BSc (Hons) Computer Science (Games Technology)</p>
	  	  				</td>
	  	  				<td>
	  	  					<p>ISTQB Qualified</p>
	  	  					<p>ISTQB Foundation Level & Agile Tester Extension</p>
	  	  				</td>
	  	  				<td>
	  	  					<p>Regular at game jams</p>
	  	  					<p>Current: NotMoeJam #9</p>
	  	  				</td>
  					</tr>
				</tbody>
  	  		</table>
  	  		<h2>I have experience with:</h2>
  			<table class="experience">
  	  			<tbody>
	  	  			<tr>
	  	  				<td><i class="fa fa-check-square"></i>C#</td>
	  	  				<td><i class="fa fa-check-square"></i>C++</td>
	  	  				<td><i class="fa fa-check-square"></i>Javascript</td>
	  	  				<td><i class="fa fa-check-square"></i>Python</td>
	  				</tr>
	  				<tr>
	  	  				<td><i class="fa fa-check-square"></i>Objective-C</td>
	  	  				<td><i class="fa fa-check-square"></i>Arduino</td>
	  	  				<td><i class="fa fa-check-square"></i>Unity</td>
	  	  				<td><i class="fa fa-check-square"></i>Unreal Engine</td>
	  				</tr>
	  				<tr>
	  	  				<td><i class="fa fa-check-square"></i>Visual Studio</td>
	  	  				<td><i class="fa fa-check-square"></i>Xcode</td>
	  	  				<td><i class="fa fa-check-square"></i>Xamarin Tools (Automation)</td>
	  	  				<td><i class="fa fa-check-square"></i>Autodesk 3ds Max</td>
	  				</tr>
	  				<tr>
	  	  				<td><i class="fa fa-check-square"></i>GameMaker</td>
	  	  				<td><i class="fa fa-check-square"></i>Twine</td>
	  	  				<td></td>
	  	  				<td></td>
	  				</tr>
				</tbody>
  	  		</table>
	  	</div>
	</div>
  );
}

//<Contact />

function Contact() {
  return (
  	<div id="Contact">
  		<h1 class="page-header">Contact Me</h1>
	  	<div class="contact_info">
	  		<h2>I'd love to hear about any opportunities to work with fellow programmers, or feedback on some of my work.</h2>
	  		<h3><i class="fa fa-envelope"></i>matthew.rosegreen@outlook.com</h3>
	  		<h3><i class="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/mrosegreen/">linkedin.com/in/mrosegreen</a></h3>
	  		<h3><i class="fa fa-github"></i><a href="https://github.com/MatthewRosegreen">github.com/MatthewRosegreen</a></h3>
	  	</div>
	</div>
  );
}

//<News />

function News() {
  return (
  	<div id="News">
  		<h1 class="page-header">News</h1>
	  	<div class="news_story">
	  		<h1>New Game Jam: NotMoeJam #9</h1>
	  		<div class="news_image"><i class="fa fa-space-shuttle"></i></div>
	  		<p>I'm taking part in a new game jam - <a href="https://itch.io/jam/not-moe-jam-9-">NotMoeJam #9</a>!</p>
	  		<p>Submissions are due on Friday 31st January so it's not too late to join! The theme is <i>Outerspace (and Narrative Exploration)</i> this time around, so we should see some interesting sci-fi submissions.</p>
	  		<p>See you there!</p>
	  		<p> - Matthew</p>
	  	</div>
	  	<div class="news_story">
	  		<h1>Moving to <i>React.js</i>!</h1>
	  		<img class="news_image" src={logo} />
	  		<p>I decided recently that the website could use a brand new lick of paint, so I've started moving my content over to a new website running <a href="https://reactjs.org/">React.js</a>. I think the responsive nature of the React modules could resolve a few aesthetic issues I have had with the current site.</p>
	  		<p>It may take a few days to get it running properly, so please bear with me during this period of time.</p>
	  		<p> - Matthew</p>
	  	</div>
	</div>
  );
}

//<Projects />

function Projects() {
  return (
  	<div id="Projects">
  	<h1 class="page-header">Projects</h1>
	  	<div class="project">
	  		<h1>Perception Deception</h1>
	  		<div><img src={pdeception} /> </div>
			<p><strong>Solo Developer</strong></p>
			<p><strong>Date created:</strong> 31st January 2018</p>
			<p><strong>Created with:</strong> Monogame</p>
			<p><strong>Description:</strong> The way out of the maze is clear. That is, if you can read the room.</p>
			<p>Use the arrow keys to move from the top left corner to the bottom right. You will only be allowed to move in one direction for each space you land on, so pay close attention to the colour guide on the menu. How many rooms can you clear before the time runs out?</p>
			<p><strong>Intent:</strong> To make updates on my submission for Grads In Games' "Search For A Star" competition.</p>
			<p><a href="https://mrt3chno96.itch.io/perception-deception">Project link</a></p>
			<p><a href="https://matthewrosegreen.github.io/portfolio/Perception%20Deception.zip">Download V2 (04/02/2018)</a></p>
	  	</div>  	
	  	<div class="project">
	  		<h1>Autonomous Movement from a Double Robot</h1>
	  		<div><iframe width="560" height="315" src="https://www.youtube.com/embed/nw4qPcphBzw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
			<p><strong>Collaborative Developer</strong></p>
			<p><strong>Date created:</strong> 15th January 2016</p>
			<p><strong>Created with:</strong> Xcode</p>
			<p><strong>Description:</strong> The Double Robot is a device that allows users to control its movements while accessing a video stream from the camera of an iPad attached at the top. Myself and a group of students from the Nottingham Trent Developers Society (DevSoc) attempted to use the camera to control the robot's movement, basing its decisions on a 'target' with a set colour value.</p>
			<p>The potential benefit of this would be that it could be used to follow leaders of touring groups, around the university or otherwise, and then provide the iPad as a visual aide for them to interact with.</p>
			<p><strong>Intent:</strong> To assess my progress with working in a collaboration on unfamiliar technologies during my degree course</p>
			<p><a href="https://www.youtube.com/channel/UCElCpSPU28MP_e3IhDerJ-A">More videos from DevSoc</a></p>
	  	</div>
	</div>
  );
}

export default App;
