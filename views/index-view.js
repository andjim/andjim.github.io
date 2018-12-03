let yo = require("yo-yo");
let main = document.getElementById('main');
let header = yo`
<div class="header ">
		<div class="cont">
			<div class="row">
				<div class="hide-on-med-and-down side1 col s1">
                    <ul>
					    <li><p><a href="#skills">Skills</a></p></li>
					    <li><p><a href="#contact" >Contact</a></p></li>
                    </ul>
				</div>
				<div class="side2 col s11">
					<div class=" photo col s12">
						<img class='circle responsive-img'src="./assets/yo2.png"/>
					</div>
					<div class="textbox col s12">
						<div class="HText s col s12">
							<h1 class="" >Anderson Jimenez</h1>
						</div>
						<div class="HText t col s12">
							<h4>Software Engeniering student and Web Developer</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
</div>
`;
main.appendChild(header);

let section = yo`
<div class=" section">
	<div class="container">
			<div class=" row">
				<div id="skills" class="col s12"><h2 >Skills</h2></div>
				<div class="skillBox col s12">
					<div class=" skill col s12">
						<div class="col s4">
							<img class="responsive-img circle" src="./assets/icon/wd.png"/>
						</div>
						<div  class="col s6">
							<span>Web Design</span>
							<meter class="col s12" value="0.2">20%</meter>
						</div>
					</div>
					<div class="skill col s12">
						<div class="col s4">
							<img class="responsive-img circle" src="./assets/icon/js.png"/>
						</div>
						<div  class="col s6">
							<span>Javascript</span>
							<meter  class="col s12" value="0.4">40%</meter>
						</div>
					</div>
					<div class="skill col s12">
						<div class="col s4">
							<img class="responsive-img circle" src="./assets/icon/py.png"/>
						</div>
						<div  class="col s6">
							<span>Python</span>
							<meter class="col s12" value="0.3">30%</meter>
						</div>
					</div>
				</div>
			</div>
		</div>
</div>
`;
main.appendChild(section);

let contact = yo`
    <div class="contact">
        <div class="row">
            <div class="textAbout col s12 l7">
                <div class="col s12">
                    <h2 id="contact">About me</h2>
                </div>
                <div class="col s12">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce sollicitudin, nisi a pulvinar convallis, sapien orci tincidunt 
                        odio, vel bibendum dolor justo in elit. Aenean consequat nibh  lacus, 
                        vitae  mollis  urna  ornare  sed. Duis  porttitor feugiat felis,  a 
                        ultrices mauris porttitor a. Pellentesque congue tincidunt enim, in placerat 
                        mi volutpat non. Integer nec pellentesque metus. Nam venenatis, felis eu luctus auctor, 
                        velit libero tempus odio, eu blandit magna mi vitae enim. Maecenas sed dui nec leo commodo 
                        facilisis nec scelerisque arcu. Nam urna ipsum, dictum in neque et, interdum 
                        suscipit magna. Integer suscipit risus ut ornare feugiat.
                    </p>
                </div>
                <div class="col s12">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce sollicitudin, nisi a pulvinar convallis, sapien orci tincidunt 
                        odio, vel bibendum dolor justo in elit. Aenean consequat nibh  lacus, 
                        vitae  mollis  urna  ornare  sed. Duis  porttitor feugiat felis,  a 
                        ultrices mauris porttitor a. Pellentesque congue tincidunt enim, in placerat 
                        mi volutpat non. Integer nec pellentesque metus. Nam venenatis, felis eu luctus auctor, 
                        velit libero tempus odio, eu blandit magna mi vitae enim. Maecenas sed dui nec leo commodo 
                        facilisis nec scelerisque arcu. Nam urna ipsum, dictum in neque et, interdum 
                        suscipit magna. Integer suscipit risus ut ornare feugiat.
                    </p>
                </div>
            </div>
            <div class="contactInfo col s12 l5">
                <div class="col s12">
                    <h2>Contact</h2>
                </div>
                <div class="contactPic col s12">
                    <img class='circle responsive-img'src="./assets/yo2.png"/>
                </div>
                <div class="fb col s12">
                    <div><i class="fab fa-facebook"></i><span><a href="https://www.facebook.com/anderson.jimenez.129794">Anderson Jimenez</a></span></div>
                </div>
                <div class="email col s12">
                    <div><i class="fas fa-address-book"></i><span><a>Andjim2598@gmail.com</a></span></div>
                </div>
            </div>
        </div>
    </div>
`;
main.appendChild(contact);