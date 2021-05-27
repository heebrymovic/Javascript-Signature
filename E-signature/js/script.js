
var canvasBox = document.querySelector('.canvasBox'),

	canvas = document.querySelector('#canvas'),

	showSignature = document.querySelector('#displaySignature'),

	clearSignature = document.querySelector('#clearSignature'),

	signature = document.querySelector('#signature'),

	eventDown = false,

	context;

	clearSignature.addEventListener('click', _ => canvas.width = canvas.width )

	displaySignature.addEventListener('click', _ => signature.src = canvas.toDataURL())

	window.addEventListener('mouseup', _ => eventDown = false);

	/*Setting cavas width and height*/
	['DOMContentLoaded', 'resize'].forEach( eventType => {

			window.addEventListener(eventType, function() {
		
				canvas.width = canvasBox.clientWidth - (parseInt( getComputedStyle(canvas).borderRight ) * 2) ;

				canvas.height = canvasBox.clientHeight - (parseInt( getComputedStyle(canvas).borderBottom ) * 2);

				canvas.style.border = "2px solid blue";

			});
	});
	

	['mousedown', 'pointerdown'].forEach( e => {

			canvas.addEventListener(e, signatureStart);
	});

	['mousemove', 'pointermove'].forEach( e => {

			canvas.addEventListener(e, signatureMove);
	});

	var canvasX = (e) => e.clientX - e.target.getBoundingClientRect().left - e.target.clientLeft;	

	var canvasY = ( e ) =>  e.clientY - e.target.getBoundingClientRect().top - e.target.clientTop;

	function signatureStart(e) {

			eventDown = true;

			context = canvas.getContext('2d');

			context.moveTo( canvasX(e), canvasY(e)  );
	}

	function signatureMove( e ) {

			if ( !eventDown ) return;


			context.lineTo( canvasX(e), canvasY(e) );
			context.strokeStyle = 'red';
			context.fillWidth = '4'
			context.stroke();
	}