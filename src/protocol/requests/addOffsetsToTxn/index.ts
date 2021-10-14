import requestV0 from './v0/request.ts'
import responseV0 from './v0/response.ts'

import requestV1 from './v1/request.ts'
import responseV1 from './v1/response.ts'

const versions: any = {
  0: ({
    transactionalId,
    producerId,
    producerEpoch,
    groupId
  }: any) => {
    const request = requestV0
    const response =responseV0 
    return { request: request({ transactionalId, producerId, producerEpoch, groupId }), response }
  },
  1: ({
    transactionalId,
    producerId,
    producerEpoch,
    groupId
  }: any) => {
    const request = requestV1
    const response =responseV1 
    return { request: request({ transactionalId, producerId, producerEpoch, groupId }), response }
  },
}

export default {
  versions: Object.keys(versions),
  protocol: ({
    version
  }: any) => versions[version],
}
