# Mi Caña — Eliminación de Cuenta

Página web de una sola ruta que permite a los usuarios de la aplicación **Mi Caña** (Azucarera Paraguaya S.A.) solicitar la anulación de su cuenta y la eliminación de los datos asociados.

La página explica qué datos se anulan, cuáles podrían conservarse por obligaciones legales, el plazo de procesamiento (30 días) y ofrece un enlace directo de WhatsApp para realizar la solicitud.

## Stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) (file-based routing)
- React 19
- Tailwind CSS v4
- shadcn/ui ([src/components/ui/](src/components/ui/))
- Vite 8
- TypeScript

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo (Vite)
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run lint     # ESLint
npm run format   # Prettier
```

## Despliegue (GitHub Pages)

La página se publica automáticamente en GitHub Pages mediante GitHub Actions.

**URL:** https://josegalvez1985.github.io/mi-ca-a-farewell/

Configuración inicial (una sola vez): en GitHub, ir a **Settings → Pages → Build and deployment → Source** y seleccionar **GitHub Actions**.

A partir de ahí, cada push a `main` ejecuta el workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml), que:

1. Compila con `GITHUB_PAGES=1` (activa el `base` path `/mi-ca-a-farewell/`).
2. Prerenderiza la ruta `/` a HTML estático en `dist/client`.
3. Sube y despliega el resultado a GitHub Pages.

Para generar el build estático localmente:

```bash
GITHUB_PAGES=1 npm run build   # salida en dist/client
```

## Estructura

| Ruta | Descripción |
| --- | --- |
| [src/routes/index.tsx](src/routes/index.tsx) | Página única: solicitud de eliminación de cuenta |
| [src/routes/__root.tsx](src/routes/__root.tsx) | Shell de la app (HTML, providers, 404 y error boundaries) |
| [src/components/ui/](src/components/ui/) | Componentes shadcn/ui |
| `src/routeTree.gen.ts` | Árbol de rutas autogenerado (no editar a mano) |

El enrutado es por archivos: cada `.tsx` dentro de [src/routes/](src/routes/) es una ruta. Ver [src/routes/README.md](src/routes/README.md) para las convenciones.

## Contacto

- **Desarrollador:** Azucarera Paraguaya S.A.
- **Aplicación:** Mi Caña
- **WhatsApp / Tel:** +595 985 501 444
