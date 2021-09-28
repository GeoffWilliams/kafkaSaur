// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'RequestV3P... Remove this comment to see the full error message
const RequestV3Protocol = require('./request')

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Protocol > Requests > Heartbeat > v3', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('request', async () => {
    const { buffer } = await RequestV3Protocol({
      groupId: 'consumer-group-id-4c456000151f094b600d-26762-fd6a6ae7-3f66-408e-802e-d261d6983d0d',
      groupGenerationId: 1,
      memberId:
        'test-14da1b41ac688a6dcb78-26762-4dac8e12-dc28-4db2-8456-95bc6c1589bb-7bad1e84-c2de-4cc6-8071-badb27c86166',
      groupInstanceId:
        'test-14da1b41ac688a6dcb78-26762-4dac8e12-dc28-4db2-8456-95bc6c1589bb-7bad1e84-c2de-4cc6-8071-badb27c86166',
    }).encode()

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(buffer).toEqual(Buffer.from(require('../fixtures/v3_request.json')))
  })
})
