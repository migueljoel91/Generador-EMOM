// MENSAJE DE ERROR PERSONALIZADO PARA EL INPUT DEL RM

const rm = document.getElementById("rm");

rm.addEventListener("input", () => {
    rm.setCustomValidity("");               // limpia el mensaje anterior

    if (rm.validity.rangeUnderflow) {
        rm.setCustomValidity("¿No te da vergüenza o qué pedazo de homosexual? Sube eso anda");
    } else if (rm.validity.rangeOverflow) {
        rm.setCustomValidity("Me da que te flipaste un poco, ¿no? Baja eso anda");
    }
});

// TABLA DE RESULTADOS

const form = document.getElementById("emomForm");
const resultado = document.getElementById("resultado");
const resultadoTexto = document.getElementById("resultadoTexto");
const tbody = document.querySelector("#tablaEmom tbody");

const FASES = [
    { minutos: "Min 1 - 2",   porcentaje: 65, reps: 5, enfoque: "Activación, ritmo constante y buena profundidad." },
    { minutos: "Min 3 - 4",   porcentaje: 70, reps: 4, enfoque: "Tensión constante en el core y bajada controlada." },
    { minutos: "Min 5 - 6",   porcentaje: 75, reps: 3, enfoque: "Salida explosiva desde el fondo (bottom)." },
    { minutos: "Min 7 - 8",   porcentaje: 80, reps: 2, enfoque: "Carga pesada; máxima concentración en la postura." },
    { minutos: "Min 9 - 10",  porcentaje: 85, reps: 1, enfoque: "Repetición sólida y pesada." },
    { minutos: "Min 11 - 12", porcentaje: 90, reps: 1, enfoque: "Cerca del esfuerzo máximo sin perder la técnica." },
    { minutos: "Min 13 - 14", porcentaje: 95, reps: 1, enfoque: "Último empuje; busca una repetición limpia y potente." }
];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const select = document.getElementById("ejercicio");
    const ejercicio = select.options[select.selectedIndex].text;
    const rmKg = Number(document.getElementById("rm").value);

    resultadoTexto.textContent = `EMOM de 14 minutos: ${ejercicio} (RM: ${rmKg} kg)`;

    tbody.innerHTML = "";

    FASES.forEach((fase) => {
        const peso = Math.round((rmKg * fase.porcentaje / 100) / 2.5) * 2.5;   // redondea a discos de 2,5 kg

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${fase.minutos}</td>
            <td>${fase.reps} ${fase.reps === 1 ? "Rep" : "Reps"}</td>
            <td>${peso} kg</td>
            <td>${fase.enfoque}</td>
        `;
        tbody.appendChild(fila);
    });

    resultado.hidden = false;
    document.getElementById("tablaEmom").hidden = false;
});