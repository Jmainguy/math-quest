# Use the Chainguard nginx image
FROM cgr.dev/chainguard/nginx:latest

# Set the working directory to /www
WORKDIR /usr/share/nginx/html/

# Copy the contents of the build directory to the /www directory in the container
COPY build/ /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# The Chainguard nginx image automatically serves content from /www
