import $ from 'jquery';

const request = ( url, method, data, successCallback, failCallback ) => {
	 $.ajax({
		 url: url,
		 method: method,
		 data: JSON.stringify( data ),
		 crossDomain: true,
		 contentType: 'application/json',
		 beforeSend: function ( xhr ) {
		 	 xhr.setRequestHeader( 'X-WP-Nonce', wpDoneRestApi.nonce);
		 },
		 success: successCallback,
		 error: failCallback
	 });
}

export default request;
