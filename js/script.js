// MENSAJE DE ERROR PERSONALIZADO PARA EL INPUT DEL RM

const rm = document.getElementById("rm");

rm.addEventListener("input", () => {
    rm.setCustomValidity("");   // limpia el mensaje anterior

    if (rm.validity.rangeUnderflow) {
        rm.setCustomValidity("Ese peso es muy bajo. Sube un poco el RM.");
    } else if (rm.validity.rangeOverflow) {
        rm.setCustomValidity("Ese peso es muy alto. Revisa el RM.");
    }
});

// TABLA DE RESULTADOS

const form = document.getElementById("emomForm");
const resultado = document.getElementById("resultado");
const resultadoTexto = document.getElementById("resultadoTexto");
const tbody = document.querySelector("#tablaEmom tbody");

const FASES = [
    { minutos: "Min 1 - 2",   porcentaje: 65, reps: 5 },
    { minutos: "Min 3 - 4",   porcentaje: 70, reps: 4 },
    { minutos: "Min 5 - 6",   porcentaje: 75, reps: 3 },
    { minutos: "Min 7 - 8",   porcentaje: 80, reps: 2 },
    { minutos: "Min 9 - 10",  porcentaje: 85, reps: 1 },
    { minutos: "Min 11 - 12", porcentaje: 90, reps: 1 },
    { minutos: "Min 13 - 14", porcentaje: 95, reps: 1 }
];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ejercicio = document.getElementById("ejercicio").value;
    const rmKg = Number(rm.value);

    resultadoTexto.textContent = `EMOM de 14 minutos: ${ejercicio} (RM: ${rmKg} kg)`;

    tbody.replaceChildren();   // vacía la tabla antes de rellenarla

    FASES.forEach((fase) => {
        const peso = Math.round((rmKg * fase.porcentaje / 100) / 2.5) * 2.5;   // redondea a discos de 2,5 kg

        const fila = tbody.insertRow();
        fila.insertCell().textContent = fase.minutos;
        fila.insertCell().textContent = `${fase.reps} ${fase.reps === 1 ? "Rep" : "Reps"}`;
        fila.insertCell().textContent = `${peso} kg`;
    });

    resultado.hidden = false;
    document.getElementById("tablaEmom").hidden = false;
    document.getElementById("linkhidden").hidden = false;   // muestra el enlace a la imagen del EMOM
});
