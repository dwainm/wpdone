import $ from 'jquery';

const request = ( url, method, data, successCallback, failCallback ) => {
	 $.ajax({
		 url: url,
		 method: 'POST',
		 data: JSON.stringify( data ),
		 crossDomain: true,
		 contentType: 'application/json',
		 beforeSend: function ( xhr ) {
		 	 xhr.setRequestHeader( 'X-WP-Nonce', wpDoneRestApi.nonce);
		 	 xhr.setRequestHeader( 'X-HTTP-Method-Override', method );
		 },
		 success: successCallback,
		 error: failCallback
	 });
}

export default request;
