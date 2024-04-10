import Animal from "./animal.js"

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Rugir() {
        console.log("leon esta rugiedo")
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar() {
        console.log("lobo esta aullando")
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    gruñir() {
        console.log("oso esta gruñendo")
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear() {
        console.log("serpiente esta siseando")
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar() {
        console.log("serpiente esta chillando")
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };