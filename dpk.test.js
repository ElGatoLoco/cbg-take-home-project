const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('Returns partition key from event when pk present', () => {
    const event = { partitionKey: 'someKeyGoesHere' };
    const presentPartitionKey = deterministicPartitionKey(event);
    expect(presentPartitionKey).toEqual('someKeyGoesHere');
  });

  it('Generates partition key from event when partition key is not present', () => {
    const event = { foo: 'bar' };
    const withStringCandidate = deterministicPartitionKey(event);

    const expectedPartitionKey = 'a419a15de4a65c3dba49c38b4485cd4dce1dde4d18f5b965d90f0649bef54252ec4e76dbcaa603708e8e8ebbe848ba484e81e23b7823808b5b8e5f4222d122e8';
    expect(withStringCandidate).toEqual(expectedPartitionKey);
  });

  it('Generates partition key from stringified non-string candidate', () => {
    const event = { partitionKey: 123 };
    const withNumberCandidate = deterministicPartitionKey(event);

    const expectedPartitionKey = '123';
    expect(withNumberCandidate).toEqual(expectedPartitionKey);
  });

  it('Generates partition key hash when candidate is too long', () => {
    const veryLongString = 'x'.repeat(420);
    const event = { partitionKey: veryLongString };
    const withCandidateAbovePartitionKeyLength = deterministicPartitionKey(event);

    const expectedPartitionKey = '8130227e4a30b4b8eb412d1e0678f29883443f8511d59721d945e65305868d5263abb133b53f853c1044e631e3d0b680826d4774cc5d4edb2e189ebc19fe4be5';
    expect(withCandidateAbovePartitionKeyLength).toEqual(expectedPartitionKey);
  });
});
