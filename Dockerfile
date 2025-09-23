# Stage 1: Build environment
# We use the full node:20 image here because it has all the build tools needed
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
# Install all dependencies, including dev dependencies if you need them for building
RUN npm install
COPY . .

# Stage 2: Production environment
# Use a smaller base image, like node:20-slim or node:20-alpine
FROM node:20-alpine
WORKDIR /app
# Copy only the necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/ .

# Expose the port and start the application
EXPOSE 3000
CMD ["npm", "start"]
