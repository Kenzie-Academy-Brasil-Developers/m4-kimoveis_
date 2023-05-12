import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterColounmDate1683854560379 implements MigrationInterface {
    name = 'AlterColounmDate1683854560379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "date" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "date" SET DEFAULT now()`);
    }

}
