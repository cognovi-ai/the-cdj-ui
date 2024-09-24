# Use Node 20 for development
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for Next.js
EXPOSE 8080

# Run the development server
CMD ["npm", "run", "dev"]