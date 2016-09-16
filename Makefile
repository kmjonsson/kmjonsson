
all: build

build:
	#(cd themes; sh convert.sh)
	jekyll build
	mkdir _site/ra/data
	chmod 777 _site/ra/data
	rm -rf _site/ra/log
	mkdir _site/ra/log
	chmod 777 _site/ra/log
