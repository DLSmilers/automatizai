# Dockerfile para site estático (React / Next.js compilado)

# 1️⃣ Base: Nginx leve
FROM nginx:alpine

# 2️⃣ Remove configuração default do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# 3️⃣ Copia configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d

# 4️⃣ Copia arquivos compilados do site para a pasta que o Nginx serve
COPY dist/ /usr/share/nginx/html

# 5️⃣ Expõe a porta 80
EXPOSE 80

# 6️⃣ Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
