# Git & GitHub en Visual Studio Code

Este README agrupa todos los comandos y opciones del menú de control de Git integrados en VS Code, organizados por categoría.

---

## 🔍 1. View & Sort  
Controla la vista y el orden de tus cambios en el panel de Git:
- **View & Sort**  
  - Cambiar orden, agrupación y filtrado de archivos modificados.

---

## 📥 2. Clone / Checkout / Fetch  
Operaciones básicas de sincronización y descubrimiento de ramas:
- `Clone`  
  Clonar un repositorio remoto en tu equipo y abrirlo en VS Code.
- `Checkout to…`  
  Cambiar o crear una rama local.
- `Fetch`  
  Descargar commits, ramas y tags del remoto **sin** aplicar cambios a tu rama local.  
- `Fetch (Prune)`  
  Igual que `Fetch`, y además elimina referencias a ramas remotas borradas.
- `Fetch From All Remotes`  
  Trae cambios de **todos** los remotos configurados.

---

## ✅ 3. Changes  
Gestiona qué cambios van al próximo commit:
- `Stage All Changes`  
  Añade **todos** los archivos modificados al área de staging.
- `Unstage All Changes`  
  Quita **todos** los archivos del área de staging.
- `Discard All Changes`  
  ⚠️ Descarta **todos** los cambios en el working tree (no hay vuelta atrás).

---

## 💾 4. Commit  
Confirma tus cambios en el historial de Git:
- `Commit` / `Commit Staged`  
  Hace commit de lo que está en staging.
- `Commit All`  
  Hace commit de **todos** los cambios, sin necesidad de staging.
- `Undo Last Commit`  
  Revierte tu último commit (manteniendo los archivos en tu área de trabajo).
- **Amend**  
  - `Commit (Amend)`  
  - `Commit Staged (Amend)`  
  - `Commit All (Amend)`  
  Reemplaza el último commit con uno nuevo (útil para corregir el mensaje o añadir cambios).
- **Signed Off**  
  - `Commit (Signed Off)`  
  - `Commit Staged (Signed Off)`  
  - `Commit All (Signed Off)`  
  Hace commit con la firma (`—signed-off-by`) requerida en algunos proyectos.

---

## 🔄 5. Pull & Push  
Sincroniza tus ramas locales con el remoto:
- **Sync**  
  Ejecuta `Pull` + `Push` en un solo paso.
- **Pull**  
  Trae cambios del remoto **y** los mergea automáticamente.
- **Pull (Rebase)**  
  Trae cambios y aplica un rebase (historial más lineal).
- **Pull from…**  
  Elige explícitamente qué remoto/rama usar para el pull.
- **Push**  
  Envía tus commits locales al remoto.
- **Push to…**  
  Selecciona a qué remoto y rama quieres hacer push.
- **Fetch** (ver sección anterior)

---

## 🌿 6. Branch  
Trabaja con ramas locales y remotas:
- `Merge…`  
  Fusiona otra rama en la rama actual.
- `Rebase Branch…`  
  Reescribe tu rama aplicando commits sobre otro punto base.
- `Create Branch…`  
  Crea una rama nueva.
- `Create Branch From…`  
  Crea una rama tomando como base otra ya existente.
- `Rename Branch…`  
  Cambia el nombre de la rama actual.
- `Delete Branch…`  
  Elimina una rama local.
- `Delete Remote Branch…`  
  Elimina una rama en el repositorio remoto.
- `Publish Branch…`  
  Sube (publica) tu rama local al remoto.

---

## 🌐 7. Remote  
Configura y gestiona repositorios remotos:
- `Add Remote…`  
  Añade un nuevo remoto (p. ej. GitHub, GitLab).
- `Remove Remote`  
  Elimina la conexión con el remoto seleccionado.

---

## 🗄️ 8. Stash  
‘Pausa’ tu trabajo sin hacer commit:
- `Stash`  
  Guarda tus cambios actuales.
- `Stash (Include Untracked)`  
  Guarda también archivos no rastreados.
- `Stash Staged`  
  Sólo guarda lo que está en staging.
- `Apply Latest Stash` / `Apply Stash…`  
  Recupera cambios de un stash.
- `Pop Latest Stash` / `Pop Stash…`  
  Aplica y elimina el stash en un solo paso.
- `Drop Stash…` / `Drop All Stashes…`  
  Borra uno o todos los stashes.

---

## 🏷️ 9. Tags  
Marca puntos importantes (versiones) en tu historial:
- `Create Tag…`  
  Crea una etiqueta (tag) en el commit actual o seleccionado.
- `Delete Tag…`  
  Elimina un tag local.
- `Delete Remote Tag…`  
  Elimina un tag del repositorio remoto.

---

## 💻 10. Show Git Output  
- Abre la consola de salida de Git en VS Code para ver logs, errores y detalles de cada operación.

---


