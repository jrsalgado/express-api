FROM mongo:3.0
MAINTAINER El jayro
RUN /bin/bash -c 'echo "Look Look mama!! this is a new file on my new image" > test.txt'
COPY ./tools/mongoScript.js /mongoScript.js 
CMD ["mongod"]

# 
# build image : docker build -t jsalgado/nsmongo .
#
# run create container: docker run -d --name mongodb -p 27017 nsmongo:1.0
#
# load with data: docker exec -it mongodb mongo people mongoScript.js
#
# enter to container: docker exec -it mongodb bash 
#
# history: docker history nsmongo:1.0
#
# publish: docker push jsalgado/nsmongo
# 
