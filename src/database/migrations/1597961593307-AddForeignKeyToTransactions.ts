import {MigrationInterface, QueryRunner,TableForeignKey} from "typeorm";

export class AddForeignKeyToTransactions1597961593307 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createForeignKey (
        'transactions',
        new TableForeignKey ({
          columnNames: ['category_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'categories',
          name: "TransactionCategory",
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey ('transactions', 'TransactionCategory');
    }

}
