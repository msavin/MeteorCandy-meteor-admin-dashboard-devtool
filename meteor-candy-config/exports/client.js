// First, import client-only code 

import { security as clientSecurity } from '../imports/client/security'

var client = {}
client.security = clientSecurity;

// Second, import shared code

import { tasks } from '../imports/shared/account/tasks'
import { security } from '../imports/shared/security';
import { functions } from '../imports/shared/functions';

var shared = {};
shared.account = {};
shared.account.tasks = tasks;
shared.security = security;
shared.functions = functions;

// Finally, assemble and export

var Config = {}
Config.client = client;
Config.shared = shared;

export { Config }