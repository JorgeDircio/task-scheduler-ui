# Task Scheduler Frontend

Este repositorio contiene el **frontend** de la aplicación Task Scheduler, desarrollado con **React + TypeScript**, usando **Zustand** para manejo de estado, **TailwindCSS** para estilos, y consumiendo la API del backend a través de llamadas HTTP (`axios`).

---

## 🔩 Tecnologías utilizadas

* **React 19** + **TypeScript**
* **Vite** como bundler
* **Zustand** para gestión de estado
* **React Router DOM** para enrutamiento
* **Axios** para consumo de API
* **TailwindCSS** para estilos utilitarios
* **React Hot Toast** para notificaciones
* **Jest** + **ts-jest** para pruebas unitarias
* **Docker** y **Docker Compose** para desarrollo y ejecución

---

## 📆 Prerrequisitos

* Tener instalado:

  * [Docker](https://www.docker.com/)
  * [Docker Compose](https://docs.docker.com/compose/)
  * [`make`](https://www.gnu.org/software/make/) (en Linux/macOS)

> 🐳 **No es necesario tener Node.js instalado localmente.** Todo se ejecuta dentro de contenedores Docker.

---

## 🚀 Instalación y ejecución

### ✅ Usando `Makefile` (recomendado)

```bash
# 1. Clonar el repositorio
git clone https://github.com/JorgeDircio/task-scheduler-ui
cd task-scheduler-ui

# 2. Construir la imagen Docker del frontend
make build

# 3. Levantar la aplicación en http://localhost:5173
make up

# 4. Ver logs
make logs

# 5. Detener el contenedor
make down

# 6. Limpiar todo (contenedor, red, volúmenes)
make clean

# 7. Ejecutar pruebas unitarias
make test

# 8. Ejecutar pruebas con cobertura
make test-coverage
```

---

### 🧰 Comandos directos sin `make` (alternativa)

```bash
# Construir imagen
docker-compose build

# Levantar frontend en segundo plano
docker-compose up -d

# Ver logs en tiempo real
docker-compose logs -f

# Ejecutar pruebas
docker-compose run --rm frontend npm run test

# Ejecutar pruebas con cobertura
docker-compose run --rm frontend npm run test:coverage

# Detener contenedor
docker-compose down

# Eliminar contenedor, red y volúmenes
docker-compose down -v --remove-orphans
```

---

## 🔢 Pruebas

El proyecto incluye pruebas unitarias con `Jest`. Los archivos de prueba están ubicados en:

```
src/__tests__/
```

Puedes ejecutarlas con:

```bash
make test
make test-coverage
```

El reporte HTML de cobertura se genera en:

```
coverage/lcov-report/index.html
```

---

## 📁 Estructura del proyecto

```bash
task-scheduler-ui/
├── coverage/                 # Reportes de cobertura Jest
├── node_modules/             # Dependencias (contenedor)
├── public/                   # Archivos públicos
├── src/
│   ├── __tests__/            # Pruebas unitarias
│   │   └── tasks/
│   │       └── scheduler.service.test.ts
│   ├── assets/               # Imágenes o íconos
│   ├── common/
│   │   ├── api/              # Cliente HTTP base (axios)
│   │   │   └── HttpClient.ts
│   │   └── hooks/
│   │       └── useFetch.ts
│   ├── layouts/              # Layout general
│   │   └── MainLayout.tsx
│   ├── modules/              # Módulo de lógica por dominio (tasks)
│   │   └── tasks/
│   │       ├── api/          # Endpoints específicos
│   │       ├── components/   # Componentes de UI reutilizables
│   │       ├── hooks/        # Custom hooks (zustand)
│   │       ├── types/        # Tipos y contratos
│   │       └── pages/        # Vistas de página (SchedulePage, TasksPage)
│   ├── routes/               # Rutas de la app
│   │   └── AppRoutes.tsx
│   ├── services/             # Servicios reutilizables (por ej. lógica de agendado)
│   │   └── schedule.service.ts
│   ├── index.css             # Estilos base
│   └── main.tsx              # Entry point principal
├── .env                      # Variables de entorno
├── Dockerfile
├── docker-compose.yml
├── jest.config.js
├── Makefile
├── tsconfig.json
├── vite.config.ts
├── README.md
├── package.json
└── index.html
```

---

## 🔗 Enlaces relacionados

* [Backend del proyecto](https://github.com/JorgeDircio/task-scheduler-backend)
* [Documentación Swagger del backend](http://localhost:3000/api-docs) (Backend corriendo localmente)

---

## 📄 Licencia

MIT © Jorge Luis Carreón Dircio
