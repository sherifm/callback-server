# Set the base image to Ubuntu
FROM    ubuntu:bionic

# File Author / Maintainer
MAINTAINER Sherif Mostafa

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    apt-get -y install sudo && \
#    curl -sL https://deb.nodesource.com/setup | sudo bash - && \
    apt-get -y install nodejs npm

# Install nodemon
RUN npm install -g nodemon

# Provides cached layer for node_modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src
ADD . /src

# Expose port
EXPOSE  8080

# Run app using nodemon
CMD ["node", "/src/index.js"]
