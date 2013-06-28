
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components docs

doc: docco

	git checkout gh-pages

	git checkout master docs
	
	git add docs

	#add versionning
	git commit -am "update DOC"

	git push
	git checkout master

docco:
	docco index.js


.PHONY: clean
