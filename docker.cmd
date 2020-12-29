docker run --name pgsql -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=julien -v pgdata:/var/lib/postgresql/data -d -p 5432:5432 postgres:alpine

docker exec -it pgsql psql -U postgres julien