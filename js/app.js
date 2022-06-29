addEventListener(DOMConentLoaded , () => {
    const btn-menu - document.querySelector (".btn-menu")
    if (btn-menu) {
        btn-menu-addEventListener ("click", () => {
            const menu-items = document.querySelector(".menu-items")
            menu-items.classlist.toggle ("muestra")

        })
    }
})