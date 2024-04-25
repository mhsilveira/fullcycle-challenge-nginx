# Desafio Nginx com NodeJS
Desafio número 2 do módulo Docker do curso Full Cycle

Critérios de aceite:
- Deve subir os containers do MySQL, NodeJS e Nginx.
- Ao acessar localhost:8080, devemos ser direcionados ao index.js do Node que está na porta 3000, acessada via proxy reverso do Nginx.
- Essa tela deve exibir a frase 'Full Cycle Rocks', inserir um nome (passei o meu próprio hardcoded) no banco de dados e exibí-lo em tela

--- 

Para rodar a aplicação utilize `docker-compose up -d `

---
Para acessar, digite o seguinte endereço no navegador:
http://localhost:8080/
