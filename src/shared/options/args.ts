export const allArgOptions = {
	author: { type: "string" },
	base: { type: "string" },
	"create-repository": { type: "boolean" },
	description: { type: "string" },
	email: { type: "string" },
	"exclude-compliance": { type: "boolean" },
	"exclude-contributors": { type: "boolean" },
	"exclude-lint-json": { type: "boolean" },
	"exclude-lint-knip": { type: "boolean" },
	"exclude-lint-md": { type: "boolean" },
	"exclude-lint-package-json": { type: "boolean" },
	"exclude-lint-packages": { type: "boolean" },
	"exclude-lint-perfectionist": { type: "boolean" },
	"exclude-lint-spelling": { type: "boolean" },
	"exclude-lint-yml": { type: "boolean" },
	"exclude-releases": { type: "boolean" },
	"exclude-renovate": { type: "boolean" },
	"exclude-tests": { type: "boolean" },
	funding: { type: "string" },
	owner: { type: "string" },
	repository: { type: "string" },
	"skip-github-api": { type: "boolean" },
	"skip-install": { type: "boolean" },
	"skip-removal": { type: "boolean" },
	"skip-restore": { type: "boolean" },
	"skip-uninstall": { type: "boolean" },
	title: { type: "string" },
} as const;