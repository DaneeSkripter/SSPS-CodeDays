class Student {
    constructor(jmeno, vek, trida) {
            this.jmeno = jmeno;
            this.vek = vek;
            this.trida = trida

            if (typeof jmeno !== "string") {
                throw new TypeError("Jméno musí být řetězec");
            } else if (typeof vek !== "number") {
                throw new TypeError("Věk musí být číslo");
            } else if (typeof trida !== "string") {
                throw new TypeError("Třída musí být řetězec");
            }
        }
}


let student = new Student("Daniel", 15, "9.C")
console.log()