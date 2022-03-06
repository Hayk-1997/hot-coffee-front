FROM node:12

ENV PORT 3000

# Create app directory
#RUN mkdir -p /src/app
WORKDIR /app

# Installing dependencies
COPY package.json ./
RUN npm install

# Copying source files
#COPY . src/app
COPY . ./
# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"