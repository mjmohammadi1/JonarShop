#!/bin/bash
docker-compose -f server/docker-compose.yml build 
docker-compose -f server/docker-compose.yml up