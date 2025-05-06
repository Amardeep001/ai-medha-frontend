# # Step 1: Use an official Node.js image to build the app
# FROM node:22 AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install --legacy-peer-deps

# # Copy the rest of the app
# COPY . .

# # Build the React app
# RUN npm run build

# # Step 2: Use Nginx to serve the built app
# FROM nginx:stable-alpine

# # Copy built React app from previous step
# COPY --from=build /app/build /usr/share/nginx/html

# # Remove default Nginx config and add custom one (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]

FROM node:22
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . ./
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]

