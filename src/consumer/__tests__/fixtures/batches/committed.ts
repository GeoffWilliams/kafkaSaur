// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  abortedTransactions: [],
  messages: [
    {
      magicByte: 2,
      attributes: 0,
      timestamp: '1543360052501',
      offset: '0',
      key: { type: 'Buffer', data: [107, 101, 121, 45, 56, 57, 53] },
      // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'Buffer'. Did you mean 'buffer'?
      value: Buffer.from([
        99,
        111,
        109,
        109,
        105,
        116,
        45,
        56,
        57,
        53,
        45,
        50,
        48,
        49,
        56,
        45,
        49,
        49,
        45,
        50,
        55,
        84,
        50,
        51,
        58,
        48,
        55,
        58,
        51,
        50,
        46,
        52,
        48,
        57,
        90,
      ]),
      headers: {},
      isControlRecord: false,
      batchContext: {
        firstOffset: '0',
        firstTimestamp: '1543360052501',
        partitionLeaderEpoch: 118,
        inTransaction: true,
        isControlBatch: false,
        lastOffsetDelta: 2,
        producerId: '103000',
        producerEpoch: 1,
        firstSequence: 0,
        maxTimestamp: '1543360052501',
        magicByte: 2,
      },
    },
    {
      magicByte: 2,
      attributes: 0,
      timestamp: '1543360052501',
      offset: '1',
      key: { type: 'Buffer', data: [107, 101, 121, 45, 51, 51, 57] },
      // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'Buffer'. Did you mean 'buffer'?
      value: Buffer.from([
        99,
        111,
        109,
        109,
        105,
        116,
        45,
        51,
        51,
        57,
        45,
        50,
        48,
        49,
        56,
        45,
        49,
        49,
        45,
        50,
        55,
        84,
        50,
        51,
        58,
        48,
        55,
        58,
        51,
        50,
        46,
        52,
        48,
        57,
        90,
      ]),
      headers: {},
      isControlRecord: false,
      batchContext: {
        firstOffset: '0',
        firstTimestamp: '1543360052501',
        partitionLeaderEpoch: 118,
        inTransaction: true,
        isControlBatch: false,
        lastOffsetDelta: 2,
        producerId: '103000',
        producerEpoch: 1,
        firstSequence: 0,
        maxTimestamp: '1543360052501',
        magicByte: 2,
      },
    },
    {
      magicByte: 2,
      attributes: 0,
      timestamp: '1543360052501',
      offset: '2',
      key: { type: 'Buffer', data: [107, 101, 121, 45, 55, 54, 51] },
      // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'Buffer'. Did you mean 'buffer'?
      value: Buffer.from([
        99,
        111,
        109,
        109,
        105,
        116,
        45,
        55,
        54,
        51,
        45,
        50,
        48,
        49,
        56,
        45,
        49,
        49,
        45,
        50,
        55,
        84,
        50,
        51,
        58,
        48,
        55,
        58,
        51,
        50,
        46,
        52,
        48,
        57,
        90,
      ]),
      headers: {},
      isControlRecord: false,
      batchContext: {
        firstOffset: '0',
        firstTimestamp: '1543360052501',
        partitionLeaderEpoch: 118,
        inTransaction: true,
        isControlBatch: false,
        lastOffsetDelta: 2,
        producerId: '103000',
        producerEpoch: 1,
        firstSequence: 0,
        maxTimestamp: '1543360052501',
        magicByte: 2,
      },
    },
    {
      magicByte: 2,
      attributes: 0,
      timestamp: '1543360052580',
      offset: '3',
      key: { type: 'Buffer', data: [0, 0, 0, 1] },
      value: { type: 'Buffer', data: [0, 0, 0, 0, 0, 117] },
      headers: {},
      isControlRecord: true,
      batchContext: {
        firstOffset: '3',
        firstTimestamp: '1543360052580',
        partitionLeaderEpoch: 118,
        inTransaction: true,
        isControlBatch: true,
        lastOffsetDelta: 0,
        producerId: '103000',
        producerEpoch: 1,
        firstSequence: -1,
        maxTimestamp: '1543360052580',
        magicByte: 2,
      },
    },
  ],
}
