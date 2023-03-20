import { jest } from "@jest/globals";
import { areaFiftyOneRepository } from "../src/repositories/areaFiftyOneRepository";
import { oddService } from "../src/services/oddService";
import { secretService } from "../src/_secret_/secretService";
import { sendSignal } from "../src/_secret_/sendSignal";

describe("isReallyOdd function unity testing", () => {
  it("when number is odd", () => {
    jest.spyOn(secretService, "isOdd").mockImplementationOnce(() => {
      return true;
    });
    const randonNumber = generateNumber();

    const result = oddService.isReallyOdd(randonNumber);
    expect(result).toBe("maybe not, who knows?");
  })
  it("when number is even", () => {
    jest.spyOn(secretService, "isOdd").mockImplementationOnce(() => {
      return false;
    });
    const randonNumber = generateNumber();

    const result = oddService.isReallyOdd(randonNumber);
    expect(result).toBe("Im not sure...");
  })
})

describe("listOVNIS function unity testing", () => {
  it("listOVNIS function testing", async () => {
    jest.spyOn(areaFiftyOneRepository, "listOVNIS").mockImplementationOnce((): any => {
      return [{
        id: 1,
        relatedBy: 1,
        geoLat: 1,
        geoLon: 1,
      }];
    });


    jest.spyOn(sendSignal, "send").mockImplementationOnce(() => { });

    const result = await oddService.listOVNIS();
    expect(result).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        relatedBy: expect.any(Number),
        geoLat: expect.any(Number),
        geoLon: expect.any(Number)
      })
    ]))
  })
})

function generateNumber(): number {
  return Math.random();
}