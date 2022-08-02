import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("checa duplicatas", () => {
        const check = checaItensDuplicados([1, 2, 1])

        expect(check).toEqual(true)
    })

    test("checa duplicatas letras", () => {
        const check = checaItensDuplicados(["a", "a", "b", "c"])

        expect(check).toEqual(true)
    })

    test("checa duplicatas numeros", () => {
        const check = checaItensDuplicados([5, 5, 3, 6, 5, 6])

        expect(check).toEqual(true)
    })

    test("checa duplicatas um numero", () => {
        const check = checaItensDuplicados([1])

        expect(check).toEqual(true)
    })
});
