// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  Produce: 0,
  Fetch: 1,
  ListOffsets: 2,
  Metadata: 3,
  LeaderAndIsr: 4,
  StopReplica: 5,
  UpdateMetadata: 6,
  ControlledShutdown: 7,
  OffsetCommit: 8,
  OffsetFetch: 9,
  GroupCoordinator: 10,
  JoinGroup: 11,
  Heartbeat: 12,
  LeaveGroup: 13,
  SyncGroup: 14,
  DescribeGroups: 15,
  ListGroups: 16,
  SaslHandshake: 17,
  ApiVersions: 18, // ApiVersions v0 on Kafka 0.10
  CreateTopics: 19,
  DeleteTopics: 20,
  DeleteRecords: 21,
  InitProducerId: 22,
  OffsetForLeaderEpoch: 23,
  AddPartitionsToTxn: 24,
  AddOffsetsToTxn: 25,
  EndTxn: 26,
  WriteTxnMarkers: 27,
  TxnOffsetCommit: 28,
  DescribeAcls: 29,
  CreateAcls: 30,
  DeleteAcls: 31,
  DescribeConfigs: 32,
  AlterConfigs: 33, // ApiVersions v0 and v1 on Kafka 0.11
  AlterReplicaLogDirs: 34,
  DescribeLogDirs: 35,
  SaslAuthenticate: 36,
  CreatePartitions: 37,
  CreateDelegationToken: 38,
  RenewDelegationToken: 39,
  ExpireDelegationToken: 40,
  DescribeDelegationToken: 41,
  DeleteGroups: 42, // ApiVersions v2 on Kafka 1.0
  ElectPreferredLeaders: 43,
}
