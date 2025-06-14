DC=docker-compose
NPM = npm

.PHONY: help build up down logs clean test test-coverage

help: ## Muestra esta ayuda
	@grep -E '(^[a-zA-Z_-]+:.*?## .*$$)' $(MAKEFILE_LIST) \
		| sort \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

build: ## Construye la imagen del frontend
	$(DC) build

up: ## Levanta el frontend en http://localhost:5173
	$(DC) up -d

down: ## Detiene el contenedor del frontend
	$(DC) down

logs: ## Muestra logs del frontend
	$(DC) logs -f

clean: ## Limpia el contenedor y volumenes del frontend
	$(DC) down -v --remove-orphans

test: ## Ejecuta los tests sin cobertura
	@echo "→ Corriendo tests frontend..."
	docker compose run --rm frontend npm run test

test-coverage: ## Ejecuta los tests con cobertura
	@echo "→ Corriendo tests frontend con cobertura..."
	docker compose run --rm frontend npm run test:coverage
