# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight web server to serve the built files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the web server to serve the built files
CMD ["serve", "-s", "build"]
