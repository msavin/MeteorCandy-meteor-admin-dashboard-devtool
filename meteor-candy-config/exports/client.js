// First, import client-only code 

import { security as clientSecurity } from '../imports/client/security'
import { defaults } from '../imports/client/defaults'

client = {
	security: clientSecurity,
	default: defaults
}

// Second, import shared code

import { actions } from '../imports/shared/account/actions'
import { security } from '../imports/shared/security';
import { functions } from '../imports/shared/functions';

shared = {};
shared.account = {};
shared.account.actions = actions;
shared.security = security;
shared.functions = functions;

// Finally, assemble and export

Config = {}
Config.client = client;
Config.shared = shared;

security = {
	keyCode: Config.client.default.keyCode,
	permission: Config.client.security.permission
};

export { Config, security }