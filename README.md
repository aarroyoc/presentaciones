# Presentaciones

[http://ppt.adrianistan.eu](http://ppt.adrianistan.eu)

Plataforma web para descargar mis presentaciones/charlas

Todo el contenido está alojado en Torrent y descarga directa, así como visualizadores cuando sea necesario


Instalar
```
npm install
vim config.json db.js # editar con valores correctos
sudo mariadb
>> SQL
```

SQL
```sql
CREATE USER IF NOT EXISTS 'presentaciones-test'@'localhost' IDENTIFIED BY 'presentaciones-test';
GRANT ALL PRIVILEGES ON * . * TO 'presentaciones-test'@'localhost';
FLUSH PRIVILEGES;
CREATE DATABASE presentaciones;
```

Actualizar dependencias
```
npm update
```

Test (necesario MariaDB en ejecución)
```
npm test
```


Nginx:
```
sudo cp presentaciones.nginx /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

systemd:

```
sudo cp presentaciones.service /etc/systemd/system/
sudo systemctl enable presentaciones.service
sudo systemctl start presentaciones.service
journalctl -f -u presentaciones.service
```