<section class="question-one-container">
	
	<div class="two-col tile description description-one">
		<div class="description-inner">
			<div class="contents q1">
				<h4>The Patheon Solubility Solution Finder</h4>
				<h3>Trial and error is not a solubility strategy</h3>
				<p>Solving solubility concerns takes a combination of scientific rigor and expertise. That begins with the Patheon Solubility Solution Finder. Simply answer a few questions such as indication, dose and delivery to reveal the technologies that are most likely to help get your molecule to approval.</p>
				<p><b>Click a question to answer it.</b></p>
			</div>
		</div>
	</div>

	<div class="one-col tile question-one flip-parent">
		<div class="flip">
			<div class="front teal">
				<p>Q1:</p>
				<p><b>What therapeutic indication are you targeting?</b></p>
			</div>
			<div class="back teal">
				<div class="bar">
					<p class="title">Therapeutic Area</p>
				</div>
				<ul class="theraputic">
					<li>Cardiovascular/Metabolic</li>
					<li>CNS</li>
					<li>Immunology</li>
					<li>Infectious Diseases</li>
					<li>Inflammation</li>
					<li>Oncology</li>
					<li>Lifestyle</li>
					<li>Other <input id="therapeutic-area-other" class="form-input" type="text" value="other"></li>
				</ul>
			</div>
		</div>
	</div>

	<div class="one-col tile question-one flip-parent">
		<div class="flip">
			<div class="front orange">
				<p>Q2:</p>
				<p><b>What type of molecule are you working with?</b></p>
			</div>
			<div class="back orange">
				<div class="bar">
					<p class="title">Molecule Type</p>
				</div>
				<ul>
					<li>Small</li>
					<li class="show-disclaimer">Large</li>
				</ul>
				<p class="disclaimer two">Our solubility solutions are for small molecules only. To learn more about Patheon Biologics <a href="http://www.patheon.com/en-us/Solutions-and-Services/Biologics" target="_blank"><span>Click here</span> ></a></p>
			</div>
		</div>
	</div>

	<div class="one-col tile question-one flip-parent">
		<div class="flip">
			<div class="front green">
				<p>Q3:</p>
				<p><b>What is your preferred delivery route?</b></p>
			</div>
			<div class="back green">
				<div class="bar">
					<p class="title">Preferred Delivery Route</p>
				</div>
				<ul class="delivery-route">
					<li class="show-disclaimer parenteral">Parenteral</li>
					<li>Oral Solid Dose</li>
					<li class="show-disclaimer liquid">Oral Liquid Dose</li>
					<li class="show-disclaimer topical">Topical</li>
					<!-- <li>Other <input id="parenteral-other" class="form-input" type="text"></li> -->
				</ul>

				<p class="disclaimer three parenteral">Our solubility solutions don’t apply to parenteral dosage forms. To learn more about our sterile capabilities <a href="http://www.patheon.com/en-us/Solutions-and-Services/Small-Molecules/Product-Development?Section=Dosage" target="_blank"><span>Click here</span> ></a></p>

				<p class="disclaimer three liquid">Patheon no longer provides oral liquid dose solutions. <a href="http://www.patheon.com/en-us/Solutions-and-Services/Small-Molecules/Product-Development?Section=Dosage" target="_blank"><span>Click here to see our dose form solutions</span> ></a></p>
	 
				<p class="disclaimer three topical">Patheon no longer provides topical solutions. <a href="http://www.patheon.com/en-us/Solutions-and-Services/Small-Molecules/Product-Development?Section=Dosage" target="_blank"><span>Click here to see our dose form solutions</span> ></a></p>
			</div>
		</div>
	</div>

	<div class="one-col tile question-one flip-parent">
		<div class="flip">
			<div class="front yellow">
				<p>Q4:</p>
				<p><b>What dose?</b></p>
			</div>
			<div class="back yellow">
				<div class="bar">
					<p class="title">Unit Dose</p>
				</div>
				<ul id="unit-dose">
					<li data-dose-num="0">&le; 50mg</li>
					<li data-dose-num="1">50mg - 200mg</li>
					<li data-dose-num="2">&gt; 200mg</li>
				</ul>
			</div>
		</div>
	</div>

	<div id="js-get-unit-dose" class="button">Get Results</div>

	<p class="error">Sorry, we cannot make a determination with missing information. <span>Please answer all questions and then click "Get Results".</span></p>

</section>