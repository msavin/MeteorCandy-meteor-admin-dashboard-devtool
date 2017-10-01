// First, import server-only code 

import { profile } from '../imports/server/account/profile'
import { packages } from '../imports/server/account/packages'
import { data } from '../imports/server/data'
import { security } from '../imports/server/security'
import { settings } from '../imports/server/settings'
import { defaults } from '../imports/server/default'

server = {
	default: defaults,
	account: {
		profile: profile,
		packages: packages,
	},
	data: data,
	security: security,
	settings: settings
}

// Second, import shared code

import { actions } from '../imports/shared/account/actions'
import { security as sharedSecurity } from '../imports/shared/security';
import { functions } from '../imports/shared/functions';

shared = {
	account: {
		actions: actions,
	},
	security: sharedSecurity,
	functions: functions
}

// Finally, assemble and export

Config = {
	server: server,
	shared: shared
}

export { Config }