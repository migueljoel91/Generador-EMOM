# Tiempo restante para la finalización del curso

Pequeña aplicación web hecha con HTML, CSS y JavaScript que calcula cuánto tiempo falta para terminar el curso, con y sin aplazamiento.

## Funcionalidades

- Muestra la **fecha actual** y permite actualizarla con el botón *Actualizar*.
- Muestra la **fecha final del curso** (01/07/2028).
- Calcula el tiempo restante en años, meses y días con el botón *Calcular restante*.
- Una vez calculado, aparece el botón *Calcular con aplazamiento*, que suma 34 días al resultado.
- Diseño adaptable (responsive) con media queries para tablet y móvil.

## Estructura del proyecto

```
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## Cómo usarlo

1. Descarga o clona el proyecto.
2. Abre `index.html` en tu navegador (no necesita servidor ni instalación).
3. Pulsa **Calcular restante** para ver el tiempo que falta.
4. Pulsa **Calcular con aplazamiento** para ver el resultado sumando los 34 días de aplazamiento.

## Tecnologías

- **HTML5**: estructura de la página.
- **CSS3**: Flexbox, CSS Grid y media queries (`max-width: 768px` y `max-width: 480px`).
- **JavaScript**: manipulación del DOM, eventos y objeto `Date`.

## Notas

- Los meses se calculan con una aproximación de 30 días, por lo que el resultado puede variar ligeramente respecto al cálculo exacto de calendario.
- La fecha final y el aplazamiento están definidos como constantes en `js/script.js` (`FECHA_FINAL` y `APLAZAMIENTO`), por lo que se pueden modificar fácilmente.
