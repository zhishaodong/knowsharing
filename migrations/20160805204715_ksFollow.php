<?php

use Phpmig\Migration\Migration;

class KsFollow extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $container = $this->getContainer();
        $table = new Doctrine\DBAL\Schema\Table('follow');
        $table->addColumn('id', 'integer', array('unsigned' => true, 'autoincrement'=> true));
        $table->addColumn('userId', 'integer', array('unsigned' => true, 'null' => false, 'comment' => '用户id'));
        $table->addColumn('Type', 'string', array('length' => 10, 'null' => false, 'comment' => '被关注的类型（user/topic）'));
        $table->addColumn('objectId', 'integer', array('unsigned' => true, 'null' => false, 'comment' => '被关注的id'));
        $table->setPrimaryKey(array('id'));

        $container['db']->getSchemaManager()->createTable($table);
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $container = $this->getContainer();
        $container['db']->getSchemaManager()->dropTable('follow');
    }
}
