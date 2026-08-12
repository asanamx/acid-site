# Logos de clientes (marquee de marcas)

Sube aquí los logos de marca. El sitio los toma automáticamente: si el archivo
existe se muestra el logo; si no, se muestra el nombre del cliente en texto
(fallback). No hay que tocar código.

## Nombres de archivo EXACTOS que espera el sitio
(definidos en `data/content.js` → `BRANDS[].logo`)

| Cliente        | Archivo requerido        |
|----------------|--------------------------|
| Land Rover     | `landrover.svg`          |
| MTV            | `mtv.svg`                |
| BBVA           | `bbva.svg`               |
| Tec de Monterrey | `tec.svg`              |
| Club Pachuca   | `pachuca.svg`            |
| Tajín          | `tajin.svg`              |
| BAMX           | `bamx.svg`               |
| HLB            | `hlb.svg`                |
| Catal 1.5°T    | `catal.svg`              |
| Zoebisch       | `zoebisch.svg`           |

## Recomendaciones
- Formato preferido: **SVG** (nítido a cualquier tamaño). PNG con fondo
  transparente también sirve (mín. ~400px de alto).
- Logos **monocromos en blanco** (o que se vean bien sobre fondo oscuro),
  ya que el marquee va sobre fondo Carbón/Noche.
- Si el nombre no coincide EXACTO con la tabla, no se mostrará.
