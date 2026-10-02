JS_COMMAND_RUNNER ?= yarn
JS_ESLINT_CONFIG ?= eslint.config.js
JS_SWITCHES_FOR_ESLINT_LINT = --report-unused-disable-directives --max-warnings 0
JS_SWITCHES_FOR_INSTALL = --immutable
JS_TEST_COMMAND ?= vitest
JS_TEST_DEFAULT_SWITCHES = run --typecheck --coverage.enabled=true --coverage.reporter=text --coverage.reporter=cobertura --reporter=junit --reporter=default --coverage.reportsDirectory=$(JS_BUILD_REPORTS_DIRECTORY) --outputFile=$(JS_BUILD_REPORTS_DIRECTORY)/unit-tests.xml

## The following should be standard includes
# include core makefile targets for release management
-include .make/base.mk

-include .make/docs.mk
-include .make/js.mk
-include .make/release.mk

DOCS_SPHINXOPTS = -W --keep-going

# include your own private variables for custom deployment configuration
-include PrivateRules.mak

js-post-lint:
	$(JS_COMMAND_RUNNER) tsc -p tsconfig.json

js-do-audit:
	yarn npm audit --recursive
