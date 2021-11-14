# production environment
FROM nginx:stable-alpine
COPY /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]