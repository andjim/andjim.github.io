let yo = require("yo-yo");
let main = document.getElementById('main');
let header = yo`
<div class="header ">
		<div class="container">
			<div class="row">
				<div class="textbox col s8 push-s4">
					<div class="HText f col s12">
						<p>I'm</p>
					</div>
					<div class="HText s col s12">
						<h2 class="" >Anderson Jimenez</h2>
					</div>
					<div class="HText t col s12">
						<p>Student of System ingeniering and web devoloper.</p>
					</div>
				</div>
				<div class="col s4 pull-s8">
					<img class='circle responsive-img'src="./assets/yo2.png"/>
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
				<div class="col s12"><p>Skills and knowledge areas</p></div>
				<div class="col s6">
					<div class="col s12">
						<figure>
							<img src=""/>FOTO
						</figure>
							<p>I'm</p>
						</div>
					<div class="col s12">
						<figure>
							<img src=""/>FOTO2
						</figure>
						<p>Anderson Jimenez Santana,</p>
					</div>
					<div class="col s12">
						<figure>
							<img src=""/>FOTO3
						</figure>
						<p>Student of System ingeniering and web devoloper.</p>
					</div>
				</div>
				<div class="col s6">
					<div class="col s12">
						<figure>
							<img src=""/>FOTO
						</figure>
							<p>I'm</p>
						</div>
					<div class="col s12">
						<figure>
							<img src=""/>FOTO2
						</figure>
						<p>Anderson Jimenez Santana,</p>
					</div>
					<div class="col s12">
						<figure>
							<img src=""/>FOTO3
						</figure>
						<p>Student of System ingeniering and web devoloper.</p>
					</div>
				</div>
			</div>
		</div>
</div>
`;
main.appendChild(section);