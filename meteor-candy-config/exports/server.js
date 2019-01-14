// First, import server-only code 

import { profile } from '../imports/server/account/profile'
import { packages } from '../imports/server/account/packages'
import { data } from '../imports/server/data'
import { table } from '../imports/server/table'
import { security } from '../imports/server/security'
import { settings } from '../imports/server/settings'


var server = {
	account: {
		profile: profile,
		packages: packages,
	},
	table: table,
	data: data,
	security: security,
	settings: settings
}

// Then, import shared code

import { tasks } from '../imports/shared/account/tasks'
import { security as sharedSecurity } from '../imports/shared/security';
import { functions } from '../imports/shared/functions';

var shared = {
	account: {
		tasks: tasks,
	},
	security: sharedSecurity,
	functions: functions
}

// Finally, assemble and export

var Config = {
	server: server,
	shared: shared
}

export { Config }