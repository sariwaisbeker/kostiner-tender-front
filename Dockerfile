# Use an official Node runtime as the base image
FROM node:20.11.1-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose the port on which the app will run
EXPOSE 5001

# Command to serve the app
CMD ["serve", "-s", "dist", "-l", "5001"]
