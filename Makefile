.PHONY: all
all: install

.PHONY: clean
clean:
	@echo ""
	@echo "=> cleaning dependencies and builds..."
	@git clean -dfx

##
# Builds

node_modules: package.json
	@echo ""
	@echo "=> installing dependencies..."
	@npm install && /usr/bin/touch node_modules

# alias for "node_modules" target
.PHONY: install
install: node_modules

dist: $(wildcard src/*.js) node_modules
	@echo ""
	@echo "=> make $@"
	@npx rollup -c --bundleConfigAsCjs && /usr/bin/touch dist

# alias for "dist" target
.PHONY: build
build: dist