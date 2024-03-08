# Use an official Node.js runtime as a parent image
FROM node:18-alpine3.19

RUN apk update && apk add --no-cache dumb-init

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el package.json y el package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todos los archivos al contenedor
COPY . .

#COPY tsconfig*.json /app
#COPY src /app/src

# Iniciar la aplicación
CMD ["dumb-init","npm", "run","dev"]


# https://www.youtube.com/watch?v=J4J2wgZ8yWE&t=827s