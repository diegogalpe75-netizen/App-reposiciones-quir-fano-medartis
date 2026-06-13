# Tutorial 1 — Publicar la app en GitHub Pages

Esta guía explica cómo subir los archivos de la app **Medartis APTUS — Pedidos** a tu repositorio de GitHub y dejarla publicada en una URL pública (ej. `https://tu-usuario.github.io/medartis-app/`), desde la cual luego se podrá instalar en iOS y Android.

## 1. Archivos que vas a subir

Dentro de la carpeta `medartis-app` encontrarás todo lo necesario:

```
medartis-app/
├── index.html          ← la app completa (HTML + CSS + JS)
├── manifest.json        ← configuración de la PWA (nombre, iconos, colores)
├── sw.js                 ← service worker (permite que funcione sin conexión)
├── icons/                ← todos los iconos de la app (varios tamaños)
└── assets/
    └── portada.jpg       ← imagen de presentación (splash screen)
```

**Importante:** sube la carpeta completa `medartis-app` manteniendo esta misma estructura de subcarpetas (`icons/` y `assets/` dentro de `medartis-app/`). Si las rutas cambian, los iconos y la imagen de portada no se cargarán.

## 2. Subir los archivos al repositorio

### Opción A — Desde la web de GitHub (más sencillo)

1. Entra en tu repositorio en [github.com](https://github.com).
2. Pulsa el botón **Add file → Upload files**.
3. Arrastra la carpeta `medartis-app` completa (o todos sus archivos y subcarpetas) a la zona de subida.
   - Si GitHub no te permite arrastrar carpetas completas desde el navegador, sube primero los archivos sueltos (`index.html`, `manifest.json`, `sw.js`) y luego entra en cada subcarpeta (`icons`, `assets`) creándola y subiendo sus archivos dentro.
4. Escribe un mensaje de commit, por ejemplo: `Añadir app Medartis APTUS (PWA)`.
5. Pulsa **Commit changes**.

### Opción B — Con Git desde tu ordenador

Si prefieres usar la terminal:

```bash
cd ruta/a/tu/repositorio
cp -r ruta/a/medartis-app ./medartis-app
git add medartis-app
git commit -m "Añadir app Medartis APTUS (PWA)"
git push
```

## 3. Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (Configuración).
2. En el menú lateral, pulsa **Pages**.
3. En **Source**, selecciona la rama (normalmente `main`) y la carpeta `/ (root)`.
4. Pulsa **Save**.
5. Espera 1–2 minutos. GitHub mostrará la URL pública, con un formato similar a:

   ```
   https://tu-usuario.github.io/nombre-del-repositorio/
   ```

## 4. Acceder a la app

La app estará disponible en:

```
https://tu-usuario.github.io/nombre-del-repositorio/medartis-app/index.html
```

o, si subiste el contenido de `medartis-app` directamente en la raíz del repositorio:

```
https://tu-usuario.github.io/nombre-del-repositorio/index.html
```

Comprueba que la URL carga correctamente desde el móvil (Safari en iPhone, Chrome en Android) antes de pasar al **Tutorial 2** para instalarla como app.

## 5. Cómo actualizar la app en el futuro

Cuando quieras hacer cambios (precios, kits nuevos, textos, etc.):

1. Edita los archivos correspondientes (normalmente `index.html`).
2. Vuelve a subirlos al repositorio reemplazando los anteriores (Opción A o B).
3. GitHub Pages se actualizará automáticamente en 1–2 minutos.
4. **Importante:** como la app guarda una copia local para funcionar sin conexión (service worker), los usuarios pueden necesitar:
   - Cerrar la app por completo y volver a abrirla, o
   - Pulsar varias veces "recargar" en el navegador, o
   - Si el cambio es importante, cambiar el número de versión `CACHE_NAME` dentro de `sw.js` (por ejemplo de `medartis-aptus-v1` a `medartis-aptus-v2`) para forzar la actualización en todos los dispositivos.

## 6. Requisitos técnicos (ya cumplidos)

Para que la app sea instalable en iOS y Android, debe servirse por **HTTPS** — GitHub Pages cumple esto automáticamente, así que no necesitas configurar nada adicional.

---

Siguiente paso: **Tutorial 2 — Instalar la app en iOS y Android**.
