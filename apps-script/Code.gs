const SPREADSHEET_ID = "11XPEzS-UaIuNCWVb5rQRk73ltzWfhkZGFm5m6wFIFWk";
const SHEET_NAME = "Sheet1";

const AREAS = [
  "Aïn Chock",
  "Aïn Diab",
  "Aïn Sebaâ",
  "Al Fida",
  "Anfa",
  "Bachkou",
  "Beauséjour",
  "Belvédère",
  "Ben M'Sick",
  "Bernoussi",
  "Bourgogne",
  "Californie",
  "Casa Finance City",
  "Centre-ville",
  "CIL",
  "Derb Ghallef",
  "Derb Sultan",
  "El Hank",
  "Essoukhour Assawda",
  "Ferme Bretonne",
  "Franceville",
  "Gauthier",
  "Gironde",
  "Hay Hassani",
  "Hay Mohammadi",
  "Hermitage",
  "Hôpitaux",
  "Lissasfa",
  "Maârif",
  "Maârif Extension",
  "Médina",
  "Mers Sultan",
  "Moulay Rachid",
  "Oasis",
  "Oulfa",
  "Palmier",
  "Polo",
  "Racine",
  "Roches Noires",
  "Sbata",
  "Sidi Belyout",
  "Sidi Maârouf",
  "Sidi Moumen",
  "Sidi Othmane",
  "Triangle d'Or",
  "Val Fleuri",
  "Yacoub El Mansour"
];

const FREE_DELIVERY_AREAS = ["Hay Hassani", "Médina", "Maârif"];

function doPost(e) {
  let lock;

  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Missing request data.");
    }

    const input = JSON.parse(e.postData.contents);
    const savedSecret = PropertiesService
      .getScriptProperties()
      .getProperty("ORDER_APPS_SCRIPT_SECRET");

    if (!savedSecret || input.secret !== savedSecret) {
      throw new Error("Unauthorized request.");
    }

    const order = validateOrder(input);
    const deliveryFee = FREE_DELIVERY_AREAS.includes(order.area) ? 0 : 30;

    const sheet = SpreadsheetApp
      .openById(SPREADSHEET_ID)
      .getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error("Sheet1 was not found.");
    }

    lock = LockService.getScriptLock();
    lock.waitLock(10000);

    const orderId = Utilities.getUuid();
    const timestamp = Utilities.formatDate(
      new Date(),
      "Africa/Casablanca",
      "yyyy-MM-dd HH:mm:ss"
    );

    sheet.appendRow([
      orderId,
      timestamp,
      safeCellText(order.name),
      safeCellText(order.phone),
      safeCellText(order.area),
      safeCellText(order.address),
      safeCellText(order.productName),
      70,
      deliveryFee,
      70 + deliveryFee,
      "Nouvelle"
    ]);

    return jsonResponse({ ok: true, orderId: orderId });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false });
  } finally {
    if (lock && lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

function validateOrder(input) {
  const order = {
    name: cleanText(input.name),
    phone: cleanText(input.phone),
    area: cleanText(input.area),
    address: cleanText(input.address),
    productName: cleanText(input.productName)
  };

  if (order.name.length < 2 || order.name.length > 80) {
    throw new Error("Invalid name.");
  }

  if (!/^\+?[0-9\s().-]{8,20}$/.test(order.phone)) {
    throw new Error("Invalid phone.");
  }

  if (!AREAS.includes(order.area)) {
    throw new Error("Invalid Casablanca area.");
  }

  if (order.address.length < 5 || order.address.length > 240) {
    throw new Error("Invalid address.");
  }

  if (!order.productName || order.productName.length > 120) {
    throw new Error("Invalid product name.");
  }

  return order;
}

function cleanText(value) {
  if (typeof value !== "string") {
    throw new Error("Invalid text.");
  }

  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim();
}

function safeCellText(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}