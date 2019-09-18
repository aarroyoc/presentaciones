# Presentaciones

[http://ppt.adrianistan.eu](http://ppt.adrianistan.eu)

Plataforma web para descargar mis presentaciones/charlas

Todo el contenido está alojado en Torrent y descarga directa, así como visualizadores cuando sea necesario

## Docker setup

```
cp config.json.sample config.json
docker-compose build
docker-compose up
docker-compose down
```

To test:

```
docker-compose run app npm test
```

## Manual (old) way

Instalar
```
npm install
vim config.json # editar con valores correctos
sudo -u postgres psql
>> SQL
```

SQL
```sql
CREATE USER ppt WITH PASSWORD 'ppt42';
CREATE DATABASE ppt OWNER ppt;
```

Actualizar dependencias
```
npm update
```

Test (necesario PostgreSQL en ejecución)
```
npm test
```

Lint
```
eslint .
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
