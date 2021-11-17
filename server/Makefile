ifneq (,$(wildcard ./.env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

build:
	docker-compose up --build --remove-orphans

up:
	docker-compose up

down:
	docker-compose down

down-V:
	docker-compose down -v

client-prod:
		NODE_ENV=production pm2 start --name jonar-server npm -- start
		cd ../client && NODE_ENV=production pm2 start --name jonar-client npm -- start
		pm2 monit

admin-prod:
		NODE_ENV=production pm2 start --name jonar-server npm -- start
		cd ../admin && NODE_ENV=production pm2 start --name jonar-admin npm -- start
		pm2 monit
