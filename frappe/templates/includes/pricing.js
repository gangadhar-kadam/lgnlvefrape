$(document).ready(function() {
//console.log("hiii");
frappe.call({
			type: "POST",
			method: "frappe.templates.pages.pricing.get_products",
			callback: function(r) {
				if(r.message) {
					//console.log(r.message);
					var $table1=$(document).find('#pricing')
                    var a = "Based on your organization size, please select a suitable plan. All the plans are upgradable, fully featured and includes hosting, support and updates. Any lower plan subscribed after a higher plan, pricing for higher plan will be considered. For example, if you need 20 users and you have subscribed for Advanced plan, additional Basic plan (5 users) will be computed at the rate of Advanced plan only. Hence your subscription will be calculated as: 20 * 15 * 12 = USD 3600 annually.<br>Subscription Plans"
			var h= "<thead style='padding=0px; border: 1px solid #ccc;'><tr style='padding=0px;'><th style='padding=0px;border: 1px solid #ccc;'>#</th><th style='padding=0px;border: 1px solid #ccc;'>Package Name</th><th style='padding=0px;border: 1px solid #ccc;'>Validity In Months</th><th style='padding=0px;border: 1px solid #ccc;'>No. Of Users</th><th style='padding=0px;border: 1px solid #ccc;'>Rate</th></tr></thead><tbody style='padding=0px;border: 1px solid #ccc;'>"
                    for (i=0;i<r.message.length;i++){
                        var j=i+1
                        h += '<tr style="padding=0px;border: 1px solid #ccc;">'
                        h += '<td style="padding=0px;border: 1px solid #ccc;" >'+j+'</td>'
                        h += '<td style="padding=0px;border: 1px solid #ccc;">'+r.message[i][0]+'</td>'
			h += '<td style="padding=0px;border: 1px solid #ccc;">'+r.message[i][2]+'</td>'
			h += '<td style="padding=0px;border: 1px solid #ccc;">'+r.message[i][3]+'</td>'
                        h += '<td style="padding=0px;border: 1px solid #ccc;">'+r.message[i][1]+'</td></tr></tbody>'                       
                       }$(h).appendTo('#pricing');
                  }			
				}
		})
});
