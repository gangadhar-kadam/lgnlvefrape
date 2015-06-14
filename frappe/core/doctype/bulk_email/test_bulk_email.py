# Copyright (c) 2013, tailorpad.com and Contributors
# See license.txt

import frappe
import unittest

test_records = frappe.get_test_records('Bulk Email')

class TestBulkEmail(unittest.TestCase):
	pass
