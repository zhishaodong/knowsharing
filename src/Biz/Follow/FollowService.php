<?php

namespace Biz\Follow;

interface FollowService
{
    public function followUser($userId, $id);

    public function unfollowUser($userId, $id);

    public function followTopic($topicId);

    public function unFollowTopic($topicId);

    public function waveFollowNum($ids, $diffs);

    public function findFollowTopicsByUserId($userId);

    public function hasFollowTopics($topics,$userId);

    public function getFollowUserByUserIdAndObjectUserId($userId,$objectId);

    public function getFollowTopicByUserIdAndTopicId($userId, $topicId);

    public function searchMyFollowsByUserIdAndType($userId, $type);
}