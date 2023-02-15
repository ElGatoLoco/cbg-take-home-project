const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const createNewPartitionKey = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

const getCandidate = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  if (!event.partitionKey) {
    return createNewPartitionKey(JSON.stringify(event));
  }

  if (event.partitionKey > MAX_PARTITION_KEY_LENGTH) {
    return createNewPartitionKey(event.partitionKey);
  }

  if (typeof event.partitionKey !== 'string') {
    return JSON.stringify(event.partitionKey);
  }

  return event.partitionKey;
}

exports.deterministicPartitionKey = (event) => {
  const candidate = getCandidate(event);
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return createNewPartitionKey(candidate);
  }

  return candidate;
};
