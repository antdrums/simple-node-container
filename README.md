## Simple Node App

This code is used to create a docker image with a simple node app running inside the container. It is easier to build the image directly on the docker hub via github linkage, if reqd to publish.

If running locally, from the root folder, run :
```
docker build --no-cache -t <username>/simple-node-app:<tag/version> .
```