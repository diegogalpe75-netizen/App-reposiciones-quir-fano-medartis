# Tutorial 2 — Instalar la app en iPhone (iOS) y Android

La app **Medartis APTUS — Pedidos** es una **PWA (Progressive Web App)**. Esto significa que, aunque se abre desde el navegador, se puede "instalar" en el móvil para que aparezca como una app normal: con su propio icono en la pantalla de inicio, su pantalla de presentación al abrirla, sin barras del navegador, y funcionando incluso sin conexión.

No requiere descargar nada de App Store ni Google Play.

## Antes de empezar

Necesitas la URL pública de la app, generada en el **Tutorial 1**, por ejemplo:

```
https://tu-usuario.github.io/nombre-del-repositorio/medartis-app/index.html
```

---

## Instalación en iPhone / iPad (iOS)

**Importante:** en iOS solo funciona desde el navegador **Safari** (no funciona desde Chrome ni otros navegadores en iPhone).

1. Abre **Safari** y entra en la URL de la app.
2. Espera a que cargue por completo (verás la imagen de presentación de Medartis unos segundos).
3. Pulsa el icono de **Compartir** (el cuadrado con la flecha hacia arriba ⬆️), situado en la barra inferior.
4. En el menú que aparece, desplázate hacia abajo y pulsa **"Añadir a pantalla de inicio"** ("Add to Home Screen").
5. Aparecerá una vista previa con el icono y el nombre **"Medartis APTUS"**. Puedes editar el nombre si quieres.
6. Pulsa **"Añadir"** (arriba a la derecha).
7. La app aparecerá en tu pantalla de inicio con su propio icono, igual que cualquier otra app.

A partir de ahora, al abrirla desde ese icono:
- Se abrirá a pantalla completa (sin barra de direcciones de Safari).
- Mostrará la imagen de presentación de Medartis al iniciar.
- Funcionará igual que la versión web, incluyendo selección de kits, contadores, foto adjunta, resumen del pedido, impresión/PDF y el nuevo botón **Compartir**.

---

## Instalación en Android

En Android funciona desde **Chrome** (recomendado), aunque otros navegadores como Samsung Internet también lo soportan de forma similar.

### Opción A — Banner automático

1. Abre **Chrome** y entra en la URL de la app.
2. Es posible que Chrome muestre automáticamente un aviso en la parte inferior: **"Añadir Medartis APTUS a la pantalla de inicio"**.
3. Pulsa **"Instalar"** o **"Añadir"**.

### Opción B — Desde el menú (si no aparece el aviso)

1. Abre **Chrome** y entra en la URL de la app.
2. Pulsa el icono de los **tres puntos** (⋮) en la esquina superior derecha.
3. Selecciona **"Instalar aplicación"** o **"Añadir a pantalla de inicio"**.
4. Confirma pulsando **"Instalar"**.
5. La app aparecerá en tu pantalla de inicio y en el cajón de aplicaciones, con su propio icono.

A partir de ahora se abrirá como una app independiente, a pantalla completa, con la imagen de presentación al iniciar.

---

## Comprobaciones tras instalar

Una vez instalada, abre la app desde el icono (no desde el navegador) y verifica:

- ✅ Aparece la **pantalla de presentación** con la imagen de portada durante un par de segundos.
- ✅ El **icono** de la app en la pantalla de inicio es el logo de Medartis.
- ✅ Se pueden seleccionar kits y aumentar/disminuir cantidades con los botones **+ / −**.
- ✅ Se pueden rellenar los datos del centro, fecha, cirujano y paciente.
- ✅ Se puede adjuntar una foto.
- ✅ El botón **📋 (resumen)** muestra el pedido completo.
- ✅ El botón **🖨 PDF / Imprimir** genera el documento para imprimir o guardar como PDF.
- ✅ El nuevo botón **📤 Compartir** abre el menú nativo de compartir del móvil (WhatsApp, email, Mensajes, etc.) con el resumen del pedido. Si el dispositivo no soporta "compartir", copiará el resumen al portapapeles.

## Funcionamiento sin conexión

Después de la primera vez que abras la app con conexión a internet, quedará guardada una copia en el dispositivo. Esto permite:

- Abrir la app y consultar/rellenar pedidos aunque no haya wifi ni datos móviles (por ejemplo, dentro del quirófano).
- El envío con el botón **Compartir** o la impresión seguirán funcionando sin conexión.

## Solución de problemas

| Problema | Solución |
|---|---|
| No aparece la opción "Añadir a pantalla de inicio" en iPhone | Asegúrate de estar usando **Safari**, no Chrome ni otro navegador |
| Los iconos o la imagen de portada no se ven | Revisa el Tutorial 1: la estructura de carpetas `icons/` y `assets/` debe mantenerse junto a `index.html` |
| La app instalada muestra una versión antigua tras una actualización | Cierra la app por completo (deslizar para cerrar) y vuelve a abrirla; si persiste, desinstala y vuelve a instalar |
| El botón Compartir no hace nada | En navegadores de escritorio o algunos Android antiguos, copiará el texto al portapapeles automáticamente en lugar de abrir el menú de compartir |

---

Con esto, la app queda lista para usarse a diario desde el móvil, en iOS y Android, igual que cualquier aplicación instalada desde una tienda de apps.
