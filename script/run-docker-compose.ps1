cd ../etc/docker
docker-compose -f docker-compose.yml -f docker-compose.infrastructure.yml up -d
cd ../../script