FROM nginx:alpine

# Remove config padrão
RUN rm -rf /etc/nginx/conf.d/*

# Copia configuração
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia arquivos buildados
COPY dist /usr/share/nginx/html

# Verifica se os arquivos foram copiados
RUN ls -la /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
