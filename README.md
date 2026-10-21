# Generador de EMOM

Aplicación web hecha con HTML, CSS y JavaScript que genera un entrenamiento EMOM de fuerza de 14 minutos a partir del ejercicio elegido y del RM del usuario.

## Funcionalidades

- Formulario con selector de **ejercicio** (Back squat, Deadlift, Push Press y Front squat) y campo de **RM en kg**.
- Validación del RM entre **45 y 400 kg**, con mensajes de error personalizados.
- Al pulsar *Generar EMOM* se muestra una **tabla de 14 minutos** con:
  - Minutos de cada fase.
  - Repeticiones por minuto (bajan de 5 a 1 según avanza el entrenamiento).
  - Peso en kg, calculado como porcentaje del RM (del 65% al 95%) y redondeado a discos de 2,5 kg.
  - Enfoque o sensación de cada fase.
- Diseño oscuro y adaptable (responsive) con media queries para tablet y móvil.
- Footer siempre al final de la página.

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
3. Elige un ejercicio e introduce tu RM en kg (entre 45 y 400).
4. Pulsa **Generar EMOM** para ver tu tabla de entrenamiento.

## Cómo funciona el EMOM

EMOM significa *Every Minute On the Minute*: al inicio de cada minuto se hacen las repeticiones indicadas y el tiempo que sobra hasta completar el minuto es el descanso. Las repeticiones van bajando y el peso subiendo cada 2 minutos:

| Minutos | % del RM | Repeticiones |
|---------|----------|--------------|
| 1 - 2   | 65%      | 5            |
| 3 - 4   | 70%      | 4            |
| 5 - 6   | 75%      | 3            |
| 7 - 8   | 80%      | 2            |
| 9 - 10  | 85%      | 1            |
| 11 - 12 | 90%      | 1            |
| 13 - 14 | 95%      | 1            |

## Personalización

Todo el entrenamiento está definido en el array `FASES` de `js/script.js`. Para cambiar porcentajes, repeticiones o textos de enfoque, solo hay que editar ese array; el resto del código no necesita cambios.

## Tecnologías

- **HTML5**: estructura y formulario con validación nativa (`required`, `min`, `max`).
- **CSS3**: variables CSS, Flexbox, CSS Grid y media queries (`max-width: 768px` y `max-width: 480px`).
- **JavaScript**: manipulación del DOM, eventos, `setCustomValidity` y generación dinámica de la tabla.
