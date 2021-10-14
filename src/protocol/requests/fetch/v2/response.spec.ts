// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'decode'.
const { decode, parse } = require('../v1/response')

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Protocol > Requests > Fetch > v2', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('response', async () => {
    // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'Buffer'. Did you mean 'buffer'?
    const data = await decode(Buffer.from(require('../fixtures/v2_response.json')))
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(data).toEqual({
      throttleTime: 0,
      responses: [
        {
          topicName: 'test-topic-131c279f35eeb2df6bc7',
          partitions: [
            {
              partition: 0,
              errorCode: 0,
              highWatermark: '3',
              messages: [
                {
                  offset: '0',
                  size: 39,
                  crc: -815808405,
                  magicByte: 1,
                  attributes: 0,
                  timestamp: '1509827715172',
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  key: Buffer.from('key-0'),
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  value: Buffer.from('some-value-0'),
                },
                {
                  offset: '1',
                  size: 39,
                  crc: -656171735,
                  magicByte: 1,
                  attributes: 0,
                  timestamp: '1509827715173',
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  key: Buffer.from('key-1'),
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  value: Buffer.from('some-value-1'),
                },
                {
                  offset: '2',
                  size: 39,
                  crc: 309368599,
                  magicByte: 1,
                  attributes: 0,
                  timestamp: '1509827715173',
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  key: Buffer.from('key-2'),
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  value: Buffer.from('some-value-2'),
                },
              ],
            },
          ],
        },
      ],
    })

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    await expect(parse(data)).resolves.toBeTruthy()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('response with GZIP', async () => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
    const data = await decode(Buffer.from(require('../fixtures/v2_response_gzip.json')))
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(data).toEqual({
      throttleTime: 0,
      responses: [
        {
          topicName: 'test-topic-7d48c01ed48f0667672b',
          partitions: [
            {
              partition: 0,
              errorCode: 0,
              highWatermark: '3',
              messages: [
                {
                  offset: '0',
                  size: 39,
                  crc: -822662985,
                  magicByte: 1,
                  attributes: 0,
                  timestamp: '1509827715533',
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  key: Buffer.from('key-0'),
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  value: Buffer.from('some-value-0'),
                },
                {
                  offset: '1',
                  size: 39,
                  crc: -872333670,
                  magicByte: 1,
                  attributes: 0,
                  timestamp: '1509827715534',
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  key: Buffer.from('key-1'),
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  value: Buffer.from('some-value-1'),
                },
                {
                  offset: '2',
                  size: 39,
                  crc: 110245028,
                  magicByte: 1,
                  attributes: 0,
                  timestamp: '1509827715534',
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  key: Buffer.from('key-2'),
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  value: Buffer.from('some-value-2'),
                },
              ],
            },
          ],
        },
      ],
    })

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    await expect(parse(data)).resolves.toBeTruthy()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('response with partial messages and many partitions', async () => {
    const data = await decode(
      // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
      Buffer.from(require('../fixtures/v2_response_partial_messages_many_partitions.json'))
    )

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(data).toEqual({
      throttleTime: 0,
      responses: [
        {
          topicName: 'topic-partial-message',
          partitions: [
            { partition: 9, errorCode: 0, highWatermark: '325', messages: [] },
            { partition: 3, errorCode: 0, highWatermark: '314', messages: [] },
            { partition: 6, errorCode: 0, highWatermark: '292', messages: [] },
            { partition: 0, errorCode: 0, highWatermark: '263', messages: [] },
          ],
        },
      ],
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('response with not enough bytes to read the message size or offset (index out of range)', async () => {
    const data = await decode(
      // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
      Buffer.from(require('../fixtures/v2_response_index_out_of_range.json'))
    )

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(data).toEqual({
      throttleTime: 0,
      responses: [
        {
          topicName: 'test-topic-index-out-of-range',
          partitions: [
            {
              partition: 1,
              errorCode: 0,
              highWatermark: '15734209',
              messages: [
                {
                  offset: '15733908',
                  size: 31,
                  crc: 120234579,
                  magicByte: 0,
                  attributes: 0,
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  key: Buffer.from('key-0'),
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  value: Buffer.from('some-value-0'),
                },
                {
                  offset: '15733909',
                  size: 31,
                  crc: -141862522,
                  magicByte: 0,
                  attributes: 0,
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  key: Buffer.from('key-1'),
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  value: Buffer.from('some-value-1'),
                },
                {
                  offset: '15733910',
                  size: 31,
                  crc: 1025004472,
                  magicByte: 0,
                  attributes: 0,
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  key: Buffer.from('key-2'),
                  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'Buffer'. Do you need to install ... Remove this comment to see the full error message
                  value: Buffer.from('some-value-2'),
                },
              ],
            },
          ],
        },
      ],
    })
  })
})
