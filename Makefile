
build: docco components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components docs

doc: docco

	git checkout gh-pages
	git checkout master docs
	git add build docs
	#add versionning
	git commit -am "update DOC"
	git push
	git checkout master
	rm -fr docs

docco:
	docco index.js

.PHONY: clean
