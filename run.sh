#!/bin/bash
docker build -t ahsouza/pwa-vuejs .
docker run -it -p 8080:80 --rm --name pwa-vuejs-1 ahsouza/pwa-vuejs