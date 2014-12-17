# Copyright (c) 2013, Web Notes Technologies Pvt. Ltd. and Contributors
# License: GNU General Public License v3. See license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.utils import flt, fmt_money
#from shopping_cart.templates.utils import get_transaction_context

no_cache = 1
no_sitemap = 1

@frappe.whitelist(allow_guest='True')
def get_products():
	#frappe.errprint("in get products")
	#res=frappe.db.sql("""select item_code,price_list_rate,validity,no_of_users from `tabItem Price` where price_list='Standard Selling'""" )
	res=frappe.db.sql("select i.item_code,ip.price_list_rate,i.validity,i.no_of_users from `tabItem Price` ip join `tabItem` i on ip.item_code=i.item_code where price_list='Standard Selling' and show_on_website=1")
        frappe.errprint(res)
	return res
