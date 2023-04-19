# Use Node.js 14 LTS as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app to the container
COPY . .

# Build the app for production
RUN npm run build

# Expose port 5173
EXPOSE 8000

# Set the environment variable
ENV NODE_ENV=production

# Start the app
CMD ["npm", "run", "dev"]