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
		cd ../client && NODE_ENV=production pm2 start pm2.config.js
		NODE_ENV=production pm2 start pm2.config.js
		pm2 monit

admin-prod:
		cd ../admin && NODE_ENV=production pm2 start pm2.config.js
		NODE_ENV=production pm2 start pm2.config.js
		pm2 monit
