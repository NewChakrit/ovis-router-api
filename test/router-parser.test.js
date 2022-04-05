import { describe, test, expect } from "vitest";
import RouterParser from "../lib/router-parser";
import fs from "fs";

const text = fs.readFileSync("./test/out.txt", "utf-8");

const version = {
  key: 2.7,
};

const device = {
  devicePresent: true,
  modelName: "Blackmagic Smart Videohub 20 x 20",
  friendlyName: "Smart Videohub 20 x 20",
  uniqueID: "7C2E0D08FC97",
  videoInputs: 20,
  videoProcessingUnits: 0,
  videoOutputs: 20,
  videoMonitoringOutputs: 0,
  serialPorts: 0,
};

const inputLabels = {
  0: "1",
  1: "2",
  2: "3",
  3: "4",
  4: "5",
  5: "6",
  6: "7",
  7: "8",
  8: "9",
  9: "10",
  10: "11",
  11: "12",
  12: "13",
  13: "14",
  14: "15",
  15: "16",
  16: "17",
  17: "18",
  18: "19",
  19: "20",
};

const outputLables = {
  0: "1",
  1: "2",
  2: "3",
  3: "4",
  4: "5",
  5: "6",
  6: "7",
  7: "8",
  8: "9",
  9: "10",
  10: "11",
  11: "12",
  12: "13",
  13: "14",
  14: "15",
  15: "16",
  16: "17",
  17: "18",
  18: "19",
  19: "20",
};

const routing = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "11",
  12: "12",
  13: "13",
  14: "14",
  15: "15",
  16: "16",
  17: "17",
  18: "18",
  19: "19",
};

describe("router-parser", () => {
  test("test01", () => {
    let output = RouterParser.parse(text);
    expect(output).toBeTypeOf("object");
    // expect(output.device).toBeTypeOf("object");
    expect(output.version).toEqual(version);
    expect(output.device).toEqual(device);
    expect(output.inputLabels).toEqual(inputLabels);
    expect(output.outputLables).toEqual(outputLables);
    expect(output.routing).toEqual(routing);
  });
});
