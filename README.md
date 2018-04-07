# Presentaciones

Plataforma web para descargar mis presentaciones/charlas

Todo el contenido está alojado en Torrent y descarga directa, así como visualizadores cuando sea necesario

TODO: 
 - Hacer funcionar el torrent
 - AdSense
 - Analytics
 - estrategia de backups (SQL y static)


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