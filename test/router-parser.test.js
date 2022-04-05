import { describe, test, expect } from "vitest";
import RouterSim from "../lib/router-sim";
import fs from "fs";

const text = fs.readFileSync("./test/out.txt", "utf-8");
const text2 = fs.readFileSync("./test/out2.txt", "utf-8");
const protocol = {
  Version: "2.7",
};

const device = {
  "Device present": "true",
  "Model name": "Blackmagic Smart Videohub 20 x 20",
  "Friendly name": "Smart Videohub 20 x 20",
  "Unique ID": "7C2E0D08FC97",
  "Video inputs": "20",
  "Video processing units": "0",
  "Video outputs": "20",
  "Video monitoring outputs": "0",
  "Serial ports": "0",
};

const inputLabels = {
  0: "Input 1",
  1: "Input 2",
  2: "Input 3",
  3: "Input 4",
  4: "Input 5",
  5: "Input 6",
  6: "Input 7",
  7: "Input 8",
  8: "Input 9",
  9: "Input 10",
  10: "Input 11",
  11: "Input 12",
  12: "Input 13",
  13: "Input 14",
  14: "Input 15",
  15: "Input 16",
  16: "Input 17",
  17: "Input 18",
  18: "Input 19",
  19: "Input 20",
};

const outputLabels = {
  0: "Output 1",
  1: "Output 2",
  2: "Output 3",
  3: "Output 4",
  4: "Output 5",
  5: "Output 6",
  6: "Output 7",
  7: "Output 8",
  8: "Output 9",
  9: "Output 10",
  10: "Output 11",
  11: "Output 12",
  12: "Output 13",
  13: "Output 14",
  14: "Output 15",
  15: "Output 16",
  16: "Output 17",
  17: "Output 18",
  18: "Output 19",
  19: "Output 20",
};

const videoOutputRouting = {
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

const obj = {
  protocol,
  device,
  inputLabels,
  outputLabels,
  videoOutputRouting,
};

describe("router-sim", () => {
  test("fromString", () => {
    let output = RouterSim.fromString(text);
    // fs.writeFileSync("./data.json", JSON.stringify(output, null, 2));
    expect(output).toBeTypeOf("object");
    // expect(output.device).toBeTypeOf("object");
    expect(output.protocol).toEqual(protocol);
    expect(output.device).toEqual(device);
    expect(output.inputLabels).toEqual(inputLabels);
    expect(output.outputLabels).toEqual(outputLabels);
    expect(output.videoOutputRouting).toEqual(videoOutputRouting);
  });
  test("toString", () => {
    let output = RouterSim.toString(obj);
    // fs.writeFileSync("./test/out2.txt", output);
    expect(output).toEqual(text2);
  });
});
