.PHONY: up

up:
	docker compose up --build

exec:
	docker compose exec app bash
