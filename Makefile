OBJECTS = bin/chrome

all: $(OBJECTS)

bin/chrome: chrome/* core/*
	install -d bin/chrome
	cp chrome/* core/* bin/chrome

clean:
	rm bin -rf
