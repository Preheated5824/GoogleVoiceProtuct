# Use a base image with Node.js
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the action repository files to the working directory
COPY . .

# Install the necessary dependencies
RUN npm install

# Entry point for the Docker container
CMD ["node", "index.js"]
