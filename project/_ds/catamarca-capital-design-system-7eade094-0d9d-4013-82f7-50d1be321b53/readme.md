# Catamarca Capital — Design System

Sistema de diseño de **Catamarca Capital**, la marca institucional de la Municipalidad de San Fernando del Valle de Catamarca (Secretaría de Turismo y Desarrollo Económico · Gestión Muni).

> **Idea rectora:** *La ciudad va con vos.* Una ciudad que avanza junto a las personas, promoviendo participación, bienestar y orgullo ciudadano con una comunicación moderna, humana y cercana.

This file is the guide + manifest. Everything is discovered by the compiler from file content — the global entry point is **`styles.css`** (a list of `@import`s reaching every token + font).

---

## Sources provided

These are the materials this system was built from (you may not have access — stored for reference):

- **Manual de Identidad de Marca** — paleta cromática, sistema tipográfico, sistema de claims, iconografía, fotografía, superposición (provided as notes).
- **`Manual_de_Marca_Brand_Guidelines.md`** (v1, Jul 2025) — isologotipo, zona de exclusión 4x/5x/4x, tamaños mínimos, prohibiciones, perfil de color `sRGB IEC61966-2.1`.
- **`Manual_Social_Media_Catamarca_Capital.md`** (Ago 2025) — estrategia "La ciudad va con vos", doble lectura, estructura de copys, ejes temáticos.
- **`Anexo_Aplicacion_Redes_Sociales.md`** — canales, hashtags, y los **6 tipos de pieza** de la grilla social (logo = ¼ del ancho).
- **`Manual de Marca_CatamarcaCapital.pdf`** (29 pp) — versión oficial del manual (isologotipo, pluma, grilla, prohibiciones, paleta, tipografías).
- **`Anexo Aplicación en Piezas Audiovisuales_CatamarcaCapital.pdf`** (28 pp) — **mosca**, subtítulos, **zócalos** (nombre/cargo), tag de ubicación, transiciones, **cierres**, **portadas** de video (9:16/4:5/16:9) y **sobreimpresos**.
- **Logos:** `assets/logos/` — isologotipo azul (sobre claro) y blanco (sobre oscuro); **isotipo** azul/blanco recortado del isologotipo (para mosca/favicon). ⚠️ La versión **full-color** y el **`.ai`** son vectoriales dentro del PDF y no se pudieron extraer; la **versión pluma** tampoco llegó como archivo.
- **Fuentes:** familia completa Helvetica Neue LT Std + Krimson (`.otf` originales en `uploads/`, subconjunto autorizado en `assets/fonts/`).

---

## Content fundamentals — cómo escribe la marca

La voz es **cercana, positiva, humana, directa, empática y actual**. El protagonista es siempre el ciudadano ("vos hacés"), no el municipio.

- **Persona:** segunda persona del singular — **"vos"** (no "usted", no "ustedes"). *"Si querés vivir de lo que hacés…"*
- **Tono:** conversacional, breve, en positivo. Frases cortas, lenguaje actual.
- **Mayúsculas:** titulares contundentes en MAYÚSCULA (condensada). Cuerpo en caja normal.
- **Emoji:** no forman parte del sistema. Para iconografía usar el set informativo (ver abajo).
- **Evitar:** lenguaje burocrático, frío, autoritario, mensajes negativos, frases largas, exceso de formalidad.

### El sistema de claim (verbo "ir")
Fórmula: **`[Acción o valor positivo]` + `claim`**. Claims oficiales — no reformular:

> **Va con vos! · Re va! · Sí va! · Así va! · Va bien!**

Ejemplos: *"Cuidar el ambiente re va!"* · *"Estudiar lo que te gusta sí va!"* · *"Disfrutar la ciudad va bien!"*
Los claims se setean **siempre en Krimson** (nunca en Helvetica).

### Estructura de copy larga (redes / discurso)
> *"Si te importa que [valores/acción]… Catamarca Capital va con vos. Va con vos cuando [acción concreta del Estado]… Porque cuando vos [acción del ciudadano], la ciudad [cierre con sentido compartido]."*

**Doble lectura de "La ciudad va con vos":** (1) *acompañamiento* — la ciudad te acompaña; (2) *identificación* — la ciudad se parece a vos. Ambas son correctas y se refuerzan.

Ejes temáticos con copy modelo (ver `Manual_Social_Media`): Educación, Salud, Cultura, Desarrollo Económico, Infraestructura, Ambiente, Higiene Urbana, Modernización, Inclusión y Género, Movilidad Sustentable, Juventudes.

---

## Visual foundations

**Vibe:** moderna, dinámica, optimista, diversa, participativa. Construcción por **superposición** de capas — fotografía protagonista + titulares contundentes + iconografía + recursos decorativos — manteniendo siempre la legibilidad.

- **Color:** paleta amplia (perfil `sRGB IEC61966-2.1`) — ver `tokens/colors.css`. **El color principal es AZUL** (Azul Institucional `#0F4C94` y Azul Oscuro `#002454`, el navy del logo) — es la espina institucional de la marca. Los **verdes** (Verde Petróleo `#005151`) son **temáticos** (Ambiente / sustentabilidad), NO el color base; usar verde como fondo dominante hace que una pieza “parezca” campaña de Ambiente. Energía y movimiento con **fucsia `#FF00B7`** (acento + foco), magenta, naranja y amarillos lima. Cada eje temático tiene su color (Salud→celeste, Cultura→negro/amarillo, Trámites→azul+magenta, Ambiente→verde). Usar 1–2 colores de fondo por pieza. Los colores **no se alteran** jamás.
- **Claim:** sistema del verbo «ir» en **Krimson** con **subrayado dibujado a mano**, integrado al título en color de alto contraste (lima/celeste/amarillo/fucsia/blanco) — nunca texto negro sobre pill. Claims oficiales: *va con vos! · re va! · sí va! · así va! · va bien!*
- **Mosca:** bracket de esquina en **amarillo** (eco de la flecha del isotipo), arriba-derecha por defecto, presente en casi toda pieza.
- **Tipografía:** **Helvetica Neue LT Std** (Light→Black + Condensed) para todo; titulares en **Condensed Black/Heavy** en mayúscula; cuerpo en Roman. **Krimson** sólo para claims/remates. Ver `tokens/typography.css`. Las fuentes condensadas y Krimson usan `font-display: block` para evitar saltos de layout con su métrica.
- **Fondos:** fotografía real a sangre (full-bleed) con scrim/gradiente de protección para legibilidad; bloques de color pleno; trama geométrica tenue (eco del isotipo en píxeles) como textura sutil. No gradientes decorativos azul-violeta.
- **Imagery:** personas reales, diversidad, escenas cotidianas, espacios urbanos, cultura, deporte, educación, comunidad. Cálida y humana. *(En las maquetas se usan placeholders de `picsum.photos`; reemplazar por fotografía propia.)*
- **Superposición / protección:** sobre foto, usar gradiente de protección (no cápsulas pesadas) para sostener texto blanco. Zócalos institucionales limpios para alojar claim + logo.
- **Forma & radios:** geometría moderna; radios moderados (`--radius-md` 12px en cards, `--radius-lg` 18px en superficies); **pill** (999px) para tags, chips y claims. El isotipo es pixelado/geométrico → no abusar de esquinas muy redondeadas.
- **Bordes & elevación:** hairline `#DCE3E8` en cards; sombras suaves con tinte navy (`--shadow-sm/md`), nunca pesadas. **El logo nunca lleva sombra, contenedor ni efecto.**
- **Cards:** fondo blanco, borde hairline, radio `lg`, sombra `sm`; borde superior de acento opcional (4px) para codificar categoría.
- **Movimiento:** enérgico pero nunca gimmicky. `ease-out` rápido (140–220ms); leve *overshoot* (`--ease-overshoot`) en toggles para evocar "movimiento". Sin loops decorativos infinitos.
- **Estados:** hover = color más fuerte (primarios) o relleno suave (outline/ghost); press = `translateY(1px)`. Foco visible = anillo fucsia.

---

## Iconography

- **Iconografía informativa** (funcional): geométrica, clara, sintética. Sistema elegido: **Lucide** (CDN, trazo 2px) — coincide con el espíritu "geométrico/funcional" del manual. Se carga desde `https://unpkg.com/lucide` y se documenta como el set informativo del sistema. *(Sustitución señalada: el manual no entrega un set propio de íconos; Lucide es el match más cercano.)*
- **Iconografía decorativa** (gestual, orgánica, humana): reservada para dar calidez; aún **no** incluida como assets (no se entregaron archivos). Si se proveen SVG/ilustraciones gestuales, sumarlas a `assets/`.
- **Motivo de marca:** el **isotipo pixelado** (bloques tipo ">") se reutiliza como trama/textura decorativa tenue en fondos (ver Hero del portal y post tipográfico).
- **Emoji:** no se usan.

---

## Audiovisual — elementos para video (Anexo)

Specs clave del *Anexo de Aplicación en Piezas Audiovisuales* (formatos 16:9 / 9:16 / 4:5 / 1:1):

- **Mosca:** sólo el **isotipo** dentro de su contenedor en `#002454` (Azul Oscuro). Se usa en todos los formatos **menos 9:16**.
- **Subtítulos:** Helvetica Neue LT Std 75 Bold, blanco, 50 pt / interlineado 55, párrafo centrado, hasta 2 renglones.
- **Mosca de ubicación:** Helvetica 75 Bold, 30 pt, alineado a la izquierda, fondo en color de paleta (ej. *Plaza 25 de Mayo*).
- **Zócalos (nombre + cargo):** lower-third para testimonios y funcionarios (ej. *Gustavo Saadi · Intendente de Catamarca Capital*); colores de paleta.
- **Cierre:** isologotipo centrado vertical y horizontalmente; sobre foto aplicar **desenfoque gaussiano 10% + opacidad 60%** para contraste.
- **Portadas de video:** titular condensado contundente + claim en Krimson; **alternar colores** de fondo para no generar monotonía en el perfil.
- **Sobreimpresos:** texto sobre la persona (arriba o abajo); se **resaltan las palabras clave** con color y cambio tipográfico (Krimson/fucsia); los íconos entran y salen "garabateados".

## Index — qué hay en este sistema

**Foundations & tokens**
- `styles.css` — entry point (`@import`s).
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css`.
- `assets/fonts/` — Helvetica Neue LT Std (subconjunto autorizado) + Krimson.
- `assets/logos/` — isologotipo azul + blanco.

**Specimen cards** (`guidelines/`) — Colors (greens, energy, blues, neutrals), Type (display, body, claim), Spacing (scale, radii/elevation), Brand (logo, isotipo & mosca, claims).

**Components** (`components/`) — namespace `window.CatamarcaCapitalDesignSystem_7eade0`:
- `buttons/` — **Button**, **IconButton**
- `display/` — **Card**, **Badge**, **Tag**, **Avatar**
- `forms/` — **Input**, **Select**, **Checkbox**, **Switch**
- `feedback/` — **Alert**
- `navigation/` — **Tabs**
- **brand/** — **ClaimChip** (claim en Krimson con subrayado a mano), **Mosca** (bracket de esquina amarillo)

**UI kits**
- `ui_kits/portal/` — Portal municipal (Inicio + Trámites), interactivo. `index.html`.
- `ui_kits/social/` — 6 piezas reales de la grilla (4:5 / 1:1), con mosca amarilla en esquina, título condensado en mayúscula, claim en Krimson y zócalo fijo «Una ciudad con más [X] va con vos» + logo: **Cultura** (Experiencia Frida), **Trámite** (¿Cómo hacer el trámite?), **Salud** (Vacunas), **Alerta** (Tormenta eléctrica), **Ambiente** (Plan Forestal 2030), **Movilidad** (Licencia de conducir). Estructura común en `social.css`.
- `ui_kits/audiovisual/` — elementos para video (Anexo Audiovisual): **Cierre** (logo centrado, foto 60% + blur 10%), **Zócalo** nombre/cargo, **Subtítulo + Mosca**, **Mosca ubicación**, **Portada vertical 9:16**, **Sobreimpreso**.
- `ui_kits/mi-capital-conecta/` — **SUB-MARCA** (programa de beneficios). Pieza publicitaria *«Todos los beneficios para vos»* + claim *«Tu esfuerzo, tu ganancia»* y zócalo de convivencia con el isologotipo de Catamarca Capital. Estructura en `conecta.css`.

### Mi Capital Conecta (sub-marca aislada)
Programa de beneficios ciudadanos. **No comparte la paleta de Catamarca Capital** — tiene la suya, scoped en `.conecta` (`tokens/conecta.css`):
- **Azul Conecta** `#0F4C94` (principal, = azul institucional) · **Cyan** lazo del logo `#00E6FB` / celeste soporte `#6EC4D8` · **Lima** `#B9CE12`.
- Claim propio: **«Tu esfuerzo, tu ganancia»** (Krimson). CTA tipo *«Entrá a Mi Capital Conecta y enterate de todos los beneficios para vos»*.
- **Convivencia:** ambos logos en **zócalo blanco**, full color, respetando cada manual. Nunca mezclar colores de las dos marcas en un mismo bloque.
- ✅ **Logo real** extraído del manual: `assets/logos/conecta/conecta-color.png` (sobre claro) y `conecta-blanco.png` (sobre navy). El isologotipo es «conecta» con la **e formada por un lazo cyan**.

**Skill** — `SKILL.md` (Agent Skill cross-compatible).

---

## Usage

Consumers link one file:
```html
<link rel="stylesheet" href="styles.css">
```
Mount components from the global namespace:
```js
const { Button, Card, ClaimChip } = window.CatamarcaCapitalDesignSystem_7eade0;
```

---

## Caveats / pendientes
- **Logo full-color** y `.ai` faltantes — sólo tenemos azul y blanco. Falta también la **versión pluma** (monocromática a una tinta).
- **Iconografía decorativa** e **ilustraciones gestuales** no entregadas — el anexo audiovisual menciona íconos "garabateados" (hand-drawn) que entran/salen en los sobreimpresos; usar Lucide (informativa) por ahora hasta tener los assets reales.
- **Logos vectoriales:** los PDFs traen los logos como vectores; el render de página excede el tiempo del entorno, así que **no se pudieron extraer en alta** — sigo necesitando el `.ai`/`.svg` full-color y pluma.
- **Fotografía** en maquetas = placeholders `picsum.photos`; reemplazar por banco propio (personas reales, diversidad, cálido).
- Helvetica Neue LT Std y Krimson son **fuentes con licencia**; los `.otf` provistos se usan tal cual.
