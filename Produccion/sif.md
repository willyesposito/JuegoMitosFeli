# Orden de producción — Sif

**Estado: BLOQUEADA.** Faltan dos campos de identidad. Ver §11. No generar hasta cerrarlos.

**Imagen actual:** `imagenes/sif.jpg`, a reemplazar. Falló por tres motivos: cara de Rapunzel
de *Enredados*, acción prestada de Deméter (canasto y siembra) en vez de la suya, y estilo
cel 2D, fuera de norma desde la decisión de estilo del 2026-09-14.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

---

## 1. Identidad

| Campo | Valor | Fuente |
|---|---|---|
| Mitología | nórdica | `personajes.json` |
| Tier | plateado | `personajes.json` |
| Edad aparente | adulta joven-madura | ADN |
| Contextura | media | ADN, matriz `MC 5` / `AN 5` |
| Rostro | oval ancho | ADN |
| Cabello, forma | extremadamente largo, pesado y voluminoso | ADN |
| Cabello, color | oro verdadero, metal que crece como pelo real | `personajes.json` → dones e historia |
| Piel | `[FALTA]` | pendiente lote 5 |
| Ojos | `[FALTA]` | pendiente lote 5 |

## 2. Detalle reconocible

**El cabello de oro.** Es su título en el juego ("La diosa del cabello de oro"), su único don
listado y el eje de su historia. La ficha lo llama protagonista absoluto y la matriz le da
`CO 10`, el contorno orgánico más alto de los 85: es el único personaje del roster cuyo
contorno lo define el pelo.

Tiene que leerse **oro de verdad**, no rubio intenso. Ahí está la diferencia entre esta carta
y cualquier chica rubia: metal con reflejo direccional y peso visible, que igual cae y se
mueve como pelo. Si un chico mira la carta y piensa "rubia", la imagen falló.

## 3. Acción

Una mano levanta una porción del cabello para mostrar su materialidad y su peso.

Es la acción de la ficha y no se cambia. Es lo que separa esta carta de un retrato de una
mujer de pelo largo: acá el personaje **muestra** el objeto que la identifica, y ese objeto
es parte de su cuerpo.

**Prohibido para esta carta:** sembrar, esparcir semillas, llevar canasto, cosechar, agacharse
hacia plantas. Eso es de Deméter, y Sif es su par de Espejo en el juego (`espejo: demeter`).
Justamente porque el juego las empareja, las imágenes tienen que separarse solas.

## 4. Silueta y composición

- Masa dorada de cabello ocupando un lateral completo y rompiendo el contorno del cuerpo.
- Lado opuesto claramente más limpio.
- Perfil tres cuartos.
- Densidad visual media. Matriz: `DV 6`, `DP 2`, `AC 5`. Es una carta quieta.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Cabello de oro.** Identificador. `personajes.json`, dones.
2. **Vestido nórdico liso**, sin ornamento. Necesario para vestirla; sin autorización de
   ningún adorno concreto, va liso.
3. **Campo de trigo**, al fondo y subordinado. ADN, pistas secundarias autorizadas.

Nada más. En particular, y porque ya pasó en las cartas nórdicas: **sin** nudo celta, **sin**
cuello ni ribete de piel, **sin** broche redondo, **sin** medallón, **sin** botas envueltas,
**sin** cinturón con hebilla decorada, **sin** trenzas con anillos, **sin** joyas, **sin**
flores en el pelo, **sin** runas. Ese kit se repitió en seis cartas nórdicas y es la razón por
la que Sif, Freya, Odín, Loki, Sigurd y las Valquirias parecen del mismo disfraz.

## 6. Escenario

Campo de trigo maduro. Sale del `porque` de `personajes.json`: "los nórdicos asociaban el
cabello dorado de Sif con los campos de trigo maduro que brillan al sol". El trigo es también
su ícono en la colección.

Subordinado y desenfocado. **Sin** casa comunal, **sin** drakkar, **sin** estandarte, **sin**
montaña nevada, **sin** fiordo, **sin** aldea. Nada de eso está autorizado y todo eso apareció
en la imagen que se reemplaza.

El oro del pelo y el oro del trigo son el mismo color: el trigo tiene que quedar más apagado y
más frío para que el pelo gane. Es el problema compositivo central de esta carta.

## 7. Separación obligatoria

**Contra Freya**, su único riesgo declarado. Ambas son nórdicas, femeninas, `EV 5`, `MC 5`,
`CO 9-10`. Se separan así, en positivo:

| | Sif | Freya |
|---|---|---|
| Qué rompe el contorno | sólo el pelo | la capa de plumas |
| Movimiento | quieta, `DP 2` | ascendente, `DP 7` |
| Acompañantes | ninguno | dos gatos |
| Magia visible | ninguna | seidr |
| Escenario | campo de trigo | altura |

**Contra Deméter**, por el emparejamiento del Espejo: Deméter es mayor, más pesada, se inclina
hacia el suelo y trabaja con las manos. Sif es más joven, está erguida y quieta, y no trabaja.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto. Zona limpia detrás de la cabeza. El recorte circular
tiene que conservar rostro rodeado de volumen dorado inequívoco, como restricción invisible:
no se dibuja ningún círculo, medallón ni retrato secundario.

## 9. Registro

Serena y segura. No coqueta, no triste, no solemne. No hace falta que sonría.

## 10. Contaminación a evitar en esta carta

Rapunzel de *Enredados* (Disney, 2010). Es la contaminación que ya ocurrió: pelo dorado
larguísimo más cara de princesa animada. El riesgo es alto porque la descripción textual de
Sif y la de Rapunzel coinciden casi palabra por palabra. La defensa no es prohibirla, es que
el pelo sea metal y la cara sea de adulta real en estilo semirrealista.

## 11. Qué falta para desbloquear

- `[FALTA]` **Tono de piel.** Ninguna fuente del repo lo declara.
- `[FALTA]` **Color de ojos.** Ídem.

Salen del lote 5 de `Documentacion/prompt_investigacion_85.md`. Si vuelve `SIN ATESTACIÓN`, se
decide acá y se escribe con la etiqueta de decisión de diseño. Lo que no puede pasar es
generar sin decidir: ahí es donde el generador pone castaño de rostro oval por defecto.
