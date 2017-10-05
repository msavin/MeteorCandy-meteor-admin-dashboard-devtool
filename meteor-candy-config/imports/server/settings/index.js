settings = {
	appControls: {
		label: "Application Controls",
		fields: {
			domain: {
				label: "App Domain",
				type: "string",
				value: "https://www.meteorcandy.com",
			},
			waitinglist: {
				label: "Show Waitinglist",
				type: "boolean",
				value: true,
			},
			showAds: {
				label: "Show Advertisements",
				type: "boolean",
				value: false,
			},
			allowPosting: {
				label: "Allow Public Posting",
				type: "boolean",
				value: true,
			},
			allowMessaging: {
				label: "Allow Private Messaging",
				type: "boolean",
				value: true,
			}
		}
	},
	accountControls: {
		label: "Account Controls",
		fields: {
			maximum: {
				label: "Maximum Accounts",
				type: "number",
				value: 1000,
			},
			registration: {
				label: "Allow Registration",
				type: "boolean",
				value: true,
			},
			fbRegistration: {
				label: "Allow Facebook Sign-In",
				type: "boolean",
				value: false,
			}
		}
	},
	abTests: {
		label: "A/B Tests",
		fields: {
			price0: {
				label: "Price (USD)",
				type: "number",
				value: 99.00,
			},
			displayPrice1: {
				label: "Price Display",
				type: "string",
				value: "$99",
			},
			price2: {
				label: "Test Price (USD)",
				type: "number",
				value: 999.00,
			},
			displayPrice2: {
				label: "Test Price Display",
				type: "string",
				value: "$999",
			},
			freeTier: {
				label: "Display Free Tier",
				type: "boolean",
				value: true,
			},
		}
	},
}

export { settings };