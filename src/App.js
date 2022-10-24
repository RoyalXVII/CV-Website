import {Link} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="top-area">
			  <div className="header-area">
			    <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">

			        <div className="container">
			            <div className="navbar-header">
			                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                    <i className="fa fa-bars"></i>
			                </button>
			                <Link className="navbar-brand" to="#">J DVF</Link>
			            </div>

			            
			            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                <li className=" smooth-menu active"></li>
			                    <li className=" smooth-menu"><a href="#education">education</a></li>
			                    <li className="smooth-menu"><a href="#experience">experience</a></li>
			                    <li className="smooth-menu"><a href="#profiles">profile</a></li>
			                    <li className="smooth-menu"><a href="#contact">contact</a></li>
			                </ul>
			            </div>
			        </div>
			    </nav>
			  </div>

		    <div className="clearfix"></div>

		  </header>
      
		<section id="welcome-hero" className="welcome-hero">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2>hi <span>,</span> i am <br /> Jose <br /> Verbakel <span>.</span>   </h2>
							<p>Junior web developer</p>
							<a href="https://firebasestorage.googleapis.com/v0/b/cv-website-dae67.appspot.com/o/Coming-soon-e1433462133377.jpg?alt=media&token=7850c458-b5fe-4f63-829c-1210ab2d6b64">open resume</a>
						</div>
					</div>
				</div>
			</div>

		</section>
		

		
		<section id="about" className="about">
			<div className="section-heading text-center">
				<h2>about me</h2>
			</div>
			<div className="container">
				<div className="about-content">
					<div className="row">
						<div className="col-sm-6">
							<div className="single-about-txt">
								<h3>
									I am a Junior Programmer
								</h3>

							<p>
								I am an ambitious person who recently graduated and have been programming for 3 years. My education was an intensive course which was 2 years. I've spent time learning HTML & CSS in my spare time before I decided to take it a step further and actually focus on programming Java and its frameworks. 
							</p>

							<p>
 								I enjoy working on front-end development mostly because I can use my creativity therefore I’m going to be studying UI/UX design, august 2022. 
							</p>

							<p>
 								In life I never knew that I would become a programmer but I ended up studying web-development since it was something I genuinely enjoyed.
								
 								I have done some projects so far but most of them are just Wordpress related, I also have worked on smaller assignments such as E-commerce websites and contact forms, so I know how to set those up.
							</p>
								<div className="row">
									<div className="col-sm-6">
										<div className="single-about-add-info">
											<h3>phone</h3>
											<p>not availble yet</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>email</h3>
											<p>not availble yet</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-offset-1 col-sm-5">
							<div className="single-about-img">
								<img src="assets/images/about/profile_image.png" alt="profile_image" />
								<div className="about-list-icon">
									<ul>
										<li>
											<Link to="https://github.com/RoyalXVII?tab=repositories">
												<i  className="fa-brands fa-github" aria-hidden="true"></i>
											</Link>
										</li>
										
										
										<li>
											<Link to="https://www.linkedin.com/in/jos%C3%A9-verbakel-281699180/">
												<i  className="fa fa-linkedin" aria-hidden="true"></i>
											</Link>
										</li>

										
									</ul>
								</div>

							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
		
		
		
		<section id="education" className="education">
			<div className="section-heading text-center">
				<h2>education</h2>
			</div>
			<div className="container">
				<div className="education-horizontal-timeline">
					<div className="row">
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2015 - 2018</h2>
									<h3>Marketing <span>&</span> Finance</h3>
								</div>
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
											Thoren Business School
										</h4>
										<h5>Västerås, Sweden</h5>
										<p className="description">
											Thoren Business School, Is where I studied economics with a specialization in Finance and Marketing in a gymnasium level.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2020 - 2022</h2>
									<h3>Front-End Web developer</h3>
								</div>
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
											EC-Utbildning
										</h4>
										<h5>Västerås, Sweden</h5>
										<p className="description">
											EC-Utbildning is a Higher Vocational Education (HVE) which is a post-secondary form of education that combines theoretical and practical studies in close cooperation with employers and industry.

											This is where I got to learn all my programming.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2022 - 2024</h2>
									<h3>UI/UX design</h3>
								</div>
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal spacial-horizontal-line
									"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
											N/A
										</h4>
										<h5>Stockholm, Sweden</h5>
										<p className="description">
											Ill be enrolling this course augst 2022!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		
    <section id="experience" className="experience">
			<div className="section-heading text-center">
				<h2>experience</h2>
			</div>
			<div className="container">
				<div className="experience-content">
						<div className="main-timeline">
							<ul>
								<li>
									<div className="single-timeline-box fix">
										<div className="row">
											<div className="col-md-5">
												<div className="experience-time text-right">
													<h2>2021 - 2022</h2>
													<h3>Internship</h3>
												</div>
											</div>
											<div className="col-md-offset-1 col-md-5">
												<div className="timeline">
													<div className="timeline-content">
														<h4 className="title">
															<span><i className="fa fa-circle" aria-hidden="true"></i></span>
															HandiHow
														</h4>
														<h5>Rotterdam, Netherlands</h5>
														<p className="description">
															This is one of my Internships where I got to put my programming skills to the test, I got to work with UI/UX design since I noticed stuff could use a repolish. I was also a fresh mind and had great ideas.

															I also got to learn WordPress in an advanced level, got to focus on working with ILP (International Ladies Padel) where I got to create a Wordpress website from scratch. 

															Learned how to connect websites to firebase and how to create a website domain.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li>
									<div className="single-timeline-box fix">
										<div className="row">
											<div className="col-md-offset-1 col-md-5 experience-time-responsive">
												<div className="experience-time">
													<h2>
														<span><i className="fa fa-circle" aria-hidden="true"></i></span>
														2021 - 2021
													</h2>
													<h3>JAVA (+ frameworks)</h3>
												</div>
											</div>
											<div className="col-md-5">
												<div className="timeline">
													<div className="timeline-content text-right">
													<h4 className="title">
															EC-UTBILDNING
														</h4>
														<h5>Västerås, Sweden</h5>
														<p className="description">
															We got to work with Java Registration forms, Ecommerce websites, React Ecommerce websites, Angular CV websites and Java responsive websites. 
														</p>
													</div>
												</div>
											</div>
											<div className="col-md-offset-1 col-md-5 experience-time-main">
												<div className="experience-time">
													<h2>
														<span><i className="fa fa-circle" aria-hidden="true"></i></span>
														2021 - 2021
													</h2>
													<h3>Javascript & Frameworks</h3>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li>
									<div className="single-timeline-box fix">
										<div className="row">
											<div className="col-md-5">
												<div className="experience-time text-right">
													<h2>2020 - 2020</h2>
													<h3>HTML & CSS</h3>
												</div>
											</div>
											<div className="col-md-offset-1 col-md-5">
												<div className="timeline">
													<div className="timeline-content">
														<h4 className="title">
															<span><i className="fa fa-circle" aria-hidden="true"></i></span>
															EC-Utbildning
														</h4>
														<h5>Västerås, Sweden</h5>
														<p className="description">
															We worked on assignments/projects that required HTML and CSS works such as contact forms, registration forms and static websites where we needed to recreate an Adobe XD page and make it an up and running website. We also go to create some of these projects with CSS Libraries.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li>
									<div className="single-timeline-box fix">
										<div className="row">
											<div className="col-md-offset-1 col-md-5 experience-time-responsive">
												<div className="experience-time">
													<h2>
														<span><i className="fa fa-circle" aria-hidden="true"></i></span>
														2019 - 2019
													</h2>
													<h3>C# Course</h3>
												</div>
											</div>
											<div className="col-md-5">
												<div className="timeline">
													<div className="timeline-content text-right">
														<h4 className="title">
															NTI Skolan
														</h4>
														<h5>Stockholm, Sweden</h5>
														<p className="description">
															I decided to study in Sweden but in order to study I had to take this manditory course of C# since I needed to have knowledge of computer programming language, the C# course was about 2 months nothing too serious but I learned how to create small C# projects.
															 
														</p>
													</div>
												</div>
											</div>
											<div className="col-md-offset-1 col-md-5 experience-time-main">
												<div className="experience-time">
													<h2>
														<span><i className="fa fa-circle" aria-hidden="true"></i></span>
														2019 - 2019
													</h2>
													<h3>C#</h3>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li>
									<div className="single-timeline-box fix">
										<div className="row">
											<div className="col-md-5">
												<div className="experience-time text-right">
													<h2>2018 - 2019</h2>
													<h3>HTML & CSS</h3>
												</div>
											</div>
											<div className="col-md-offset-1 col-md-5">
												<div className="timeline">
													<div className="timeline-content">
														<h4 className="title">
															<span><i className="fa fa-circle" aria-hidden="true"></i></span>
															Self Taught
														</h4>
														<h5>Rotterdam, Netherlands</h5>
														<p className="description">
															My father is a senior programmer and one day he told me, to try out programming, I checked out some udemy courses and I was intrested in programming since it was easy for me to understand. I then started studying the udemy course in my spare time after work.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>

							</ul>
						</div>
					</div>
			</div>

		</section>
		

		
		<section id="profiles" className="profiles">
			<div className="profiles-details">
				<div className="section-heading text-center">
					<h2>Programming Languages/ Tools</h2>
					<h4>I know how to work with</h4>
				</div>
				<div className="container">
					<div className="profiles-content">
						<div className="row">
							<div className="col-sm-3">
								<div className="single-profile">
									<div className="profile-txt">
										<Link to="#"><i className="fa-brands fa-html5"></i></Link>
										<div className="profile-icon-name">HTML5</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="#"><i className="fa-brands fa-html5"></i></Link>
											<div className="profile-icon-name">HTML5</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="single-profile">
									<div className="profile-txt">
										<Link to="#"><i className="fa-brands fa-css3-alt"></i></Link>
										<div className="profile-icon-name">CSS3</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="#"><i className="fa-brands fa-css3-alt"></i></Link>
											<div className="profile-icon-name">CSS3</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="single-profile">
									<div className="profile-txt">
										<Link to="https://www.javascript.com/"><i className="fa-brands fa-js"></i></Link>
										<div className="profile-icon-name">Javascript</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="https://www.javascript.com/"><i className="fa-brands fa-js"></i></Link>
											<div className="profile-icon-name">Javascript</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="single-profile profile-no-border">
									<div className="profile-txt">
										<Link to="https://angular.io/"><i className="fa-brands fa-angular"></i></Link>
										<div className="profile-icon-name">Angular</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="https://angular.io/"><i className="fa-brands fa-angular"></i></Link>
											<div className="profile-icon-name">Angular</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="profile-border"></div>
						<div className="row">
							<div className="col-sm-3">
								<div className="single-profile">
									<div className="profile-txt">
										<Link to="https://vuejs.org/"><i className="fa-brands fa-vuejs"></i></Link>
										<div className="profile-icon-name">Vue</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="https://vuejs.org/"><i className="fa-brands fa-vuejs"></i></Link>
											<div className="profile-icon-name">Vue</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="single-profile">
									<div className="profile-txt">
										<Link to="https://reactjs.org/"><i className="fa-brands fa-react"></i></Link>
										<div className="profile-icon-name">React</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="https://reactjs.org/"><i className="fa-brands fa-react"></i></Link>
											<div className="profile-icon-name">React</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="single-profile">
									<div className="profile-txt">
										<Link to="https://wordpress.com/"><i className="fa-brands fa-wordpress"></i></Link>
										<div className="profile-icon-name">WordPress</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="https://wordpress.com/"><i className="fa-brands fa-wordpress"></i></Link>
											<div className="profile-icon-name">WordPress</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="single-profile profile-no-border">
									<div className="profile-txt">
										<Link to="https://firebase.google.com/"><i className="fa-solid fa-fire"></i></Link>
										<div className="profile-icon-name">Firebase</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="https://firebase.google.com/"><i className="fa-solid fa-fire"></i></Link>
											<div className="profile-icon-name">Firebase</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		

		
		<section id="contact" className="contact">
			<div className="section-heading text-center">
				<h2>contact me</h2>
			</div>
			<div className="container">
				<div className="contact-content">
					<div className="row">
						<div className="d-flex justify-content-center">
							<div className="single-contact-box">
								<div className="contact-adress">
									<div className="contact-add-head">
										<h3>Jose Verbakel</h3>
										<p>Junior Programmer</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>phone</h3>
											<p>Not availble yet</p>
										</div>
										<div className="single-contact-add-info">
											<h3>email</h3>
											<p>not availble yet</p>
										</div>
										<ul>
										<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
									</ul>
									</div>
								</div>
								<div className="hm-foot-icon">
								
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>

    <footer id="footer-copyright" className="footer-copyright">
			<div className="container">
				<div className="hm-footer-copyright text-center">
					<p>
						&copy; copyright <i>Jose Verbakel</i>. designed and developed by <i>Jose Verbakel</i>
					</p>
				</div>
			</div>

			<div id="scroll-Top">
				<div className="return-to-top">
					<i className="fa fa-angle-up " id="scroll-top" ></i>
				</div>
				
			</div>
			
        </footer>
		
    </div> 
  );
}

export default App;

