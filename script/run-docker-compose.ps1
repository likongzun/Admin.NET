cd ../etc/docker
docker-compose -f docker-compose.yml -f docker-compose.infrastructure.yml -f docker-compose.infrastructure.override.yml up -d
cd ../../script