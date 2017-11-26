jQuery(function($){
	var App = {

		init: function() {
			this.setupElements();
			this.bindEvents();
		},

		setupElements: function() {
			this.$window = $(window);
			this.$questionTrigger = $('div').find('.tile.flip-parent:first');
			this.$resultInfoOpenTrigger = $('div').find('.results .single-result');
			this.$resultInfoCloseTrigger = $('div').find('.info .close');
			this.$questionOneOption = $('div').find('.question-one.flip-parent li');
			this.$questionTwoOption = $('div').find('.question-two.flip-parent li');
			this.$questionSetOne = $('body').find('.question-one-container');
			this.$questionOneButton = $('section.question-one-container .button');
			this.$questionTwoButton = $('section.question-two-container .button');
			this.$continue = $('#continue');
			this.$visibleDisclaimer = false;
			this.q1 = false;
			this.q2 = false;
			this.$infoIcon = $('.icon-info');
			this.$closeIcon = $('.icon-close');
			this.$formInput = $('.form-input')
			this.$form1 = $("form[name='WebsiteSolubilityEnhancement-Part1']");
			this.$formError = $(".form-error-container");			
			this.$questionError = $('#tool').find('p.error');
		},
		
		bindEvents: function() {
			// this.$window.on('load', App.questionTimeout);
			this.$questionTrigger.on('mouseover', App.questionFlip);
			this.$questionTrigger.on('mouseout', App.questionFlip);
			this.$resultInfoOpenTrigger.on('click', App.resultInfoOpen);
			this.$resultInfoCloseTrigger.on('click', App.resultInfoClose);
			this.$questionOneOption.on('click', App.questionOneSelect);
			this.$questionTwoOption.on('click', App.questionTwoSelect);
			this.$questionOneButton.on('click', App.questionOneResults);
			this.$questionTwoButton.on('click', App.questionTwoResults);
			//this.$continue.on('click', App.questionTwoLoad);
			this.$infoIcon.on('click', this.infoIconClickHandler);
			this.$closeIcon.on('click', this.closeIconClickHandler);
			this.$formInput.bind('change paste keyup', this.formInputHandler);
			this.$form1.on('submit', App.handleForm1Submit)
		},

		formInputHandler: function(){
			if($(this).val().length > 0){
				$(this).parents('.tile').next().addClass('hover');
				$(this).parents('.back').find('.disclaimer').fadeOut('fast');

				var sectionClass = $(this).parents('section').attr('class');
				App.questionComplete(sectionClass);
			}
		},

		questionTimeout: function() {
			setTimeout(function() {
				 $('div').find('.question-one:first').addClass('hover');
			}, 1500);
		},

		questionFlip: function() {
			$(this).toggleClass('hover');
		},

		questionOneSelect: function() {
			$(this).parents('ul').find('li').removeClass('active');
			$(this).addClass('active');

			// check for disclaimer
			if ($(this).hasClass('show-disclaimer')) {
				console.log('show disclaimer');

				App.q1 = false;
				$('.question-one-container').find('.button').removeClass('validated');

				if ($(this).hasClass('parenteral')) {
					$(this).parents('.back').find('.disclaimer').hide();
					$(this).parents('.back').find('.disclaimer.parenteral').fadeIn('fast');
				} else if($(this).hasClass('liquid')) {
					$(this).parents('.back').find('.disclaimer').hide();
					$(this).parents('.back').find('.disclaimer.liquid').fadeIn('fast');
				} else if($(this).hasClass('topical')) {
					$(this).parents('.back').find('.disclaimer').hide();
					$(this).parents('.back').find('.disclaimer.topical').fadeIn('fast');
				} else {
					$(this).parents('.back').find('.disclaimer').fadeIn('fast');
				}
			} else {
				console.log('fadeOut disclaimer');
				$(this).parents('.tile').next().addClass('hover');
				$(this).parents('.back').find('.disclaimer').fadeOut('fast');

				var sectionClass = $(this).parents('section').attr('class');
				App.questionComplete(sectionClass);
			}
		},

		questionTwoSelect: function() {
			$(this).parents('ul').find('li').removeClass('active');
			$(this).addClass('active');

			if ($(this).hasClass('show-disclaimer class-one')) {
				$(this).parents('.front').find('.disclaimer').hide();
				$(this).parents('.front').find('.disclaimer.class-one').fadeIn('fast');
			} else if ($(this).hasClass('show-disclaimer class-three')) {
				$(this).parents('.front').find('.disclaimer').hide();
				$(this).parents('.front').find('.disclaimer.class-three').fadeIn('fast');
			} else if ($(this).hasClass('show-disclaimer class-four')) {
				$(this).parents('.front').find('.disclaimer').hide();
				$(this).parents('.front').find('.disclaimer.class-four').fadeIn('fast');
			} else {
				$(this).parents('.front').find('.disclaimer').fadeOut('fast');

				var sectionClass = $(this).parents('section').attr('class');
				App.questionComplete(sectionClass);
			} 

			var sectionClass = $(this).parents('section').attr('class');
			App.questionComplete(sectionClass);
		},

		infoIconClickHandler: function(){
			$(this).parents('.tile').addClass('hover');
		},

		closeIconClickHandler: function(){
			$(this).parents('.tile').removeClass('hover');
		},

		questionComplete: function(sectionClass) {
			var questionsAnswered = $('.' + sectionClass).find('ul li.active');

			if (sectionClass === 'question-one-container') {
				if (questionsAnswered.length === 4){
					var disclaimers = $('.question-one-container').find('.disclaimer');
					$('.question-one-container').find('.disclaimer').each(function(index){
						if($(this).css('display') === 'block') {
							App.visibleDisclaimer = true;
							return false;
						} else {
							App.visibleDisclaimer = false;
						}
					});
					if (App.visibleDisclaimer === true) {
						if(questionsAnswered.hasClass('show-disclaimer')) {
							$('.' + sectionClass).find('.button').removeClass('validated');
							App.q1 = false;
						} else {
							// console.log('question set is complete');
							App.$questionError.hide();
							$('.' + sectionClass).find('.button').addClass('validated');
							App.q1 = true;
						}
					} else {
						// console.log('question set one is complete');
						App.$questionError.hide();
						$('.' + sectionClass).find('.button').addClass('validated');
						App.q1 = true;
					}
				} else {
					$('.' + sectionClass).find('.button').removeClass('validated');
					// console.log('question set one is not complete');
				}
			} else if (sectionClass === 'question-two-container') {
				if (questionsAnswered.length === 5){
					var questionsWithInput = questionsAnswered.find('input');
					if (questionsAnswered.hasClass('show-disclaimer')) {
						// console.log('has disclaimer');
						$('.' + sectionClass).find('.button').removeClass('validated');
						App.q2 = false;
					} else {
						// console.log('question set two is complete');
						$('.' + sectionClass).find('.button').addClass('validated');
						App.$questionError.hide();
						App.q2 = true;
					}
				} else {
					// console.log('question set two is not complete');
					$('.' + sectionClass).find('.button').removeClass('validated');
				}
			}
		},

		questionOneResults: function() {
			if (App.q1 === true) {
				$('.question-one-container').hide();
				$('.results-panel').addClass('stage-1').show();
				App.mapQuestion1ValuesToForm();

				// jump the user back to the top pf the tool
				$('html, body').animate({
					scrollTop: $("#tool").offset().top
				}, 500);
				App.$questionError.hide();
			} else {
				// console.log('question set is not complete');
				App.$questionError.show();
			}
		},

		mapQuestion1ValuesToForm: function() {
			// add data from first four questions to form as values to hidden fields
			// ids are wacky cause it's an eloqua form
			
			// 1 theraputic
			var valQ1_1 = $(".theraputic li.active").text(); 
			if(valQ1_1 == "Other ") {
				valQ1_1 = valQ1_1 + ": " + $("#therapeutic-area-other").val();
			}
			$("#field0").val(valQ1_1);

			var valQ1_3 = $(".delivery-route li.active").text();
			$("#field2").val(valQ1_3);

			var valQ1_4 = $("#unit-dose li.active").text();
			$("#field3").val(valQ1_4);
		},

		handleForm1Submit: function(e){
			var formValid = false;
			// validate basic fields here
			var validEmail = App.validateEmail($("#email").val());
			var validFName = $("#fName").val().length > 0;
			var validLName = $("#lName").val().length > 0;
			var validCompany = $("#company").val().length > 0;

			if(validEmail && validFName && validLName && validCompany) {
				formValid = true;
			}

			if(formValid) {
				$.ajax({
					url: $(this).attr("action"),
					type: 'post',
					data: $(this).serialize(), 
					dataType: 'jsonp',
					success: function(html) {
						// success state here
						// console.log("form 1 success");

						// INSERT SUCCESS BLOCK HERE

					}, 
					error: function() {
						// submit error state here
						// WILL ALWAYS GET ERROR UNTIL SUBMITTING FROM APPROVED DOMAIN
						// console.log("form 1 error");

						/* START ACTUAL SUCCESS BLOCK */
						// turn off form 1 submit event
						App.$form1.off("submit", App.handleForm1Submit);

						// remove unneeded form 1 fields
						$("#field0, #field1, #field2, #field3, #continue").remove();

						// update with new info for form 2
						App.$form1.attr("name", "WebsiteSolubilityEnhancement-Part2");
						App.$form2 = $("form[name='WebsiteSolubilityEnhancement-Part2']");
						$("#elqFormName").val("WebsiteSolubilityEnhancement-Part2");
						App.$form2.append('<input type="hidden" id="field0" name="as" />'); // Solubility
						App.$form2.append('<input type="hidden" id="field1" name="permeability" />'); // Permiability
						App.$form2.append('<input type="hidden" id="field2" name="logp" />'); // LogP
						App.$form2.append('<input type="hidden" id="field3" name="meltingpoint" />'); // Meltinbg Point
						App.$form2.append('<input type="hidden" id="field4" name="bcs" />'); // BCS

						
						$('.results-panel').hide();
						$('.question-two-container').show();

						// make sure all the info overlays are closed before we continue 
						App.resultInfoAllClose();

						// scroll user to top of tool 
						$('html, body').animate({
							scrollTop: $("#tool").offset().top
						}, 500);

						// change focus so IOS keyboard closes
						$("#continue").blur();

						/* END ACTUAL SUCCESS BLOCK */

						// if not submitting, might need to move form element to parent that is not hidden
					}

				});
				App.$formError.hide();
			} else {
				App.$formError.show();
			}

			e.preventDefault();

		},

		mapQuestion2ValuesToForm: function() {
			$("#field0").val($("#aqueous-solubility li.active").text());
			$("#field1").val($("#permeability li.active").text());
			$("#field2").val($("#logp li.active").text());
			$("#field3").val($("#melting-point li.active").text());
			$("#field4").val($("#bcs li.active").text());
		},

		questionTwoResults: function() {
			App.mapQuestion2ValuesToForm();
			
			var formValid = true; // change to false for validation
			// validate basic fields here
			if(formValid) {
				$.ajax({
					url: App.$form2.attr("action"),
					type: 'post',
					data: App.$form2.serialize(),
					success: function(html) {
						// success state here
						// console.log("form 2 success");

						// INSERT SUCCESS BLOCK HERE



					}, 
					error: function() {
						// submit error state here
						// console.log("form 2 error: WILL ALWAYS GET ERROR UNTIL SUBMITTING FROM APPROVED DOMAIN");
						// console.log("form 2 error");


						/* START ACTUAL SUCCESS BLOCK */
						if (App.q2 === true) {
							$('.question-two-container').hide();
							$('.results-panel').show();
							$('.results-panel .description').hide();
							$('.results-panel .form').hide();
							$('.results-panel .description-final').css('display','table');

							$('html, body').animate({
								scrollTop: $("#tool").offset().top
							}, 500);
						} else {
							// console.log('question set is not complete');
							App.$questionError.show();
						}
						
						/* END ACTUAL SUCCESS BLOCK */

						// if not submitting, might need to move form element to parent that is not hidden
					}
				});
			} else {
				// validation error state here
			}

			/* START ACTUAL SUCCESS BLOCK */
			if (App.q2 === true) {

				$('.question-two-container').hide();
				$('.results-panel').removeClass('stage-1').addClass('stage-2').show();
				$('.results-panel h3.stage-1').hide();
				$('.results-panel h3.stage-2').show();
				$('.results-panel .description').hide();
				$('.results-panel .form').hide();
				$('.results-panel .description-final').css('display','table');
			} else {
				// console.log('question set is not complete');
			}
			
			/* END ACTUAL SUCCESS BLOCK */


			
		},

		questionTwoLoad: function() {
			/* validate form */
			
			$('.question-two-container').show();

			$('html, body').animate({
				scrollTop: $("#tool").offset().top
			}, 500);
		},

		resultInfoOpen: function() {
			var resultInfoContainer = $(this).parents('.results').find('.info');
			var resultInfo = $(this).data('info');
			var resultInfoContents;
			if ($(this).parents('.results-panel').hasClass('stage-1')) {
				resultInfoContents = $(this).data('one-content');
			} else {
				resultInfoContents = $(this).data('two-content');
			}

			if ($(this).hasClass('top-left')) {
				resultInfoContainer.css({
					'top': '0',
					'left': '0',
					'right': 'auto',
					'bottom': 'auto'
				});
			} else if($(this).hasClass('top-right')) {
				resultInfoContainer.css({
					'top': '0',
					'left': 'auto',
					'right': '0',
					'bottom': 'auto'
				});
			} else if($(this).hasClass('bottom-left')) {
				resultInfoContainer.css({
					'top': 'auto',
					'left': '0',
					'right': 'auto',
					'bottom': '0'
				});
			} else {
				resultInfoContainer.css({
					'top': 'auto',
					'left': 'auto',
					'right': '0',
					'bottom': '0'
				});
			}

			if ($('.mobile').css('display') === 'block') {
				$(resultInfoContainer).animate({
					'height': '300px',
					'width': '100%'
				});
			} else {
				$(resultInfoContainer).animate({
					'height': '380px',
					'width': '100%'
				});
			}

			$(resultInfoContainer).find('.bar p').html(resultInfo);
			$(resultInfoContainer).find('.content').html(resultInfoContents);
		},

		resultInfoAllClose: function() {
			$('.info').css({
				'height': '0',
				'width': '0'
			});
		},

		resultInfoClose: function() {
			var resultInfoContainer = $(this).parents('.results').find('.info');
			var resultInfoParent = $(this).parents('.info');

			$(resultInfoContainer).animate({
				'height': '0',
				'width': '0'
			});
		},

		validateEmail: function(email){
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
	};
	App.init();
	window.App = App;
});
