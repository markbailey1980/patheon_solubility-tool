jQuery(function($){
	var QueryString = {

		init: function() {
			this.setupElements();
			this.bindEvents();
		},

		setupElements: function() {		
			this.$defaultHiddenFieldNameValue = "";
			this.$form = $('#form208');
		},
		
		bindEvents: function() {
			$(window).on('load', this.getQueryStringParamValue);
		},

		getQueryStringParamValue: function() {
			var paramLSD = QueryString.$form.find("input[name='leadSourceDetailMostRecent1']");
			var paramLS = QueryString.$form.find("input[name='LeadSourceMostRecent']");
			var paramCID = QueryString.$form.find("input[name='campaign_ID']");

			if ($.url().param('LSD')) {
				paramLSD.val($.url().param('LSD'));
				console.log("LSD=" + $.url().param('LSD'));
			}
			
			if($.url().param('LS')) {
				paramLS.val($.url().param('LS'));
				console.log("LS=" + $.url().param('LS'));
			}

			if($.url().param('CID')) {
				paramCID.val($.url().param('CID'));
				console.log("CID=" + $.url().param('CID'));
			}
		}
	};
	QueryString.init();
	window.QueryString = QueryString;
});