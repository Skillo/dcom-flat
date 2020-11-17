function QuizPlayer(questions){
	/* global
	JST,
	$,
	GT,
	LightBox
	 */
	'use strict';

	// Variables
	var currentQuestion = 0;
	var questionBox;
	var frag;
	var tileContainer; //the quiz question container
	//var mainQuizContainer;
	//var resultsViewer;
	var resultsButton;
	var resultsCache;
	var currentAttemptId;
	var currentAttemptNumber;

	var tile = {"id":1,"type":"Quiz","topic_id":1,"title":"Phishing Quiz","textblock":null,"position":3,"thumbnail":null,"prerequisite_id":null,"message":null,"min_score":100,"require_pass":true,"no_download":true,"no_print":true,"no_discussion":true,"no_reporting":false,"attempt_limit":2,"instant_feedback":true,"summary_feedback":true,"hidden":false,"url":null,"status":null,"review_mode":null,"shuffle_answers":true,"shuffle_questions":null,"assignment_response":null,"max_score":null,"pass_fail":null,"days_til_available":null,"use_google":null,"status_message":null,"scorm_score_can_only_improve":false,"get_filepicker_security_policy":{"signature":"23d771ede029d7e9cbe612096a626e27dc4649c3fd858e56277e8150b97dde05","policy":"eyJjYWxsIjpbInN0b3JlIiwicGljayJdLCJoYW5kbGUiOm51bGwsImV4cGlyeSI6MTYwNjQ4OTMxNn0="},"prerequisite":{"id":709919,"type":"Webclip","topic_id":560616,"title":"Stay Safe from Phishing and Scams","textblock":null,"position":1,"thumbnail":null,"prerequisite_id":null,"message":null,"min_score":null,"require_pass":true,"no_download":true,"no_print":true,"no_discussion":false,"no_reporting":false,"attempt_limit":null,"instant_feedback":true,"summary_feedback":null,"hidden":false,"url":"http://www.youtube.com/watch?v=R12_y2BhKbE","status":null,"review_mode":null,"shuffle_answers":null,"shuffle_questions":null,"assignment_response":null,"max_score":null,"pass_fail":null,"days_til_available":null,"use_google":null,"status_message":null,"scorm_score_can_only_improve":false,"get_filepicker_security_policy":{"signature":"d36458ae35e397b96656d7fba02a0788d900f2b260721412d6a6bcb44197c650","policy":"eyJjYWxsIjpbInJlYWQiLCJwaWNrIiwic3RhdCIsIndyaXRlIiwic3RvcmUiLCJjb252ZXJ0IiwicmVtb3ZlIl0sImhhbmRsZSI6IndhdGNoP3Y9UjEyX3kyQmhLYkUiLCJleHBpcnkiOjE2MDY0ODkzMTZ9"},"secure_url":null,"prerequisite_title":null,"available_in":false},"available":true,"iframe_compatible":null,"https_compatible":null,"get_info":null,"get_info_filepicker":null,"has_ungradings":false};

	var attempt = {"success":true};

	var userCourseId = null;


	resultsCache = {
		correct: 0,
		quiz_questions: [],
		hasData: false
	};
	//var self = this;

	// Setup
	tileContainer = document.createElement('div');
	frag = document.createDocumentFragment();
	$(frag).append(JST['app/templates/reader_view/quiz-container.us']());

	//mainQuizContainer = frag.querySelector('#js-main-quiz-container');
	questionBox = frag.querySelector('.question-box');

	tileContainer.appendChild(frag);
	//get all questions
	//questions = [];
	if((tile.passed && tile.completed) || tile.attempts_limited) {
		//displays the summary automatically
		displayResults(true);
	} else {
		//GT.Quiz.unfinishedAttempt(userCourseId, tile.id, function(attempt){
			currentAttemptId = attempt.id;
			currentAttemptNumber = attempt.number;
			//GT.Quiz.getQuiz(attempt.id, tile.id, userCourseId, function (response) {
				//questions = response;
				if(tile.shuffle_questions){
					GT.shuffleArray(questions);
				}
				if(currentAttemptId){
					//$(frag).append(JST['app/templates/reader_view/quiz-resumepage.us']());
					GT.Notification.show('Resumed quiz where you left off');
					displayQuestion(questions[currentQuestion]);
				} else {
					displayStartpage(questions[currentQuestion]);
				}
				resultsCache.quiz_questions = questions;
				resultsCache.hasData = true;
			//});
		//});
	}


	// Private Functions
	function displayStartpage(){
		var startButton;
		var frag;

		frag = document.createDocumentFragment();
		$(frag).append(
			JST['app/templates/reader_view/quiz-startpage.us']({
				tile: tile,
				question_count: questions.length
			}));
		startButton = frag.querySelector('#js-start-button');
		startButton.onclick = function(){
			// if(userCourseId) {
			// 	GT.Quiz.beginAttempt(
			// 		userCourseId, tile.id, function (attempt) {
			// 			currentAttemptId = attempt.id;
			// 			currentAttemptNumber = attempt.number;
			// 			displayQuestion(questions[currentQuestion]);
			// 		}
			// 	);
			// } else {
				displayQuestion(questions[currentQuestion]);
			// }
		};
		questionBox.appendChild(frag);
	}

	function displayResults(bestAttempt){
		var frag;
		var resultItems;
		var coachingReport;
		var retakeButton;

		function showFinalResults(results){
			var percentage;
			percentage = Math.round(results.correct.toFixed(1)/
				results.quiz_questions.length.toFixed()*100);


			if(tile.summary_feedback &&
				(percentage >= tile.min_score || tile.attempts_limited)){
				coachingReport.appendChild(
					getCoachingReport(results)
				);
			}

			resultItems[0].appendChild(
				document.createTextNode(' '+results.correct));
			resultItems[1].appendChild(
				document.createTextNode(' '+results.quiz_questions.length));
			resultItems[2].appendChild(
				document.createTextNode(' '+percentage+'%'));
			if(tile.attempts_limited || (tile.attempt_limit && currentAttemptNumber >= tile.attempt_limit)){
				resultItems[2].appendChild(document.createElement('br'));
				resultItems[2].appendChild(
					document.createTextNode("You have used all available quiz attempts.")
				);
				$(retakeButton).addClass('hidden');
			}
			if(resultItems[3] && percentage >= tile.min_score){
				resultItems[3].classList.add('hidden');
			}
		}

		function getCoachingReport(quizQuestions){
			var frag = document.createDocumentFragment();
			$(frag).append(
				JST['app/templates/reader_view/quiz-summary.us'](
					quizQuestions));
			return frag;
		}

		frag = document.createDocumentFragment();
		$(frag).append(JST['app/templates/quiz_player/quiz.us']({tile: tile}));
		retakeButton = frag.querySelector('#retake-button');
		resultItems = frag.querySelectorAll('ul li');
		coachingReport = frag.querySelector('#js-coaching-report');

		// if(userCourseId === ''){
			showFinalResults(resultsCache);
		// }
		// else {
		// 	GT.Quiz.getResults(tile.id, userCourseId, bestAttempt,
		// 		function (results) {
		// 			showFinalResults(results);
		// 		});
		// }

		if(tile.attempts_limited || (tile.attempt_limit && currentAttemptNumber >= tile.attempt_limit)) {
			$(retakeButton).remove();
		}

		if(retakeButton) {
			retakeButton.onclick = function () {
				window.location.reload();
			};
		}

		//empty the container of any previous contents and append this question
		$(questionBox).empty();
		questionBox.appendChild(frag);
	}

	function displayQuestion(question) {
		var frag;
		var buttons;
		var form;
		var feedback;
		var correctAnswers = [];

		if(userCourseId === undefined){
			userCourseId = '';
		}

		function submitQuestion(){
			var values;
			var ajaxValue = [];
			var inputs;
			var i;

			values = $(form).serializeArray();
			//disable inputs so they can't change their answer
			inputs = form.querySelectorAll('input');
			for(i = 0; i < inputs.length; i++){
				inputs[i].disabled = true;
			}
			if(values[0]){
				if (values.length > 1){
					for (i = 0; i < values.length; i++) {
						ajaxValue.push(values[i].value);
					}
				} else {
					ajaxValue.push(values[0].value);
				}
				// GT.Quiz.recordResponse(tile.id, ajaxValue, undefined,
				// 	userCourseId, currentAttemptId, function (response) {
				// 		var j;
				// 		if(!response.success){
				// 			GT.Notification.showErrorList(response.errors.quiz_question);
				// 			buttons[2].click();
				// 		} else {
							$(buttons[0]).addClass('hidden');
							$(buttons[2]).removeClass('hidden');
							var correct_count = 0;
							for (i = 0; i < question.quiz_answers.length; i++) {
								for (j = 0; j < ajaxValue.length; j++) {
									if (question.quiz_answers[i].id ===
										Number(ajaxValue[j])) {
										if (question.quiz_answers[i].correct) {
											correct_count++;
										}
										question.quiz_answers[i].quiz_responses = true;
									}
								}
							}

							var feedbackText;

							if (correct_count === correctAnswers.length &&
								correct_count === ajaxValue.length) {
								resultsCache.correct++;
								feedbackText = 'Correct!';
							} else {
								feedbackText = 'Incorrect!';
							}

							if (tile.instant_feedback) {
								$(feedback).text(feedbackText);
							} else {
								buttons[2].click();//go to next question
							}
				// 		}
				// 	}
				// );
				return true;
			} else {
				for(i = 0; i < inputs.length; i++){
					inputs[i].disabled = false;
				}
				GT.Notification.show("Please provide a valid response");
				return false;
			}
		}



		//set up template
		frag = document.createDocumentFragment();
		currentQuestion = questions.indexOf(question);
		if(question){
			if(tile.shuffle_answers){
				GT.shuffleArray(question.quiz_answers);
			}
			question[question.question_type] = true;
			question.question = GT.urlify(question.question);
			question.quiz_answers.forEach(function(answer){
				answer.answer = GT.urlify(answer.answer);
			});
			$(frag).append(JST['app/templates/quiz_player/quiz.us'](question));

			form = frag.querySelector('form');
			buttons = frag.querySelectorAll('button');
			feedback = frag.querySelector('.quiz-feedback');
			var answerInputs = frag.querySelectorAll('input');
			correctAnswers = question.quiz_answers.filter(
				function(ans){ return ans.correct === true;});
			if (correctAnswers.length > 1) {
				frag.querySelector('p').innerHTML += " (select all that apply)";
				for (var j = 0; j < answerInputs.length; j++) {
					answerInputs[j].setAttribute('type', 'checkbox');
				}
			}
		}

		if (question) {//setup multiple choice
			buttons[0].onclick = function () {
				var success;
				buttons[0].disabled = true;
				success = submitQuestion();
				if(!success){
					buttons[0].disabled = false;
				}
			};
			buttons[2].onclick = function () {
				displayQuestion(questions[currentQuestion + 1]);
			};
			//empty the container of any previous contents and append this question
			$(questionBox).empty();
			questionBox.appendChild(frag);
		} else {//show final results
			displayResults(false);
		}

	}

	//Public Functions
	this.getPlayer = function(){
		return tileContainer;
	};
}
