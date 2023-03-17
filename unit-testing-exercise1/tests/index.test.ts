import { calculateTax } from "../src";
import { generateNumber } from "./factories/index.factory";

describe("taxes test unity", () => {
  it("when salary < 2500", () => {
    const salary = generateNumber(0, 2500);
    const taxes = calculateTax(salary);

    expect(taxes).toBe(0);
  })
  it("when salary < 3200", () => {
    const salary = generateNumber(2501, 3200);
    const taxes = calculateTax(salary);

    expect(taxes).toBe(salary * 0.075);
  })
  it("when salary < 4250", () => {
    const salary = generateNumber(3201, 4250);
    const taxes = calculateTax(salary);

    expect(taxes).toBe(salary * 0.15);
  })
  it("when salary < 4250", () => {
    const salary = generateNumber(4250, 5300);
    const taxes = calculateTax(salary);

    expect(taxes).toBe(salary * 0.225);
  })
  it("when salary > 5300", () => {
    const salary = generateNumber(5301, 100000);
    const taxes = calculateTax(salary);

    expect(taxes).toBe(salary * 0.275);
  })
})
