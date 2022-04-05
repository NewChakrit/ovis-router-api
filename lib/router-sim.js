module.exports = {
  fromString,
  toString,
};

let sectionLookUp = {
  "PROTOCOL PREAMBLE:": "protocol",
  "VIDEOHUB DEVICE:": "device",
  "INPUT LABELS:": "inputLabels",
  "OUTPUT LABELS:": "outputLabels",
  "VIDEO OUTPUT ROUTING:": "videoOutputRouting",
};

function toCamelCase(s1) {
  return s1
    .split(" ")
    .map((x, i) => {
      if (i === 0) {
        return x.toLowerCase();
      }
      return x.substr(0, 1).toUpperCase() + x.toLowerCase().substr(1);
    })
    .join("");
}

function fromCamelCase(s1) {
  return s1
    .split(/[A-Z]/)
    .map((x, i) => {
      if (i === 0) {
        return x.substr(0, 1).toUpperCase() + x.toLowerCase().substr(1);
      }
      return x === "Id" ? "ID" : x.toLowerCase();
    })
    .join(" ");
}

function fromString(text) {
  let output = {};
  const lines = text.split("\n");
  let section = "";
  for (const line of lines) {
    // ถ้าเจอ ":" ตัวท้าย ให้เก็บไว้ในsection
    if (line.substr(-1) === ":") {
      section = sectionLookUp[line] || "unknown";
      if (section !== "unknown") {
        output[section] = {};
      }

      continue;

      // Section 1
    } else if (line === "") {
      section = "";
      // ถ้า section คือ protocol ให้ split แล้วเก็บไว้ใน [key : value]
    } else if (section === "protocol" || section === "device") {
      let [key, value] = line.split(": ");
      output[section][key] = value;
    } else if (
      section === "inputLabels" ||
      section === "outputLabels" ||
      section === "videoOutputRouting"
    ) {
      const pos = line.indexOf(" ");
      const key = line.substr(0, pos);
      const value = line.substr(pos + 1);
      output[section][key] = value;
    }
  } //for
  return output;
} // fromString

function toString(obj) {
  const s = [];
  if (obj.protocol) {
    if (s.length) {
      s.push("");
    }
    s.push("PROTOCOL PREAMBLE:");
    for (let key of Object.keys(obj.protocol)) {
      s.push(`${key}: ${obj.protocol[key]}`);
    }
  }
  if (obj.device) {
    if (s.length) {
      s.push("");
    }
    s.push("VIDEOHUB DEVICE:");
    for (let key of Object.keys(obj.device)) {
      s.push(`${key}: ${obj.device[key]}`);
    }
  }
  if (obj.inputLabels) {
    if (s.length) {
      s.push("");
    }
    s.push("INPUT LABELS:");
    for (let key of Object.keys(obj.inputLabels)) {
      s.push(`${key} ${obj.inputLabels[key]}`);
    }
  }
  if (obj.outputLabels) {
    if (s.length) {
      s.push("");
    }
    s.push("OUTPUT LABELS:");
    for (let key of Object.keys(obj.outputLabels)) {
      s.push(`${key} ${obj.outputLabels[key]}`);
    }
  }
  if (obj.videoOutputRouting) {
    if (s.length) {
      s.push("");
    }
    s.push("VIDEO OUTPUT ROUTING:");
    for (let key of Object.keys(obj.videoOutputRouting)) {
      s.push(`${key} ${obj.videoOutputRouting[key]}`);
    }
  }
  return s.join("\n") + "\n";
} // toString
