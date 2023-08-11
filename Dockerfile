
FROM node:14

WORKDIR /app
COPY package*.json ./

# Install dependencies
RUN npm install
COPY . .
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to start the app
CMD ["npm", "start"]
